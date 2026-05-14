# Roadmap: Riplai Web

**Created:** 2026-05-14
**Granularity:** Fine
**Execution:** Sequential
**Workflow mode:** Interactive

## Overview

This roadmap turns the existing `docs/plans` material into buildable GSD phases for the Riplai frontend monorepo. The phase order follows dependency reality: establish the workspace, shared packages, and brand primitives first; ship the public web experience next; then build the partner and admin operational surfaces; finish with PWA and production readiness.

| Phase | Name | Goal | Requirements |
|-------|------|------|--------------|
| 1 | Workspace Scaffold | Create the root Turborepo workspace and app/package skeletons (2/3 plans complete) | WORK-01..WORK-07 |
| 2 | Shared Package Foundation | Implement shared config, types, utils, API client, fixtures, and UI primitives | PKG-01..PKG-10 |
| 3 | Brand System | Implement the locked Riplai visual identity and design tokens | BRAND-01..BRAND-08 |
| 4 | Public Web Shell | Create the public web app shell, layout, navigation, footer, and static dependency boundary | WEB-01..WEB-04, WEB-22 |
| 5 | Landing Home Experience | Build the homepage with hero, demo chat, features, pricing preview, testimonials, and waitlist CTA | WEB-05..WEB-17 |
| 6 | Marketing Inner Pages | Build Fitur, Harga, Demo, and Tentang pages | WEB-18..WEB-21 |
| 7 | Legal Pages | Build Privacy and Terms pages with launch-safe Indonesian legal copy | LEGAL-01..LEGAL-07 |
| 8 | Partner App Shell | Scaffold the partner PWA shell and shared app foundation | PART-01..PART-02 |
| 9 | Partner Auth | Implement partner login, token storage, protected layout, and password recovery routes | PART-03..PART-06, PART-20 |
| 10 | Partner Inbox | Implement the core inbox list, thread, reply, query, and refresh behavior | PART-07..PART-15 |
| 11 | Partner Operations | Implement dashboard/analytics, usage, knowledge base, settings, and onboarding route | PART-16..PART-19, PART-21 |
| 12 | Admin Panel | Implement authenticated internal admin workflows | ADMIN-01..ADMIN-10 |
| 13 | Partner PWA | Make the partner app installable on mobile | PWA-01..PWA-03 |
| 14 | Production Readiness | Add environment, state, mobile, and deployment readiness polish | PROD-01..PROD-04 |

## Phase Details

### Phase 1: Workspace Scaffold
**Goal:** Create the root Turborepo workspace and app/package skeletons so every later phase has a stable place to build.
**UI hint:** no

**Requirements:** WORK-01, WORK-02, WORK-03, WORK-04, WORK-05, WORK-06, WORK-07

**Success Criteria:**
1. Root `package.json`, `pnpm-workspace.yaml`, `turbo.json`, root `tsconfig.json`, `.nvmrc`, `.node-version`, and `.gitignore` exist.
2. `apps/web`, `apps/partner`, `apps/admin`, and all `packages/*` directories exist with package manifests or placeholders.
3. Root scripts expose workspace build/dev/lint/type-check commands plus app-specific dev commands.
4. Each app has a minimal page that can render on its assigned port.

### Phase 2: Shared Package Foundation
**Goal:** Implement reusable package foundations for config, types, utilities, API access, fixtures, and base UI components.
**UI hint:** yes

**Requirements:** PKG-01, PKG-02, PKG-03, PKG-04, PKG-05, PKG-06, PKG-07, PKG-08, PKG-09, PKG-10

**Success Criteria:**
1. Shared package exports resolve through workspace imports.
2. API client supports real API URL configuration and typed fixture fallback.
3. JWT request/401 response behavior is implemented without breaking SSR.
4. UI primitives match the design-system requirements for button shape and conversation status badges.

### Phase 3: Brand System
**Goal:** Implement the locked Riplai identity so all apps use the same logo, palette, typography, and voice constraints.
**UI hint:** yes

**Requirements:** BRAND-01, BRAND-02, BRAND-03, BRAND-04, BRAND-05, BRAND-06, BRAND-07, BRAND-08

**Success Criteria:**
1. `RiplaiLogo` renders the Bubble Ripple mark using the canonical SVG paths from the plan docs.
2. Tailwind config exposes emerald brand tokens and indigo bot/otomatis accent tokens.
3. Plus Jakarta Sans is wired as the default UI font and JetBrains Mono is available for editor contexts.
4. Logo and public copy follow lowercase `riplai` and no-AI-jargon rules.

### Phase 4: Public Web Shell
**Goal:** Establish the static public web app shell with layout, navigation, footer, metadata, and no backend dependency.
**UI hint:** yes

**Requirements:** WEB-01, WEB-02, WEB-03, WEB-04, WEB-22

**Success Criteria:**
1. `apps/web` has root layout, global styles, metadata, navbar, and footer.
2. Navigation works across desktop and mobile.
3. Footer includes product, company, legal links, tagline, and copyright.
4. `apps/web` builds without importing `@riplai/api-client`.

### Phase 5: Landing Home Experience
**Goal:** Build a shareable home page that communicates the product value and demonstrates WhatsApp-style automated replies.
**UI hint:** yes

**Requirements:** WEB-05, WEB-06, WEB-07, WEB-08, WEB-09, WEB-10, WEB-11, WEB-12, WEB-13, WEB-14, WEB-15, WEB-16, WEB-17

