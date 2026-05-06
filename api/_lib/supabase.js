// ============================================================
// Server-side Supabase admin client
// Uses the service role key — NEVER imported by the browser.
// ============================================================
'use strict';

const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

module.exports = { supabaseAdmin };
