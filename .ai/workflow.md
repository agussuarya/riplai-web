# AI Prompting Workflow

> Build prompting skill + ship good software at the same time.

```
Your thinking  →  spec quality  →  AI output quality
```

---

## Setup for a New Project

Templates live here in `claude-config`. Each project only needs `context.md` and `features/`.

**1. Create project `.ai/` structure:**
```bash
mkdir -p .ai/features
```

**2. Copy `context.md` template and fill it in:**
```bash
cp ~/path/to/claude-config/prompting/templates/context.md .ai/context.md
```

**3. For each new feature, copy templates:**
```bash
FEATURE=".ai/features/YYYY-MM-DD-NNN-feature-name"
mkdir -p $FEATURE
cp ~/path/to/claude-config/prompting/templates/spec.md $FEATURE/
cp ~/path/to/claude-config/prompting/templates/review.md $FEATURE/
cp ~/path/to/claude-config/prompting/templates/plan.md $FEATURE/
cp ~/path/to/claude-config/prompting/templates/handoff.md $FEATURE/
# only if outside your domain:
cp ~/path/to/claude-config/prompting/templates/domain-recon.md $FEATURE/
```

**Project `.ai/` structure (no templates folder — lives in claude-config):**
```
.ai/
├── context.md                          ← project-specific, stays here
└── features/
    └── YYYY-MM-DD-NNN-feature-name/
        ├── domain-recon.md             ← step 0 (outside domain only)
        ├── spec.md                     ← step 2
        ├── review.md                   ← step 3
        ├── plan.md                     ← step 4
        └── handoff.md                  ← step 5
```

---

## Steps Overview

| # | Step | Who | Output |
|---|------|-----|--------|
| 0 | Domain Recon *(outside your domain only)* | AI teaches, you absorb | Notes → `context.md` |
| 1 | Context | You, once | `context.md` |
| 2 | Spec | You | `spec.md` (status: draft) |
| 3 | Review | AI drafts, you finalize | `review.md` + `spec.md` (status: final) |
| 4 | Plan | AI generates, you adjust | `plan.md` |
| 5 | Handoff | You assemble | `handoff.md` |
| 6 | Execute | AI codes, you gate per task | Working code |
| 7 | Verify | You test, AI fixes | Shipped + updated `context.md` |

Steps 1–2: your thinking, no AI.
Steps 3–4: AI assists, you decide.
Step 5: you assemble.
Steps 6–7: AI executes, you verify and log.

---

## Folder Structure

**claude-config (this repo) — source of truth:**
```
prompting/
├── workflow.md
└── templates/
    ├── context.md
    ├── domain-recon.md
    ├── spec.md
    ├── review.md
    ├── plan.md
    └── handoff.md
```

**Each project repo:**
```
.ai/
├── context.md                          ← project-specific
└── features/
    └── YYYY-MM-DD-NNN-feature-name/    ← date + global sequence
        ├── domain-recon.md             ← step 0 (outside domain only)
        ├── spec.md                     ← step 2
        ├── review.md                   ← step 3
        ├── plan.md                     ← step 4
        └── handoff.md                  ← step 5 (living doc)
```

- `.ai/` — dotfolder (like `.github`). Use `ai/` if you prefer it visible.
- `YYYY-MM-DD-NNN` — date started + global sequence. Example: `2026-05-17-003-waitlist-modal`

---

## Step 0 — Domain Recon *(skip if in your domain)*

**Who:** AI teaches, you absorb
**When:** Before Step 1, only if unfamiliar with the tech
**Output:** Notes added to `context.md`

Run these 3 prompts in order. Read and absorb before writing anything.

**Prompt 1 — Best practices + common mistakes:**
```
I am a [role] building [feature] using [tech].
I know [what you know] but unfamiliar with [what you don't].

Give me:
- 5 most important best practices for this
- 3 most common mistakes from my background
- What to include in my spec I might not think of
- Standard pattern with minimal example

Specific to [tech]. No generic advice.
```

**Prompt 2 — Standard pattern for your feature:**
```
I need to build [feature] in [tech].
What is the standard pattern? Minimal example — structure only, no boilerplate.
```

**Prompt 3 — Populate context.md:**
```
What should I add to this context.md for [tech] best practices?
Leave "Common AI Mistakes Here" empty.

@.ai/context.md
```

