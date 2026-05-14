# Requirements: Riplai Web

**Defined:** 2026-05-14
**Core Value:** Customers get fast, accurate WhatsApp replies from the business' data while the owner stays in control without being glued to their phone.

## v1 Requirements

Requirements for the initial frontend milestone. Each maps to roadmap phases.

### Workspace

- [ ] **WORK-01**: Developer can install dependencies from the repo root with pnpm.
- [ ] **WORK-02**: Developer can run all apps through Turborepo from the repo root.
- [ ] **WORK-03**: Developer can run the public web app on port 3001.
- [ ] **WORK-04**: Developer can run the partner app on port 3002.
- [ ] **WORK-05**: Developer can run the admin app on port 3003.
- [ ] **WORK-06**: Root TypeScript references include every app and shared package.
- [ ] **WORK-07**: Root scripts expose build, dev, lint, type-check, and app-specific dev commands.

### Shared Packages

- [ ] **PKG-01**: Shared config package exports Tailwind, TypeScript, and ESLint base configuration.
- [ ] **PKG-02**: Shared types package exports merchant or partner, conversation, message, and knowledge base API types.
- [ ] **PKG-03**: Shared utils package exports Indonesian currency, WhatsApp number, date, and datetime formatters.
- [ ] **PKG-04**: Shared API client package exposes Axios client configuration with `NEXT_PUBLIC_API_URL`.
- [ ] **PKG-05**: Shared API client attaches JWT tokens from local storage to browser requests.
- [ ] **PKG-06**: Shared API client clears auth and redirects on 401 browser responses.
- [ ] **PKG-07**: Shared API client can return typed fixture data when `NEXT_PUBLIC_USE_FIXTURES=true`.
- [ ] **PKG-08**: Shared UI package exports Button, Input, Badge, and Avatar primitives.
- [ ] **PKG-09**: Shared Button supports primary, secondary, ghost, danger, and bot/otomatis variants using pill shape.
- [ ] **PKG-10**: Shared Badge supports `needs_reply`, `bot_handled`, and `waiting` conversation states.

### Brand System

- [ ] **BRAND-01**: Canonical Bubble Ripple logo renders as a reusable React component.
- [ ] **BRAND-02**: Logo supports default, white, mono, icon-only, and wordmark usage where appropriate.
- [ ] **BRAND-03**: App icon and favicon variants use the simplified Bubble Ripple treatment.
- [ ] **BRAND-04**: Tailwind design tokens include the full emerald brand palette and indigo accent palette.
- [ ] **BRAND-05**: Plus Jakarta Sans is the primary font for all product and marketing UI.
- [ ] **BRAND-06**: JetBrains Mono is available for knowledge-base/editor contexts.
- [ ] **BRAND-07**: Public copy uses lowercase `riplai` and avoids highlighting `ai` in the wordmark.
- [ ] **BRAND-08**: SMB-facing copy uses "admin otomatis", "jago balas", "penjawab 24 jam", and "tim siaga" instead of AI jargon.

### Public Web

