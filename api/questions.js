// ============================================================
// GET /api/questions?examId=<local_exam_id>
//
// Returns the ordered question list for a SIT exam.
// Public — no auth required.  Correct answers ARE returned
// because scoring happens client-side after submission.
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
    .from('sit_questions')
    .select('*')
    .eq('local_exam_id', examId)
    .order('question_number', { ascending: true });

  if (error) {
    console.error('[questions] fetch error:', error.message);
    return res.status(500).json({ error: 'Database error' });
  }

  return res.status(200).json({ questions: data || [] });
};
