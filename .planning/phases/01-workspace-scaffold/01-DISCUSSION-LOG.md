# Phase 1: Workspace Scaffold - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-05-15
**Phase:** 1-Workspace Scaffold
**Areas discussed:** Scaffold depth, Initial app page behavior, Version strictness, Naming compatibility

---

## Scaffold Depth

| Option | Description | Selected |
|--------|-------------|----------|
| Full skeleton | Create all planned app/package directories, route stubs, and placeholder files so later phases fill content in place. | ✓ |
| Runnable minimum | Create only the files needed for apps/packages to build and run. | |
| Hybrid | Create route stubs for app pages, but delay lower-level component directories until their phase. | |

**User's choice:** Full skeleton
**Notes:** User also selected real route stubs, package manifests plus empty exports, layouts/globals for all apps, minimal source where meaningful, root `.env.example`, and basic README.

### Follow-up Decisions

| Question | Selected |
|----------|----------|
| Route files as real minimal pages or directory placeholders? | Real route stubs |
| Shared package completeness? | Package manifests plus empty exports |
| App layout files immediately? | Layouts now |
| Placeholder style? | Minimal source where meaningful; `.gitkeep` only for empty asset folders |
| Root environment examples? | Root `.env.example` |
| README setup instructions? | Basic README now |

---

## Initial App Page Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Styled health card | Each app renders a simple Tailwind card and calls `GET /health`, showing reachable/unreachable state. | ✓ |
| Static placeholder | Each app renders a static app placeholder with no API call. | |
| Mixed | `apps/web` static placeholder; partner/admin use health card. | |

**User's choice:** Styled health card
**Notes:** User selected app-local/inline health fetch logic, server component fetch, visible fallback on backend failure, and same card structure with app-specific labels.

### Follow-up Decisions

| Question | Selected |
|----------|----------|
| Shared helper or app-local code? | App-local helper or inline fetch |
| Server or client fetch? | Server component fetch |
| Health failure behavior? | Visible fallback card |
| Same copy structure across apps? | Same structure, app-specific labels |

---

## Version Strictness

| Option | Description | Selected |
|--------|-------------|----------|
| Pin current major ranges | Use stable major ranges such as `next:^16`, `react:^19`, `typescript:^5`, `tailwindcss:^4`, allowing patch/minor updates. | ✓ |
| Use `latest` | Follow original setup plan literally and use `latest`. | |
| Pin exact versions | Resolve and pin exact current versions in `package.json`. | |

**User's choice:** Pin current major ranges
**Notes:** User also selected exact `packageManager`, Node 24 pin files plus root `engines.node`, and installing dependencies with lockfile commit in Phase 1.

### Follow-up Decisions

| Question | Selected |
|----------|----------|
| Exact pnpm packageManager or latest? | Exact packageManager |
| Node 24 enforcement? | `.nvmrc`, `.node-version`, and `engines.node: ">=24"` |
| Install timing and lockfile? | Run `pnpm install` and commit `pnpm-lock.yaml` |

---

## Naming Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Partner-only in code | Use `apps/partner`, `@riplai/partner`, partner routes/types/comments; only old docs mention merchant. | ✓ |
| Partner code, merchant aliases | Use partner primary naming but add comments/aliases where older docs/API shapes say merchant. | |
| Keep merchant package/app names | Keep `apps/merchant` for compatibility with older plans. | |

**User's choice:** Partner-only in code
**Notes:** User selected Partner type names only, public UI avoiding internal `partner` terminology, and leaving historical docs unchanged.

### Follow-up Decisions

| Question | Selected |
|----------|----------|
| API type names? | Partner types only |
| Public/user-facing terminology? | Partner is internal only; use Indonesian business-friendly terms |
| Rewrite existing docs mentioning merchant? | Do not rewrite docs |

---

## the agent's Discretion

- Resolve exact current stable pnpm version while implementing Phase 1.
- Choose concise placeholder route copy and straightforward scaffold placement where docs do not prescribe exact text.

## Deferred Ideas

None.