- [ ] **WEB-01**: Public web root layout renders global fonts, navbar, footer, metadata, and Bahasa Indonesia language settings.
- [ ] **WEB-02**: Navbar renders logo, Fitur, Harga, Demo, Tentang, Masuk, and Coba Gratis actions.
- [ ] **WEB-03**: Navbar works on mobile through a hamburger or compact menu.
- [ ] **WEB-04**: Footer renders product, company, legal links, tagline, and 2026 copyright.
- [ ] **WEB-05**: Home hero communicates that WhatsApp can stay active 24 jam even while the owner sleeps.
- [ ] **WEB-06**: Home hero includes primary Coba Gratis CTA and secondary Lihat Demo CTA.
- [ ] **WEB-07**: Home page embeds an interactive WhatsApp-style demo chat.
- [ ] **WEB-08**: Demo chat supports at least three scripted exchanges relevant to clinics or SMB customer questions.
- [ ] **WEB-09**: Demo chat has hardcoded replies and does not call the backend.
- [ ] **WEB-10**: Home page explains the customer pain point of missed WhatsApp messages outside working hours.
- [ ] **WEB-11**: Home page shows six feature highlights with icons and two-line descriptions.
- [ ] **WEB-12**: Home page shows a three-step how-it-works section.
- [ ] **WEB-13**: Home page shows pricing preview with Gratis, Starter, Growth, and Custom tiers.
- [ ] **WEB-14**: Growth pricing tier is visually highlighted as the recommended or popular choice.
- [ ] **WEB-15**: Home page shows Indonesian SMB testimonial placeholders.
- [ ] **WEB-16**: Waitlist CTA opens an email capture modal without backend dependency.
- [ ] **WEB-17**: Waitlist modal stores local submission state or otherwise avoids a dead interaction.
- [ ] **WEB-18**: `/fitur` presents an expanded feature breakdown for Indonesian SMB audiences.
- [ ] **WEB-19**: `/harga` presents full pricing information and feature comparison.
- [ ] **WEB-20**: `/demo` presents the interactive chat demo as a standalone page.
- [ ] **WEB-21**: `/tentang` presents mission, story placeholder, values, and contact information.
- [ ] **WEB-22**: Public web app has no dependency on `@riplai/api-client`.

### Legal

- [ ] **LEGAL-01**: `/privacy` renders a Bahasa Indonesia privacy policy aligned to UU PDP framing.
- [ ] **LEGAL-02**: Privacy policy identifies Riplai with NIB and legal contact placeholders.
- [ ] **LEGAL-03**: Privacy policy explains partner data, WhatsApp conversation data, technical data, processing purposes, retention, third parties, security, cookies, and data subject rights.
- [ ] **LEGAL-04**: `/terms` renders Bahasa Indonesia terms and conditions.
- [ ] **LEGAL-05**: Terms explain account registration, service scope, billing, quotas, prohibited use, WhatsApp policy compliance, IP ownership, termination, liability limits, Indonesian law, and dispute process.
- [ ] **LEGAL-06**: Legal pages do not publish a personal name or home address.
- [ ] **LEGAL-07**: Legal copy keeps placeholders for `[NOMOR NIB]`, `[legal@riplai.id]`, and effective date until launch details are known.

### Partner App

- [ ] **PART-01**: Partner app scaffold uses port 3002 and the shared config package.
- [ ] **PART-02**: Partner app root layout loads global styles and fonts.
- [ ] **PART-03**: Partner app provides a login route.
- [ ] **PART-04**: Partner login form accepts email and password.
- [ ] **PART-05**: Successful login stores JWT token under `riplai_token`.
- [ ] **PART-06**: Protected partner routes redirect unauthenticated users to login.
- [ ] **PART-07**: Partner app provides inbox list route.
- [ ] **PART-08**: Partner app provides conversation thread route.
- [ ] **PART-09**: Inbox list shows customer WhatsApp number, preview, last-message time, and status badge.
- [ ] **PART-10**: Inbox list sorts conversations by last message time.
- [ ] **PART-11**: Conversation thread shows customer, bot, and owner message bubbles with correct alignment.
- [ ] **PART-12**: Bot messages are visually distinct from owner replies.
- [ ] **PART-13**: Partner can type and send a manual reply from the thread view.
- [ ] **PART-14**: Inbox data is loaded through TanStack Query from fixtures or real API endpoints.
- [ ] **PART-15**: Inbox can refresh through SSE when available or polling fallback when SSE is not ready.
- [ ] **PART-16**: Partner app provides analytics or dashboard route with usage and conversation stats.
- [ ] **PART-17**: Partner app shows reply-cap usage with threshold states.
- [ ] **PART-18**: Partner app provides knowledge-base route with readable business profile, products/services, FAQs, and promos.
- [ ] **PART-19**: Partner app provides settings route for profile, bot, plan, and notification controls.
- [ ] **PART-20**: Partner app includes forgot-password and reset-password routes before production auth is considered complete.
- [ ] **PART-21**: Partner app includes a first-run onboarding route or wizard if selected for launch.

