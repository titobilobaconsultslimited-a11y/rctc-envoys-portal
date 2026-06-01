// ============================================================
// Admin Fees Management
//
// GET  /api/admin/fees  — all programs, enrollments, payments
// POST /api/admin/fees  — action-based mutations
//
// Actions: add_program | update_program | delete_program |
//          enroll_student | add_payment | confirm_payment | delete_payment
//
// All routes require a valid Supabase Auth JWT.
// ============================================================
'use strict';

const { handleCors }       = require('../_lib/cors');
const { supabaseAdmin }    = require('../_lib/supabase');
const { requireAdminAuth } = require('../_lib/admin-auth');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  const user = await requireAdminAuth(req, res);
  if (!user) return;

  // ---- GET: fetch all programs, enrollments, and payments ----
  if (req.method === 'GET') {
    const [progRes, enrollRes, payRes] = await Promise.all([
      supabaseAdmin.from('programs').select('*').order('name'),
      supabaseAdmin.from('student_enrollments')
        .select('*, programs(id, name, total_fee)')
        .order('matric'),
      supabaseAdmin.from('fee_payments')
        .select('*')
        .order('created_at', { ascending: false })
    ]);

    if (progRes.error)   console.error('[admin/fees GET programs]',    progRes.error.message);
    if (enrollRes.error) console.error('[admin/fees GET enrollments]', enrollRes.error.message);
    if (payRes.error)    console.error('[admin/fees GET payments]',    payRes.error.message);

    return res.status(200).json({
      programs:    progRes.data    || [],
      enrollments: enrollRes.data  || [],
      payments:    payRes.data     || []
    });
  }

  // ---- POST: action-based mutations ----
  if (req.method === 'POST') {
    const body = req.body || {};
    const { action } = body;

    // ---- add_program ----
    if (action === 'add_program') {
      const { name, description, total_fee, bank_name, account_name, account_number, bank_sort_code } = body;
      if (!name || total_fee === undefined || total_fee === null) {
        return res.status(400).json({ error: 'name and total_fee are required' });
      }
      const fee = parseFloat(total_fee);
      if (isNaN(fee) || fee < 0) return res.status(400).json({ error: 'Invalid total_fee' });

      const { data, error } = await supabaseAdmin.from('programs').insert({
        name:           String(name).trim().slice(0, 150),
        description:    description ? String(description).trim().slice(0, 500) : null,
        total_fee:      fee,
        bank_name:      bank_name      ? String(bank_name).trim()      : null,
        account_name:   account_name   ? String(account_name).trim()   : null,
        account_number: account_number ? String(account_number).trim() : null,
        bank_sort_code: bank_sort_code ? String(bank_sort_code).trim() : null
      }).select().single();

      if (error) {
        console.error('[admin/fees add_program]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(201).json({ ok: true, program: data });
    }

    // ---- update_program ----
    if (action === 'update_program') {
      const { id, name, description, total_fee, bank_name, account_name, account_number, bank_sort_code } = body;
      if (!id || !name || total_fee === undefined || total_fee === null) {
        return res.status(400).json({ error: 'id, name, and total_fee are required' });
      }
      const fee = parseFloat(total_fee);
      if (isNaN(fee) || fee < 0) return res.status(400).json({ error: 'Invalid total_fee' });

      const { data, error } = await supabaseAdmin.from('programs').update({
        name:           String(name).trim().slice(0, 150),
        description:    description ? String(description).trim().slice(0, 500) : null,
        total_fee:      fee,
        bank_name:      bank_name      ? String(bank_name).trim()      : null,
        account_name:   account_name   ? String(account_name).trim()   : null,
        account_number: account_number ? String(account_number).trim() : null,
        bank_sort_code: bank_sort_code ? String(bank_sort_code).trim() : null
      }).eq('id', id).select().single();

      if (error) {
        console.error('[admin/fees update_program]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ ok: true, program: data });
    }

    // ---- delete_program ----
    if (action === 'delete_program') {
      const { id } = body;
      if (!id) return res.status(400).json({ error: 'id is required' });
      const { error } = await supabaseAdmin.from('programs').delete().eq('id', id);
      if (error) {
        console.error('[admin/fees delete_program]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ ok: true });
    }

    // ---- enroll_student ----
    if (action === 'enroll_student') {
      const { matric, program_id } = body;
      if (!matric) return res.status(400).json({ error: 'matric is required' });

      if (!program_id) {
        // Remove enrollment
        const { error } = await supabaseAdmin.from('student_enrollments').delete().eq('matric', matric);
        if (error) {
          console.error('[admin/fees enroll_student remove]', error.message);
          return res.status(500).json({ error: 'Database error' });
        }
        return res.status(200).json({ ok: true });
      }

      const { data, error } = await supabaseAdmin
        .from('student_enrollments')
        .upsert(
          { matric: String(matric).trim(), program_id: parseInt(program_id, 10), enrolled_at: new Date().toISOString() },
          { onConflict: 'matric' }
        )
        .select()
        .single();

      if (error) {
        console.error('[admin/fees enroll_student]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ ok: true, enrollment: data });
    }

    // ---- add_payment ----
    if (action === 'add_payment') {
      const { matric, amount, payment_date, note } = body;
      if (!matric || amount === undefined || amount === null) {
        return res.status(400).json({ error: 'matric and amount are required' });
      }
      const parsed = parseFloat(amount);
      if (isNaN(parsed) || parsed <= 0) {
        return res.status(400).json({ error: 'amount must be a positive number' });
      }

      const { data, error } = await supabaseAdmin.from('fee_payments').insert({
        matric:       String(matric).trim(),
        amount:       parsed,
        payment_date: payment_date || new Date().toISOString().split('T')[0],
        note:         note ? String(note).slice(0, 200) : null,
        source:       'admin',
        status:       'confirmed',
        confirmed_by: user.id,
        confirmed_at: new Date().toISOString()
      }).select().single();

      if (error) {
        console.error('[admin/fees add_payment]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(201).json({ ok: true, payment: data });
    }

    // ---- confirm_payment ----
    if (action === 'confirm_payment') {
      const { id, status } = body;
      if (!id || !['confirmed', 'rejected'].includes(status)) {
        return res.status(400).json({ error: 'id and valid status (confirmed/rejected) are required' });
      }
      const { data, error } = await supabaseAdmin.from('fee_payments')
        .update({ status, confirmed_by: user.id, confirmed_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('[admin/fees confirm_payment]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ ok: true, payment: data });
    }

    // ---- delete_payment ----
    if (action === 'delete_payment') {
      const { id } = body;
      if (!id) return res.status(400).json({ error: 'id is required' });
      const { error } = await supabaseAdmin.from('fee_payments').delete().eq('id', id);
      if (error) {
        console.error('[admin/fees delete_payment]', error.message);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: `Unknown action: ${action}` });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
