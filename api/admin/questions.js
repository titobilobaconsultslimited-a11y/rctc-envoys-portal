// ============================================================
// Admin — SIT Exam Questions CRUD
//
// GET    /api/admin/questions?examId=X   — list questions
// POST   /api/admin/questions            — add a question
// PUT    /api/admin/questions?id=X       — update a question
// DELETE /api/admin/questions?id=X       — delete a question
// PATCH  /api/admin/questions            — move question up/down
//   Body: { id, direction: 'up'|'down', examId }
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

  // ---- GET: list questions for exam ----
  if (req.method === 'GET') {
    const { examId } = req.query;
    if (!examId) return res.status(400).json({ error: 'examId query param is required' });

    const { data, error } = await supabaseAdmin
      .from('sit_questions')
      .select('*')
      .eq('local_exam_id', examId)
      .order('question_number', { ascending: true });

    if (error) {
      console.error('[admin/questions GET] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ questions: data || [] });
  }

  // ---- POST: add a question ----
  if (req.method === 'POST') {
    const { question } = req.body || {};
    if (!question || !question.examId) {
      return res.status(400).json({ error: 'question with examId is required' });
    }

    const { data, error } = await supabaseAdmin
      .from('sit_questions')
      .insert({
        local_exam_id:   question.examId,
        question_number: question.questionNumber,
        question_text:   question.questionText,
        option_a:        question.optionA,
        option_b:        question.optionB,
        option_c:        question.optionC,
        option_d:        question.optionD,
        correct_answer:  question.correctAnswer,
        marks:           question.marks || 1
      })
      .select()
      .single();

    if (error) {
      console.error('[admin/questions POST] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(201).json({ data });
  }

  // ---- PUT: update a question ----
  if (req.method === 'PUT') {
    const { id }       = req.query;
    const { question } = req.body || {};
    if (!id || !question) {
      return res.status(400).json({ error: 'id query param and question body are required' });
    }

    const { error } = await supabaseAdmin
      .from('sit_questions')
      .update({
        question_text:  question.questionText,
        option_a:       question.optionA,
        option_b:       question.optionB,
        option_c:       question.optionC,
        option_d:       question.optionD,
        correct_answer: question.correctAnswer,
        marks:          question.marks || 1
      })
      .eq('id', id);

    if (error) {
      console.error('[admin/questions PUT] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  // ---- DELETE: remove a question ----
  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'id query param is required' });

    const { error } = await supabaseAdmin
      .from('sit_questions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('[admin/questions DELETE] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  // ---- PATCH: move question up or down ----
  if (req.method === 'PATCH') {
    const { id, direction, examId } = req.body || {};
    if (!id || !direction || !examId) {
      return res.status(400).json({ error: 'id, direction and examId are required in body' });
    }
    if (direction !== 'up' && direction !== 'down') {
      return res.status(400).json({ error: 'direction must be "up" or "down"' });
    }

    // Fetch ordered list to find adjacent question
    const { data: questions, error: fetchError } = await supabaseAdmin
      .from('sit_questions')
      .select('id, question_number')
      .eq('local_exam_id', examId)
      .order('question_number', { ascending: true });

    if (fetchError) {
      console.error('[admin/questions PATCH] fetch error:', fetchError.message);
      return res.status(500).json({ error: 'Database error' });
    }

    const idx = (questions || []).findIndex(q => String(q.id) === String(id));
    if (idx === -1) return res.status(404).json({ error: 'Question not found' });

    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= questions.length) {
      return res.status(400).json({ error: 'Cannot move question further in that direction' });
    }

    const a = questions[idx];
    const b = questions[swapIdx];

    const [r1, r2] = await Promise.all([
      supabaseAdmin.from('sit_questions').update({ question_number: b.question_number }).eq('id', a.id),
      supabaseAdmin.from('sit_questions').update({ question_number: a.question_number }).eq('id', b.id)
    ]);

    if (r1.error || r2.error) {
      console.error('[admin/questions PATCH] swap error:', r1.error?.message || r2.error?.message);
      return res.status(500).json({ error: 'Database error during swap' });
    }

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
