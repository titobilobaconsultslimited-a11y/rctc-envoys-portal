// ============================================================
// SUPABASE CONFIG
// After creating your Supabase project, replace the two values
// below with your project credentials.
// Found at: Supabase Dashboard → Project Settings → API
// ============================================================
const SUPABASE_URL      = 'https://iwzwpguoorxpntrjayee.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_D4PztKk4NV2VXWKWMecIEg_ojsJ7YD6';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// ROW MAPPER — converts Supabase snake_case → app camelCase
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

// ============================================================
// MAIN PORTAL — RESULTS
// ============================================================
async function dbGetAllResults() {
  const { data, error } = await db
    .from('exam_results')
    .select('*')
    .order('date_taken', { ascending: false });
  if (error) { console.error('dbGetAllResults:', error); return []; }
  return data.map(_mapResult);
}

async function dbGetStudentResults(matric) {
  const { data, error } = await db
    .from('exam_results')
    .select('*')
    .eq('matric', matric);
  if (error) { console.error('dbGetStudentResults:', error); return []; }
  return data.map(_mapResult);
}

async function dbHasStudentTakenExam(matric, examId) {
  const { data, error } = await db
    .from('exam_results')
    .select('*')
    .eq('matric', matric)
    .eq('exam_id', examId)
    .maybeSingle();
  if (error) { console.error('dbHasStudentTakenExam:', error); return null; }
  return data ? _mapResult(data) : null;
}

async function dbSaveResult(result) {
  const { error } = await db
    .from('exam_results')
    .insert({
      matric:     result.matric,
      name:       result.name,
      exam_id:    result.examId,
      exam_code:  result.examCode,
      exam_title: result.examTitle,
      score:      result.score,
      total:      result.total,
      percentage: result.percentage,
      date_taken: new Date(result.dateTaken).toISOString()
    });
  if (error) console.error('dbSaveResult:', error);
}

async function dbDeleteResults(examId, matric) {
  // matric = null → delete all results for that exam
  let query = db.from('exam_results').delete().eq('exam_id', examId);
  if (matric) query = query.eq('matric', matric);
  const { error } = await query;
  if (error) console.error('dbDeleteResults:', error);
}

async function dbClearAllResults() {
  const { error } = await db.from('exam_results').delete().neq('id', 0);
  if (error) console.error('dbClearAllResults:', error);
}

// ============================================================
// MAIN PORTAL — EXAM LOCKS
// ============================================================
async function dbGetLocks() {
  const { data, error } = await db
    .from('exam_locks')
    .select('*')
    .eq('portal', 'main');
  if (error) { console.error('dbGetLocks:', error); return {}; }
  const locks = {};
  data.forEach(row => { locks[row.exam_id] = row.locked; });
  return locks;
}

