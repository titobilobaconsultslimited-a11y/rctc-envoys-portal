-- ============================================================
-- RCTC Envoys Portal — School Fees Tables
-- Run this script in the Supabase SQL Editor.
-- ============================================================

-- 1. Programs: defines each course/program with its total fee
--    and payment account details shown to students.
CREATE TABLE IF NOT EXISTS programs (
  id              BIGSERIAL        PRIMARY KEY,
  name            TEXT             NOT NULL,
  description     TEXT,
  total_fee       NUMERIC(12, 2)   NOT NULL DEFAULT 0,
  bank_name       TEXT,
  account_name    TEXT,
  account_number  TEXT,
  bank_sort_code  TEXT,
  created_at      TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

-- 2. Student Enrollments: links each student (matric) to one program.
--    Each student can only be enrolled in one program at a time (UNIQUE on matric).
CREATE TABLE IF NOT EXISTS student_enrollments (
  id          BIGSERIAL    PRIMARY KEY,
  matric      TEXT         NOT NULL UNIQUE,
  program_id  BIGINT       REFERENCES programs(id) ON DELETE SET NULL,
  enrolled_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- 3. Fee Payments: records all payments.
--    source  = 'admin'   → admin manually entered, auto-confirmed
--    source  = 'student' → student self-reported, pending admin confirmation
--    status  = 'confirmed' | 'pending' | 'rejected'
CREATE TABLE IF NOT EXISTS fee_payments (
  id            BIGSERIAL      PRIMARY KEY,
  matric        TEXT           NOT NULL,
  amount        NUMERIC(12, 2) NOT NULL,
  payment_date  DATE           NOT NULL DEFAULT CURRENT_DATE,
  note          TEXT,
  source        TEXT           NOT NULL DEFAULT 'admin',
  status        TEXT           NOT NULL DEFAULT 'confirmed',
  confirmed_by  TEXT,
  confirmed_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ    NOT NULL DEFAULT NOW()
);

-- Indexes for fast per-student lookups
CREATE INDEX IF NOT EXISTS idx_enrollments_matric   ON student_enrollments (matric);
CREATE INDEX IF NOT EXISTS idx_fee_payments_matric  ON fee_payments (matric);
CREATE INDEX IF NOT EXISTS idx_fee_payments_status  ON fee_payments (status);

-- Enable Row Level Security.
-- The backend API uses the service-role key which bypasses RLS automatically,
-- so no extra policies are required for API access.
ALTER TABLE programs            ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE fee_payments        ENABLE ROW LEVEL SECURITY;
