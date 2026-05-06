// ============================================================
// POST /api/auth/sit-login
//
// Body: { matric: string }
//
// Looks up the matric number in the stewards table and returns
// whether the student exists and whether access is granted.
// No sensitive data (service role key) is exposed to the browser.
// ============================================================
'use strict';

const { handleCors }    = require('../_lib/cors');
const { supabaseAdmin } = require('../_lib/supabase');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { matric } = req.body || {};
  if (!matric || typeof matric !== 'string') {
    return res.status(400).json({ error: 'matric is required' });
  }

  const cleanMatric = matric.trim().toUpperCase().slice(0, 30);

  const { data, error } = await supabaseAdmin
    .from('stewards')
    .select('matric_no, full_name, walk_in, access_granted, added_by')
    .eq('matric_no', cleanMatric)
    .maybeSingle();

  if (error) {
    console.error('[sit-login] lookup error:', error.message);
    return res.status(500).json({ error: 'Database error' });
  }

  if (!data) {
    return res.status(200).json({ found: false });
  }

  return res.status(200).json({
    found:         true,
    name:          data.full_name,
    walkIn:        data.walk_in,
    accessGranted: data.access_granted,
    addedBy:       data.added_by
  });
};