**Success Criteria:**
1. Hero communicates the 24-hour WhatsApp value within the first viewport.
2. Demo chat is interactive, hardcoded, and relevant to Indonesian SMB questions.
3. Features, how-it-works, pricing, testimonials, and waitlist CTA are present and responsive.
4. Waitlist modal interaction is not a dead end even without backend.

### Phase 6: Marketing Inner Pages
**Goal:** Build the non-legal public marketing routes needed for launch credibility and sales conversations.
**UI hint:** yes

**Requirements:** WEB-18, WEB-19, WEB-20, WEB-21

**Success Criteria:**
1. `/fitur` expands the six-feature story for SMB audiences.
2. `/harga` includes pricing tiers and comparison details.
3. `/demo` provides a focused standalone demo experience.
4. `/tentang` includes mission, placeholder story, values, and contact information.

### Phase 7: Legal Pages
**Goal:** Ship privacy and terms pages that are suitable for collecting waitlist or partner data before public launch.
**UI hint:** yes

**Requirements:** LEGAL-01, LEGAL-02, LEGAL-03, LEGAL-04, LEGAL-05, LEGAL-06, LEGAL-07

**Success Criteria:**
1. `/privacy` covers UU PDP-oriented data topics in Bahasa Indonesia.
2. `/terms` covers account, service, billing, quota, prohibited-use, WhatsApp compliance, IP, termination, liability, and dispute terms.
3. Both pages use Riplai/NIB/contact placeholders and avoid personal address disclosure.
4. Legal pages are linked from the footer.

### Phase 8: Partner App Shell
**Goal:** Establish the partner PWA shell on port 3002 with shared configuration and route foundations.
**UI hint:** yes

**Requirements:** PART-01, PART-02

**Success Criteria:**
1. `apps/partner` exists and runs on port 3002.
2. Partner app loads shared fonts and global styles.
3. Route groups for auth and app surfaces are present.
4. The app can render a basic protected-layout placeholder before auth is implemented.

### Phase 9: Partner Auth
**Goal:** Implement partner authentication and password recovery scaffolding.
**UI hint:** yes

**Requirements:** PART-03, PART-04, PART-05, PART-06, PART-20

**Success Criteria:**
1. Login route accepts email/password and calls fixture or real auth endpoint.
2. Successful login stores `riplai_token`.
3. Protected routes redirect unauthenticated users to login.
4. Forgot-password and reset-password routes exist with production-ready UX placeholders or flows.

### Phase 10: Partner Inbox
**Goal:** Implement the core operational inbox experience used daily by partners.
**UI hint:** yes

**Requirements:** PART-07, PART-08, PART-09, PART-10, PART-11, PART-12, PART-13, PART-14, PART-15

**Success Criteria:**
1. Inbox list shows conversations sorted by recency with status badges.
2. Thread view shows customer, bot, and owner bubbles with distinct alignment and styling.
3. Partner can send manual replies and see state update through query invalidation.
4. Data loads through TanStack Query with fixture support and SSE or polling refresh.

### Phase 11: Partner Operations
**Goal:** Add the partner operational surfaces beyond inbox: dashboard/analytics, usage, knowledge base, settings, and onboarding.
**UI hint:** yes

**Requirements:** PART-16, PART-17, PART-18, PART-19, PART-21

**Success Criteria:**
1. Dashboard or analytics route shows conversation stats and reply-cap usage.
2. Usage display changes state near configured thresholds.
3. Knowledge base route renders business profile, products/services, FAQs, and promos.
4. Settings and onboarding routes cover profile, bot, plan, notification, and first-run needs.

### Phase 12: Admin Panel
**Goal:** Build the internal admin panel needed to onboard and manage partners without manual database work.
**UI hint:** yes

**Requirements:** ADMIN-01, ADMIN-02, ADMIN-03, ADMIN-04, ADMIN-05, ADMIN-06, ADMIN-07, ADMIN-08, ADMIN-09, ADMIN-10

**Success Criteria:**
1. Admin app runs on port 3003 and requires an authenticated entry route.
2. Partners list supports enough search/filter/sort behavior for internal use.
3. Partner detail exposes KB, conversation summary, plan/cap data, and overrides.
4. Onboarding and system health routes support core internal workflows.

### Phase 13: Partner PWA
**Goal:** Make the partner app installable and usable from a mobile home screen.
**UI hint:** yes

**Requirements:** PWA-01, PWA-02, PWA-03

**Success Criteria:**
1. Manifest defines name, short name, start URL, display mode, colors, and icons.
2. 192x192 and 512x512 icons exist and match the Bubble Ripple app icon direction.
3. Partner app can be installed and opens in standalone mode.

### Phase 14: Production Readiness
**Goal:** Add the polish and operational checks needed before using the product with beta partners.
**UI hint:** yes

**Requirements:** PROD-01, PROD-02, PROD-03, PROD-04

**Success Criteria:**
1. Environment variables are documented and wired for API URL and fixture toggle.
2. User-facing data surfaces include loading, empty, failed API, and offline states.
3. Critical views are checked on 375px and 390px mobile widths.
4. Deployment plan supports independent app deployment.

## Coverage

- v1 requirements: 89
- Mapped to phases: 89
- Unmapped: 0

## Next Recommended Step

Start with:

```bash
$gsd-discuss-phase 1
```

Phase 1 establishes the workspace skeleton that every later phase depends on.
