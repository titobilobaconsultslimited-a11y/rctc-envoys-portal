// ============================================================
// SOD Combined API  — routes via ?resource= param
//
// PUBLIC (no auth):
//   GET  /api/sod?resource=eligibility&matric_no=X&exam_code=Y
//
// ADMIN (require JWT):
//   GET    /api/sod?resource=classes&exam_code=X
//   POST   /api/sod?resource=classes               body: {exam_code,class_title,class_date}
//   DELETE /api/sod?resource=classes&id=X
//
//   GET    /api/sod?resource=attendance&class_id=X
//   GET    /api/sod?resource=attendance&exam_code=X&summary=true
//   POST   /api/sod?resource=attendance             body: {class_id,attendees:[...]}
//
//   POST   /api/sod?resource=override               body: {matric_no,exam_code}
//   DELETE /api/sod?resource=override&matric_no=X&exam_code=Y
// ============================================================
'use strict';

const { handleCors }       = require('./_lib/cors');
const { supabaseAdmin }    = require('./_lib/supabase');
const { requireAdminAuth } = require('./_lib/admin-auth');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  const { resource } = req.query;

  // ──────────────────────────────────────────────────────────
  // PUBLIC: eligibility check
  // ──────────────────────────────────────────────────────────
  if (resource === 'eligibility') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const { matric_no, exam_code } = req.query;
    if (!matric_no || !exam_code) {
      return res.status(400).json({ error: 'matric_no and exam_code are required' });
    }

    const matric = matric_no.trim().toUpperCase();
    const code   = exam_code.trim().toUpperCase();

    const { data: classes, error: classErr } = await supabaseAdmin
      .from('sod_classes').select('id').eq('exam_code', code);
    if (classErr) return res.status(500).json({ error: 'Database error' });

    const total = (classes || []).length;
    if (total === 0) {
      return res.status(200).json({ eligible: true, attended: 0, total: 0, percentage: 100, override: false });
    }

    const classIds = classes.map(c => c.id);

    const { data: attRows, error: attErr } = await supabaseAdmin
      .from('sod_attendance').select('id')
      .eq('matric_no', matric).in('class_id', classIds).eq('attended', true);
    if (attErr) return res.status(500).json({ error: 'Database error' });

    const attended   = (attRows || []).length;
    const percentage = Math.round((attended / total) * 100);

    const { data: override } = await supabaseAdmin
      .from('sod_attendance_overrides').select('id')
      .eq('matric_no', matric).eq('exam_code', code).maybeSingle();

    const hasOverride = !!override;
    return res.status(200).json({
      eligible: percentage >= 75 || hasOverride,
      attended, total, percentage, override: hasOverride
    });
  }

  // ──────────────────────────────────────────────────────────
  // ADMIN routes — require JWT from here on
  // ──────────────────────────────────────────────────────────
  const user = await requireAdminAuth(req, res);
  if (!user) return;

  // ── CLASSES ───────────────────────────────────────────────
  if (resource === 'classes') {
    if (req.method === 'GET') {
      const { exam_code } = req.query;
      if (!exam_code) return res.status(400).json({ error: 'exam_code query param is required' });

      const { data: classes, error } = await supabaseAdmin
        .from('sod_classes')
        .select('id, exam_code, class_title, class_date, created_at')
        .eq('exam_code', exam_code.trim().toUpperCase())
        .order('class_date', { ascending: true });
      if (error) return res.status(500).json({ error: 'Database error' });

      const classIds = (classes || []).map(c => c.id);
      const countMap = {};
      if (classIds.length > 0) {
        const { data: attRows } = await supabaseAdmin
          .from('sod_attendance').select('class_id')
          .in('class_id', classIds).eq('attended', true);
        (attRows || []).forEach(a => { countMap[a.class_id] = (countMap[a.class_id] || 0) + 1; });
      }

      return res.status(200).json({
        classes: (classes || []).map(c => ({ ...c, attendance_count: countMap[c.id] || 0 }))
      });
    }

    if (req.method === 'POST') {
      const { exam_code, class_title, class_date } = req.body || {};
      if (!exam_code || !class_title || !class_date) {
        return res.status(400).json({ error: 'exam_code, class_title, and class_date are required' });
      }

      const { data, error } = await supabaseAdmin
        .from('sod_classes')
        .insert({
          exam_code:   exam_code.trim().toUpperCase(),
          class_title: class_title.trim().slice(0, 200),
          class_date
        })
        .select().single();
      if (error) return res.status(500).json({ error: 'Database error' });
      return res.status(201).json({ data });
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'id query param is required' });

      const { error } = await supabaseAdmin.from('sod_classes').delete().eq('id', id);
      if (error) return res.status(500).json({ error: 'Database error' });
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ── ATTENDANCE ────────────────────────────────────────────
  if (resource === 'attendance') {
    if (req.method === 'GET') {
      const { class_id, exam_code, summary } = req.query;

      if (exam_code && summary === 'true') {
        const { data: classes, error: classErr } = await supabaseAdmin
          .from('sod_classes').select('id').eq('exam_code', exam_code.trim().toUpperCase());
        if (classErr) return res.status(500).json({ error: 'Database error' });

        const classIds     = (classes || []).map(c => c.id);
        const totalClasses = classIds.length;
        if (totalClasses === 0) return res.status(200).json({ summary: [], total_classes: 0 });

        const { data: attendance, error: attErr } = await supabaseAdmin
          .from('sod_attendance').select('matric_no, attended').in('class_id', classIds);
        if (attErr) return res.status(500).json({ error: 'Database error' });

        const studentMap = {};
        (attendance || []).forEach(a => {
          if (!studentMap[a.matric_no]) studentMap[a.matric_no] = 0;
          if (a.attended) studentMap[a.matric_no]++;
        });

        const { data: overrides } = await supabaseAdmin
          .from('sod_attendance_overrides').select('matric_no')
          .eq('exam_code', exam_code.trim().toUpperCase());
        const overrideSet = new Set((overrides || []).map(o => o.matric_no));

        return res.status(200).json({
          summary: Object.entries(studentMap).map(([matric_no, attended_count]) => ({
            matric_no,
            attended_count,
            total_classes:    totalClasses,
            percentage:       Math.round((attended_count / totalClasses) * 100),
            override_granted: overrideSet.has(matric_no)
          })),
          total_classes: totalClasses
        });
      }

      if (class_id) {
        const { data, error } = await supabaseAdmin
          .from('sod_attendance').select('matric_no, attended, marked_at').eq('class_id', class_id);
        if (error) return res.status(500).json({ error: 'Database error' });
        return res.status(200).json({ attendance: data || [] });
      }

      return res.status(400).json({ error: 'Provide class_id, or exam_code + summary=true' });
    }

    if (req.method === 'POST') {
      const { class_id, attendees } = req.body || {};
      if (!class_id || !Array.isArray(attendees)) {
        return res.status(400).json({ error: 'class_id and attendees array are required' });
      }

      const { error: delErr } = await supabaseAdmin
        .from('sod_attendance').delete().eq('class_id', class_id);
      if (delErr) return res.status(500).json({ error: 'Database error' });

      if (attendees.length > 0) {
        const { error: insErr } = await supabaseAdmin
          .from('sod_attendance')
          .insert(attendees.map(matric_no => ({
            class_id,
            matric_no: matric_no.trim().toUpperCase(),
            attended:  true,
            marked_at: new Date().toISOString()
          })));
        if (insErr) return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json({ success: true, marked: attendees.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ── OVERRIDE ──────────────────────────────────────────────
  if (resource === 'override') {
    if (req.method === 'POST') {
      const { matric_no, exam_code } = req.body || {};
      if (!matric_no || !exam_code) {
        return res.status(400).json({ error: 'matric_no and exam_code are required' });
      }

      const { data, error } = await supabaseAdmin
        .from('sod_attendance_overrides')
        .upsert({
          matric_no:  matric_no.trim().toUpperCase(),
          exam_code:  exam_code.trim().toUpperCase(),
          granted_by: user.email || 'admin',
          granted_at: new Date().toISOString()
        }, { onConflict: 'matric_no,exam_code' })
        .select().single();
      if (error) return res.status(500).json({ error: 'Database error' });
      return res.status(200).json({ data });
    }

    if (req.method === 'DELETE') {
      const { matric_no, exam_code } = req.query;
      if (!matric_no || !exam_code) {
        return res.status(400).json({ error: 'matric_no and exam_code query params are required' });
      }

      const { error } = await supabaseAdmin
        .from('sod_attendance_overrides')
        .delete()
        .eq('matric_no', matric_no.trim().toUpperCase())
        .eq('exam_code',  exam_code.trim().toUpperCase());
      if (error) return res.status(500).json({ error: 'Database error' });
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(400).json({ error: 'Invalid resource param. Use: eligibility, classes, attendance, override' });
};