**After:** Add what you learned to `context.md` before writing the spec.

**How steps change outside your domain:**

- Step 2: Mark unknowns with `[?]` — e.g. `"Error display — inline or toast? [?]"`
- Step 3: Add to review prompt → `"I am a [role] outside my domain. Also review for domain best practices I likely missed."`
- Step 7: Before manual test, run → `"Review this code for [tech] best practices. Flag violations. Bullet list only."`

### Example

```
I am a backend engineer (Go/PostgreSQL) building a waitlist modal
in Next.js 16, TypeScript strict, Tailwind v4.
I know HTTP and API design but not React state patterns.

Give me the 5 best practices for React form components, 3 mistakes
backend engineers make, and the standard controlled form pattern.
```

---

## Step 1 — Context

**Who:** You
**When:** Once at project start. Update after Step 7 (new AI mistakes) or when stack changes.
**Template:** `.ai/templates/` → edit `context.md` directly

Not auto-loaded — referenced via `@.ai/context.md` in Steps 3, 4, 5.

> AI can draft it: give AI your `package.json`, folder structure, config files + the template. Review and add conventions and rules yourself — AI won't know these.

**Draft prompt:**
```
Draft context.md from these project files using the template below.
Leave "Common AI Mistakes Here" empty.

[paste context.md template]
[paste package.json]
[paste folder structure]
```

### Template

```markdown
## Project
[one sentence — what this product does]

## Stack
- Framework: ...
- Styling: ...
- Auth / DB: ...
- Deployment: ...

## File Conventions
- Components: ...
- Routes: ...
- API calls: ...

## Rules (non-negotiable)
- ...

## Common AI Mistakes Here
- AI does X — always use Y
```

### Example

```markdown
## Project
WhatsApp AI chatbot SaaS for Indonesian SMBs — landing + partner dashboard + admin.

## Stack
- Next.js 16, TypeScript strict, Tailwind v4, pnpm, Turborepo
- apps/web (3001), apps/partner (3002), apps/admin (3003)
- Backend API at localhost:8080 — toggle fixtures via NEXT_PUBLIC_USE_FIXTURES

## File Conventions
- Components: PascalCase, co-located with page if single-use
- UI copy: Indonesian (headings, labels, CTAs)
- API calls: always via packages/api-client, never raw fetch() in components

## Rules (non-negotiable)
- Buttons always rounded-full — never rounded-lg
- apps/web has no @riplai/api-client — static only
- Deps pinned to major (^N) — never "latest"
- brand-500 = #10B981, accent-500 = #6366F1 — never swapped

## Common AI Mistakes Here
- Uses rounded-lg on buttons → always rounded-full
- Imports api-client into apps/web → forbidden, static only
- Generates English UI copy → must be Indonesian
```

---

## Step 2 — Spec

**Who:** You (manual)
**When:** Before any code or AI session. 10–20 min. Longer = feature too big, split it.
**Template:** copy `.ai/templates/spec.md` → `.ai/features/YYYY-MM-DD-NNN-[name]/spec.md`

Keep `context.md` open as reference — don't paste it. No AI in this step.

> AI draft option: paste context + rough idea → ask AI to draft → rewrite it yourself. Never accept blindly.

### Template

```markdown
# Spec: [Feature Name]
> Status: draft

## Goal
[one sentence — what and why]

## User Story
As a [user], I want to [action] so that [outcome].

## Inputs
- ...

## Outputs
- ...

## UI / Behavior
- ...

## Constraints
- Must NOT: ...
- Must: ...

## Out of Scope
- ...
```

Status lifecycle: `draft` (Step 2) → `final — reviewed YYYY-MM-DD` (Step 3, after accepted findings merged in).

### Example

```markdown
# Spec: Waitlist Modal
> Status: draft

## Goal
Capture email + WhatsApp from visitors who click "Daftar Sekarang".

## User Story
As an SMB owner, I want to join the waitlist so I get notified when riplai launches.

## Inputs
- Email (required)
- WhatsApp (required, Indonesian format: 08xx or +62xx)
- Business name (optional)

## Outputs
- POST /waitlist → { email, whatsapp, business_name }
- Success: thank-you message, modal closes after 2s
- Error: inline message, modal stays open

## UI / Behavior
- Triggered by CTA in Hero and PricingCards
- Modal overlay, single-column form, pill button submit
- Loading state on submit (button disabled + spinner)
- Mobile-first, max-width 480px

## Constraints
- Must NOT: use api-client — apps/web is static, use fetch() directly
- Must: Indonesian UI copy
- Must: validate WhatsApp client-side before submit

## Out of Scope
- Email verification
- Referral tracking
- Admin view of waitlist
```

