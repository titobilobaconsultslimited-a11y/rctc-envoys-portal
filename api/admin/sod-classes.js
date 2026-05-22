// ============================================================
// Admin — SOD Class Sessions CRUD
//
// GET    /api/admin/sod-classes?exam_code=X   — list classes for an exam
//                                                (includes attendance count)
// POST   /api/admin/sod-classes               — create a class session
// DELETE /api/admin/sod-classes?id=X          — delete a class session
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

  // ---- GET: list classes for an exam ----
  if (req.method === 'GET') {
    const { exam_code } = req.query;
    if (!exam_code) {
      return res.status(400).json({ error: 'exam_code query param is required' });
    }

    const { data: classes, error } = await supabaseAdmin
      .from('sod_classes')
      .select('id, exam_code, class_title, class_date, created_at')
      .eq('exam_code', exam_code.trim().toUpperCase())
      .order('class_date', { ascending: true });

    if (error) {
      console.error('[admin/sod-classes GET] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }

    // Get attendance counts per class
    const classIds = (classes || []).map(c => c.id);
    const countMap = {};
    if (classIds.length > 0) {
      const { data: attRows } = await supabaseAdmin
        .from('sod_attendance')
        .select('class_id')
        .in('class_id', classIds)
        .eq('attended', true);
      (attRows || []).forEach(a => {
        countMap[a.class_id] = (countMap[a.class_id] || 0) + 1;
      });
    }

    const result = (classes || []).map(c => ({
      ...c,
      attendance_count: countMap[c.id] || 0
    }));

    return res.status(200).json({ classes: result });
  }

  // ---- POST: create a class session ----
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
        class_date:  class_date
      })
      .select()
      .single();

    if (error) {
      console.error('[admin/sod-classes POST] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(201).json({ data });
  }

  // ---- DELETE: remove a class session ----
  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'id query param is required' });

    const { error } = await supabaseAdmin
      .from('sod_classes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('[admin/sod-classes DELETE] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
