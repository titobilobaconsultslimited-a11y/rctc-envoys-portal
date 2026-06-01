// ============================================================
// RCTC Envoys — Admin Fees Management Logic
// Loaded by admin.html after data.js, supabase-client.js, app.js
// ============================================================

let feesData = { programs: [], enrollments: [], payments: [] };

async function loadFeesTab() {
  feesData = await dbAdminGetFees();
  renderFeeStats();
  renderProgramsSection();
  renderFeeOverview();
  renderPaymentsTable();
}

async function reloadFeesData() {
  feesData = await dbAdminGetFees();
  renderFeeStats();
  renderProgramsSection();
  renderFeeOverview();
  renderPaymentsTable();
}

function _fmtMoney(n) {
  return '₦' + parseFloat(n || 0).toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// ---- Stats grid ----
function renderFeeStats() {
  const totalPrograms  = feesData.programs.length;
  const enrolled       = feesData.enrollments.length;
  const allStudents    = Object.keys(STUDENTS).length;
  const confirmed      = feesData.payments.filter(p => p.status === 'confirmed');
  const pending        = feesData.payments.filter(p => p.status === 'pending');
  const totalCollected = confirmed.reduce((s, p) => s + parseFloat(p.amount), 0);
  document.getElementById('feesStatsGrid').innerHTML = `
    <div class="stat-card navy"><div class="stat-num">${totalPrograms}</div><div class="stat-lbl">Programs</div></div>
    <div class="stat-card gold"><div class="stat-num">${enrolled}/${allStudents}</div><div class="stat-lbl">Students Enrolled</div></div>
    <div class="stat-card green"><div class="stat-num">${_fmtMoney(totalCollected)}</div><div class="stat-lbl">Total Collected</div></div>
    <div class="stat-card orange"><div class="stat-num">${pending.length}</div><div class="stat-lbl">Pending Payments</div></div>`;
}

// ---- Programs table ----
function renderProgramsSection() {
  const body = document.getElementById('programsTableBody');
  if (!feesData.programs.length) {
    body.innerHTML = `<p style="text-align:center;padding:24px;color:var(--gray);font-size:0.88rem;">No programs yet. Click <strong>+ Add Program</strong> to create the first one.</p>`;
    return;
  }
  body.innerHTML = `<div style="overflow-x:auto;"><table class="results-table">
    <thead><tr>
      <th>#</th><th>Program Name</th><th>Total Fee</th><th>Bank Details</th>
      <th style="text-align:center;">Enrolled</th><th style="text-align:center;">Actions</th>
    </tr></thead>
    <tbody>${feesData.programs.map((p, i) => {
      const cnt = feesData.enrollments.filter(e => e.program_id === p.id).length;
      const bankInfo = p.bank_name
        ? `<strong>${p.bank_name}</strong><br><span style="font-size:0.75rem;">${p.account_name || ''} &mdash; ${p.account_number || '—'}</span>`
        : `<span style="color:var(--gray);font-size:0.8rem;">Not configured</span>`;
      return `<tr>
        <td>${i + 1}</td>
        <td><strong>${p.name}</strong>${p.description ? `<br><span style="font-size:0.77rem;color:var(--gray);">${p.description}</span>` : ''}</td>
        <td style="font-weight:800;color:var(--navy);white-space:nowrap;">${_fmtMoney(p.total_fee)}</td>
        <td>${bankInfo}</td>
        <td style="text-align:center;font-weight:700;">${cnt}</td>
        <td style="text-align:center;white-space:nowrap;">
          <button onclick="openEditProgramModal(${p.id})" class="btn btn-outline btn-sm" style="font-size:0.73rem;padding:3px 9px;">&#9998; Edit</button>
          <button onclick="deleteProgramConfirm(${p.id})" class="btn btn-sm" style="background:var(--danger);color:#fff;font-size:0.73rem;padding:3px 9px;margin-left:4px;">&#128465;</button>
        </td>
      </tr>`;
    }).join('')}</tbody></table></div>`;
}

// ---- Fee overview table ----
function renderFeeOverview() {
  const wrap = document.getElementById('feeOverviewWrap');
  const q    = (document.getElementById('feeOverviewSearch')?.value || '').trim().toLowerCase();
  const rows = Object.entries(STUDENTS).map(([matric, name]) => {
    const enrollment = feesData.enrollments.find(e => e.matric === matric);
    const program    = enrollment?.programs || null;
    const totalFee   = program ? parseFloat(program.total_fee) : 0;
    const paid       = feesData.payments
      .filter(p => p.matric === matric && p.status === 'confirmed')
      .reduce((s, p) => s + parseFloat(p.amount), 0);
    const balance    = Math.max(0, totalFee - paid);
    return { matric, name, program, enrollment, totalFee, paid: Math.round(paid * 100) / 100, balance: Math.round(balance * 100) / 100 };
  });
  const filtered = q ? rows.filter(r => r.name.toLowerCase().includes(q) || r.matric.includes(q)) : rows;
  if (!filtered.length) {
    wrap.innerHTML = `<p style="text-align:center;padding:20px;color:var(--gray);">No students found.</p>`;
    return;
  }
  wrap.innerHTML = `<table class="results-table">
    <thead><tr>
      <th>#</th><th>Matric</th><th>Name</th><th>Program</th>
      <th style="text-align:right;">Total Fee</th>
      <th style="text-align:right;">Paid</th>
      <th style="text-align:right;">Balance</th>
      <th style="text-align:center;">Status</th>
      <th style="text-align:center;">Action</th>
    </tr></thead>
    <tbody>${filtered.map((r, i) => {
      const badge = !r.program
        ? `<span style="background:#f0f0f0;color:#888;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">Not Enrolled</span>`
        : r.balance === 0
          ? `<span style="background:var(--success-light);color:var(--success);font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">&#10003; Paid</span>`
          : r.paid > 0
            ? `<span style="background:#fff3cd;color:#856404;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">&#9889; Part-Paid</span>`
            : `<span style="background:var(--danger-light);color:var(--danger);font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">&#10060; Owing</span>`;
      const progSel = `<select onchange="changeStudentEnrollment('${r.matric}',this.value)"
        style="padding:3px 7px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:0.77rem;max-width:150px;">
        <option value="">&#8212; None &#8212;</option>
        ${feesData.programs.map(p => `<option value="${p.id}"${r.enrollment?.program_id === p.id ? ' selected' : ''}>${p.name}</option>`).join('')}
      </select>`;
      return `<tr>
        <td>${i + 1}</td>
        <td><code style="font-size:0.78rem;font-weight:600;">${r.matric}</code></td>
        <td style="font-weight:600;">${r.name}</td>
        <td>${progSel}</td>
        <td style="text-align:right;font-weight:700;">${_fmtMoney(r.totalFee)}</td>
        <td style="text-align:right;font-weight:700;color:var(--success);">${_fmtMoney(r.paid)}</td>
        <td style="text-align:right;font-weight:700;color:${r.balance > 0 ? 'var(--danger)' : 'var(--success)'};">${_fmtMoney(r.balance)}</td>
        <td style="text-align:center;">${badge}</td>
        <td style="text-align:center;">
          <button onclick="openAddPaymentModal('${r.matric}')" class="btn btn-sm"
            style="background:var(--success);color:#fff;font-size:0.71rem;padding:3px 8px;">+ Pay</button>
        </td>
      </tr>`;
    }).join('')}</tbody></table>`;
}

// ---- Payments table ----
function renderPaymentsTable() {
  const wrap   = document.getElementById('paymentsTableWrap');
  const filter = document.getElementById('paymentStatusFilter')?.value || '';
  const list   = filter ? feesData.payments.filter(p => p.status === filter) : feesData.payments;
  if (!list.length) {
    wrap.innerHTML = `<p style="text-align:center;padding:20px;color:var(--gray);">${filter ? 'No ' + filter + ' payments.' : 'No payments recorded yet.'}</p>`;
    return;
  }
  wrap.innerHTML = `<table class="results-table">
    <thead><tr>
      <th>#</th><th>Matric</th><th>Student</th>
      <th style="text-align:right;">Amount</th>
      <th>Date</th><th>Note</th><th>Source</th><th>Status</th>
      <th style="text-align:center;">Actions</th>
    </tr></thead>
    <tbody>${list.map((p, i) => {
      const name  = STUDENTS[p.matric] || '—';
      const badge = p.status === 'confirmed'
        ? `<span style="background:var(--success-light);color:var(--success);font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">&#10003; Confirmed</span>`
        : p.status === 'pending'
          ? `<span style="background:#fff3cd;color:#856404;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">&#8987; Pending</span>`
          : `<span style="background:var(--danger-light);color:var(--danger);font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:20px;">&#10060; Rejected</span>`;
      const actions = p.status === 'pending'
        ? `<button onclick="confirmPaymentAction(${p.id},'confirmed')" title="Confirm" class="btn btn-sm" style="background:var(--success);color:#fff;font-size:0.7rem;padding:3px 8px;">&#10003;</button>
           <button onclick="confirmPaymentAction(${p.id},'rejected')" title="Reject" class="btn btn-sm" style="background:var(--danger);color:#fff;font-size:0.7rem;padding:3px 8px;margin-left:3px;">&#10007;</button>`
        : `<button onclick="deletePaymentConfirm(${p.id})" title="Delete" class="btn btn-sm" style="background:#e0e0e0;color:#555;font-size:0.7rem;padding:3px 8px;">&#128465;</button>`;
      return `<tr>
        <td>${i + 1}</td>
        <td><code style="font-size:0.78rem;font-weight:600;">${p.matric}</code></td>
        <td style="font-weight:600;">${name}</td>
        <td style="text-align:right;font-weight:700;color:var(--success);white-space:nowrap;">${_fmtMoney(p.amount)}</td>
        <td style="font-size:0.82rem;white-space:nowrap;">${p.payment_date}</td>
        <td style="font-size:0.79rem;color:var(--gray);">${p.note || '&#8212;'}</td>
        <td style="font-size:0.77rem;font-weight:700;">${p.source === 'student' ? '&#128100; Student' : '&#128295; Admin'}</td>
        <td>${badge}</td>
        <td style="text-align:center;white-space:nowrap;">${actions}</td>
      </tr>`;
    }).join('')}</tbody></table>`;
}

// ============================================================
// PROGRAM MODAL
// ============================================================
let _editingProgramId = null;

function openAddProgramModal() {
  _editingProgramId = null;
  document.getElementById('programModalTitle').textContent = '📚 Add Program';
  ['programModalId','programModalName','programModalDesc','programModalFee',
   'programModalBank','programModalAccName','programModalAccNum','programModalSort'
  ].forEach(id => { document.getElementById(id).value = ''; });
  hideError('programModalError');
  document.getElementById('programModal').classList.remove('hidden');
}

function openEditProgramModal(id) {
  const p = feesData.programs.find(x => x.id === id);
  if (!p) return;
  _editingProgramId = id;
  document.getElementById('programModalTitle').textContent = '✏️ Edit Program';
  document.getElementById('programModalId').value      = p.id;
  document.getElementById('programModalName').value    = p.name;
  document.getElementById('programModalDesc').value    = p.description || '';
  document.getElementById('programModalFee').value     = p.total_fee;
  document.getElementById('programModalBank').value    = p.bank_name || '';
  document.getElementById('programModalAccName').value = p.account_name || '';
  document.getElementById('programModalAccNum').value  = p.account_number || '';
  document.getElementById('programModalSort').value    = p.bank_sort_code || '';
  hideError('programModalError');
  document.getElementById('programModal').classList.remove('hidden');
}

function closeProgramModal() {
  document.getElementById('programModal').classList.add('hidden');
}

async function saveProgramModal() {
  const name    = document.getElementById('programModalName').value.trim();
  const desc    = document.getElementById('programModalDesc').value.trim();
  const fee     = document.getElementById('programModalFee').value;
  const bank    = document.getElementById('programModalBank').value.trim();
  const accName = document.getElementById('programModalAccName').value.trim();
  const accNum  = document.getElementById('programModalAccNum').value.trim();
  const sort    = document.getElementById('programModalSort').value.trim();

  if (!name || fee === '') { showError('programModalError', 'Program name and total fee are required.'); return; }
  if (isNaN(parseFloat(fee)) || parseFloat(fee) < 0) { showError('programModalError', 'Please enter a valid fee amount.'); return; }

  const btn = document.querySelector('#programModal .btn-primary');
  btn.disabled = true; btn.textContent = 'Saving…';

  const res = _editingProgramId
    ? await dbAdminUpdateProgram(_editingProgramId, name, desc, fee, bank, accName, accNum, sort)
    : await dbAdminAddProgram(name, desc, fee, bank, accName, accNum, sort);

  btn.disabled = false; btn.textContent = 'Save Program';
  if (!res.ok) { showError('programModalError', 'Failed to save. Please try again.'); return; }
  closeProgramModal();
  await reloadFeesData();
}

async function deleteProgramConfirm(id) {
  const p   = feesData.programs.find(x => x.id === id);
  if (!p) return;
  const cnt = feesData.enrollments.filter(e => e.program_id === id).length;
  const msg = cnt > 0
    ? `Delete "${p.name}"? This will remove the program assignment from ${cnt} enrolled student(s).`
    : `Delete "${p.name}"? This cannot be undone.`;
  if (!confirm(msg)) return;
  const res = await dbAdminDeleteProgram(id);
  if (!res.ok) { alert('Failed to delete program.'); return; }
  await reloadFeesData();
}

// ============================================================
// ENROLLMENT
// ============================================================
async function changeStudentEnrollment(matric, programId) {
  await dbAdminEnrollStudent(matric, programId || null);
  await reloadFeesData();
}

// ============================================================
// ADD PAYMENT MODAL
// ============================================================
function openAddPaymentModal(preselect) {
  document.getElementById('addPaymentDate').value   = new Date().toISOString().split('T')[0];
  document.getElementById('addPaymentAmount').value = '';
  document.getElementById('addPaymentNote').value   = '';
  hideError('addPaymentError');
  const sel = document.getElementById('addPaymentMatric');
  sel.innerHTML = '<option value="">&#8212; Select Student &#8212;</option>';
  Object.entries(STUDENTS).forEach(([m, n]) => {
    const opt = document.createElement('option');
    opt.value = m; opt.textContent = `${m} — ${n}`;
    if (m === preselect) opt.selected = true;
    sel.appendChild(opt);
  });
  document.getElementById('addPaymentModal').classList.remove('hidden');
}

function closeAddPaymentModal() {
  document.getElementById('addPaymentModal').classList.add('hidden');
}

async function saveAddPayment() {
  const matric = document.getElementById('addPaymentMatric').value;
  const amount = document.getElementById('addPaymentAmount').value;
  const date   = document.getElementById('addPaymentDate').value;
  const note   = document.getElementById('addPaymentNote').value.trim();

  if (!matric) { showError('addPaymentError', 'Please select a student.'); return; }
  if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
    showError('addPaymentError', 'Please enter a valid amount.'); return;
  }

  const btn = document.querySelector('#addPaymentModal .btn-save-pay');
  btn.disabled = true; btn.textContent = 'Saving…';
  const res = await dbAdminAddPayment(matric, amount, date, note);
  btn.disabled = false; btn.textContent = 'Record Payment';

  if (!res.ok) { showError('addPaymentError', 'Failed to record payment. Please try again.'); return; }
  closeAddPaymentModal();
  await reloadFeesData();
}

// ============================================================
// CONFIRM / REJECT / DELETE PAYMENT
// ============================================================
async function confirmPaymentAction(id, status) {
  const p    = feesData.payments.find(x => x.id === id);
  if (!p) return;
  const name = STUDENTS[p.matric] || p.matric;
  const verb = status === 'confirmed' ? 'Confirm' : 'Reject';
  if (!confirm(`${verb} the ${_fmtMoney(p.amount)} payment from ${name}?`)) return;
  const res = await dbAdminConfirmPayment(id, status);
  if (!res.ok) { alert('Failed to update payment status.'); return; }
  await reloadFeesData();
}

async function deletePaymentConfirm(id) {
  if (!confirm('Delete this payment record? This cannot be undone.')) return;
  const res = await dbAdminDeletePayment(id);
  if (!res.ok) { alert('Failed to delete payment.'); return; }
  await reloadFeesData();
}
