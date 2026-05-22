// ============================================================
// Admin — SOD Attendance
//
// GET /api/admin/sod-attendance?class_id=X
//    → list attendance records for a class
//
// GET /api/admin/sod-attendance?exam_code=X&summary=true
//    → per-student attendance summary for an exam
//
// POST /api/admin/sod-attendance
//    → bulk mark attendance { class_id, attendees: ["MAT001", ...] }
//       Replaces all existing records for that class.
//
// All routes require a valid Supabase Auth JWT.
// ============================================================
'use strict';

const { handleCors }       = require('../_lib/cors');
const { supabaseAdmin }    = require('../_lib/supabase');
const { requireAdminAuth } = require('../_lib/admin-auth');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  const user = await requireAdminAuth(req, res);
  if (!user) return;

  // ---- GET ----
  if (req.method === 'GET') {
    const { class_id, exam_code, summary } = req.query;

    // Summary mode: per-student attendance stats for a whole exam
    if (exam_code && summary === 'true') {
      const { data: classes, error: classErr } = await supabaseAdmin
        .from('sod_classes')
        .select('id')
        .eq('exam_code', exam_code.trim().toUpperCase());

      if (classErr) {
        console.error('[admin/sod-attendance GET summary] classErr:', classErr.message);
        return res.status(500).json({ error: 'Database error' });
      }

      const classIds     = (classes || []).map(c => c.id);
      const totalClasses = classIds.length;

      if (totalClasses === 0) {
        return res.status(200).json({ summary: [], total_classes: 0 });
      }

      const { data: attendance, error: attErr } = await supabaseAdmin
        .from('sod_attendance')
        .select('matric_no, attended')
        .in('class_id', classIds);

      if (attErr) {
        console.error('[admin/sod-attendance GET summary] attErr:', attErr.message);
        return res.status(500).json({ error: 'Database error' });
      }

      // Count attended classes per student
      const studentMap = {};
      (attendance || []).forEach(a => {
        if (!studentMap[a.matric_no]) studentMap[a.matric_no] = 0;
        if (a.attended) studentMap[a.matric_no]++;
      });

      // Get overrides for this exam
      const { data: overrides } = await supabaseAdmin
        .from('sod_attendance_overrides')
        .select('matric_no')
        .eq('exam_code', exam_code.trim().toUpperCase());

      const overrideSet = new Set((overrides || []).map(o => o.matric_no));

      const summaryData = Object.entries(studentMap).map(([matric_no, attended_count]) => ({
        matric_no,
        attended_count,
        total_classes:    totalClasses,
        percentage:       Math.round((attended_count / totalClasses) * 100),
        override_granted: overrideSet.has(matric_no)
      }));

      return res.status(200).json({ summary: summaryData, total_classes: totalClasses });
    }

    // Single-class attendance list
    if (class_id) {
      const { data, error } = await supabaseAdmin
        .from('sod_attendance')
        .select('matric_no, attended, marked_at')
        .eq('class_id', class_id);

      if (error) {
        console.error('[admin/sod-attendance GET class] error:', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ attendance: data || [] });
    }

    return res.status(400).json({ error: 'Provide class_id, or exam_code + summary=true' });
  }

  // ---- POST: bulk mark attendance ----
  if (req.method === 'POST') {
    const { class_id, attendees } = req.body || {};
    if (!class_id || !Array.isArray(attendees)) {
      return res.status(400).json({ error: 'class_id and attendees array are required' });
    }

    // Delete existing records then re-insert
    const { error: delErr } = await supabaseAdmin
      .from('sod_attendance')
      .delete()
      .eq('class_id', class_id);

    if (delErr) {
      console.error('[admin/sod-attendance POST] delErr:', delErr.message);
      return res.status(500).json({ error: 'Database error' });
    }

    if (attendees.length > 0) {
      const rows = attendees.map(matric_no => ({
        class_id,
        matric_no: matric_no.trim().toUpperCase(),
        attended:  true,
        marked_at: new Date().toISOString()
      }));

      const { error: insErr } = await supabaseAdmin
        .from('sod_attendance')
        .insert(rows);

      if (insErr) {
        console.error('[admin/sod-attendance POST] insErr:', insErr.message);
        return res.status(500).json({ error: 'Database error' });
      }
    }

    return res.status(200).json({ success: true, marked: attendees.length });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
