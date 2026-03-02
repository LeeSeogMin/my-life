-- Migration to allow new category values in the `posts` table

-- 1. Drop the existing check constraint
ALTER TABLE "public"."posts" DROP CONSTRAINT IF EXISTS "posts_category_check";

-- 2. Add the new check constraint with the 6 new categories + 'research'
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_category_check"
CHECK (
  "category" IN (
    'research',
    'nlp',
    'web',
    'planning',
    'data',
    'survey',
    'agent'
  )
);
