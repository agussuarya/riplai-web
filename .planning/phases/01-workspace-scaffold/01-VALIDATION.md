---
phase: 1
slug: workspace-scaffold
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-05-15
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual QA + package manager/build commands |
| **Config file** | none — no automated test framework in Phase 1 |
| **Quick run command** | `pnpm build` |
| **Full suite command** | `pnpm build && pnpm type-check` |
| **Estimated runtime** | ~60 seconds after dependencies are installed |

---

## Sampling Rate

- **After every task commit:** Run the task-specific file existence/source checks from the plan.
- **After every plan wave:** Run `pnpm build`.
- **Before `$gsd-verify-work`:** Run `pnpm build && pnpm type-check`; manually open each app or confirm each dev script starts on its expected port.
- **Max feedback latency:** 120 seconds after dependency install.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | WORK-01, WORK-02, WORK-06, WORK-07 | — | N/A | source/CLI | `test -f package.json && test -f pnpm-workspace.yaml && test -f turbo.json && test -f tsconfig.json` | ✅ | ⬜ pending |
| 01-01-02 | 01 | 1 | WORK-01 | — | N/A | source/CLI | `test -f .nvmrc && test -f .node-version && rg '\"node\": \">=24\"' package.json` | ✅ | ⬜ pending |
| 01-01-03 | 01 | 1 | WORK-07 | — | N/A | source/CLI | `rg '\"dev:web\"|\"dev:partner\"|\"dev:admin\"|\"build\"|\"type-check\"' package.json` | ✅ | ⬜ pending |
| 01-02-01 | 02 | 2 | WORK-06 | — | N/A | source/CLI | `test -f packages/config/package.json && test -f packages/types/src/index.ts && test -f packages/utils/src/index.ts && test -f packages/api-client/src/index.ts && test -f packages/ui/src/index.ts` | ✅ | ⬜ pending |
| 01-03-01 | 03 | 3 | WORK-03, WORK-04, WORK-05 | — | N/A | source/CLI | `test -f apps/web/app/page.tsx && test -f apps/partner/app/page.tsx && test -f apps/admin/app/page.tsx` | ✅ | ⬜ pending |
| 01-03-02 | 03 | 3 | WORK-01, WORK-02 | — | N/A | CLI | `pnpm install && pnpm build && pnpm type-check` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers this phase. No automated test framework is required because the root `SPEC.md` explicitly says no automated tests and manual QA only.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| App dev servers start on expected ports | WORK-03, WORK-04, WORK-05 | Dev server startup and browser rendering are environment-dependent | Run `pnpm dev:web`, `pnpm dev:partner`, and `pnpm dev:admin`; confirm ports 3001, 3002, and 3003 render health cards. |
| Backend unavailable fallback renders | WORK-03, WORK-04, WORK-05 | Requires observing page behavior when API is not running | Stop the API on port 8080, open each app home page, and confirm the card says backend/API health is unreachable without crashing. |
| Partner-only naming | WORK-04 | Source scan is partly automated, but docs have historical merchant mentions that should be ignored | Run `rg 'apps/merchant|@riplai/merchant|Merchant|MerchantUsage' apps packages package.json pnpm-workspace.yaml tsconfig.json` after implementation; any match in new code must be fixed unless intentionally in historical docs. |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 120s after dependency install
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
