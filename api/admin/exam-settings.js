// ============================================================
// Admin — SIT Exam Settings
//
// GET /api/admin/exam-settings?examId=X  — read settings
// PUT /api/admin/exam-settings           — upsert settings
//   Body: { settings: { localExamId, timeLimit, passMark,
//           instructions, shuffleQuestions, shuffleOptions,
//           isPublished } }
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
    const { examId } = req.query;
    if (!examId) return res.status(400).json({ error: 'examId query param is required' });

    const { data, error } = await supabaseAdmin
      .from('sit_exam_settings')
      .select('*')
      .eq('local_exam_id', examId)
      .maybeSingle();

    if (error) {
      console.error('[admin/exam-settings GET] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ settings: data || null });
  }

  // ---- PUT (upsert) ----
  if (req.method === 'PUT') {
    const { settings } = req.body || {};
    if (!settings || !settings.localExamId) {
      return res.status(400).json({ error: 'settings.localExamId is required' });
    }

    const { error } = await supabaseAdmin
      .from('sit_exam_settings')
      .upsert(
        {
          local_exam_id:     settings.localExamId,
          time_limit:        settings.timeLimit,
          pass_mark:         settings.passMark,
          instructions:      settings.instructions,
          shuffle_questions: settings.shuffleQuestions,
          shuffle_options:   settings.shuffleOptions,
          is_published:      settings.isPublished
        },
        { onConflict: 'local_exam_id' }
      );

    if (error) {
      console.error('[admin/exam-settings PUT] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
