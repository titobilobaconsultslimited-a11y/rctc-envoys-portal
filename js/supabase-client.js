// ============================================================
// API CLIENT — RCTC Envoys Exam Portal
//
// All Supabase data operations are proxied through server-side
// Vercel API routes (/api/...) so the service-role key is never
// exposed in the browser.
//
// The anon key is kept here ONLY for client-side Supabase Auth
// (admin sign-in via supabase.auth.signInWithPassword).
// ============================================================

const SUPABASE_URL      = 'https://iwzwpguoorxpntrjayee.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_D4PztKk4NV2VXWKWMecIEg_ojsJ7YD6';

// Auth-only client — do NOT use db.from() for data queries.
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

// ============================================================
// API HELPERS
// ============================================================

/** Generic fetch wrapper — always sends and expects JSON. */
async function _api(path, init = {}) {
  const r = await fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) }
  });
  const json = await r.json().catch(() => ({}));
  if (!r.ok) console.error('[api]', path, r.status, json);
  return { ok: r.ok, status: r.status, data: json };
}

/** Returns the Supabase Auth access token for admin API calls. */
async function _adminBearer() {
  const { data } = await db.auth.getSession();
  return data?.session?.access_token ? `Bearer ${data.session.access_token}` : '';
}

/** Fetch wrapper that automatically injects the admin Auth header. */
async function _apiAdmin(path, init = {}) {
  const bearer = await _adminBearer();
  return _api(path, {
    ...init,
    headers: {
      ...(init.headers || {}),
      ...(bearer ? { Authorization: bearer } : {})
    }
  });
}

// ============================================================
// ROW MAPPERS — Supabase snake_case → app camelCase
// ============================================================
function _mapResult(row) {
  return {
    matric:     row.matric,
    name:       row.name,
    examId:     row.exam_id,
    examCode:   row.exam_code,
    examTitle:  row.exam_title,
    score:      row.score,
    total:      row.total,
    percentage: row.percentage,
    dateTaken:  new Date(row.date_taken).getTime()
  };
}

function _mapTheoryResult(row) {
  return {
    id:         row.id,
    matric:     row.matric,
    name:       row.name,
    examId:     row.exam_id,
    examCode:   row.exam_code,
    examTitle:  row.exam_title,
    answers:    row.answers || [],
    score:      row.score,
    total:      row.total,
    percentage: row.percentage,
    dateTaken:  new Date(row.date_taken).getTime()
  };
}

// ============================================================
// MAIN PORTAL — RESULTS
// ============================================================
async function dbGetAllResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=main');
  if (!ok) { console.error('dbGetAllResults:', data.error); return []; }
  return (data.results || []).map(_mapResult);
}

async function dbGetStudentResults(matric) {
  const { ok, data } = await _api(`/api/results?portal=main&matric=${encodeURIComponent(matric)}`);
  if (!ok) { console.error('dbGetStudentResults:', data.error); return []; }
  return (data.results || []).map(_mapResult);
}

async function dbHasStudentTakenExam(matric, examId) {
  const { ok, data } = await _api(`/api/results?portal=main&matric=${encodeURIComponent(matric)}&examId=${encodeURIComponent(examId)}`);
  if (!ok) { console.error('dbHasStudentTakenExam:', data.error); return null; }
  return data.result ? _mapResult(data.result) : null;
}

async function dbSaveResult(result) {
  const { ok, data } = await _api('/api/results', {
    method: 'POST',
    body: JSON.stringify({ portal: 'main', result })
  });
  if (!ok) console.error('dbSaveResult:', data.error);
}

async function dbDeleteResults(examId, matric) {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=main', {
    method: 'DELETE',
    body: JSON.stringify({ examId, matric: matric || undefined })
  });
  if (!ok) console.error('dbDeleteResults:', data.error);
}

async function dbClearAllResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=main', {
    method: 'DELETE',
    body: JSON.stringify({})
  });
  if (!ok) console.error('dbClearAllResults:', data.error);
}

