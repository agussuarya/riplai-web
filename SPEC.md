## §G

Build riplai-web Turborepo monorepo — shared pkg layer + 3 Next.js apps (web/partner/admin) — emerald+indigo design system — Indonesian SMB landing page.

---

## §C

- Node 24, pnpm, Turborepo, Next.js latest, TypeScript strict, Tailwind v4
- Plus Jakarta Sans all apps; JetBrains Mono KB editor only
- Pill buttons (rounded-full) — brand shape invariant
- Code artifacts English; UI copy rendered in browser Indonesian
- apps/web static — no api-client dep
- apps/partner port 3002; apps/admin port 3003
- Backend API at localhost:8080; fixture toggle via NEXT_PUBLIC_USE_FIXTURES

---

## §I

| id | surface | description |
|----|---------|-------------|
| I.config | packages/config | tailwind base (brand+accent tokens, fonts, borderRadius.pill), tsconfig, eslint |
| I.ui | packages/ui | Button, Input, Badge, Avatar — exported from src/index.ts |
| I.types | packages/types | shared TS types — Conversation, Message, Partner, KnowledgeBase |
| I.api | packages/api-client | Axios instance + JWT interceptor + fixture JSON + endpoint fns |
| I.utils | packages/utils | formatRupiah, formatWANumber, Indonesian date helpers |
| I.web | apps/web | public landing site — port 3001 |
| I.partner | apps/partner | partner PWA — port 3002 |
| I.admin | apps/admin | admin panel — port 3003 |

---

## §V

| id | invariant |
|----|-----------|
| V1 | Button always rounded-full; rounded-lg forbidden |
| V2 | Routes/filenames/component names English; UI copy (headings, labels, CTAs) Indonesian |
| V3 | brand-500=#10B981, accent-500=#6366F1 — tokens never swapped or reused for other roles |
| V4 | apps/web has no @riplai/api-client in dependencies — landing page static only |
| V5 | apps/partner stubs: login, forgot-password, reset-password, inbox, inbox/[id], analytics, knowledge-base, settings, onboarding |
| V6 | apps/admin stubs: (auth)/login, partners, partners/[id], onboarding, system |

---

## §T

| id | status | task | cites | plans |
|----|--------|------|-------|-------|
| T1 | x | scaffold shared packages — packages/config (full brand/accent palette, Plus Jakarta Sans, JetBrains Mono, borderRadius.pill), packages/types (Conversation/Message/Partner/KnowledgeBase), packages/utils (formatRupiah/formatWANumber/date), packages/api-client (Axios+JWT interceptor+fixtures), packages/ui (Button 5-variant pill/Input rounded-xl/Badge 4-variant/Avatar) | V1,V3,I.config,I.ui,I.types,I.api,I.utils | frontend-setup §Steps 1–6; design-system §11,§12 |
| T2 | . | scaffold 3 app shells — apps/web (port 3001, root layout with Navbar+Footer stub, all 7 page stubs), apps/partner (port 3002, auth routes + app routes per V5, hello-world page calling GET /health), apps/admin (port 3003, auth + app routes per V6, hello-world page calling GET /health); exit: all 3 apps start without errors | V4,V5,V6,I.web,I.partner,I.admin | frontend-setup §Steps 7–9 |
| T3 | . | build apps/web landing page — Phase 1: RiplaiLogo (Bubble Ripple SVG), Navbar (sticky+hamburger), Footer; Phase 2: Hero+DemoChat (scripted 3-exchange), FeatureGrid (6-item 3×2), HowItWorks (3-step brand-50 bg), PricingCards (4-tier Growth highlighted), Testimonials (3 SMB), WaitlistModal; Phase 3: /features /pricing /demo /about pages; Phase 4: /privacy /terms legal pages | V2,V3,I.web | landing-page-plan §Phases 1–4; design-system §2,§3,§4,§13 |

---

## §B

| id | date | cause | fix |
|----|------|-------|-----|
