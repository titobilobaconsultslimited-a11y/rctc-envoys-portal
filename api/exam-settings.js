// ============================================================
// GET /api/exam-settings?examId=<local_exam_id>
//
// Returns the exam settings row (time_limit, pass_mark, etc.)
// for a given SIT exam.  Public — no auth required.
// ============================================================
'use strict';

const { handleCors }    = require('./_lib/cors');
const { supabaseAdmin } = require('./_lib/supabase');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { examId } = req.query;
  if (!examId) return res.status(400).json({ error: 'examId query param is required' });

  const { data, error } = await supabaseAdmin
    .from('sit_exam_settings')
    .select('*')
    .eq('local_exam_id', examId)
    .maybeSingle();

  if (error) {
    console.error('[exam-settings] fetch error:', error.message);
    return res.status(500).json({ error: 'Database error' });
  }

  return res.status(200).json({ settings: data || null });
};