// ============================================================
// MAIN PORTAL — EXAM LOCKS
// ============================================================
async function dbGetLocks() {
  const { ok, data } = await _api('/api/locks?portal=main');
  if (!ok) { console.error('dbGetLocks:', data.error); return {}; }
  return data.locks || {};
}

async function dbSetLock(examId, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'main', examId, locked })
  });
  if (!ok) console.error('dbSetLock:', data.error);
}

async function dbSetAllLocks(examIds, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'main', examIds, locked })
  });
  if (!ok) console.error('dbSetAllLocks:', data.error);
}

// ============================================================
// SOD PORTAL — RESULTS
// ============================================================
async function dbGetAllSodResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sod');
  if (!ok) { console.error('dbGetAllSodResults:', data.error); return []; }
  return (data.results || []).map(_mapResult);
}

async function dbGetSodStudentResults(matric) {
  const { ok, data } = await _api(`/api/results?portal=sod&matric=${encodeURIComponent(matric)}`);
  if (!ok) { console.error('dbGetSodStudentResults:', data.error); return []; }
  return (data.results || []).map(_mapResult);
}

async function dbHasSodStudentTakenExam(matric, examId) {
  const { ok, data } = await _api(`/api/results?portal=sod&matric=${encodeURIComponent(matric)}&examId=${encodeURIComponent(examId)}`);
  if (!ok) { console.error('dbHasSodStudentTakenExam:', data.error); return null; }
  return data.result ? _mapResult(data.result) : null;
}

async function dbSaveSodResult(result) {
  const { ok, data } = await _api('/api/results', {
    method: 'POST',
    body: JSON.stringify({ portal: 'sod', result })
  });
  if (!ok) console.error('dbSaveSodResult:', data.error);
}

async function dbDeleteSodResults(examId, matric) {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sod', {
    method: 'DELETE',
    body: JSON.stringify({ examId, matric: matric || undefined })
  });
  if (!ok) console.error('dbDeleteSodResults:', data.error);
}

async function dbClearAllSodResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sod', {
    method: 'DELETE',
    body: JSON.stringify({})
  });
  if (!ok) console.error('dbClearAllSodResults:', data.error);
}

// ============================================================
// SOD PORTAL — EXAM LOCKS
// ============================================================
async function dbGetSodLocks() {
  const { ok, data } = await _api('/api/locks?portal=sod');
  if (!ok) { console.error('dbGetSodLocks:', data.error); return {}; }
  return data.locks || {};
}

async function dbSetSodLock(examId, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sod', examId, locked })
  });
  if (!ok) console.error('dbSetSodLock:', data.error);
}

async function dbSetAllSodLocks(examIds, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sod', examIds, locked })
  });
  if (!ok) console.error('dbSetAllSodLocks:', data.error);
}

// ============================================================
// SOD PORTAL — THEORY RESULTS
// ============================================================
async function dbGetAllSodTheoryResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sod-theory');
  if (!ok) { console.error('dbGetAllSodTheoryResults:', data.error); return []; }
  return (data.results || []).map(_mapTheoryResult);
}

async function dbHasSodStudentTakenTheory(matric, examId) {
  const { ok, data } = await _api(`/api/results?portal=sod-theory&matric=${encodeURIComponent(matric)}&examId=${encodeURIComponent(examId)}`);
  if (!ok) { console.error('dbHasSodStudentTakenTheory:', data.error); return null; }
  return data.result ? _mapTheoryResult(data.result) : null;
}

async function dbSaveSodTheoryResult(result) {
  const { ok, data } = await _api('/api/results', {
    method: 'POST',
    body: JSON.stringify({ portal: 'sod-theory', result })
  });
  if (!ok) console.error('dbSaveSodTheoryResult:', data.error);
}