---

## Step 3 — Review

**Who:** AI generates `review.md` draft, you finalize
**When:** After spec.md is written. Before plan.md.
**Template:** copy `.ai/templates/review.md` → `.ai/features/YYYY-MM-DD-NNN-[name]/review.md`

```
spec.md  →  review prompt  →  AI outputs review.md draft  →  you adjust  →  edit spec.md (mark final)
```

### Review Prompt

```
You are reviewing a feature spec. Find problems only — do not suggest new features.

@.ai/context.md
@.ai/features/YYYY-MM-DD-NNN-feature-name/spec.md

Output review.md in this exact format.
Suggest ACCEPT or REJECT with reason for each finding.
Add acceptance tests based on the spec.

# Review: [feature name]

## Findings
| # | Finding | Category | Suggestion | Decision |
|---|---------|----------|------------|----------|
| 1 | [finding] | [category] | [suggestion] | ACCEPT |

## Acceptance Tests
- [ ] ...

Categories: Ambiguity / Missing Error / Wrong Assumption / Edge Case / Blocker
```

### What to do with the output

**Findings:**
1. Change `ACCEPT` → `REJECT: [reason]` for anything you disagree with
2. Edit `spec.md` for each ACCEPTED row:

| Finding category | Edit in spec.md |
|-----------------|-----------------|
| Ambiguity on input | `## Inputs` |
| Missing error state | `## Outputs` |
| Wrong assumption | `## Constraints` |
| Blocker in out-of-scope | Move to relevant section |
| Edge case | `## UI / Behavior` |

3. Update status: `> Status: draft` → `> Status: final — reviewed YYYY-MM-DD`

**Acceptance Tests:** stay in `review.md`. Used in Step 4 (plan) + Step 7 (verify).

### review.md Template

```markdown
# Review: [Feature Name]

## Findings
| # | Finding | Category | Suggestion | Decision |
|---|---------|----------|------------|----------|
| 1 | [finding] | [category] | [suggestion] | ACCEPT |
| 2 | [finding] | [category] | [suggestion] | REJECT: [reason] |

## Acceptance Tests
- [ ] ...
```

### Example

**AI output:**
```markdown
# Review: Waitlist Modal

## Findings
| # | Finding | Category | Suggestion | Decision |
|---|---------|----------|------------|----------|
| 1 | "Indonesian format" undefined | Ambiguity | Define regex: /^(\+62\|08)[0-9]{8,11}$/ | ACCEPT |
| 2 | Duplicate email not handled | Missing Error | Add "Email sudah terdaftar" | ACCEPT |
| 3 | API down not handled | Missing Error | Show "Gagal mendaftar, coba lagi" + retry | ACCEPT |
| 4 | Modal closed mid-loading | Edge Case | Cancel request on close | ACCEPT |
| 5 | api-client not forbidden | Wrong Assumption | State: use fetch() not api-client | ACCEPT |
| 6 | POST URL not defined | Blocker | Add NEXT_PUBLIC_WAITLIST_URL to env | ACCEPT |
| 7 | Business name char limit | Edge Case | Add max length | ACCEPT |

## Acceptance Tests
- [ ] Modal opens from Hero and PricingCards CTA
- [ ] WA validation: accepts +62/08, rejects others
- [ ] Submit: loading state, button disabled
- [ ] Duplicate email: "Email sudah terdaftar"
- [ ] Network error: "Gagal mendaftar" + retry
- [ ] Success: thank-you + closes after 2s
- [ ] Works at 375px
```

**You reject row 7:** `REJECT: no product requirement yet`

**Edit spec.md rows 1–6:**
- Row 1 → `## Inputs`: add WA regex
- Row 2–3 → `## Outputs`: add error cases
- Row 4 → `## UI / Behavior`: add cancel-on-close
- Row 5 → `## Constraints`: add fetch() rule
- Row 6 → `## Constraints`: add NEXT_PUBLIC_WAITLIST_URL requirement

