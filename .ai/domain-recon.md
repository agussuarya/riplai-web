# Domain Recon: [Feature Name]

> Use this when building outside your expertise.
> Run each prompt separately. Read and absorb before writing spec.md.
> Output goes into context.md and your notes below.

---

## Prompt 1 — Best Practices + Common Mistakes

Paste to AI:

```
I am a backend engineer and I need to build WhatsApp AI chatbot SaaS for Indonesian SMBs — public landing page + partner inbox dashboard + admin panel using Next.js ts strict, Tailwind v4, pnpm, turborepo, node 24, Zustand v5, TanStack Query v5, Fonts Plus Jakarta Sans (all apps) and JetBrains Mono (KB editor only).
I know basic html, css, jquery but I'm unfamiliar with this stack that i use.

Give me:
- The 5 most important best practices for this
- The 3 most common mistakes people from my background make
- What I should put in my spec that I might not think to include
- Patterns I should follow (with short examples)

Be specific to Next.js ts strict, Tailwind v4, pnpm, turborepo, node 24, Zustand v5, TanStack Query v5, Fonts Plus Jakarta Sans (all apps) and JetBrains Mono (KB editor only).. No generic advice.
```

### My Notes (fill after AI responds)

**Best Practices**
- **TS strict = compiler is your runtime guard** — define all API shapes in `packages/types`, one file per resource; compiler breaks build when types mismatch across packages
- **TanStack Query replaces manual fetch + loading state** — use `useQuery` / `useMutation` hooks for all server data in partner/admin; no `useEffect` for fetching
- **Run tasks via Turborepo root, never inside app dirs** — `pnpm turbo build` respects `dependsOn: ["^build"]`; `cd apps/partner && pnpm build` fails on missing built packages
- **Tailwind v4 tokens live in CSS `@theme`, not `tailwind.config.js`** — define brand/accent/font tokens once in `packages/config`, import in each app's CSS; use `text-brand-500` / `bg-accent-500` in className
- **Zustand = UI state only, one store per domain** — selected inbox item, modal open, sidebar state; server data stays in TanStack Query; split stores by feature (inbox, auth, settings)

**Common Mistakes from jQuery Background**
- **Mutating state directly** — `obj.prop = value` silently breaks React re-render; always spread (`{ ...obj, prop: value }`) or use `set()` in Zustand to return new reference
- **Using `useEffect` to fetch data** — translates jQuery's "on load, call API" incorrectly; use TanStack Query hooks instead — handles caching, deduplication, loading/error state automatically
- **Importing `@riplai/api-client` in `apps/web`** — landing page is static; api-client must not appear in `apps/web/package.json`; use raw `fetch()` if web ever needs a public call

**Spec Items You'll Likely Miss**
- **Fixture contract** — fixture JSON must be validated by TypeScript (`satisfies ApiResponse<T>`), not just "looks like" the API shape
- **Mutation invalidation rules** — after any mutation on resource X, specify which `queryKey` gets invalidated; without this, UI shows stale data after updates
- **Font loading scope** — Plus Jakarta Sans loaded in all 3 `layout.tsx`; JetBrains Mono imported only in `apps/partner` (KB editor); define this as invariant, not assumption
- **Error boundary per route** — specify which routes need `error.tsx`; minimum: `inbox/[id]` and `knowledge-base`
- **Auth expiry flow** — JWT interceptor in api-client returns 401 → Zustand clears auth token → redirect to login; this must be specced or each developer implements it differently
- **Fixture ENV scope** — clarify `NEXT_PUBLIC_USE_FIXTURES=true` applies to local only, never staging/production; and whether it toggles all endpoints or per-endpoint
- **Banned copy as spec invariant** — move "never use AI" word list + substitutes (`admin otomatis` / `jago balas` / `penjawab 24 jam` / `tim siaga`) into `§V` as a verifiable invariant, not just a comment in context.md

**Patterns to Follow**
- **Fixture toggle** — every endpoint function checks `NEXT_PUBLIC_USE_FIXTURES` and returns fixture JSON early; no fixture logic inside components
- **Query key factory** — centralize all query keys in `lib/query-keys.ts` as `const` tuples; no magic strings scattered in hooks/components
- **`cva` for UI variants** — use `class-variance-authority` in `packages/ui`; bake non-overridable rules (e.g. `rounded-full`) into the base class string, not variants
- **`workspace:*` imports** — `apps/partner` and `apps/admin` depend on `@riplai/*` via `workspace:*`; `apps/web` package.json explicitly omits `@riplai/api-client`
- **`next/font/google` + CSS variable** — load font in `layout.tsx`, pass as `variable: '--font-sans'`, apply via Tailwind `@theme` token — not `<link>` tag in `<head>`

---

## Prompt 2 — Standard Pattern for This Feature

Paste to AI:

```
I need to build init repo, folder structure, and also public landing page in Next.js ts strict, Tailwind v4, pnpm, turborepo, node 24, Zustand v5, TanStack Query v5, Fonts Plus Jakarta Sans (all apps) and JetBrains Mono (KB editor only).
What is the standard pattern for this?
Show me a minimal example — just the structure, no boilerplate.
```

### My Notes (fill after AI responds)

**Repo Structure**
- Root: `apps/*` + `packages/*` declared in `pnpm-workspace.yaml` — turbo discovers both
- `turbo.json` `dependsOn: ["^build"]` = packages always build before apps — never run build inside app dir directly
- `output: 'standalone'` in all 3 `next.config.ts` — required for Docker

