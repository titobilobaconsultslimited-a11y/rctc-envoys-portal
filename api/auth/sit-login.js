// ============================================================
// POST /api/auth/sit-login
//
// Login:  Body { matric }              — look up existing steward
// Walk-in: Body { matric, fullName }   — register new walk-in student
//
// Routes internally by presence of `fullName` in body.
// ============================================================
'use strict';

const { handleCors }    = require('../_lib/cors');
const { supabaseAdmin } = require('../_lib/supabase');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body || {};

  // ---- WALK-IN: body contains fullName ----
  if (body.fullName !== undefined) {
    const { fullName, matric } = body;
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
      if (error.code === '23505') {
        return res.status(409).json({ error: 'Matric number is already registered' });
      }
      console.error('[sit-walkin] insert error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(201).json({ success: true, data });
  }

  // ---- LOGIN: look up existing steward by matric ----
  const { matric } = body;
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