**Status: `draft` → `final — reviewed 2026-05-17`. Acceptance tests stay in review.md.**

---

## Step 4 — Plan

**Who:** AI generates, you adjust
**When:** After spec.md is marked final.
**Template:** copy `.ai/templates/plan.md` → `.ai/features/YYYY-MM-DD-NNN-[name]/plan.md`

**Adjust AI output:**
- Tasks too large → split (~20 min max each)
- Wrong order → reorder
- Outside spec → remove
- Missing files/env → add

### Plan Prompt

```
Generate an implementation plan. Output only — no explanation.

@.ai/context.md
@.ai/features/YYYY-MM-DD-NNN-feature-name/spec.md
@.ai/features/YYYY-MM-DD-NNN-feature-name/review.md

Rules:
- Tasks in implementation order
- Each task: one action + "Done when: [map to acceptance test]"
- ~20 min per task max — split if larger
- No features outside the spec

# Plan: [Feature Name]

## Tasks
- [ ] 1. [task] → Done when: [acceptance test]

## Files Touched
- [path] (new|modified)

## Env / Config Needed
- VAR=value

## Dependencies
- [must exist before starting]
```

### plan.md Template

```markdown
# Plan: [Feature Name]

## Tasks
- [ ] 1. [task] → Done when: [acceptance test]
- [ ] 2. [task] → Done when: [acceptance test]

## Files Touched
- ...

## Env / Config Needed
- ...

## Dependencies
- ...
```

### Example

```markdown
# Plan: Waitlist Modal

## Tasks
- [ ] 1. Add NEXT_PUBLIC_WAITLIST_URL to .env.local, .env.staging, .env.example
       → Done when: accessible via process.env, documented in .env.example

- [ ] 2. Build WaitlistModal.tsx — form, WA validation, all states
       → Done when: validates WA, shows loading/success/error states

- [ ] 3. Wire Hero.tsx and PricingCards.tsx CTA buttons to open modal
       → Done when: "Daftar Sekarang" in both opens the modal

- [ ] 4. Integrate POST /waitlist — all response cases
       → Done when: 200 → success, 400 duplicate → message, 5xx → retry

- [ ] 5. QA at 375px
       → Done when: all acceptance tests from review.md pass

## Files Touched
- apps/web/components/WaitlistModal.tsx (new)
- apps/web/components/Hero.tsx (modified)
- apps/web/components/PricingCards.tsx (modified)
- .env.local, .env.staging, .env.example (modified)

## Env / Config Needed
- NEXT_PUBLIC_WAITLIST_URL=https://api.riplai.id/waitlist

## Dependencies
- Hero.tsx and PricingCards.tsx must exist
```

---

## Step 5 — Handoff

**Who:** You (assemble)
**When:** Right before the AI coding session.
**Template:** copy `.ai/templates/handoff.md` → `.ai/features/YYYY-MM-DD-NNN-[name]/handoff.md`

Living doc — check off tasks as they complete. When resuming, paste the updated file into a new session.
Gaps found in Step 6 → fix `spec.md` and `plan.md`, not `handoff.md`.

> `@file` references work in Claude Code CLI and most AI coding tools (Cursor, Windsurf). Paste file contents if using a web chat.

### Template

```markdown
# Handoff: [Feature Name]

## Your Role
You are a senior [stack] developer. Implement exactly what is described. Ask before deviating.

## Project Context
@.ai/context.md

## What You Are Building
@.ai/features/YYYY-MM-DD-NNN-feature-name/spec.md

## Tasks (in order, one at a time)
@.ai/features/YYYY-MM-DD-NNN-feature-name/plan.md

## Rules for This Session
- Only touch files listed in plan.md
- Do not add features not in the spec
- Ask before deviating — do not guess
```

### Resuming after interruption

Check off completed tasks in `handoff.md`, add a Current State block, paste into new session:

```markdown
# Handoff: [Feature Name]

## Current State
- [x] Task 1 — done
- [x] Task 2 — done
- [ ] Task 3 — start here

## Your Role
...rest unchanged...
```

### Example

