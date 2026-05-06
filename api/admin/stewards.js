// ============================================================
// Admin — Stewards CRUD
//
// GET    /api/admin/stewards            — list all stewards
// POST   /api/admin/stewards            — add a steward
// PATCH  /api/admin/stewards?matric=X   — update access_granted
// DELETE /api/admin/stewards?matric=X   — remove a steward
//
// All routes require a valid Supabase Auth JWT in the
// Authorization: Bearer <token> header.
// ============================================================
'use strict';

const { handleCors }      = require('../_lib/cors');
const { supabaseAdmin }   = require('../_lib/supabase');
const { requireAdminAuth} = require('../_lib/admin-auth');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  const user = await requireAdminAuth(req, res);
  if (!user) return;

  // ---- GET: list all stewards ----
  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('stewards')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[admin/stewards GET] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ stewards: data || [] });
  }

  // ---- POST: add a steward ----
  if (req.method === 'POST') {
    const { steward } = req.body || {};
    if (!steward || !steward.matric_no || !steward.full_name) {
      return res.status(400).json({ error: 'steward.matric_no and steward.full_name are required' });
    }

    const { data, error } = await supabaseAdmin
      .from('stewards')
      .insert({
        matric_no:      steward.matric_no.trim().toUpperCase().slice(0, 30),
        full_name:      steward.full_name.trim().slice(0, 100),
        walk_in:        steward.walk_in        || false,
        access_granted: steward.access_granted !== undefined ? !!steward.access_granted : true,
        added_by:       steward.added_by       || 'admin-manual',
        created_at:     new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return res.status(409).json({ error: 'Matric number already registered' });
      }
      console.error('[admin/stewards POST] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(201).json({ data });
  }

  // ---- PATCH: update access_granted ----
  if (req.method === 'PATCH') {
    const { matric }        = req.query;
    const { accessGranted } = req.body || {};

    if (!matric) return res.status(400).json({ error: 'matric query param is required' });

    const { error } = await supabaseAdmin
      .from('stewards')
      .update({ access_granted: !!accessGranted })
      .eq('matric_no', matric);

    if (error) {
      console.error('[admin/stewards PATCH] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  // ---- DELETE: remove a steward ----
  if (req.method === 'DELETE') {
    const { matric } = req.query;
    if (!matric) return res.status(400).json({ error: 'matric query param is required' });

    const { error } = await supabaseAdmin
      .from('stewards')
      .delete()
      .eq('matric_no', matric);

    if (error) {
      console.error('[admin/stewards DELETE] error:', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