async function dbSetLock(examId, locked) {
  const { error } = await db
    .from('exam_locks')
    .upsert({ exam_id: examId, locked, portal: 'main' }, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetLock:', error);
}

async function dbSetAllLocks(examIds, locked) {
  const rows = examIds.map(id => ({ exam_id: id, locked, portal: 'main' }));
  const { error } = await db
    .from('exam_locks')
    .upsert(rows, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetAllLocks:', error);
}

// ============================================================
// SOD PORTAL — RESULTS
// ============================================================
async function dbGetAllSodResults() {
  const { data, error } = await db
    .from('sod_exam_results')
    .select('*')
    .order('date_taken', { ascending: false });
  if (error) { console.error('dbGetAllSodResults:', error); return []; }
  return data.map(_mapResult);
}

async function dbGetSodStudentResults(matric) {
  const { data, error } = await db
    .from('sod_exam_results')
    .select('*')
    .eq('matric', matric);
  if (error) { console.error('dbGetSodStudentResults:', error); return []; }
  return data.map(_mapResult);
}

async function dbHasSodStudentTakenExam(matric, examId) {
  const { data, error } = await db
    .from('sod_exam_results')
    .select('*')
    .eq('matric', matric)
    .eq('exam_id', examId)
    .maybeSingle();
  if (error) { console.error('dbHasSodStudentTakenExam:', error); return null; }
  return data ? _mapResult(data) : null;
}

async function dbSaveSodResult(result) {
  const { error } = await db
    .from('sod_exam_results')
    .insert({
      matric:     result.matric,
      name:       result.name,
      exam_id:    result.examId,
      exam_code:  result.examCode,
      exam_title: result.examTitle,
      score:      result.score,
      total:      result.total,
      percentage: result.percentage,
      date_taken: new Date(result.dateTaken).toISOString()
    });
  if (error) console.error('dbSaveSodResult:', error);
}

async function dbDeleteSodResults(examId, matric) {
  let query = db.from('sod_exam_results').delete().eq('exam_id', examId);
  if (matric) query = query.eq('matric', matric);
  const { error } = await query;
  if (error) console.error('dbDeleteSodResults:', error);
}

async function dbClearAllSodResults() {
  const { error } = await db.from('sod_exam_results').delete().neq('id', 0);
  if (error) console.error('dbClearAllSodResults:', error);
}

// ============================================================
// SOD PORTAL — EXAM LOCKS
// ============================================================
async function dbGetSodLocks() {
  const { data, error } = await db
    .from('exam_locks')
    .select('*')
    .eq('portal', 'sod');
  if (error) { console.error('dbGetSodLocks:', error); return {}; }
  const locks = {};
  data.forEach(row => { locks[row.exam_id] = row.locked; });
  return locks;
}

async function dbSetSodLock(examId, locked) {
  const { error } = await db
    .from('exam_locks')
    .upsert({ exam_id: examId, locked, portal: 'sod' }, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetSodLock:', error);
}

async function dbSetAllSodLocks(examIds, locked) {
  const rows = examIds.map(id => ({ exam_id: id, locked, portal: 'sod' }));
  const { error } = await db
    .from('exam_locks')
    .upsert(rows, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetAllSodLocks:', error);
}

// ============================================================
// SOD PORTAL — THEORY RESULTS
// ============================================================
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

async function dbGetAllSodTheoryResults() {
  const { data, error } = await db
    .from('sod_theory_results')
    .select('*')
    .order('date_taken', { ascending: false });
  if (error) { console.error('dbGetAllSodTheoryResults:', error); return []; }
  return (data || []).map(_mapTheoryResult);
}

async function dbHasSodStudentTakenTheory(matric, examId) {
  const { data, error } = await db
    .from('sod_theory_results')
    .select('*')
    .eq('matric', matric)
    .eq('exam_id', examId)
    .maybeSingle();
  if (error) { console.error('dbHasSodStudentTakenTheory:', error); return null; }
  return data ? _mapTheoryResult(data) : null;
}

async function dbSaveSodTheoryResult(result) {
  const { error } = await db
    .from('sod_theory_results')
    .insert({
      matric:     result.matric,
      name:       result.name,
      exam_id:    result.examId,
      exam_code:  result.examCode,
      exam_title: result.examTitle,
      answers:    result.answers,
      score:      result.score,
      total:      result.total,
      percentage: result.percentage,
      date_taken: new Date(result.dateTaken).toISOString()
    });
  if (error) console.error('dbSaveSodTheoryResult:', error);
}

async function dbDeleteSodTheoryResults(examId, matric) {
  let query = db.from('sod_theory_results').delete().eq('exam_id', examId);
  if (matric) query = query.eq('matric', matric);
  const { error } = await query;
  if (error) console.error('dbDeleteSodTheoryResults:', error);
}

async function dbClearAllSodTheoryResults() {
  const { error } = await db.from('sod_theory_results').delete().neq('id', 0);
  if (error) console.error('dbClearAllSodTheoryResults:', error);
}

async function dbGetSodStudentTheoryResults(matric) {
  const { data, error } = await db
    .from('sod_theory_results')
    .select('*')
    .eq('matric', matric);
  if (error) { console.error('dbGetSodStudentTheoryResults:', error); return []; }
  return (data || []).map(_mapTheoryResult);
}

// ============================================================
// SOD PORTAL — THEORY EXAM LOCKS
// ============================================================
async function dbGetSodTheoryLocks() {
  const { data, error } = await db
    .from('exam_locks')
    .select('*')
    .eq('portal', 'sod-theory');
  if (error) { console.error('dbGetSodTheoryLocks:', error); return {}; }
  const locks = {};
  (data || []).forEach(row => { locks[row.exam_id] = row.locked; });
  return locks;
}

async function dbSetSodTheoryLock(examId, locked) {
  const { error } = await db
    .from('exam_locks')
    .upsert({ exam_id: examId, locked, portal: 'sod-theory' }, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetSodTheoryLock:', error);
}

async function dbSetAllSodTheoryLocks(examIds, locked) {
  const rows = examIds.map(id => ({ exam_id: id, locked, portal: 'sod-theory' }));
  const { error } = await db
    .from('exam_locks')
    .upsert(rows, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetAllSodTheoryLocks:', error);
}