async function dbDeleteSodTheoryResults(examId, matric) {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sod-theory', {
    method: 'DELETE',
    body: JSON.stringify({ examId, matric: matric || undefined })
  });
  if (!ok) console.error('dbDeleteSodTheoryResults:', data.error);
}

async function dbClearAllSodTheoryResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sod-theory', {
    method: 'DELETE',
    body: JSON.stringify({})
  });
  if (!ok) console.error('dbClearAllSodTheoryResults:', data.error);
}

async function dbGetSodStudentTheoryResults(matric) {
  const { ok, data } = await _api(`/api/results?portal=sod-theory&matric=${encodeURIComponent(matric)}`);
  if (!ok) { console.error('dbGetSodStudentTheoryResults:', data.error); return []; }
  return (data.results || []).map(_mapTheoryResult);
}

// ============================================================
// SOD PORTAL — THEORY EXAM LOCKS
// ============================================================
async function dbGetSodTheoryLocks() {
  const { ok, data } = await _api('/api/locks?portal=sod-theory');
  if (!ok) { console.error('dbGetSodTheoryLocks:', data.error); return {}; }
  return data.locks || {};
}

async function dbSetSodTheoryLock(examId, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sod-theory', examId, locked })
  });
  if (!ok) console.error('dbSetSodTheoryLock:', data.error);
}

async function dbSetAllSodTheoryLocks(examIds, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sod-theory', examIds, locked })
  });
  if (!ok) console.error('dbSetAllSodTheoryLocks:', data.error);
}

// ============================================================
// SIT PORTAL — RESULTS (with localStorage backup for resilience)
// ============================================================
async function dbGetAllSitResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sit');
  if (!ok) { console.error('dbGetAllSitResults:', data.error); return []; }
  return (data.results || []).map(_mapResult);
}

function _sitLocalResultsKey(matric) { return 'rctc_sit_local_' + matric; }
function _saveSitLocalResult(result) {
  try {
    const key = _sitLocalResultsKey(result.matric);
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    if (!existing.find(r => r.examId === result.examId)) existing.push(result);
    localStorage.setItem(key, JSON.stringify(existing));
  } catch(e) {}
}
function _getSitLocalResults(matric) {
  try { return JSON.parse(localStorage.getItem(_sitLocalResultsKey(matric)) || '[]'); } catch(e) { return []; }
}

async function dbGetSitStudentResults(matric) {
  const { ok, data } = await _api(`/api/results?portal=sit&matric=${encodeURIComponent(matric)}`);
  const supabaseRows = ok ? (data.results || []).map(_mapResult) : [];
  if (!ok) console.error('dbGetSitStudentResults:', data.error);
  // Merge with localStorage backup — keeps results visible if API is slow/unavailable
  const localRows    = _getSitLocalResults(matric);
  const savedExamIds = new Set(supabaseRows.map(r => r.examId));
  const localOnly    = localRows.filter(r => !savedExamIds.has(r.examId));
  return [...supabaseRows, ...localOnly];
}

async function dbHasSitStudentTakenExam(matric, examId) {
  const { ok, data } = await _api(`/api/results?portal=sit&matric=${encodeURIComponent(matric)}&examId=${encodeURIComponent(examId)}`);
  if (ok && data.result) return _mapResult(data.result);
  if (!ok) console.error('dbHasSitStudentTakenExam:', data.error);
  // Fallback to localStorage backup
  const local = _getSitLocalResults(matric).find(r => r.examId === examId);
  return local || null;
}

async function dbSaveSitResult(result) {
  // Always save locally first so results are never lost if the API is unreachable
  _saveSitLocalResult(result);
  const { ok, data } = await _api('/api/results', {
    method: 'POST',
    body: JSON.stringify({ portal: 'sit', result })
  });
  if (!ok) console.error('dbSaveSitResult:', data.error);
}

async function dbDeleteSitResults(examId, matric) {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sit', {
    method: 'DELETE',
    body: JSON.stringify({ examId, matric: matric || undefined })
  });
  if (!ok) console.error('dbDeleteSitResults:', data.error);
}

