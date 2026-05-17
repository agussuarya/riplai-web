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

## Common AI Mistakes Here