### Admin App

- [ ] **ADMIN-01**: Admin app scaffold uses port 3003 and the shared config package.
- [ ] **ADMIN-02**: Admin app provides an authenticated login route.
- [ ] **ADMIN-03**: Admin app provides partners list route.
- [ ] **ADMIN-04**: Partners list shows tenant name, WhatsApp number, plan, status, and usage.
- [ ] **ADMIN-05**: Partners list supports search, filtering, or sorting sufficient for internal use.
- [ ] **ADMIN-06**: Admin app provides partner detail route.
- [ ] **ADMIN-07**: Partner detail shows knowledge base, conversation summary, plan/cap information, and manual overrides.
- [ ] **ADMIN-08**: Admin app provides onboarding route for creating a new partner and seeding initial knowledge base data.
- [ ] **ADMIN-09**: Admin app provides system health route for backend/stream/SSE operational visibility.
- [ ] **ADMIN-10**: Admin functionality prioritizes internal usefulness over public marketing polish.

### PWA and Production

- [ ] **PWA-01**: Partner app includes a web app manifest with name, short name, start URL, display mode, colors, and icons.
- [ ] **PWA-02**: Partner app includes 192x192 and 512x512 app icons.
- [ ] **PWA-03**: Partner app can be installed to a mobile home screen and open in standalone mode.
- [ ] **PROD-01**: Apps expose environment variables for API URL and fixture toggle.
- [ ] **PROD-02**: User-facing data screens show loading, empty, failed API, and offline states.
- [ ] **PROD-03**: Mobile layouts are checked at 375px and 390px widths.
- [ ] **PROD-04**: Deployment plan supports independently deploying changed apps.

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Marketing

- **MKT-01**: Public blog or article system exists for SEO/content marketing.
- **MKT-02**: Annual pricing discount toggle calculates actual annual totals.
- **MKT-03**: Custom plan CTA submits a structured contact form instead of mailto.

### Product