async function dbClearAllSitResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sit', {
    method: 'DELETE',
    body: JSON.stringify({})
  });
  if (!ok) console.error('dbClearAllSitResults:', data.error);
}

// ============================================================
// SIT PORTAL — EXAM LOCKS
// ============================================================
async function dbGetSitLocks() {
  const { ok, data } = await _api('/api/locks?portal=sit');
  if (!ok) { console.error('dbGetSitLocks:', data.error); return {}; }
  return data.locks || {};
}

async function dbSetSitLock(examId, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sit', examId, locked })
  });
  if (!ok) console.error('dbSetSitLock:', data.error);
}

async function dbSetAllSitLocks(examIds, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sit', examIds, locked })
  });
  if (!ok) console.error('dbSetAllSitLocks:', data.error);
}

// ============================================================
// SIT PORTAL — THEORY RESULTS
// ============================================================
async function dbGetAllSitTheoryResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sit-theory');
  if (!ok) { console.error('dbGetAllSitTheoryResults:', data.error); return []; }
  return (data.results || []).map(_mapTheoryResult);
}

async function dbGetSitStudentTheoryResults(matric) {
  const { ok, data } = await _api(`/api/results?portal=sit-theory&matric=${encodeURIComponent(matric)}`);
  if (!ok) { console.error('dbGetSitStudentTheoryResults:', data.error); return []; }
  return (data.results || []).map(_mapTheoryResult);
}

async function dbHasSitStudentTakenTheory(matric, examId) {
  const { ok, data } = await _api(`/api/results?portal=sit-theory&matric=${encodeURIComponent(matric)}&examId=${encodeURIComponent(examId)}`);
  if (!ok) { console.error('dbHasSitStudentTakenTheory:', data.error); return null; }
  return data.result ? _mapTheoryResult(data.result) : null;
}

async function dbSaveSitTheoryResult(result) {
  const { ok, data } = await _api('/api/results', {
    method: 'POST',
    body: JSON.stringify({ portal: 'sit-theory', result })
  });
  if (!ok) console.error('dbSaveSitTheoryResult:', data.error);
}

async function dbDeleteSitTheoryResults(examId, matric) {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sit-theory', {
    method: 'DELETE',
    body: JSON.stringify({ examId, matric: matric || undefined })
  });
  if (!ok) console.error('dbDeleteSitTheoryResults:', data.error);
}

async function dbClearAllSitTheoryResults() {
  const { ok, data } = await _apiAdmin('/api/admin/results?portal=sit-theory', {
    method: 'DELETE',
    body: JSON.stringify({})
  });
  if (!ok) console.error('dbClearAllSitTheoryResults:', data.error);
}

// ============================================================
// SIT PORTAL — THEORY EXAM LOCKS
// ============================================================
async function dbGetSitTheoryLocks() {
  const { ok, data } = await _api('/api/locks?portal=sit-theory');
  if (!ok) { console.error('dbGetSitTheoryLocks:', data.error); return {}; }
  return data.locks || {};
}

async function dbSetSitTheoryLock(examId, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sit-theory', examId, locked })
  });
  if (!ok) console.error('dbSetSitTheoryLock:', data.error);
}

async function dbSetAllSitTheoryLocks(examIds, locked) {
  const { ok, data } = await _apiAdmin('/api/admin/locks', {
    method: 'PUT',
    body: JSON.stringify({ portal: 'sit-theory', examIds, locked })
  });
  if (!ok) console.error('dbSetAllSitTheoryLocks:', data.error);
}

// ============================================================
// SIT STEWARD MANAGEMENT
// ============================================================

async function dbGetSitStewards() {
  const { ok, data } = await _apiAdmin('/api/admin/stewards');
  if (!ok) { console.error('dbGetSitStewards:', data.error); return []; }
  return data.stewards || [];
}

