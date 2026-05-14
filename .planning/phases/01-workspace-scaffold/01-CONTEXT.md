# Phase 1: Workspace Scaffold - Context

**Gathered:** 2026-05-15
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 delivers the root Turborepo scaffold for the Riplai frontend monorepo. It should create the workspace, app/package directory structure, app route stubs, root scripts, dependency manifests, basic setup docs, root environment example, and minimal runnable app home pages for `apps/web`, `apps/partner`, and `apps/admin`.

This phase does not implement shared package behavior, landing page content, auth, inbox, admin workflows, PWA behavior, or production polish. It creates the stable skeleton that later phases fill in.

</domain>

<decisions>
## Implementation Decisions

### Scaffold Depth
- **D-01:** Use a full skeleton, not a minimal scaffold. Create all planned app/package directories, route stubs, and placeholder files needed by later phases.
- **D-02:** Planned routes should be real minimal `page.tsx` route stubs, not directory-only placeholders.
- **D-03:** Shared packages should include package manifests plus empty source exports (`src/index.ts`) so workspace imports can resolve later.
- **D-04:** All apps should include `app/layout.tsx` and `app/globals.css` during Phase 1.
- **D-05:** Use minimal source files where meaningful (`page.tsx`, `layout.tsx`, `index.ts`). Use `.gitkeep` only for empty asset folders such as `public/`.
- **D-06:** Add a root `.env.example` documenting `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_USE_FIXTURES`.
- **D-07:** Add a basic root `README.md` with install/dev/build commands and the app port map.

### Initial App Page Behavior
- **D-08:** Each app home page should render a styled health card.
- **D-09:** Health cards should use app-local or inline server-side fetch logic in Phase 1. Do not implement or depend on `@riplai/api-client` yet.
- **D-10:** Health checks should run from server components during page render.
- **D-11:** If the backend is unavailable, pages should still render a visible fallback card that says the backend is unreachable and shows the expected `NEXT_PUBLIC_API_URL`.
- **D-12:** All three app home pages should use the same card structure with app-specific labels, port, API URL, and health status.

### Version Strictness
- **D-13:** Use current major dependency ranges rather than `latest` strings. Examples: `next:^16`, `react:^19`, `typescript:^5`, `tailwindcss:^4`.
- **D-14:** Use an exact `packageManager` value for pnpm. The planner/executor should resolve the current stable pnpm version during implementation instead of writing `pnpm@latest`.
- **D-15:** Enforce Node 24 with `.nvmrc`, `.node-version`, and `engines.node: ">=24"` in the root `package.json`.
- **D-16:** Phase 1 should run `pnpm install`, generate `pnpm-lock.yaml`, and include the lockfile in the Phase 1 commit.

### Naming Compatibility
- **D-17:** Use partner-only naming in code: `apps/partner`, `@riplai/partner`, partner routes, partner type names, and partner comments.
- **D-18:** Future API type names should use `Partner`, `PartnerUsage`, and `/partner` naming rather than older merchant names.
- **D-19:** `partner` is internal/code terminology only. Public UI copy should use Indonesian business-friendly terms such as `bisnis`, `pemilik bisnis`, `akun`, and `dashboard`.
- **D-20:** Do not rewrite historical planning docs that still mention `merchant`; leave them as source history. New planning artifacts and code should use partner naming.

### the agent's Discretion
- Resolve exact current stable pnpm version while implementing Phase 1.
- Choose concise placeholder copy for route stubs as long as it follows the app-specific health-card structure and public-copy naming rules.
- Choose straightforward file organization inside the scaffold when existing docs do not prescribe exact placeholder placement.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Locked Project Context
- `.planning/PROJECT.md` — Project scope, core value, active requirements, constraints, and locked terminology/brand decisions.
- `.planning/REQUIREMENTS.md` — Phase 1 requirement IDs `WORK-01` through `WORK-07` and cross-phase requirement context.
- `.planning/ROADMAP.md` — Phase 1 goal, success criteria, and sequencing relative to later phases.
- `.planning/STATE.md` — Current phase state and workflow gates.
- `SPEC.md` — Root project spec with global constraints, interfaces, invariants, and task list. Treat Phase 1 task `T1` and invariants `V11`, `V12` as directly relevant.

### Phase 1 Setup Source
- `docs/plans/2026-05-11-frontend-setup.md` — Primary scaffold source: folder structure, root files, package manifests, app routes, ports, environment variables, and terminology correction.
- `docs/plans/2026-05-05-web-plan.md` — Broad frontend phase map and cross-repo contracts; useful for ensuring scaffold directories match later planned phases.

### Brand and Naming Context
- `docs/plans/2026-05-14-design-system.md` — Partner naming decision, design token expectations, and missing page inventory that affects route stubs.
- `docs/plans/2026-05-14-landing-page-plan.md` — Public web route inventory and landing app file structure to stub.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet. The repository currently contains planning artifacts and specs, not app/package implementation code.

### Established Patterns
- Planning docs consistently define a pnpm/Turborepo workspace with `apps/*` and `packages/*`.
- The newest design-system and setup docs prefer `apps/partner` over older `apps/merchant` naming.
- Phase 1 should set up for Tailwind v4 and strict TypeScript, but actual shared package behavior belongs to Phase 2.

### Integration Points
- Root workspace files connect all future apps and packages.
- `apps/web` must later become the public marketing site on port 3001.
- `apps/partner` must later become the mobile-first PWA on port 3002.
- `apps/admin` must later become the internal admin panel on port 3003.
- Shared package imports should be resolvable after Phase 1 even if implementations are empty.

</code_context>

<specifics>
## Specific Ideas

- Every app home page should use a consistent health-card scaffold with app-specific labels.
- Backend health checks should degrade gracefully when `localhost:8080` is not running.
- Historical docs are allowed to remain inconsistent with current partner naming; code and new artifacts should not be.

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope.

</deferred>

---

*Phase: 1-Workspace Scaffold*
*Context gathered: 2026-05-15*
