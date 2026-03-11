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
