---
phase: 01-workspace-scaffold
plan: 01
subsystem: infra
tags: [pnpm, turbo, typescript, workspace]
requires: []
provides:
  - Root pnpm workspace metadata
  - Turborepo task graph
  - Node 24 runtime pins
  - Setup README and public env example
affects: [workspace, apps, packages]
tech-stack:
  added: [pnpm, turbo, typescript]
  patterns:
    - Root scripts delegate build, dev, lint, and type-check to Turborepo.
    - Root TypeScript config uses project references only.
key-files:
  created:
    - .nvmrc
    - .node-version
    - .gitignore
    - package.json
    - pnpm-workspace.yaml
    - turbo.json
    - tsconfig.json
    - .env.example
    - README.md
  modified: []
key-decisions:
  - "Pinned Node 24 through both version files and root engines."
  - "Resolved packageManager to exact pnpm@11.1.2 instead of using latest."
  - "Kept workspace globs limited to apps/* and packages/*."
patterns-established:
  - "Root scripts use app package filters for per-app development commands."
  - "Environment defaults document only NEXT_PUBLIC_* placeholder values."
requirements-completed:
  - WORK-01
  - WORK-02
  - WORK-06
  - WORK-07
duration: 6 min
completed: 2026-05-14
---

# Phase 1 Plan 01: Root Workspace Summary

**pnpm/Turborepo root scaffold with Node 24 pins, project references, exact package manager metadata, and setup docs**

## Performance

- **Duration:** 6 min
- **Started:** 2026-05-14T16:20:07Z
- **Completed:** 2026-05-14T16:26:46Z
- **Tasks:** 4
- **Files modified:** 9

## Accomplishments

- Added Node 24 runtime pins and generated-file ignore rules.
- Created the root package, Turborepo task graph, workspace globs, and TypeScript references.
- Documented public environment defaults, install commands, app dev commands, build/type-check commands, and service ports.

## Task Commits

Each task was committed atomically:

1. **Task 1: Pin runtime and ignore generated files** - `ae6370a` (chore)
2. **Task 2: Create root package and Turborepo scripts** - `59f47e0` (chore)
3. **Task 3: Define workspace and TypeScript references** - `52902c9` (chore)
4. **Task 4: Add environment and setup documentation** - `24bc273` (docs)

## Files Created/Modified

- `.nvmrc` - Pins local Node runtime to version 24.
- `.node-version` - Pins local Node runtime to version 24 for compatible tools.
- `.gitignore` - Ignores generated dependencies, build output, local env files, and OS metadata.
- `package.json` - Defines root scripts, engines, exact pnpm package manager, and root dev dependencies.
- `turbo.json` - Defines root build, dev, lint, and type-check tasks.
- `pnpm-workspace.yaml` - Limits workspace package discovery to apps and packages.
- `tsconfig.json` - Registers project references for all planned apps and shared packages.
- `.env.example` - Documents public API URL and fixture toggle defaults.
- `README.md` - Provides setup, dev, build/type-check, and port map instructions.

## Decisions Made

- Used `pnpm@11.1.2`, resolved from the npm registry during execution.
- Preserved `partner` naming in root workspace references and app filters.
- Kept README setup-focused so later architecture and product phases can own deeper documentation.

## Deviations from Plan

None - plan executed exactly as written.

**Total deviations:** 0 auto-fixed. **Impact:** No scope changes.

## Issues Encountered

- Initial sandboxed `npm view pnpm version` failed with registry DNS access blocked. Network escalation was requested and approved; the resolved version was `11.1.2`.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Ready for Plan 02. The root workspace now references the five shared package paths that Plan 02 will create.

## Self-Check: PASSED

- `node -e "require('./package.json'); require('./turbo.json'); require('./tsconfig.json')"` passed.
- `rg 'pnpm@latest|"latest"' package.json` returned no matches.
- `rg 'apps/merchant|@riplai/merchant|MerchantUsage|\bMerchant\b' package.json pnpm-workspace.yaml tsconfig.json README.md .env.example` returned no matches.
- `.nvmrc`, `.node-version`, `.env.example`, and `README.md` contain the exact planned values.

---
*Phase: 01-workspace-scaffold*
*Completed: 2026-05-14*
