// ============================================================
// SOD Exam Eligibility Check  (student-facing — no admin auth)
//
// GET /api/sod-exam-eligibility?matric_no=X&exam_code=Y
//
// Returns:
//   { eligible: bool, attended: N, total: N, percentage: N, override: bool }
//
// eligible = true when ANY of the following are true:
//   1. No class sessions have been recorded for this exam (total === 0)
//   2. Student attended >= 75% of all recorded class sessions
//   3. Admin has granted an attendance override for this student + exam
// ============================================================
'use strict';

const { handleCors }    = require('./_lib/cors');
const { supabaseAdmin } = require('./_lib/supabase');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { matric_no, exam_code } = req.query;
  if (!matric_no || !exam_code) {
    return res.status(400).json({ error: 'matric_no and exam_code are required' });
  }

  const matric = matric_no.trim().toUpperCase();
  const code   = exam_code.trim().toUpperCase();

  // Fetch total class sessions for this exam
  const { data: classes, error: classErr } = await supabaseAdmin
    .from('sod_classes')
    .select('id')
    .eq('exam_code', code);

  if (classErr) {
    console.error('[sod-exam-eligibility] classErr:', classErr.message);
    return res.status(500).json({ error: 'Database error' });
  }

  const total = (classes || []).length;

  // No classes recorded — no attendance restriction applies
  if (total === 0) {
    return res.status(200).json({ eligible: true, attended: 0, total: 0, percentage: 100, override: false });
  }

  const classIds = classes.map(c => c.id);

  // Count sessions this student attended
  const { data: attRows, error: attErr } = await supabaseAdmin
    .from('sod_attendance')
    .select('id')
    .eq('matric_no', matric)
    .in('class_id', classIds)
    .eq('attended', true);

  if (attErr) {
    console.error('[sod-exam-eligibility] attErr:', attErr.message);
    return res.status(500).json({ error: 'Database error' });
  }

  const attended   = (attRows || []).length;
  const percentage = Math.round((attended / total) * 100);

  // Check for admin override
  const { data: override } = await supabaseAdmin
    .from('sod_attendance_overrides')
    .select('id')
    .eq('matric_no', matric)
    .eq('exam_code', code)
    .maybeSingle();

  const hasOverride = !!override;
  const eligible    = percentage >= 75 || hasOverride;

  return res.status(200).json({ eligible, attended, total, percentage, override: hasOverride });
};
