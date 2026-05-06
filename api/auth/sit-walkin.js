// ============================================================
// POST /api/auth/sit-walkin
//
// Body: { fullName: string, matric: string }
//
// Inserts a new walk-in steward record.  Walk-in students are
// auto-approved (access_granted = true, walk_in = true).
// Returns 409 if the matric number is already registered.
// ============================================================
'use strict';

const { handleCors }    = require('../_lib/cors');
const { supabaseAdmin } = require('../_lib/supabase');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { fullName, matric } = req.body || {};
  if (!fullName || !matric || typeof fullName !== 'string' || typeof matric !== 'string') {
    return res.status(400).json({ error: 'fullName and matric are required' });
  }

  const cleanMatric = matric.trim().toUpperCase().slice(0, 30);
  const cleanName   = fullName.trim().slice(0, 100);

  if (!cleanMatric || !cleanName) {
    return res.status(400).json({ error: 'fullName and matric must not be empty' });
  }

  const { data, error } = await supabaseAdmin
    .from('stewards')
    .insert({
      matric_no:      cleanMatric,
      full_name:      cleanName,
      walk_in:        true,
      access_granted: true,
      added_by:       'walk-in',
      created_at:     new Date().toISOString()
    })
    .select()
    .single();

  if (error) {
    // Postgres unique-violation code
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Matric number is already registered' });
    }
    console.error('[sit-walkin] insert error:', error.message);
    return res.status(500).json({ error: 'Database error' });
  }

  return res.status(201).json({ success: true, data });
};