async function dbAddSitSteward(steward) {
  const { ok, data } = await _apiAdmin('/api/admin/stewards', {
    method: 'POST',
    body: JSON.stringify({ steward })
  });
  if (!ok) return { error: data.error || 'Failed to add steward' };
  return { data: data.data };
}

async function dbCheckStewardExists(matricNo) {
  const { ok, data } = await _api('/api/auth/sit-login', {
    method: 'POST',
    body: JSON.stringify({ matric: matricNo })
  });
  if (!ok) return false;
  return !!data.found;
}

async function dbUpdateStewardAccess(matricNo, accessGranted) {
  const { ok, data } = await _apiAdmin(`/api/admin/stewards?matric=${encodeURIComponent(matricNo)}`, {
    method: 'PATCH',
    body: JSON.stringify({ accessGranted })
  });
  if (!ok) { console.error('dbUpdateStewardAccess:', data.error); return false; }
  return true;
}

async function dbCheckStewardAccess(matricNo) {
  const { ok, data } = await _api('/api/auth/sit-login', {
    method: 'POST',
    body: JSON.stringify({ matric: matricNo })
  });
  if (!ok || !data.found) return null;
  // Return same shape as original Supabase query for compatibility with sit-login.html
  return {
    access_granted: data.accessGranted,
    full_name:      data.name,
    walk_in:        data.walkIn,
    added_by:       data.addedBy
  };
}

async function dbSitWalkInLogin(fullName, matricNo) {
  const { ok, data } = await _api('/api/auth/sit-walkin', {
    method: 'POST',
    body: JSON.stringify({ fullName, matric: matricNo })
  });
  if (!ok) return { error: data.error || 'Walk-in registration failed' };
  return { data: data.data };
}

// ============================================================
// SIT EXAM QUESTION MANAGER
// ============================================================
async function dbGetSitExamSettings(localExamId) {
  const { ok, data } = await _api(`/api/exam-settings?examId=${encodeURIComponent(localExamId)}`);
  if (!ok) { console.error('dbGetSitExamSettings:', data.error); return null; }
  return data.settings;
}

async function dbUpdateSitExamSettings(localExamId, settings) {
  const { ok, data } = await _apiAdmin('/api/admin/exam-settings', {
    method: 'PUT',
    body: JSON.stringify({ settings: { localExamId, ...settings } })
  });
  if (!ok) { console.error('dbUpdateSitExamSettings:', data.error); return false; }
  return true;
}

async function dbGetSitQuestionsForExam(localExamId) {
  const { ok, data } = await _api(`/api/questions?examId=${encodeURIComponent(localExamId)}`);
  if (!ok) { console.error('dbGetSitQuestionsForExam:', data.error); return []; }
  return data.questions || [];
}

async function dbAddSitQuestion(question) {
  const { ok, data } = await _apiAdmin('/api/admin/questions', {
    method: 'POST',
    body: JSON.stringify({ question })
  });
  if (!ok) return { error: data.error || 'Failed to add question' };
  return { data: data.data };
}

async function dbUpdateSitQuestion(id, question) {
  const { ok, data } = await _apiAdmin(`/api/admin/questions?id=${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: JSON.stringify({ question })
  });
  if (!ok) { console.error('dbUpdateSitQuestion:', data.error); return false; }
  return true;
}

async function dbDeleteSitQuestion(id) {
  const { ok, data } = await _apiAdmin(`/api/admin/questions?id=${encodeURIComponent(id)}`, {
    method: 'DELETE'
  });
  if (!ok) { console.error('dbDeleteSitQuestion:', data.error); return false; }
  return true;
}

async function dbMoveSitQuestion(id, direction, localExamId) {
  const { ok, data } = await _apiAdmin('/api/admin/questions', {
    method: 'PATCH',
    body: JSON.stringify({ id, direction, examId: localExamId })
  });
  if (!ok) console.error('dbMoveSitQuestion:', data.error);
}