```markdown
# Handoff: Waitlist Modal

## Your Role
Senior Next.js / TypeScript / Tailwind v4 developer.
Implement exactly what is described. Ask before deviating.

## Project Context
@.ai/context.md

## What You Are Building
@.ai/features/2026-05-17-003-waitlist-modal/spec.md

## Tasks (in order, one at a time)
@.ai/features/2026-05-17-003-waitlist-modal/plan.md

## Rules for This Session
- Only touch files in plan.md
- No animations beyond 2s auto-close
- No custom hook unless component > 150 lines
- Ask before adding any dependency
```

---

## Step 6 — Execute

**Who:** AI codes, you gate each task
**When:** After handoff.md is ready

### Session Pattern

```
Paste handoff.md as first message (no preamble)
        ↓
AI implements task 1
        ↓
Check against acceptance test in review.md
  ├── pass → "Task 1 done. Now implement task 2."
  └── fail → "Stop. [exact issue]. Redo task 1 only."
        ↓
Repeat until done
```

**One session or separate?**

| Scenario | Approach |
|----------|----------|
| Small tasks (env var, type, wiring) | Batch 2–3 |
| Standard feature | All tasks, one session |
| Large tasks (20+ min each) | One task per session |
| Context drift | Close → resume with updated handoff.md |

### Interruption Handling

| Situation | Action |
|-----------|--------|
| AI asks a question | Answer it. After session, update `spec.md` or `context.md`. |
| AI touches wrong files | "Stop. Revert [file]. Implement task [N] only." |
| Session drifting | Close. Check off done tasks. Start new session with updated `handoff.md`. |
| Real-life interrupt | Ask AI to summarize state. Check off done tasks. Close. |

---

## Step 7 — Verify

**Who:** You test manually, AI fixes specific failures
**When:** After every Execute session, before committing

AI cannot see your running app — behavior testing is always manual.

### Checklist

```
1. pnpm type-check && pnpm lint
2. Test happy path
3. Force every error state (bad input, network off, duplicate)
4. Test at 375px mobile
5. Check every acceptance test in review.md
```

### When It Fails

**Small fail** (wrong copy, missing state, layout):
```
New session: "One issue: [exact description + file]. Fix only this."
```

**Big fail** (feature broken, spec was wrong):
```
Go back to Step 3. Update spec. Re-run Steps 4–6.
```

### After Verify

Update `context.md → ## Common AI Mistakes Here`:

```markdown
## Common AI Mistakes Here
- Uses rounded-lg on buttons → always rounded-full (caught 3x)
- Imports api-client into apps/web → forbidden (caught 2x)
- English UI copy → must be Indonesian (caught 1x)
- useEffect for form state → use controlled inputs (new)
```

Then: check off plan.md tasks → commit.

---

## Quick Reference

```
STEP 0  domain-recon.md   outside your domain only          20–30 min
STEP 1  context.md        write once, update after verify    5 min
STEP 2  spec.md           you write, status: draft          10–20 min
STEP 3  review.md         AI drafts, you finalize spec       10 min
STEP 4  plan.md           AI generates, you adjust           5 min
STEP 5  handoff.md        you assemble                       5 min
STEP 6  execute           paste handoff → gate each task     varies
STEP 7  verify            test → log → commit               10–20 min
```

In your domain: ~35–45 min per feature.
Outside your domain: +30 min Step 0, +10 min AI code review in Step 7.

---

## Using GSD as a Benchmark

Use GSD to improve your spec **template**, not as a workflow tool.

```
Step 2: write spec manually          ← builds precision
Step 3: AI finds content gaps        ← fixes this spec
GSD benchmark: AI finds structural gaps  ← improves your template
```

Run once every 3–5 features, not every spec.

### GSD Benchmark Prompt

```
Compare my spec and review against GSD spec quality standards.
Do not rewrite my spec.

@.ai/features/YYYY-MM-DD-NNN-feature-name/spec.md
@.ai/features/YYYY-MM-DD-NNN-feature-name/review.md

Tell me:
1. Which GSD dimensions is my spec weak on? (score 1–5)
2. What should I add to my spec template to cover these gaps?
3. What thinking habit am I missing?

Bullet points only. Focus on patterns, not this feature.
```

**With output:** add structural gaps to `.ai/templates/spec.md`. Run again when specs feel like they've plateaued.

### Learning Arc

```
Features 1–3:   write + review → ship → log mistakes
Features 4–5:   GSD benchmark → update spec template
Features 6–10:  manual spec covers more → fewer review findings
Features 10+:   spec quality ≈ GSD — tool optional
```
