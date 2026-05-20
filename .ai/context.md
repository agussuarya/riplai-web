## Project

WhatsApp AI chatbot SaaS for Indonesian SMBs — public landing page + partner inbox dashboard + admin panel.

## Stack

- Runtime: Node 24, pnpm 9+, Turborepo ^2
- Framework: Next.js ^16, TypeScript strict
- Styling: Tailwind v4 — brand (emerald) + accent (indigo) tokens via packages/config
- Fonts: Plus Jakarta Sans (all apps), JetBrains Mono (KB editor only)
- State: Zustand v5 + TanStack Query v5 (partner app only)
- Backend: API at localhost:8080; fixture toggle via NEXT_PUBLIC_USE_FIXTURES=true
- Deployment: Docker + docker-compose (3 services); Makefile ENV=local|staging|production; output: standalone in all
  next.config.ts

## Apps

- apps/web (port 3001) — public landing page, static, NO api-client dep
- apps/partner (port 3002) — partner PWA (inbox, analytics, KB, settings)
- apps/admin (port 3003) — admin panel (partners, onboarding, system)

## Packages

- packages/config — tailwind.config.base.ts (brand+accent palette, fonts, borderRadius.pill), tsconfig.base.json,
  eslint.config.base.js
- packages/types — Conversation, Message, Partner, KnowledgeBase shared TS types
- packages/utils — formatRupiah, formatWANumber, Indonesian date helpers
- packages/api-client — Axios instance + JWT interceptor + fixture JSON + endpoint fns
- packages/ui — Button (5 variants, pill), Input (rounded-xl), Badge (4 variants), Avatar

## File Conventions

- Components: PascalCase, co-located with page if single-use; shared components in `components/` subfolder per app
- Routes/filenames/component names: English
- UI copy (headings, labels, CTAs, error messages): Indonesian (Bahasa Indonesia)
- API calls in partner/admin: always via @riplai/api-client, never raw fetch()
- API calls in apps/web: fetch() directly — no @riplai/api-client import
- Fixtures: packages/api-client/src/__fixtures__/ — hardcoded JSON matching API shapes
- Types: packages/types/src/api/ — one file per resource (conversation.ts, message.ts, etc.)

## Rules (non-negotiable)

- Button always rounded-full — rounded-lg on buttons is forbidden
- Routes/filenames/component names in English; all UI copy rendered in browser in Indonesian
- brand-500=#10B981, accent-500=#6366F1 — never swapped, never reused for other roles
- apps/web has no @riplai/api-client in dependencies — landing page is static only
- apps/partner routes: login, forgot-password, reset-password, inbox, inbox/[id], analytics, knowledge-base, settings,
  onboarding
- apps/admin routes: (auth)/login, partners, partners/[id], onboarding, system
- All deps pinned to major only (^N) — never "latest"
- output: "standalone" in next.config.ts for all 3 apps
- Never use "AI" in product copy — use: admin otomatis / jago balas / penjawab 24 jam / tim siaga

## Next.js App Router Conventions

- Default all components to Server Components — add `'use client'` only when component uses: hooks, event handlers, browser APIs, Zustand store, TanStack Query
- `loading.tsx` required for: `inbox`, `inbox/[id]`, `analytics`, `knowledge-base` (async data routes)
- `error.tsx` required for: `inbox/[id]`, `knowledge-base` (can fail mid-session)
- No `pages/` directory — App Router only; all routes under `app/`
- Layouts never fetch data — push fetching down to leaf components or dedicated hooks

## TanStack Query Rules (apps/partner, apps/admin)

- All query keys defined in `src/lib/query-keys.ts` as `const` tuples — no inline string arrays
- `staleTime` default: 30_000ms unless route requires real-time (`inbox/[id]` = 0)
- Every `useMutation` must call `queryClient.invalidateQueries` on `onSuccess` for affected resource
- Fixture mode: if `NEXT_PUBLIC_USE_FIXTURES=true`, endpoint fn returns fixture JSON before hitting axios — logic lives in api-client, not in hooks or components

## Zustand Rules (apps/partner only)

- One store file per domain: `inbox.store.ts`, `auth.store.ts`, `settings.store.ts`
- Stores hold UI state only: selected ID, modal open/closed, sidebar collapsed, active tab
- Server data (conversations, messages, partner profile) lives in TanStack Query — never duplicated in Zustand
- No `immer` middleware — use spread for updates: `set((s) => ({ ...s, selectedId: id }))`

## TypeScript Patterns

- Fixtures validated at compile time: `import data from './__fixtures__/x.json'` typed as `satisfies ApiResponse<X[]>`
- Prefer `type` over `interface` for API shapes in `packages/types`
- `unknown` over `any` — if shape unclear, narrow with type guard before use
- All async functions return explicit typed Promise: `Promise<Conversation[]>` not inferred

## Font Loading Pattern

- Fonts loaded via `next/font/google` in each app's `layout.tsx` — never via `<link>` in `<head>`
- Font passed as CSS variable matching `@theme` token name: `variable: '--font-sans'`
- `JetBrains Mono` imported only in `apps/partner/src/app/(dashboard)/knowledge-base/layout.tsx` — not in root layout
- `html` element gets font variable class: `<html className={sans.variable}>`

## State & Auth Flow

- JWT stored in memory (Zustand auth store) — not localStorage, not cookie
- On 401 from api-client interceptor: clear auth store → `router.push('/login')`
- `NEXT_PUBLIC_USE_FIXTURES=true` valid in local ENV only — staging/production must never set this

## Common AI Mistakes Here

- Using `rounded-lg` on Button — forbidden; Button always `rounded-full` via `packages/ui`
- Importing `@riplai/api-client` in `apps/web` — static app, no api-client dep allowed
- Writing UI copy in English — all rendered browser text must be Bahasa Indonesia
- Using the word "AI" in copy — use substitutes: `admin otomatis` / `jago balas` / `penjawab 24 jam` / `tim siaga`
- Swapping brand/accent colors — `brand-500=#10B981` is emerald (primary actions), `accent-500=#6366F1` is indigo (secondary/highlights); never reversed
- Calling `fetch()` directly in partner/admin components — always use endpoint fn from `@riplai/api-client`
- Defining Tailwind tokens inside individual apps — all tokens in `packages/config` only
- Creating store for server data — server data belongs in TanStack Query, not Zustand
- Using `useEffect` to fetch — use `useQuery` from TanStack Query
- Running `pnpm build` inside app directory — always run from repo root via `pnpm turbo build`