**App Router Route Grouping**
- `(auth)/` and `(dashboard)/` = parentheses = no URL segment, just layout grouping
- `inbox/[id]/` needs `page.tsx` + `loading.tsx` + `error.tsx` — real-time route, can fail
- `knowledge-base/layout.tsx` = JetBrains Mono loaded HERE only — not in root layout

**apps/web rules**
- No `stores/`, no `hooks/`, no `lib/query-keys.ts` — static only
- `layout.tsx` loads Plus Jakarta Sans via `next/font/google` + CSS variable
- `page.tsx` = pure JSX, no data fetching, no imports from `@riplai/api-client`

**packages/api-client pattern**
- `client.ts` = axios instance + JWT interceptor
- `endpoints/x.ts` = fixture toggle at top of every fn, returns fixture JSON if env flag set
- `__fixtures__/` = JSON files typed as `satisfies ApiResponse<X[]>` at import site

**packages/config pattern**
- `tailwind-base.css` = `@import "tailwindcss"` + `@theme { --color-brand-500: #10B981; ... }`
- Each app's `globals.css` = `@import "@riplai/config/tailwind-base.css"` — tokens cascade

**packages/ui pattern**
- `Button.tsx` uses `cva` — `rounded-full` baked into base string, not variant — cannot be overridden
- `src/index.ts` re-exports all components — consumers import from `@riplai/ui`

---

## Prompt 3 — Populate context.md

Paste to AI:

```
Based on Next.js ts strict, Tailwind v4, pnpm, turborepo, node 24, Zustand v5, TanStack Query v5, Fonts Plus Jakarta Sans (all apps) and JetBrains Mono (KB editor only) best practices, what should I add to this context file
so an AI developer produces correct, idiomatic output?

/home/agussuarya/Documents/agussuarya/repositories/riplai-web/.ai/context.md

Add only what's missing. Output only the additions, using the same format.
```

### Additions to add to context.md

**## Next.js App Router Conventions**
- Default all components to Server Components — add `'use client'` only when component uses: hooks, event handlers, browser APIs, Zustand store, TanStack Query
- `loading.tsx` required for: `inbox`, `inbox/[id]`, `analytics`, `knowledge-base` (async data routes)
- `error.tsx` required for: `inbox/[id]`, `knowledge-base` (can fail mid-session)
- No `pages/` directory — App Router only; all routes under `app/`
- Layouts never fetch data — push fetching down to leaf components or dedicated hooks

**## TanStack Query Rules (apps/partner, apps/admin)**
- All query keys defined in `src/lib/query-keys.ts` as `const` tuples — no inline string arrays
- `staleTime` default: 30_000ms unless route requires real-time (`inbox/[id]` = 0)
- Every `useMutation` must call `queryClient.invalidateQueries` on `onSuccess` for affected resource
- Fixture mode: if `NEXT_PUBLIC_USE_FIXTURES=true`, endpoint fn returns fixture JSON before hitting axios — logic lives in api-client, not in hooks or components

**## Zustand Rules (apps/partner only)**
- One store file per domain: `inbox.store.ts`, `auth.store.ts`, `settings.store.ts`
- Stores hold UI state only: selected ID, modal open/closed, sidebar collapsed, active tab
- Server data (conversations, messages, partner profile) lives in TanStack Query — never duplicated in Zustand
- No `immer` middleware — use spread for updates: `set((s) => ({ ...s, selectedId: id }))`

**## TypeScript Patterns**
- Fixtures validated at compile time: `import data from './__fixtures__/x.json'` typed as `satisfies ApiResponse<X[]>`
- Prefer `type` over `interface` for API shapes in `packages/types`
- `unknown` over `any` — if shape unclear, narrow with type guard before use
- All async functions return explicit typed Promise: `Promise<Conversation[]>` not inferred

**## Font Loading Pattern**
- Fonts loaded via `next/font/google` in each app's `layout.tsx` — never via `<link>` in `<head>`
- Font passed as CSS variable matching `@theme` token name: `variable: '--font-sans'`
- `JetBrains Mono` imported only in `apps/partner/src/app/(dashboard)/knowledge-base/layout.tsx` — not in root layout
- `html` element gets font variable class: `<html className={sans.variable}>`

**## State & Auth Flow**
- JWT stored in memory (Zustand auth store) — not localStorage, not cookie
- On 401 from api-client interceptor: clear auth store → `router.push('/login')`
- `NEXT_PUBLIC_USE_FIXTURES=true` valid in local ENV only — staging/production must never set this

**## Common AI Mistakes Here**
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

---

## Summary — What I Learned

Backend: I write code that *does* things — mutate DB row, return response. Here I *describe* what UI should look like given current data — React figures out DOM changes. Never touch DOM directly; change state, UI follows. Unlike REST handler where I own the full request lifecycle, TanStack Query owns fetch/cache/retry/loading — my job is just to declare *what* data a component needs, not *how* to get it. Biggest structural shift: in backend a monorepo is about sharing code; in this stack it's also about build order — packages must compile before apps, turbo.json enforces this, and breaking that order silently breaks type checking across the whole repo.

## Added to context.md
- [x] Best practices section added
- [x] Common AI mistakes for this domain added
- [x] Patterns section added
