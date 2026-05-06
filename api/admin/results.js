// ============================================================
// Admin — Results Management
//
// GET    /api/admin/results?portal=X         — all results
// DELETE /api/admin/results?portal=X         — bulk delete
//   Body (specific): { examId, matric? }     — delete one student or whole exam
//   Body (clear all): {}                     — wipe all results for portal
//
// Valid portals: main | sod | sit | sit-theory | sod-theory
// All routes require a valid Supabase Auth JWT.
// ============================================================
'use strict';

const { handleCors }       = require('../_lib/cors');
const { supabaseAdmin }    = require('../_lib/supabase');
const { requireAdminAuth } = require('../_lib/admin-auth');

const TABLE_MAP = {
  'main':        'exam_results',
  'sod':         'sod_exam_results',
  'sit':         'sit_exam_results',
  'sit-theory':  'sit_theory_results',
  'sod-theory':  'sod_theory_results'
};

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  const user = await requireAdminAuth(req, res);
  if (!user) return;

  const { portal } = req.query;
  if (!portal || !TABLE_MAP[portal]) {
    return res.status(400).json({ error: 'Valid portal query param is required' });
  }
  const table = TABLE_MAP[portal];

  // ---- GET: all results ----
  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from(table)
      .select('*')
      .order('date_taken', { ascending: false });

    if (error) {
      console.error('[admin/results GET] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ results: data || [] });
  }

  // ---- DELETE ----
  if (req.method === 'DELETE') {
    const { examId, matric } = req.body || {};

    let query;
    if (!examId) {
      // Clear ALL results for this portal
      query = supabaseAdmin.from(table).delete().neq('id', 0);
    } else {
      query = supabaseAdmin.from(table).delete().eq('exam_id', examId);
      if (matric) query = query.eq('matric', matric);
    }

    const { error } = await query;
    if (error) {
      console.error('[admin/results DELETE] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
