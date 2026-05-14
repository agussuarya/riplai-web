# Riplai Web

## What This Is

Riplai is a WhatsApp-focused admin otomatis for Indonesian small and medium businesses. It gives clinics, shops, F&B businesses, villas, homestays, and similar operators a penjawab 24 jam that answers customer questions from the business' own data and hands off to the owner when needed.

This repository is the frontend Turborepo for Riplai: the public landing site, partner PWA, admin panel, and shared frontend packages. The immediate work is to scaffold the monorepo and ship a polished Indonesian landing site that can be shared in outreach DMs before the full partner product is complete.

## Core Value

Customers get fast, accurate WhatsApp replies from the business' data while the owner stays in control without being glued to their phone.

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Scaffold a strict TypeScript Turborepo with `apps/web`, `apps/partner`, `apps/admin`, and shared packages for config, types, utils, API client, and UI.
- [ ] Build `apps/web` as the public marketing site for `riplai.id`, with Bahasa Indonesia copy for non-technical SMB owners.
- [ ] Implement the locked Bubble Ripple logo and Riplai design system across shared UI and web surfaces.
- [ ] Ship the landing site home page with hero, value proposition, interactive WhatsApp-style demo chat, features, how-it-works, pricing preview, testimonials, and waitlist CTA.
- [ ] Ship P0 marketing routes: `/fitur`, `/harga`, `/demo`, `/privacy`, and `/terms`.
- [ ] Include legal pages that are suitable for a solopreneur/NIB launch, with public copy that identifies Riplai without exposing a personal address.
- [ ] Build partner app foundations for auth, protected layout, inbox, dashboard or analytics, knowledge base, and settings routes.
- [ ] Build admin app foundations for authenticated internal management, partner list/detail, onboarding, and system health routes.
- [ ] Implement shared frontend primitives for buttons, inputs, badges, avatars, formatting utilities, typed API contracts, fixtures, and API client endpoints.
- [ ] Use fixtures so frontend work can proceed before the backend API is ready.
- [ ] Prepare the partner app as a mobile-first PWA that merchants can install on their phone home screen.
- [ ] Verify all apps build and run on their assigned local ports.

### Out of Scope

- Backend API implementation - this repo consumes API contracts and fixtures only.
- Payment processing - pricing cards and CTAs are marketing/waitlist/contact flows for MVP.
- Public founder identity or home address - legal pages use Riplai/NIB/contact email wording.
- Heavy AI branding in SMB-facing copy - the word "AI" is avoided in favor of "admin otomatis", "jago balas", "penjawab 24 jam", and "tim siaga".
- Full dark mode in MVP - dark tokens exist in the design system, but dark mode is not a launch requirement.
- Blog content - footer/blog references are placeholders unless explicitly prioritized later.
- Admin polish beyond functional internal workflows - admin is for internal use first.
- Partner knowledge base editing in MVP UI - initial plan favors read-only KB for partners, with updates handled through other flows.

## Context

The source planning material lives in `docs/plans/`:

- `2026-05-05-web-plan.md` defines the broad frontend phase map: shared packages, landing page, partner auth, inbox, dashboard, admin panel, PWA, and production polish.
- `2026-05-11-frontend-setup.md` defines the Turborepo scaffold, package structure, app ports, API fixture strategy, and terminology correction from `merchant` to `partner`.
- `2026-05-14-landing-page-plan.md` defines the full `apps/web` marketing site, pricing placeholders, legal strategy, demo chat script, page inventory, and implementation order.
- `2026-05-14-design-system.md` defines brand identity, color system, typography, component specs, partner/admin layouts, missing page inventory, and unresolved launch questions.
- `2026-05-14-logo-concepts.html` locks the Bubble Ripple logo direction and canonical SVG paths.
- `2026-05-14-design-preview.html` provides the visual prototype for the partner dashboard, landing page, and component library.

The product is tightly tied to WhatsApp. The UI should nod to WhatsApp through an emerald primary palette and chat patterns without copying WhatsApp's exact brand green or interface wholesale.

The public web app must communicate value quickly to Indonesian SMB owners. The first screen should show the actual product behavior through an interactive demo chat rather than a decorative hero image.

The partner app is mobile-first and operational. Its most important surface is the inbox: conversation list, status badges, message thread, bot/owner/customer bubbles, manual reply form, and real-time or polling refresh.

## Constraints

- **Runtime**: Node.js 24, pinned through `.nvmrc` and `.node-version`.
- **Package manager**: pnpm workspace with Turborepo.
- **Framework**: Next.js latest, TypeScript strict, Tailwind CSS v4.
- **State/data**: TanStack Query v5 and Zustand v5 for the partner app.
- **API client**: Axios with `NEXT_PUBLIC_API_URL`, JWT interceptor, fixture toggle through `NEXT_PUBLIC_USE_FIXTURES`.
- **Ports**: `apps/web` on 3001, `apps/partner` on 3002, `apps/admin` on 3003, backend API expected at 8080.
- **Language**: Public marketing and legal pages are in Bahasa Indonesia.
- **Brand voice**: Conversational, simple, SMB-specific, outcome-focused, and low-jargon.
- **Brand identity**: Lowercase `riplai`; Plus Jakarta Sans; Bubble Ripple mark; emerald primary with indigo bot/otomatis accent.
- **UI shape**: Buttons are pill-shaped with `rounded-full`; inputs use rounded rectangular shapes for readability.
- **Legal**: Privacy and terms must include NIB/contact placeholders and avoid publishing a personal address.
- **Backend dependency**: Frontend should build ahead of API readiness by using typed fixtures.
- **Cross-repo contracts**: Mirror backend Go response shapes manually in `packages/types` at the start of each API phase that introduces endpoints.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use a Turborepo monorepo with `apps/*` and `packages/*` | Keeps the landing site, partner PWA, admin panel, and shared primitives aligned while allowing separate app builds | - Pending |
| Rename the merchant app concept to `apps/partner` | The design-system plan standardizes terminology on partner rather than merchant | - Pending |
| Build `apps/web` before backend-dependent surfaces | The landing page has zero backend dependency and can be used immediately for outreach | - Pending |
| Use fixtures in `packages/api-client` | Allows auth, inbox, dashboard, and admin UI work to proceed before API endpoints are complete | - Pending |
| Lock Bubble Ripple as the final logo | It expresses the "ripple" in Riplai and avoids generic AI/spark imagery | - Pending |
| Avoid "AI" in SMB-facing copy | Target users respond better to plain benefits and familiar language | - Pending |
| Use Plus Jakarta Sans | Indonesian-designed font that fits the warm, credible SMB brand direction | - Pending |
| Use emerald as primary and indigo as bot/otomatis accent | Emerald connects to WhatsApp context without copying WhatsApp exactly; indigo separates bot states | - Pending |
| Make legal pages public before launch | Privacy and terms are required before collecting partner/user data | - Pending |
| Keep admin functional over polished for MVP | Admin is internal and should reduce manual database work first | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-14 after initialization*
