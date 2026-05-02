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

// ============================================================
// SIT PORTAL — RESULTS
// ============================================================
async function dbGetAllSitResults() {
  const { data, error } = await db
    .from('sit_exam_results')
    .select('*')
    .order('date_taken', { ascending: false });
  if (error) { console.error('dbGetAllSitResults:', error); return []; }
  return (data || []).map(_mapResult);
}

async function dbGetSitStudentResults(matric) {
  const { data, error } = await db
    .from('sit_exam_results')
    .select('*')
    .eq('matric', matric);
  if (error) { console.error('dbGetSitStudentResults:', error); return []; }
  return (data || []).map(_mapResult);
}

async function dbHasSitStudentTakenExam(matric, examId) {
  const { data, error } = await db
    .from('sit_exam_results')
    .select('*')
    .eq('matric', matric)
    .eq('exam_id', examId)
    .maybeSingle();
  if (error) { console.error('dbHasSitStudentTakenExam:', error); return null; }
  return data ? _mapResult(data) : null;
}

async function dbSaveSitResult(result) {
  const { error } = await db
    .from('sit_exam_results')
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
  if (error) console.error('dbSaveSitResult:', error);
}

async function dbDeleteSitResults(examId, matric) {
  let query = db.from('sit_exam_results').delete().eq('exam_id', examId);
  if (matric) query = query.eq('matric', matric);
  const { error } = await query;
  if (error) console.error('dbDeleteSitResults:', error);
}

async function dbClearAllSitResults() {
  const { error } = await db.from('sit_exam_results').delete().neq('id', 0);
  if (error) console.error('dbClearAllSitResults:', error);
}

// ============================================================
// SIT PORTAL — EXAM LOCKS
// ============================================================
async function dbGetSitLocks() {
  const { data, error } = await db
    .from('exam_locks')
    .select('*')
    .eq('portal', 'sit');
  if (error) { console.error('dbGetSitLocks:', error); return {}; }
  const locks = {};
  (data || []).forEach(row => { locks[row.exam_id] = row.locked; });
  return locks;
}

