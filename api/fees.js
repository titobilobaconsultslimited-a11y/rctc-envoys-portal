// ============================================================
// GET  /api/fees?matric=<m>   — student fee status
// POST /api/fees               — student submits a pending payment
//   Body: { matric, amount, note? }
// ============================================================
'use strict';

const { handleCors }    = require('./_lib/cors');
const { supabaseAdmin } = require('./_lib/supabase');

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  // ---- GET: student fee status ----
  if (req.method === 'GET') {
    const { matric } = req.query;
    if (!matric) return res.status(400).json({ error: 'matric is required' });

    const [enrollRes, paymentsRes] = await Promise.all([
      supabaseAdmin
        .from('student_enrollments')
        .select('*, programs(*)')
        .eq('matric', matric)
        .maybeSingle(),
      supabaseAdmin
        .from('fee_payments')
        .select('id, amount, payment_date, note, source, status, created_at')
        .eq('matric', matric)
        .order('created_at', { ascending: false })
    ]);

    if (enrollRes.error && enrollRes.error.code !== 'PGRST116') {
      console.error('[fees GET enrollment]', enrollRes.error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    if (paymentsRes.error) {
      console.error('[fees GET payments]', paymentsRes.error.message);
      return res.status(500).json({ error: 'Database error' });
    }

    const program   = enrollRes.data?.programs || null;
    const payments  = paymentsRes.data || [];
    const totalFee  = program ? parseFloat(program.total_fee) : 0;
    const totalPaid = payments
      .filter(p => p.status === 'confirmed')
      .reduce((s, p) => s + parseFloat(p.amount), 0);

    return res.status(200).json({
      program: program ? {
        id:            program.id,
        name:          program.name,
        description:   program.description || null,
        totalFee,
        bankName:      program.bank_name      || null,
        accountName:   program.account_name   || null,
        accountNumber: program.account_number || null,
        bankSortCode:  program.bank_sort_code || null
      } : null,
      totalFee,
      totalPaid:  Math.round(totalPaid * 100) / 100,
      balance:    Math.max(0, Math.round((totalFee - totalPaid) * 100) / 100),
      payments:   payments.map(p => ({
        id:          p.id,
        amount:      parseFloat(p.amount),
        paymentDate: p.payment_date,
        note:        p.note || null,
        source:      p.source,
        status:      p.status,
        createdAt:   p.created_at
      }))
    });
  }

  // ---- POST: student submits a pending payment ----
  if (req.method === 'POST') {
    const { matric, amount, note } = req.body || {};
    if (!matric || amount === undefined || amount === null) {
      return res.status(400).json({ error: 'matric and amount are required' });
    }
    const parsed = parseFloat(amount);
    if (isNaN(parsed) || parsed <= 0) {
      return res.status(400).json({ error: 'amount must be a positive number' });
    }

    const { data, error } = await supabaseAdmin
      .from('fee_payments')
      .insert({
        matric:       String(matric).trim(),
        amount:       parsed,
        payment_date: new Date().toISOString().split('T')[0],
        note:         note ? String(note).slice(0, 200) : null,
        source:       'student',
        status:       'pending'
      })
      .select('id, amount, status')
      .single();

    if (error) {
      console.error('[fees POST]', error.message);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(201).json({ ok: true, payment: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
