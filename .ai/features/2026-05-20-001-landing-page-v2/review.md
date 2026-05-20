# Review: Landing Page v2 — `apps/web` Full Build

## Findings

| # | Finding | Category | Suggestion | Decision |
|---|---------|----------|------------|----------|
| 1 | FeatureGrid spec writes `grid grid-cols-3 md:grid-cols-1` (line 195), then immediately notes "wait, should collapse: `grid-cols-1 md:grid-cols-3`" — spec text is contradictory; the class string before the comment is wrong | Blocker | Remove the comment and correct to `grid-cols-1 md:grid-cols-3` | ACCEPT |
| 2 | `/pricing` comparison table: feature rows listed (line 327) but no ✓/— cell values per plan specified — implementer must guess every cell | Blocker | Add a table mapping each feature row × each plan to ✓ or — | ACCEPT |
| 3 | `RiplaiLogo` wordmark color specified as `text-gray-900 / text-white / text-gray-600` (line 270) inside an SVG context — Tailwind `text-*` color classes do not apply to SVG `<text>` fill | Ambiguity | Clarify whether wordmark is a `<text>` element (needs `fill` attribute) or a sibling `<span>` outside the SVG | ACCEPT |
| 4 | DemoChat disclaimer defined in three places: Hero caption (line 127), component-level (line 182), and `/demo` page (line 337) — if the component renders its own disclaimer, Hero shows two captions stacked | Ambiguity | Decide ownership: either DemoChat renders no built-in disclaimer (callers own it) or DemoChat has a disclaimer and callers omit theirs | ACCEPT |
| 5 | Signin "Masuk" CTA: `href="/signup"` (line 283) — sign-in action button points to signup route; even though `pointer-events-none` makes it dead, the spec value is wrong | Wrong Assumption | Change to `href="#"` | ACCEPT |
| 6 | Mobile hero DemoChat spec says `hidden md:block` OR stacked below copy (line 393) — two incompatible implementations; spec must pick one | Ambiguity | Remove "or" — choose `hidden md:block` (simpler) or define stacked order explicitly | ACCEPT |
| 7 | Signin "Masuk" CTA uses `opacity-80` (line 283) but Must constraint says `pointer-events-none opacity-75` for disabled CTAs (line 384) — direct contradiction within spec | Wrong Assumption | Align both to `opacity-75` | ACCEPT |
| 8 | Signup "Jenis bisnis" is a `<select>` (line 294) but spec says "Use `Input` from `@riplai/ui` for all fields" (line 295) — `@riplai/ui` exports no Select component (context.md) | Missing Error | Either add Select to `@riplai/ui` (out of this spec's scope) or explicitly state that `<select>` is a raw HTML element here with Tailwind styling, not from `@riplai/ui` | ACCEPT |
| 9 | DemoChat "600ms delay" (line 177) — ambiguous whether 600ms is: (a) delay before typing indicator appears, or (b) delay before bot reply after indicator is shown | Ambiguity | Rewrite as: "typing indicator shown immediately; bot reply appended 600ms after indicator appears" or whatever the intent is | ACCEPT |
| 10 | Annual toggle active/selected state not specified (lines 238, 325) — two `<span>` pills with no onClick, but neither is marked as the default active pill | Ambiguity | Specify which pill renders in active style by default (e.g. "Bulanan" active on load, distinct background) | ACCEPT |
| 11 | Signin subtitle (`Sub text-sm text-gray-400 text-center mb-6`, line 280) has style classes but no copy — implementer has no string to render | Missing Error | Add the subtitle string (e.g. "Masukkan email dan kata sandi kamu.") | ACCEPT |
| 12 | Signin logo mark specified as `w-11 h-11 bg-brand-500 rounded-[12px]` plain div (line 278) — inconsistent with `RiplaiLogo` component defined in spec and used everywhere else | Ambiguity | Clarify: is this a plain colored mark (no wordmark) or `<RiplaiLogo size={44} />` inside a brand-500 container? | ACCEPT |
| 13 | `/about` page spec says "placeholder content — replace before launch" with no minimum content requirement — implementer can ship empty divs and satisfy the spec | Ambiguity | Add minimum acceptance criteria: each of the 4 sections must render its heading and at least the specified copy strings | ACCEPT |

---

## Acceptance Tests

### Global / Constraints
- [ ] `apps/web/package.json` has no `@riplai/api-client` dependency
- [ ] No `'use client'` directive in any file under `apps/web/` except `components/demo/DemoChat.tsx`
- [ ] No literal string `"AI"` in rendered text of any page (case-sensitive)
- [ ] No `rounded-lg` class on any pill CTA element (`<a>` or `<button>`)
- [ ] No Framer Motion import in any `apps/web` file
- [ ] `app/globals.css` uses `@import "tailwindcss"` — no `@tailwind base`, `@tailwind components`, or `@tailwind utilities`
- [ ] No Tailwind token definitions inside `apps/web/tailwind.config.*` — all tokens come from `packages/config`
- [ ] Plus Jakarta Sans loaded via `next/font/google` in `app/layout.tsx`; no `<link>` font tag in `<head>`
- [ ] No `fetch()` calls in any `apps/web` source file

### Routes
- [ ] All 9 routes (`/`, `/features`, `/pricing`, `/demo`, `/about`, `/signin`, `/signup`, `/privacy`, `/terms`) return HTTP 200
- [ ] `/signin` and `/signup` render Navbar with no auth CTAs (minimal variant)
- [ ] All other routes render Navbar with "Masuk" and "Coba Gratis" CTAs (full variant)

### Home (`/`)
- [ ] Hero H1 contains `<span class="gradient-text">24 jam</span>`
- [ ] FeatureGrid renders 1 column on viewport < 768px and 3 columns on viewport ≥ 768px
- [ ] 4 pricing cards render; Growth card has `border-2 border-brand-500` and `scale-[1.03]`
- [ ] Annual toggle pills are `<span>` elements — no click handlers attached
- [ ] Footer Blog link is `href="#"`; all other Navbar and Footer route links use correct hrefs

### DemoChat
- [ ] Sending "kamar" returns reply containing "Deluxe" and "Suite"
- [ ] Sending "booking" returns reply containing "reservasi"
- [ ] Sending "sarapan" returns reply containing "sarapan" and "kolam"
- [ ] Sending "xyz" (no keyword match) returns fallback reply containing "Tim kami"
- [ ] Typing indicator (3 animated dots) is visible between user message send and bot reply
- [ ] Input field cleared after send
- [ ] Chat area scrolls to bottom after each new message
- [ ] DemoChat in Hero has chat area `max-h-[220px]`; DemoChat on `/demo` page has `max-h-[420px]`

### Auth pages
- [ ] Signup form `<input>` elements use `defaultValue`, not `value`
- [ ] Signup "Jenis bisnis" renders as `<select>` with 6 options as specified
- [ ] Signup T&C checkbox links to `/terms` and `/privacy`
- [ ] Signin "Masuk" CTA is `pointer-events-none` (non-interactive)

### Legal pages
- [ ] `/privacy` and `/terms` render placeholder strings `[NOMOR NIB]` and `[1 Juni 2026]` verbatim — not substituted
- [ ] Left TOC is `position: sticky; top: 4rem` (sticky scrolling)

### Logo
- [ ] `RiplaiLogo` renders with `variant="white"` in Footer (dark bg)
- [ ] `RiplaiLogo` `size` prop controls height in px; width scales proportionally
