# Phase 1: Workspace Scaffold - Research

**Phase:** 1 - Workspace Scaffold
**Date:** 2026-05-15
**Status:** Research complete

## Research Question

What does the planner need to know to create an executable scaffold plan for the Riplai frontend monorepo?

## Key Findings

### 1. Phase 1 is a scaffold contract, not a feature implementation

The phase should create the root workspace and runnable shells only. It should not implement the behavior owned by later phases:

- No shared API client behavior beyond empty exports.
- No UI component implementations beyond what is needed for minimal app stubs.
- No landing page sections, auth flows, inbox, admin CRUD, or PWA behavior.
- No rewrite of historical docs that still say `merchant`.

The plan should preserve this boundary because Phase 2 owns shared packages and Phase 4+ own public web implementation.

### 2. Use `partner` naming in new code

The canonical direction is now partner-only in code:

- App directory: `apps/partner`
- Package name: `@riplai/partner`
- Future types: `Partner`, `PartnerUsage`
- Future API path language: `/partner`

Public-facing UI copy should not say "partner"; use Indonesian business-friendly language like `bisnis`, `pemilik bisnis`, `akun`, and `dashboard`.

### 3. Package versions should be major ranges, but pnpm should be exact

Current npm registry metadata confirms the active major lines match the project direction:

| Package | Registry latest checked | Planning implication |
|---------|--------------------------|----------------------|
| `next` | `16.2.6` | Use `^16` range for app dependencies. |
| `react` | React 19 latest line | Use `^19` for `react` and `react-dom`. |
| `tailwindcss` | Tailwind 4 latest line | Use `^4` for Tailwind packages. |
| `turbo` | Turbo 2 latest line in public package listings | Use `^2` unless direct registry lookup during implementation shows a newer stable major. |
| `pnpm` | `11.1.2` | Use an exact `packageManager`, e.g. `pnpm@11.1.2` if still current when executed. |

The executor should verify exact current versions at implementation time with:

```bash
npm view pnpm version
npm view next version
npm view react version
npm view react-dom version
npm view turbo version
npm view tailwindcss version
npm view @tailwindcss/postcss version
```

Then write package manifests using major ranges for dependencies/devDependencies and an exact packageManager value for pnpm.

### 4. Next.js server-component health cards are enough for scaffold verification

Each app should render a server component home page that attempts `GET ${NEXT_PUBLIC_API_URL}/health`. This keeps Phase 1 simple:

- No client hydration required for health state.
- No shared API client needed.
- Backend unavailability should be rendered as a visible fallback, not thrown as a page error.
- The build should still pass when the backend is unavailable.

Recommended card fields:

- App name (`Riplai Web`, `Riplai Partner`, `Riplai Admin`)
- Port (`3001`, `3002`, `3003`)
- API URL from `NEXT_PUBLIC_API_URL`, defaulting to `http://localhost:8080`
- Status: reachable/unreachable
- A short note that this is scaffold health only

### 5. Tailwind v4 scaffold should stay minimal

Tailwind v4 does not require the same config-heavy setup as older versions for basic styling. For Phase 1, prefer the smallest working setup:

- `app/globals.css` in each app with `@import "tailwindcss";`
- Add `@tailwindcss/postcss` only if the chosen Next/Tailwind setup requires explicit PostCSS config during implementation.
- Defer shared design tokens to Phase 3 unless minimal tokens are required for the health-card styling.

### 6. Workspace packages should resolve without containing behavior

Phase 1 shared packages should have:

- `package.json`
- `src/index.ts`
- empty exports or placeholder named exports only where TypeScript requires non-empty modules

Do not implement `Button`, `Input`, `Badge`, `Avatar`, formatters, Axios client, or API endpoints in Phase 1. Those belong to Phase 2 and later.

### 7. Verification should focus on install, type/build wiring, and app bootability

Phase 1 should include concrete verification commands:

- `pnpm install` creates `pnpm-lock.yaml`
- `pnpm build` exits 0
- `pnpm type-check` exits 0 if the script is included and all packages/apps support it
- `pnpm dev:web`, `pnpm dev:partner`, and `pnpm dev:admin` start on expected ports
- App pages render their health fallback when the backend is not running

Since the root `SPEC.md` says no automated tests and manual QA only, do not introduce Jest/Vitest/Playwright in this phase.

## Recommended Plan Shape

Use three plans in sequential waves:

1. **Root workspace and documentation** — Node/pnpm pins, root manifests, workspace/turbo/tsconfig, `.gitignore`, `.env.example`, README.
2. **Shared package skeletons** — Create `packages/config`, `packages/types`, `packages/utils`, `packages/api-client`, `packages/ui` with manifests and empty exports.
3. **App skeletons and health cards** — Create `apps/web`, `apps/partner`, `apps/admin`, layouts/globals/routes/public placeholders, server-rendered health cards, then install and verify.

This keeps root/package/app concerns isolated while preserving the user’s sequential execution preference.

## Validation Architecture

Phase 1 validation is command-driven and manual-observation driven. There is no automated test framework in scope.

| Dimension | Validation |
|-----------|------------|
| Workspace install | `pnpm install` creates `pnpm-lock.yaml` and exits 0. |
| Build | `pnpm build` exits 0. |
| Type check | `pnpm type-check` exits 0 if configured. |
| Script availability | Root `package.json` contains `dev`, `build`, `lint`, `type-check`, `dev:web`, `dev:partner`, `dev:admin`. |
| App ports | `pnpm dev:web`, `pnpm dev:partner`, `pnpm dev:admin` start on 3001, 3002, 3003. |
| Health fallback | With no backend running, each app page renders a reachable page with an unreachable-health message. |
| Naming | No new code path uses `apps/merchant`, `@riplai/merchant`, `Merchant`, or `MerchantUsage`. |

## Risks and Pitfalls

- **Overbuilding shared packages:** Implementing API client/UI/utils now would steal scope from Phase 2.
- **Using `latest`:** The user explicitly rejected `latest` dependency strings.
- **Skipping lockfile:** The user explicitly wants `pnpm install` and `pnpm-lock.yaml` committed.
- **Accidental merchant naming:** Older docs contain merchant terms, but Phase 1 code must use partner.
- **Backend dependency fragility:** Health cards must not break the app when `localhost:8080` is unavailable.
- **Tailwind v4 config churn:** Avoid adding legacy Tailwind v3 patterns unless the installed v4 tooling requires them.

## Source Notes

- npm registry latest endpoint for `pnpm` reported `11.1.2` and Node engine `>=22.13` on 2026-05-15.
- npm registry latest endpoint for `next` reported `16.2.6` and Node engine `>=20.9.0` on 2026-05-15.
- npm package listing for `tailwindcss` showed active 4.x releases on 2026-05-15.
- npm package listing for `turbo` showed active 2.x releases in public listings; executor should still verify with `npm view turbo version` before writing manifests.

## RESEARCH COMPLETE