- **PROD2-01**: Partner knowledge base can be edited fully inside the partner UI.
- **PROD2-02**: Partner onboarding wizard guides users through WhatsApp connection and initial knowledge base setup.
- **PROD2-03**: Partner app supports dark mode as a user-facing feature.
- **PROD2-04**: Admin panel includes polished audit logs and advanced operational controls.
- **PROD2-05**: CI/CD selectively deploys only changed apps on push.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Backend API implementation | This repository is the frontend monorepo and should consume API contracts/fixtures. |
| Payment checkout | Pricing is marketing/waitlist/contact for MVP; no payment flow is planned yet. |
| Public personal identity/address | Legal strategy avoids publishing personal name or home address. |
| AI-heavy marketing language | SMB-facing copy should emphasize outcomes and familiar WhatsApp admin language. |
| Full admin design polish | Admin is internal; functionality comes first. |
| Dark mode for MVP | Tokens may exist, but full dark-mode UX is deferred. |
| Real analytics provider integration | Tool choice is undecided and affects cookie wording. |
| Meta/WhatsApp provider-specific policy detail | Provider is not decided yet, so legal copy must stay generic or placeholder-based. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| WORK-01 | Phase 1 | Pending |
| WORK-02 | Phase 1 | Pending |
| WORK-03 | Phase 1 | Pending |
| WORK-04 | Phase 1 | Pending |
| WORK-05 | Phase 1 | Pending |
| WORK-06 | Phase 1 | Pending |
| WORK-07 | Phase 1 | Pending |
| PKG-01 | Phase 2 | Pending |
| PKG-02 | Phase 2 | Pending |
| PKG-03 | Phase 2 | Pending |
| PKG-04 | Phase 2 | Pending |
| PKG-05 | Phase 2 | Pending |
| PKG-06 | Phase 2 | Pending |
| PKG-07 | Phase 2 | Pending |
| PKG-08 | Phase 2 | Pending |
| PKG-09 | Phase 2 | Pending |
| PKG-10 | Phase 2 | Pending |
| BRAND-01 | Phase 3 | Pending |
| BRAND-02 | Phase 3 | Pending |
| BRAND-03 | Phase 3 | Pending |
| BRAND-04 | Phase 3 | Pending |
| BRAND-05 | Phase 3 | Pending |
| BRAND-06 | Phase 3 | Pending |
| BRAND-07 | Phase 3 | Pending |
| BRAND-08 | Phase 3 | Pending |
| WEB-01 | Phase 4 | Pending |
| WEB-02 | Phase 4 | Pending |
| WEB-03 | Phase 4 | Pending |
| WEB-04 | Phase 4 | Pending |
| WEB-05 | Phase 5 | Pending |
| WEB-06 | Phase 5 | Pending |
| WEB-07 | Phase 5 | Pending |
| WEB-08 | Phase 5 | Pending |
| WEB-09 | Phase 5 | Pending |
| WEB-10 | Phase 5 | Pending |
| WEB-11 | Phase 5 | Pending |
| WEB-12 | Phase 5 | Pending |
| WEB-13 | Phase 5 | Pending |
| WEB-14 | Phase 5 | Pending |
| WEB-15 | Phase 5 | Pending |
| WEB-16 | Phase 5 | Pending |
| WEB-17 | Phase 5 | Pending |
| WEB-18 | Phase 6 | Pending |
| WEB-19 | Phase 6 | Pending |
| WEB-20 | Phase 6 | Pending |
| WEB-21 | Phase 6 | Pending |
| WEB-22 | Phase 4 | Pending |
| LEGAL-01 | Phase 7 | Pending |
| LEGAL-02 | Phase 7 | Pending |
| LEGAL-03 | Phase 7 | Pending |
| LEGAL-04 | Phase 7 | Pending |
| LEGAL-05 | Phase 7 | Pending |
| LEGAL-06 | Phase 7 | Pending |
| LEGAL-07 | Phase 7 | Pending |
| PART-01 | Phase 8 | Pending |
| PART-02 | Phase 8 | Pending |
| PART-03 | Phase 9 | Pending |
| PART-04 | Phase 9 | Pending |
| PART-05 | Phase 9 | Pending |
| PART-06 | Phase 9 | Pending |
| PART-07 | Phase 10 | Pending |
| PART-08 | Phase 10 | Pending |
| PART-09 | Phase 10 | Pending |
| PART-10 | Phase 10 | Pending |
| PART-11 | Phase 10 | Pending |
| PART-12 | Phase 10 | Pending |
| PART-13 | Phase 10 | Pending |
| PART-14 | Phase 10 | Pending |
| PART-15 | Phase 10 | Pending |
| PART-16 | Phase 11 | Pending |
| PART-17 | Phase 11 | Pending |
| PART-18 | Phase 11 | Pending |
| PART-19 | Phase 11 | Pending |
| PART-20 | Phase 9 | Pending |
| PART-21 | Phase 11 | Pending |
| ADMIN-01 | Phase 12 | Pending |
| ADMIN-02 | Phase 12 | Pending |
| ADMIN-03 | Phase 12 | Pending |
| ADMIN-04 | Phase 12 | Pending |
| ADMIN-05 | Phase 12 | Pending |
| ADMIN-06 | Phase 12 | Pending |
| ADMIN-07 | Phase 12 | Pending |
| ADMIN-08 | Phase 12 | Pending |
| ADMIN-09 | Phase 12 | Pending |
| ADMIN-10 | Phase 12 | Pending |
| PWA-01 | Phase 13 | Pending |
| PWA-02 | Phase 13 | Pending |
| PWA-03 | Phase 13 | Pending |
| PROD-01 | Phase 14 | Pending |
| PROD-02 | Phase 14 | Pending |
| PROD-03 | Phase 14 | Pending |
| PROD-04 | Phase 14 | Pending |

**Coverage:**
- v1 requirements: 89 total
- Mapped to phases: 89
- Unmapped: 0

---
*Requirements defined: 2026-05-14*
*Last updated: 2026-05-14 after initial definition*
