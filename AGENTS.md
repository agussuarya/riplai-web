<!-- GSD:project-start source:PROJECT.md -->
## Project

**Riplai Web**

Riplai is a WhatsApp-focused admin otomatis for Indonesian small and medium businesses. It gives clinics, shops, F&B businesses, villas, homestays, and similar operators a penjawab 24 jam that answers customer questions from the business' own data and hands off to the owner when needed.

This repository is the frontend Turborepo for Riplai: the public landing site, partner PWA, admin panel, and shared frontend packages. The immediate work is to scaffold the monorepo and ship a polished Indonesian landing site that can be shared in outreach DMs before the full partner product is complete.

**Core Value:** Customers get fast, accurate WhatsApp replies from the business' data while the owner stays in control without being glued to their phone.

### Constraints

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
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
