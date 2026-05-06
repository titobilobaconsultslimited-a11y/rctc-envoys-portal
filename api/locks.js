// ============================================================
// GET /api/locks?portal=<portal>
//
// Returns a map of { [exam_id]: locked } for the given portal.
// Valid portals: main | sod | sit | sit-theory | sod-theory
// Public — no auth required (students need this to know if an
// exam is open before they attempt it).
// ============================================================
'use strict';

const { handleCors }    = require('./_lib/cors');
const { supabaseAdmin } = require('./_lib/supabase');

const VALID_PORTALS = new Set(['main', 'sod', 'sit', 'sit-theory', 'sod-theory']);

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { portal } = req.query;
  if (!portal || !VALID_PORTALS.has(portal)) {
    return res.status(400).json({ error: 'Valid portal query param is required (main | sod | sit | sit-theory | sod-theory)' });
  }

  const { data, error } = await supabaseAdmin
    .from('exam_locks')
    .select('exam_id, locked')
    .eq('portal', portal);

  if (error) {
    console.error('[locks] fetch error:', error.message);
    return res.status(500).json({ error: 'Database error' });
  }

  const locks = {};
  (data || []).forEach(row => { locks[row.exam_id] = row.locked; });

  return res.status(200).json({ locks });
};
