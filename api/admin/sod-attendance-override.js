// ============================================================
// Admin — SOD Attendance Override
//
// POST   /api/admin/sod-attendance-override
//    → grant exam access override { matric_no, exam_code }
//
// DELETE /api/admin/sod-attendance-override?matric_no=X&exam_code=Y
//    → revoke exam access override
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

  // ---- POST: grant override ----
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
      .select()
      .single();

    if (error) {
      console.error('[admin/sod-attendance-override POST] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ data });
  }

  // ---- DELETE: revoke override ----
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

    if (error) {
      console.error('[admin/sod-attendance-override DELETE] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