async function dbSetSitLock(examId, locked) {
  const { error } = await db
    .from('exam_locks')
    .upsert({ exam_id: examId, locked, portal: 'sit' }, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetSitLock:', error);
}

async function dbSetAllSitLocks(examIds, locked) {
  const rows = examIds.map(id => ({ exam_id: id, locked, portal: 'sit' }));
  const { error } = await db
    .from('exam_locks')
    .upsert(rows, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetAllSitLocks:', error);
}

// ============================================================
// SIT PORTAL — THEORY RESULTS
// ============================================================
async function dbGetAllSitTheoryResults() {
  const { data, error } = await db
    .from('sit_theory_results')
    .select('*')
    .order('date_taken', { ascending: false });
  if (error) { console.error('dbGetAllSitTheoryResults:', error); return []; }
  return (data || []).map(_mapTheoryResult);
}

async function dbGetSitStudentTheoryResults(matric) {
  const { data, error } = await db
    .from('sit_theory_results')
    .select('*')
    .eq('matric', matric);
  if (error) { console.error('dbGetSitStudentTheoryResults:', error); return []; }
  return (data || []).map(_mapTheoryResult);
}

async function dbHasSitStudentTakenTheory(matric, examId) {
  const { data, error } = await db
    .from('sit_theory_results')
    .select('*')
    .eq('matric', matric)
    .eq('exam_id', examId)
    .maybeSingle();
  if (error) { console.error('dbHasSitStudentTakenTheory:', error); return null; }
  return data ? _mapTheoryResult(data) : null;
}

async function dbSaveSitTheoryResult(result) {
  const { error } = await db
    .from('sit_theory_results')
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
  if (error) console.error('dbSaveSitTheoryResult:', error);
}

async function dbDeleteSitTheoryResults(examId, matric) {
  let query = db.from('sit_theory_results').delete().eq('exam_id', examId);
  if (matric) query = query.eq('matric', matric);
  const { error } = await query;
  if (error) console.error('dbDeleteSitTheoryResults:', error);
}

async function dbClearAllSitTheoryResults() {
  const { error } = await db.from('sit_theory_results').delete().neq('id', 0);
  if (error) console.error('dbClearAllSitTheoryResults:', error);
}

// ============================================================
// SIT PORTAL — THEORY EXAM LOCKS
// ============================================================
async function dbGetSitTheoryLocks() {
  const { data, error } = await db
    .from('exam_locks')
    .select('*')
    .eq('portal', 'sit-theory');
  if (error) { console.error('dbGetSitTheoryLocks:', error); return {}; }
  const locks = {};
  (data || []).forEach(row => { locks[row.exam_id] = row.locked; });
  return locks;
}

async function dbSetSitTheoryLock(examId, locked) {
  const { error } = await db
    .from('exam_locks')
    .upsert({ exam_id: examId, locked, portal: 'sit-theory' }, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetSitTheoryLock:', error);
}

async function dbSetAllSitTheoryLocks(examIds, locked) {
  const rows = examIds.map(id => ({ exam_id: id, locked, portal: 'sit-theory' }));
  const { error } = await db
    .from('exam_locks')
    .upsert(rows, { onConflict: 'exam_id,portal' });
  if (error) console.error('dbSetAllSitTheoryLocks:', error);
}

// ============================================================
// SIT STEWARD MANAGEMENT
// ============================================================

async function dbGetSitStewards() {
  const { data, error } = await db
    .from('stewards')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('dbGetSitStewards:', error); return []; }
  return data || [];
}

async function dbAddSitSteward(steward) {
  const { data, error } = await db
    .from('stewards')
    .insert({
      matric_no:      steward.matric_no,
      full_name:      steward.full_name,
      walk_in:        steward.walk_in || false,
      access_granted: steward.access_granted !== undefined ? steward.access_granted : true,
      added_by:       steward.added_by || 'admin-manual',
      created_at:     new Date().toISOString()
    })
    .select()
    .single();
  if (error) return { error };
  return { data };
}

async function dbCheckStewardExists(matricNo) {
  const { data, error } = await db
    .from('stewards')
    .select('matric_no')
    .eq('matric_no', matricNo)
    .maybeSingle();
  if (error) return false;
  return !!data;
}

async function dbUpdateStewardAccess(matricNo, accessGranted) {
  const { error } = await db
    .from('stewards')
    .update({ access_granted: accessGranted })
    .eq('matric_no', matricNo);
  if (error) { console.error('dbUpdateStewardAccess:', error); return false; }
  return true;
}

async function dbCheckStewardAccess(matricNo) {
  const { data, error } = await db
    .from('stewards')
    .select('access_granted, full_name, walk_in, added_by')
    .eq('matric_no', matricNo)
    .maybeSingle();
  if (error) return null;
  return data;
}

async function dbSitWalkInLogin(fullName, matricNo) {
  const { data, error } = await db
    .from('stewards')
    .insert({
      matric_no:      matricNo,
      full_name:      fullName,
      walk_in:        true,
      access_granted: true,
      added_by:       'walk-in',
      created_at:     new Date().toISOString()
    })
    .select()
    .single();
  if (error) return { error };
  return { data };
}

// ============================================================
// SIT EXAM QUESTION MANAGER
// ============================================================

async function dbGetSitExamSettings(localExamId) {
  const { data, error } = await db
    .from('sit_exam_settings')
    .select('*')
    .eq('local_exam_id', localExamId)
    .maybeSingle();
  if (error) { console.error('dbGetSitExamSettings:', error); return null; }
  return data;
}

async function dbUpdateSitExamSettings(localExamId, settings) {
  const row = {
    local_exam_id:     localExamId,
    time_limit:        settings.timeLimit,
    pass_mark:         settings.passMark,
    instructions:      settings.instructions,
    shuffle_questions: settings.shuffleQuestions,
    shuffle_options:   settings.shuffleOptions,
    is_published:      settings.isPublished
  };
  const { error } = await db
    .from('sit_exam_settings')
    .upsert(row, { onConflict: 'local_exam_id' });
  if (error) { console.error('dbUpdateSitExamSettings:', error); return false; }
  return true;
}

async function dbGetSitQuestionsForExam(localExamId) {
  const { data, error } = await db
    .from('sit_questions')
    .select('*')
    .eq('local_exam_id', localExamId)
    .order('question_number', { ascending: true });
  if (error) { console.error('dbGetSitQuestionsForExam:', error); return []; }
  return data || [];
}

async function dbAddSitQuestion(question) {
  const { data, error } = await db
    .from('sit_questions')
    .insert({
      local_exam_id:   question.examId,
      question_number: question.questionNumber,
      question_text:   question.questionText,
      option_a:        question.optionA,
      option_b:        question.optionB,
      option_c:        question.optionC,
      option_d:        question.optionD,
      correct_answer:  question.correctAnswer,
      marks:           question.marks || 1
    })
    .select()
    .single();
  if (error) return { error };
  return { data };
}

async function dbUpdateSitQuestion(id, question) {
  const { error } = await db
    .from('sit_questions')
    .update({
      question_text:  question.questionText,
      option_a:       question.optionA,
      option_b:       question.optionB,
      option_c:       question.optionC,
      option_d:       question.optionD,
      correct_answer: question.correctAnswer,
      marks:          question.marks || 1
    })
    .eq('id', id);
  if (error) { console.error('dbUpdateSitQuestion:', error); return false; }
  return true;
}

async function dbDeleteSitQuestion(id) {
  const { error } = await db.from('sit_questions').delete().eq('id', id);
  if (error) { console.error('dbDeleteSitQuestion:', error); return false; }
  return true;
}

async function dbMoveSitQuestion(id, direction, localExamId) {
  const questions = await dbGetSitQuestionsForExam(localExamId);
  const idx = questions.findIndex(q => q.id === id);
  if (idx === -1) return;
  const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= questions.length) return;
  const a = questions[idx], b = questions[swapIdx];
  await Promise.all([
    db.from('sit_questions').update({ question_number: b.question_number }).eq('id', a.id),
    db.from('sit_questions').update({ question_number: a.question_number }).eq('id', b.id)
  ]);
}
