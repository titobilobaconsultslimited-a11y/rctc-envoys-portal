// ============================================================
// GET  /api/results?portal=<p>&matric=<m>[&examId=<id>]
//      Returns results for one student (optionally filtered to
//      one exam).
//
// POST /api/results
//      Body: { portal, result }
//      Submits a student exam result.
//
// Valid portals: main | sod | sit | sit-theory | sod-theory
// ============================================================
'use strict';

const { handleCors }    = require('./_lib/cors');
const { supabaseAdmin } = require('./_lib/supabase');

const TABLE_MAP = {
  'main':        'exam_results',
  'sod':         'sod_exam_results',
  'sit':         'sit_exam_results',
  'sit-theory':  'sit_theory_results',
  'sod-theory':  'sod_theory_results'
};

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  // ---- GET: fetch student results ----
  if (req.method === 'GET') {
    const { portal, matric, examId } = req.query;

    if (!portal || !TABLE_MAP[portal]) {
      return res.status(400).json({ error: 'Valid portal query param is required' });
    }
    if (!matric) {
      return res.status(400).json({ error: 'matric query param is required' });
    }

    const table = TABLE_MAP[portal];
    let query = supabaseAdmin.from(table).select('*').eq('matric', matric);

    if (examId) {
      // Check if a single exam was already taken
      const { data, error } = await query.eq('exam_id', examId).maybeSingle();
      if (error) {
        console.error('[results GET single] error:', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ result: data || null });
    }

    // Return all results for this student
    const { data, error } = await query;
    if (error) {
      console.error('[results GET all] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ results: data || [] });
  }

  // ---- POST: submit a result ----
  if (req.method === 'POST') {
    const { portal, result } = req.body || {};

    if (!portal || !TABLE_MAP[portal]) {
      return res.status(400).json({ error: 'Valid portal is required' });
    }
    if (!result || !result.matric || result.examId === undefined) {
      return res.status(400).json({ error: 'result with matric and examId is required' });
    }

    const table      = TABLE_MAP[portal];
    const isTheory   = portal.includes('theory');

    const row = {
      matric:     String(result.matric).trim().slice(0, 30),
      name:       String(result.name   || '').trim().slice(0, 100),
      exam_id:    result.examId,
      exam_code:  result.examCode  || '',
      exam_title: result.examTitle || '',
      score:      Number(result.score)      || 0,
      total:      Number(result.total)      || 0,
      percentage: Number(result.percentage) || 0,
      date_taken: new Date(result.dateTaken).toISOString()
    };

    // Theory results also store the answer array
    if (isTheory && Array.isArray(result.answers)) {
      row.answers = result.answers;
    }

    const { error } = await supabaseAdmin.from(table).insert(row);
    if (error) {
      console.error('[results POST] insert error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(201).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
