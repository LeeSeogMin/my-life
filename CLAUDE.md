# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio and community site for Professor 이석민 (Seog-Min Lee) at 한신대학교. The site is in Korean and covers research (SAPD Framework, AI policy), publications, lectures, columns (writing), and a community forum. Deployed on Vercel at `my-life-six-pi.vercel.app`.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config with next/core-web-vitals + typescript)
- `npm start` — Serve production build

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

- `/` — Home page: Hero(포지셔닝 + CTA 3개) + What I Do(3카드) + 연구철학 + 프로젝트 + 칼럼
- `/framework` — SAPD Framework: 이론층 + Validation Module(placeholder) + How to Use(placeholder) + 적용사례(placeholder)
- `/projects` — Working Prototypes(placeholder, Coming Soon) + Ongoing Research
- `/writing` — Column list; `/writing/[slug]` — Individual MDX column
- `/research` — Academic research focus (프로젝트 카드는 /projects로 이동됨)
- `/archive` — Books & publications list; `/archive/[id]` — Detail page
- `/lectures` — Lecture information (footer nav에서 접근)
- `/about` — 학문적 궤적, 강의 요약, 저서·논문 링크
- `/contact` — 협업 주제 목록 + 이메일
- `/community` — Forum (footer nav에서 접근); `/community/[postId]` — Post detail; `/community/new` — New post (auth required)
- `/auth/*` — Login, signup, password reset flows

### Data Sources

- **MDX columns**: `content/writing/*.mdx` with frontmatter (title, date, description). Parsed by `src/lib/mdx.ts` using `gray-matter`.
- **Books & publications**: `data/books.json` and `data/publications.json`. Read by `src/lib/archive.ts`.
- **Community posts/comments**: Supabase tables (`posts`, `profiles`, `comments`) with a `posts_with_author` view. Types in `src/lib/types/database.ts`.

### Supabase Integration

- **Client**: `src/lib/supabase/client.ts` (browser) and `src/lib/supabase/server.ts` (server components/actions)
- **Middleware**: `src/middleware.ts` — Refreshes Supabase auth session on every request; protects `/community/new` (redirects unauthenticated users to login)
- **Server Actions**: `src/lib/actions/auth.ts` (login, signup, logout, password reset), `src/lib/actions/posts.ts` (create/delete post), `src/lib/actions/comments.ts`
- **Env vars**: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`

### Key Patterns

- Pages with SEO include both `metadata` exports and inline JSON-LD `<script>` blocks for structured data (Person, ProfilePage, WebSite, CollectionPage schemas)
- Community uses Supabase RLS (Row Level Security); migration SQL files are at project root
- The `@` path alias maps to `src/` (configured in tsconfig.json)
- Site language is Korean (`lang="ko"`); content is primarily in Korean

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
