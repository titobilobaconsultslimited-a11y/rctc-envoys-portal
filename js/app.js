// ============================================================
// RCTC ENVOYS CAMPUS - EXAM PORTAL — SHARED APPLICATION LOGIC
// ============================================================

// ---- STORAGE HELPERS ----
const store = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  remove: (key) => localStorage.removeItem(key),
  sessionGet: (key) => { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } },
  sessionSet: (key, val) => sessionStorage.setItem(key, JSON.stringify(val)),
  sessionRemove: (key) => sessionStorage.removeItem(key)
};

// ---- AUTH HELPERS ----
function getCurrentStudent() {
  return store.sessionGet('rctc_student');
}

function requireStudentAuth() {
  const matric = getCurrentStudent();
  if (!matric || !STUDENTS[matric]) {
    window.location.href = 'index.html';
    return null;
  }
  return matric;
}

function requireAdminAuth() {
  const admin = store.sessionGet('rctc_admin');
  if (!admin) {
    window.location.href = 'admin.html';
    return false;
  }
  return true;
}

function studentLogout() {
  store.sessionRemove('rctc_student');
  window.location.href = 'index.html';
}

function adminLogout() {
  store.sessionRemove('rctc_admin');
  window.location.reload();
}

// ---- RESULTS HELPERS ----
function getAllResults() {
  return store.get('rctc_results') || [];
}

function saveResult(result) {
  const results = getAllResults();
  results.push(result);
  store.set('rctc_results', results);
}

function hasStudentTakenExam(matric, examId) {
  const results = getAllResults();
  return results.find(r => r.matric === matric && r.examId === examId) || null;
}

function getStudentResults(matric) {
  return getAllResults().filter(r => r.matric === matric);
}

function countCompletedExams(matric) {
  return getStudentResults(matric).length;
}

// ---- EXAM STATE ----
function saveExamProgress(examId, startTime, answers) {
  store.set('rctc_active_exam', { examId, startTime, answers });
}

function getExamProgress() {
  return store.get('rctc_active_exam');
}

function clearExamProgress() {
  store.remove('rctc_active_exam');
}

// ---- GRADE CALCULATOR ----
function getGrade(pct) {
  if (pct >= 70) return { label: 'Pass', cls: 'grade-A' };
  if (pct >= 60) return { label: 'Pass', cls: 'grade-B' };
  if (pct >= 50) return { label: 'Pass', cls: 'grade-C' };
  return { label: 'Fail', cls: 'grade-F' };
}

function getScoreClass(pct) {
  if (pct >= 70) return 'high';
  if (pct >= 50) return 'mid';
  return 'low';
}

// ---- UI HELPERS ----
function showError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

function formatCountdown(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ---- RENDER SHARED HEADER ----
function renderHeader(studentMatric) {
  const name = studentMatric ? STUDENTS[studentMatric] : '';
  const headerEl = document.getElementById('siteHeader');
  if (!headerEl) return;
  headerEl.innerHTML = `
    <div class="header-top">
      <div class="header-brand">
        <div class="header-logos">
          <img src="Media/rcbc logo.png" alt="RCTC Logo" class="header-logo">
          <img src="Media/envoys logo.png" alt="Envoys Logo" class="header-logo">
        </div>
        <div class="header-text">
          <h1>Redeemed Christian Theology College</h1>
          <h2>Envoys Campus — Online Examination Portal</h2>
        </div>
      </div>
      <div class="header-nav">
        ${studentMatric ? `<div class="user-badge">👤 <span>${name}</span> &mdash; ${studentMatric}</div>` : ''}
        ${studentMatric ? `<button onclick="studentLogout()" class="btn btn-sm" style="background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);">Logout</button>` : ''}
      </div>
    </div>`;
}

// ---- CSV EXPORT ----
function downloadCSV(filename, rows, headers) {
  const escape = (val) => `"${String(val ?? '').replace(/"/g, '""')}"`;
  const csvRows = [
    headers.map(escape).join(','),
    ...rows.map(r => headers.map(h => escape(r[h])).join(','))
  ];
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================
// SCHOOL OF DISCIPLESHIP (SOD) — SHARED APPLICATION LOGIC
// ============================================================

// ---- SOD AUTH HELPERS ----
function getCurrentSodStudent() {
  return store.sessionGet('rctc_sod_student');
}

function requireSodStudentAuth() {
  const matric = getCurrentSodStudent();
  if (!matric || !SOD_STUDENTS[matric]) {
    window.location.href = 'sod-login.html';
    return null;
  }
  return matric;
}

function sodStudentLogout() {
  store.sessionRemove('rctc_sod_student');
  window.location.href = 'sod-login.html';
}

// ---- SOD RESULTS HELPERS ----
function getAllSodResults() {
  return store.get('rctc_sod_results') || [];
}

function saveSodResult(result) {
  const results = getAllSodResults();
  results.push(result);
  store.set('rctc_sod_results', results);
}

function hasSodStudentTakenExam(matric, examId) {
  const results = getAllSodResults();
  return results.find(r => r.matric === matric && r.examId === examId) || null;
}

function getSodStudentResults(matric) {
  return getAllSodResults().filter(r => r.matric === matric);
}

function countSodCompletedExams(matric) {
  return getSodStudentResults(matric).length;
}

// ---- SOD EXAM STATE ----
function saveSodExamProgress(examId, startTime, answers) {
  store.set('rctc_sod_active_exam', { examId, startTime, answers });
}

function getSodExamProgress() {
  return store.get('rctc_sod_active_exam');
}

function clearSodExamProgress() {
  store.remove('rctc_sod_active_exam');
}

// ---- RENDER SOD HEADER ----
function renderSodHeader(studentMatric) {
  const name = studentMatric ? SOD_STUDENTS[studentMatric] : '';
  const headerEl = document.getElementById('siteHeader');
  if (!headerEl) return;
  headerEl.innerHTML = `
    <div class="header-top">
      <div class="header-brand">
        <div class="header-logos">
          <img src="Media/rcbc logo.png" alt="RCTC Logo" class="header-logo">
          <img src="Media/envoys logo.png" alt="Envoys Logo" class="header-logo">
        </div>
        <div class="header-text">
          <h1>Redeemed Christian Theology College</h1>
          <h2>Envoys Campus — School of Discipleship Portal</h2>
        </div>
      </div>
      <div class="header-nav">
        ${studentMatric ? `<div class="user-badge">👤 <span>${name}</span> &mdash; ${studentMatric}</div>` : ''}
        ${studentMatric ? `<button onclick="sodStudentLogout()" class="btn btn-sm" style="background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);">Logout</button>` : ''}
      </div>
    </div>`;
}
