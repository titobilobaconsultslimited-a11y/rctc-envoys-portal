// ============================================================
// Admin — Exam Locks
//
// GET /api/admin/locks?portal=X      — get all locks for portal
// PUT /api/admin/locks               — set lock(s)
//   Body (single):  { portal, examId, locked }
//   Body (bulk):    { portal, examIds: [...], locked }
//
// Valid portals: main | sod | sit | sit-theory | sod-theory
// All routes require a valid Supabase Auth JWT.
// ============================================================
'use strict';

const { handleCors }       = require('../_lib/cors');
const { supabaseAdmin }    = require('../_lib/supabase');
const { requireAdminAuth } = require('../_lib/admin-auth');

const VALID_PORTALS = new Set(['main', 'sod', 'sit', 'sit-theory', 'sod-theory']);

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  const user = await requireAdminAuth(req, res);
  if (!user) return;

  // ---- GET ----
  if (req.method === 'GET') {
    const { portal } = req.query;
    if (!portal || !VALID_PORTALS.has(portal)) {
      return res.status(400).json({ error: 'Valid portal query param is required' });
    }

    const { data, error } = await supabaseAdmin
      .from('exam_locks')
      .select('exam_id, locked')
      .eq('portal', portal);

    if (error) {
      console.error('[admin/locks GET] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }

    const locks = {};
    (data || []).forEach(row => { locks[row.exam_id] = row.locked; });
    return res.status(200).json({ locks });
  }

  // ---- PUT ----
  if (req.method === 'PUT') {
    const { portal, examId, examIds, locked } = req.body || {};

    if (!portal || !VALID_PORTALS.has(portal)) {
      return res.status(400).json({ error: 'Valid portal is required' });
    }

    let rows;
    if (Array.isArray(examIds) && examIds.length > 0) {
      rows = examIds.map(id => ({ exam_id: id, locked: !!locked, portal }));
    } else if (examId !== undefined) {
      rows = [{ exam_id: examId, locked: !!locked, portal }];
    } else {
      return res.status(400).json({ error: 'examId or examIds is required' });
    }

    const { error } = await supabaseAdmin
      .from('exam_locks')
      .upsert(rows, { onConflict: 'exam_id,portal' });

    if (error) {
      console.error('[admin/locks PUT] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
