// ============================================================
// Admin authentication middleware
//
// The admin logs in with Supabase Auth on the client side
// (supabase.auth.signInWithPassword) and receives a JWT.
// That JWT is sent as  Authorization: Bearer <token>  in every
// admin API request. This module verifies the token server-side
// using the service-role key (which can call auth.getUser).
// ============================================================
'use strict';

const { supabaseAdmin } = require('./supabase');

/**
 * Verifies the Bearer token in the Authorization header using
 * Supabase Auth.  Returns the Supabase user object on success,
 * or ends the response with 401 and returns null on failure.
 *
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 * @returns {Promise<object|null>}
 */
async function requireAdminAuth(req, res) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }

  const token = auth.slice(7);

  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

  if (error || !user) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return null;
  }

  return user;
}

module.exports = { requireAdminAuth };
