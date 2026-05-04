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
          <img src="Media/YP20.jpg" alt="YP20 Logo" class="header-logo">
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
          <img src="Media/sod logo.webp" alt="SOD Logo" class="header-logo">
          <img src="Media/envoys logo.png" alt="Envoys Logo" class="header-logo">
          <img src="Media/YP20.jpg" alt="YP20 Logo" class="header-logo">
        </div>
        <div class="header-text">
          <h1>School of Discipleship</h1>
          <h2>Envoys Campus — School of Discipleship Portal</h2>
        </div>
      </div>
      <div class="header-nav">
        ${studentMatric ? `<div class="user-badge">👤 <span>${name}</span> &mdash; ${studentMatric}</div>` : ''}
        ${studentMatric ? `<button onclick="sodStudentLogout()" class="btn btn-sm" style="background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);">Logout</button>` : ''}
      </div>
    </div>`;
}

// ============================================================
// STEWARDS IN TRAINING (SIT) — SHARED APPLICATION LOGIC
// ============================================================

// ---- SIT AUTH HELPERS ----
const SIT_AUTH_KEY   = 'rctc_sit_auth';
const SIT_AUTH_TTL   = 12 * 60 * 60 * 1000; // 12 hours

function setSitStudentAuth(matric, name) {
  const payload = { matric, name: name || '', expiry: Date.now() + SIT_AUTH_TTL };
  store.set(SIT_AUTH_KEY, payload);
  store.sessionSet('rctc_sit_student', matric);
  store.sessionSet('rctc_sit_student_name', name || '');
}

function getCurrentSitStudent() {
  // Fast path — sessionStorage (same tab, not refreshed)
  const sess = store.sessionGet('rctc_sit_student');
  if (sess) return sess;
  // Fallback — localStorage with expiry (survives refresh / tab close)
  const auth = store.get(SIT_AUTH_KEY);
  if (auth && auth.matric && auth.expiry > Date.now()) {
    // Restore sessionStorage so subsequent calls are fast
    store.sessionSet('rctc_sit_student', auth.matric);
    store.sessionSet('rctc_sit_student_name', auth.name || '');
    return auth.matric;
  }
  return null;
}

function requireSitStudentAuth() {
  const matric = getCurrentSitStudent();
  if (!matric) {
    window.location.href = 'sit-login.html';
    return null;
  }
  return matric;
}

function sitStudentLogout() {
  store.sessionRemove('rctc_sit_student');
  store.sessionRemove('rctc_sit_student_name');
  store.remove(SIT_AUTH_KEY);
  clearSitExamProgress();
  window.location.href = 'sit-login.html';
}

// ---- SIT EXAM STATE ----
function saveSitExamProgress(examId, startTime, answers) {
  store.set('rctc_sit_active_exam', { examId, startTime, answers });
}

function getSitExamProgress() {
  return store.get('rctc_sit_active_exam');
}

function clearSitExamProgress() {
  store.remove('rctc_sit_active_exam');
}

// ---- RENDER SIT HEADER ----
function renderSitHeader(studentMatric) {
  const _auth = store.get(SIT_AUTH_KEY);
  const name = studentMatric ? (SIT_STUDENTS[studentMatric] || store.sessionGet('rctc_sit_student_name') || (_auth && _auth.name) || studentMatric) : '';
  const headerEl = document.getElementById('siteHeader');
  if (!headerEl) return;
  headerEl.innerHTML = `
    <div class="header-top">
      <div class="header-brand">
        <div class="header-logos">
          <img src="Media/envoys logo.png" alt="Envoys Logo" class="header-logo">
          <img src="Media/YP20.jpg" alt="YP20 Logo" class="header-logo">
        </div>
        <div class="header-text">
          <h1>Envoys Stewards Training</h1>
          <h2>Envoys Campus — EST Examination Portal</h2>
        </div>
      </div>
      <div class="header-nav">
        ${studentMatric ? `<div class="user-badge">👤 <span>${name}</span> &mdash; ${studentMatric}</div>` : ''}
        ${studentMatric ? `<button onclick="sitStudentLogout()" class="btn btn-sm" style="background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);">Logout</button>` : ''}
      </div>
    </div>`;
}

// ============================================================
// SIT CERTIFICATE GENERATOR
// Draws a certificate of completion onto an HTML5 Canvas and
// triggers a PNG download for the student.
// ============================================================
function generateSitCertificate({ studentName, matric, examCode, examTitle, score, total, pct, grade, dateTaken }) {
  const W = 1200, H = 880;

  // ---- Load both logos, then draw once both are ready ----
  const logo1 = new Image();
  const logo2 = new Image();
  logo1.src = 'Media/envoys logo.png';
  logo2.src = 'Media/YP20.jpg';

  let loaded = 0;
  const onLoad = () => {
    loaded++;
    if (loaded < 2) return;
    _drawAndDownload();
  };
  logo1.onload = onLoad;
  logo2.onload = onLoad;
  // If either logo fails to load, still draw without it
  logo1.onerror = onLoad;
  logo2.onerror = onLoad;

  function _drawAndDownload() {
    const canvas  = document.createElement('canvas');
    canvas.width  = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // ---- Cream background ----
    ctx.fillStyle = '#fdfaf4';
    ctx.fillRect(0, 0, W, H);

    // ---- Outer navy border ----
    ctx.strokeStyle = '#0d2a5e';
    ctx.lineWidth   = 14;
    ctx.strokeRect(22, 22, W - 44, H - 44);

    // ---- Inner gold border ----
    ctx.strokeStyle = '#b8922a';
    ctx.lineWidth   = 4;
    ctx.strokeRect(40, 40, W - 80, H - 80);

    // ---- Gold corner accents ----
    const corners = [[58, 58], [W - 58, 58], [58, H - 58], [W - 58, H - 58]];
    ctx.fillStyle = '#b8922a';
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    });

    // ---- Logos (left and right, flanking the header text) ----
    const logoH  = 72;
    const logoW  = logoH;
    const logoY  = 58;
    const logo1X = 220;              // near where "Envoys Stewards Training" begins
    const logo2X = W - 220 - logoW; // near where "Campus" ends

    // Draw with rounded clip for each logo
    [{ img: logo1, x: logo1X }, { img: logo2, x: logo2X }].forEach(({ img, x }) => {
      if (!img.naturalWidth) return; // failed to load
      ctx.save();
      ctx.beginPath();
      ctx.arc(x + logoW / 2, logoY + logoH / 2, logoH / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, x, logoY, logoW, logoH);
      ctx.restore();
    });

    // ---- Organisation name ----
    const headerTopY = logoY + logoH + 22;
    ctx.fillStyle    = '#0d2a5e';
    ctx.font         = 'bold 23px Arial, sans-serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('Envoys Stewards Training  |  Envoys HQ Campus', W / 2, headerTopY);

    // ---- Programme subtitle ----
    ctx.fillStyle = '#b8922a';
    ctx.font      = '18px Arial, sans-serif';
    ctx.fillText('Stewards Training Programme', W / 2, headerTopY + 28);

    // ---- Gold divider ----
    ctx.strokeStyle = '#b8922a';
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.moveTo(160, headerTopY + 48); ctx.lineTo(W - 160, headerTopY + 48);
    ctx.stroke();

    // ---- Certificate title ----
    const titleY = headerTopY + 118;
    ctx.fillStyle = '#0d2a5e';
    ctx.font      = 'bold 58px Georgia, serif';
    ctx.fillText('Certificate of Completion', W / 2, titleY);

    // ---- "This is to certify that" ----
    ctx.fillStyle = '#555';
    ctx.font      = 'italic 22px Georgia, serif';
    ctx.fillText('This is to certify that', W / 2, titleY + 58);

    // ---- Student name ----
    ctx.font      = studentName.length > 32 ? 'bold 38px Georgia, serif' : 'bold 48px Georgia, serif';
    ctx.fillStyle = '#0d2a5e';
    ctx.fillText(studentName, W / 2, titleY + 120);

    // ---- Underline name ----
    const nameWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = '#b8922a';
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - nameWidth / 2, titleY + 132);
    ctx.lineTo(W / 2 + nameWidth / 2, titleY + 132);
    ctx.stroke();

    // ---- "has successfully completed" ----
    ctx.fillStyle = '#555';
    ctx.font      = 'italic 22px Georgia, serif';
    ctx.fillText('has successfully completed the examination', W / 2, titleY + 177);

    // ---- Exam code & title ----
    const fullTitle = `${examCode}  —  ${examTitle}`;
    ctx.font      = fullTitle.length > 52 ? 'bold 26px Georgia, serif' : 'bold 32px Georgia, serif';
    ctx.fillStyle = '#0d2a5e';
    ctx.fillText(fullTitle, W / 2, titleY + 228);

    // ---- Score & grade ----
    ctx.fillStyle = '#333';
    ctx.font      = '22px Arial, sans-serif';
    ctx.fillText(`Score: ${score} / ${total}  (${pct}%)     Grade: ${grade}`, W / 2, titleY + 282);

    // ---- Date ----
    const dateStr = new Date(dateTaken).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.fillStyle = '#444';
    ctx.font      = '20px Arial, sans-serif';
    ctx.fillText(`Date of Completion: ${dateStr}`, W / 2, titleY + 326);

    // ---- Bottom divider ----
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(160, titleY + 370); ctx.lineTo(W - 160, titleY + 370);
    ctx.stroke();

    // ---- Certificate ID & student ID ----
    const year   = new Date(dateTaken).getFullYear();
    const certId = `EST-SIT-${matric.replace(/[\/\s]/g, '')}-${examCode.replace(/\s/g, '')}-${year}`;
    ctx.fillStyle = '#888';
    ctx.font      = '14px Arial, sans-serif';
    ctx.fillText(`Certificate ID: ${certId}`, W / 2, titleY + 400);
    ctx.fillText(`Student ID: ${matric}`, W / 2, titleY + 420);

    // ---- Signature block (centre-bottom) ----
    const sigX = W / 2;
    const sigY = titleY + 455;
    // Signature line
    ctx.strokeStyle = '#0d2a5e';
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.moveTo(sigX - 130, sigY); ctx.lineTo(sigX + 130, sigY);
    ctx.stroke();
    // "Signed" label in italic
    ctx.fillStyle = '#555';
    ctx.font      = 'italic 15px Georgia, serif';
    ctx.fillText('Signed', sigX, sigY + 18);
    // Name in bold navy
    ctx.fillStyle = '#0d2a5e';
    ctx.font      = 'bold 17px Georgia, serif';
    ctx.fillText('Pst Simi Olaiya', sigX, sigY + 38);
    // Title in smaller grey
    ctx.fillStyle = '#666';
    ctx.font      = '14px Arial, sans-serif';
    ctx.fillText('Stewards Pastor', sigX, sigY + 56);

    // ---- Footer ----
    ctx.fillStyle = '#0d2a5e';
    ctx.font      = 'bold 13px Arial, sans-serif';
    ctx.fillText('Envoys Stewards Training  |  Envoys HQ Campus  |  Stewards Training Programme', W / 2, titleY + 530);

    // ---- Trigger PNG download ----
    const link    = document.createElement('a');
    link.download = `EST-SIT-Certificate-${examCode.replace(/\s/g, '-')}-${studentName.replace(/\s+/g, '-')}.png`;
    link.href     = canvas.toDataURL('image/png');
    link.click();
  } // end _drawAndDownload
}
