# SPEC — riplai-web

## §G Goal

Turborepo monorepo frontend for Riplai: landing (riplai.id) + partner PWA (app.riplai.id) + admin panel (admin.riplai.id). Target: Indonesian SMB partners automating WA replies via AI bot (Riplai).

---

## §C Constraints

- Turborepo + pnpm workspaces (`apps/*`, `packages/*`)
- Node 24 (`.nvmrc`), pnpm ≥9
- Next.js latest, TypeScript strict, Tailwind v4, React 19
- TanStack Query v5 + Zustand v5 → partner app only
- Axios → `@riplai/api-client` only
- Partner-facing UI lang: Bahasa Indonesia
- Design: light mode only; no dark mode; no Figma; build from scratch
- Brand color: `#10b981` (emerald)
- Auth: JWT in `localStorage` key `riplai_token`; same JWT system across apps; admin requires `role=admin`
- Real-time: SSE; fallback 10s polling if SSE unavailable
- min viewport 375px (partner PWA)
- Deployment: Vercel, all 3 apps
- No automated tests — manual QA only
- Ports: web=3001, partner=3002, admin=3003, api=8080
- NOTE: Go backend types & API paths must also use `partner` naming to stay in sync (V9)

---

## §I Interfaces

```
env: NEXT_PUBLIC_API_URL      ! set in all apps
env: NEXT_PUBLIC_USE_FIXTURES ! `true`=fixtures, `false`=real api

api: GET  /health                          → {status,service?,version?}
api: POST /auth/login                      → {token:string}
api: GET  /conversations                   → Conversation[]
api: GET  /conversations/:id               → Conversation
api: GET  /conversations/:id/messages      → Message[]
api: POST /conversations/:id/reply         → void
api: GET  /partner                         → Partner
api: GET  /partner/usage                   → PartnerUsage
api: GET  /dashboard/stats                 → DashboardStats
api: PUT  /schedule                        → void
api: GET  /knowledge-base                  → KnowledgeBase
api: GET  /admin/partners                  → Partner[] (role=admin)
api: POST /admin/partners                  → Partner   (role=admin)

sse: GET  /sse/events → event:new_message | event:status_change

sub: riplai.id       → apps/web     (landing)
sub: app.riplai.id   → apps/partner (PWA)
sub: admin.riplai.id → apps/admin   (internal)

pwa: manifest.json (apps/partner) — name:"Riplai Inbox", short_name:"Riplai"
```

---

## §V Invariants

```
V1:  ∀ route ∈ apps/partner/(app)/* → redirect /login if riplai_token ⊥ localStorage
V2:  ∀ route ∈ apps/admin/(app)/*   → redirect /login if JWT missing | role≠admin
V3:  API response 401 → clear riplai_token & redirect /login
V4:  USE_FIXTURES=true → ⊥ network calls to NEXT_PUBLIC_API_URL
V5:  ConversationStatus badge colors: needs_reply=red, bot_handled=green, waiting=yellow
V6:  ReplyForm → ⊥ submit if body.trim()=""
V7:  SSE EventSource → auto-reconnect on drop
V8:  UsageBar: reply_count/reply_cap <80%=green, 80–95%=yellow, >95%=red
V9:  packages/types/* ! mirror Go API structs exactly; Go backend ! use partner naming (manual sync per api phase)
V10: apps/partner PWA installable via Add to Home Screen — iOS Safari & Android Chrome
V11: ∀ apps → `pnpm build` exits 0
V12: ∀ @riplai/* workspace packages → resolve correctly via workspace: protocol
```

---

## §T Tasks

| id  | status | task                                                                                     | cites           |
|-----|--------|------------------------------------------------------------------------------------------|-----------------|
| T1  | .      | Scaffold repo root: package.json, pnpm-workspace.yaml, turbo.json, tsconfig.json, .nvmrc | V11,V12         |
| T2  | .      | packages/config: tailwind.config.base.ts (#10b981 tokens), tsconfig.base.json, eslint.config.base.js | V12  |
| T3  | .      | packages/types: src/api/{partner,conversation,message,knowledge}.ts + index.ts           | V9,V12          |
| T4  | .      | packages/utils: formatRupiah(), formatWANumber(), Indonesian date helpers                | V12             |
| T5  | .      | packages/api-client: client.ts (Axios + USE_FIXTURES + JWT interceptor + 401 handler), __fixtures__/, endpoints/, index.ts | V3,V4,V12 |
| T6  | .      | packages/ui: Button, Input, Badge (needs_reply\|bot_handled\|waiting), Avatar (WA initials) | V5,V12       |
| T7  | .      | apps/web scaffold: layout.tsx, globals.css, Hello World page (GET /health card)          | V11             |
| T8  | .      | apps/partner scaffold: layout.tsx, globals.css, Hello World, stub route dirs             | V11             |
| T9  | .      | apps/admin scaffold: layout.tsx, globals.css, Hello World, stub route dirs               | V11             |
| T10 | .      | apps/web landing: Hero (CTA "Coba Gratis →"), ProblemSection, HowItWorks, DemoBot (hardcoded) | —          |
| T11 | .      | apps/web /pricing page: PricingCard × 4 (Free\|Starter\|Growth\|Managed, prices TBD)    | —               |
| T12 | .      | apps/partner auth: LoginForm, Zustand auth.store.ts (token, partner, setAuth, logout)    | V1,V3,I.api     |
| T13 | .      | apps/partner protected layout: (app)/layout.tsx — redirect /login if ⊥ token            | V1              |
| T14 | .      | apps/partner inbox list: ConversationList, ConversationItem, StatusBadge, useConversations (TanStack, 30s refetch) | V5,I.api |
| T15 | .      | apps/partner inbox thread: MessageBubble, ReplyForm, useConversation, useSendReply       | V6,I.api        |
| T16 | .      | apps/partner SSE: useSSE.ts (EventSource + auto-reconnect); 10s polling fallback         | V7,I.sse        |
| T17 | .      | apps/partner inbox.store.ts: activeConversationId, replyDraft                           | —               |
| T18 | .      | apps/partner dashboard: OpenCloseToggle (PUT /schedule), UsageBar, StatsCards            | V8,I.api        |
| T19 | .      | apps/partner /knowledge-base: read-only view (profile, products, FAQs, promos)          | I.api           |
| T20 | .      | apps/admin /merchants: MerchantsTable (sortable, filterable), auth guard role=admin      | V2,I.api        |
| T21 | .      | apps/admin /merchants/[id]: tenant detail + KB editor (raw JSONB view)                  | V2,I.api        |
| T22 | .      | apps/admin /onboarding: TenantForm (create tenant + seed KB)                            | V2,I.api        |
| T23 | .      | apps/admin /system: health page (Redis stream backlog, active SSE connections)           | V2              |
| T24 | .      | apps/partner PWA: manifest.json (Riplai Inbox/Riplai), next-pwa config, icons 192×192 + 512×512 | V10      |
| T25 | .      | apps/partner PWA QA: Add to Home Screen on iOS Safari + Android Chrome; standalone mode  | V10             |
| T26 | .      | All apps — error states (empty inbox, API fail, offline) + loading skeletons             | —               |
| T27 | .      | All apps — finalize env vars; Vercel deploy (riplai.id, app.riplai.id, admin.riplai.id) | V11,I.sub       |
| T28 | .      | apps/partner — viewport QA at 375px (iPhone SE) + 390px (iPhone 14)                    | —               |

---

## §B Bugs

| id | date | cause | fix |
|----|------|-------|-----|
