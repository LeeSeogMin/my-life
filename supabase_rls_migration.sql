-- ============================================================
-- RLS (Row Level Security) Migration
-- Fixes Supabase Security Advisor warning for project: my-life
-- ============================================================
-- Run this in: Supabase Dashboard > SQL Editor
-- Idempotent: safe to run multiple times
-- ============================================================

-- ========================
-- 1. Enable RLS on all tables
-- ========================
ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."posts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."comments" ENABLE ROW LEVEL SECURITY;

-- ========================
-- 2. Profiles policies
-- ========================

DROP POLICY IF EXISTS "profiles_select_authenticated" ON "public"."profiles";
CREATE POLICY "profiles_select_authenticated"
  ON "public"."profiles"
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "profiles_update_own" ON "public"."profiles";
CREATE POLICY "profiles_update_own"
  ON "public"."profiles"
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_insert_own" ON "public"."profiles";
CREATE POLICY "profiles_insert_own"
  ON "public"."profiles"
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- ========================
-- 3. Posts policies
-- ========================

DROP POLICY IF EXISTS "posts_select_public" ON "public"."posts";
CREATE POLICY "posts_select_public"
  ON "public"."posts"
  FOR SELECT
  TO authenticated
  USING (is_secret = false);

DROP POLICY IF EXISTS "posts_select_secret_author" ON "public"."posts";
CREATE POLICY "posts_select_secret_author"
  ON "public"."posts"
  FOR SELECT
  TO authenticated
  USING (
    is_secret = true
    AND (
      author_id = auth.uid()
      OR EXISTS (
        SELECT 1 FROM "public"."profiles"
        WHERE id = auth.uid() AND role = 'admin'
      )
    )
  );

DROP POLICY IF EXISTS "posts_insert_authenticated" ON "public"."posts";
CREATE POLICY "posts_insert_authenticated"
  ON "public"."posts"
  FOR INSERT
  TO authenticated
  WITH CHECK (author_id = auth.uid());

DROP POLICY IF EXISTS "posts_update_own" ON "public"."posts";
CREATE POLICY "posts_update_own"
  ON "public"."posts"
  FOR UPDATE
  TO authenticated
  USING (author_id = auth.uid())
  WITH CHECK (author_id = auth.uid());

DROP POLICY IF EXISTS "posts_delete_own_or_admin" ON "public"."posts";
CREATE POLICY "posts_delete_own_or_admin"
  ON "public"."posts"
  FOR DELETE
  TO authenticated
  USING (
    author_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM "public"."profiles"
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================
-- 4. Comments policies
-- ========================

DROP POLICY IF EXISTS "comments_select_authenticated" ON "public"."comments";
CREATE POLICY "comments_select_authenticated"
  ON "public"."comments"
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "comments_insert_authenticated" ON "public"."comments";
CREATE POLICY "comments_insert_authenticated"
  ON "public"."comments"
  FOR INSERT
  TO authenticated
  WITH CHECK (author_id = auth.uid());

DROP POLICY IF EXISTS "comments_update_own" ON "public"."comments";
CREATE POLICY "comments_update_own"
  ON "public"."comments"
  FOR UPDATE
  TO authenticated
  USING (author_id = auth.uid())
  WITH CHECK (author_id = auth.uid());

DROP POLICY IF EXISTS "comments_delete_own_or_admin" ON "public"."comments";
CREATE POLICY "comments_delete_own_or_admin"
  ON "public"."comments"
  FOR DELETE
  TO authenticated
  USING (
    author_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM "public"."profiles"
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
