# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio and community site for Professor 이석민 (Seog-Min Lee) at 한신대학교. The site is in Korean and covers research (SAPD Framework, AI policy), publications, lectures, columns (writing), and a community forum. Deployed on Vercel at `my-life-six-pi.vercel.app`.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config: `next/core-web-vitals` + `next/typescript`). No args — lints the whole repo per `eslint.config.mjs`.
- `npm start` — Serve production build
- `npm run pw:install` — Install Playwright browsers (one-time setup)
- `npm run pw:open -- http://localhost:3000` — Open Playwright Inspector against a URL
- `npm run pw:codegen -- http://localhost:3000` — Record a Playwright script
- `npm run pw:test` — Run Playwright tests

There is no unit-test runner configured; QA is done via Playwright against `npm run dev`.

## Tech Stack

- **Framework**: Next.js 16 with App Router, React 19, TypeScript 5.9
- **Styling**: Tailwind CSS v4 with `@tailwindcss/typography`
- **Content**: MDX via `@next/mdx` + `next-mdx-remote` + `gray-matter` for frontmatter
- **Backend**: Supabase (auth + Postgres) via `@supabase/ssr`
- **Icons**: `lucide-react`
- **Deployment**: Vercel

## Architecture

### Routing (App Router)

**Primary nav**: 홈 / SAPD Framework / 프로젝트 / 칼럼 / About / Contact
**Footer nav**: 연구 / 저서·논문 / 강의 / 커뮤니티

- `/` — Home
- `/framework` — SAPD Framework (theory + placeholder sections for Validation Module, How to Use, 적용사례)
- `/projects` — Working Prototypes (Coming Soon) + Ongoing Research
- `/writings` — Canonical column index; `/writings/columns/[slug]` — individual MDX column
- `/research` — Academic research focus (project cards have moved to `/projects`)
- `/lectures`, `/about`, `/contact`
- `/community` — Forum; `/community/[postId]` — post detail; `/community/new` — new post (auth-gated by middleware)
- `/auth/{login,signup,reset-password,callback}` — Supabase auth flows

**Legacy redirects** (defined in `next.config.ts`, permanent 308):
- `/writing` → `/writings`
- `/writing/:slug` → `/writings/columns/:slug`
- `/archive` → `/writings` (the old `/archive/[id]` detail page no longer exists)

When adding new column-style content, write the MDX file into `content/writing/` (the directory name is unchanged) — the route is `/writings/columns/[slug]`.

### Data Sources

- **MDX columns**: `content/writing/*.mdx` with frontmatter `{ title, date, description }`. Parsed by `src/lib/mdx.ts` (`gray-matter`). Files are read at build/request time from `process.cwd()` — they must live in the repo, not be fetched.
- **Archive items**: `data/books.json`, `data/publications.json`, `data/conferences.json`. Loaded by `src/lib/archive.ts` and merged into a discriminated `ArchiveItem` union (`type: "book" | "publication" | "conference"`). Each loader silently returns `[]` on missing/invalid files — be aware when adding required fields.
- **Community posts/comments**: Supabase tables (`posts`, `profiles`, `comments`) with a `posts_with_author` view. Types in `src/lib/types/database.ts`. Schema/RLS migrations live at the repo root (`supabase_rls_migration.sql`, `supabase_category_migration.sql`) — they are applied manually in Supabase, not via a migration tool.

### Supabase Integration

- **Client**: `src/lib/supabase/client.ts` (browser) and `src/lib/supabase/server.ts` (server components/actions)
- **Middleware**: `src/middleware.ts` — Refreshes Supabase auth session on every request; protects `/community/new` (redirects unauthenticated users to login)
- **Server Actions**: `src/lib/actions/auth.ts` (login, signup, logout, password reset), `src/lib/actions/posts.ts` (create/delete post), `src/lib/actions/comments.ts`
- **Env vars**: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`

### Key Patterns

- SEO pages export both `metadata` and inline JSON-LD `<script>` blocks (Person, ProfilePage, WebSite, CollectionPage). When adding a page that should appear in search, mirror this pattern and also add it to `src/app/sitemap.ts`.
- Server Actions live in `src/lib/actions/{auth,posts,comments}.ts`. Forms call these directly — there is no separate API route layer for community CRUD.
- Path alias `@/*` → `src/*` (see `tsconfig.json`). Use it for cross-module imports.
- Site language is Korean (`lang="ko"` in `src/app/layout.tsx`); user-facing copy is Korean.
- `next.config.ts` enables MDX via `@next/mdx` and sets `pageExtensions` to include `md`/`mdx` — pages can be authored as MDX inside `src/app/`, separate from the `content/writing/` MDX columns which are loaded as data.

### Subproject: `sapd/`

`sapd/` is a separate workspace for the SAPD research project with its own `CLAUDE.md` and docs. It is **not** part of the Next.js build. Don't import from it, and read `sapd/CLAUDE.md` before touching files inside that directory.

## Auto Memory

매 세션에서 다음 사항을 자동으로 메모리에 저장하라:

1. **세션 시작 시**: 메모리 디렉토리(`~/.claude/projects/-Users-callii-Documents-my-life/memory/MEMORY.md`)를 읽고 이전 컨텍스트를 파악하라
2. **작업 중 자동 저장 대상**:
   - 사용자의 역할, 선호도, 작업 스타일에 대해 새로 알게 된 것 → `user` 타입
   - 사용자가 수정을 요청하거나 피드백을 준 내용 → `feedback` 타입
   - 프로젝트의 진행 상황, 목표, 마감일 등 → `project` 타입
   - 외부 시스템 참조 정보 (URL, 도구, 서비스) → `reference` 타입
3. **세션 종료 시**: 해당 세션에서 수행한 주요 작업을 `project` 타입으로 요약 저장하라
4. **중복 방지**: 저장 전 기존 메모리를 확인하고, 이미 있는 내용은 업데이트하라
