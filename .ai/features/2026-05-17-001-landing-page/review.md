# Review: Landing Page Static Views

## Findings

| # | Finding | Category | Suggestion | Decision |
|---|---------|----------|------------|----------|
| 1 | `@heroicons/react` required by spec but absent from `apps/web/package.json` — build will fail on import | Blocker | Add `"@heroicons/react": "^2"` to `apps/web/package.json` dependencies | ACCEPT |
| 2 | Spec uses custom CSS classes (`btn-primary`, `input-base`, `field-group`, `check-box`, `with-icon-l`, etc.) throughout UI sections but `globals.css` output only lists "CSS vars + grain noise" — these classes are undefined in any output file, rendering will break | Blocker | Either define all component classes in `globals.css` OR map every usage to `packages/ui` (Button, Input) + Tailwind utilities; pick one and spec it explicitly | ACCEPT |
| 3 | `justify-content-center` in Signup CTA (line 244) is not a Tailwind class — invalid, ignored by browser | Blocker | Replace with `justify-center` | ACCEPT |
| 4 | Spec re-declares brand/accent tokens as CSS vars (`--brand-500`, `--brand-600`, etc.) in `globals.css` — `packages/config/tailwind.config.base.ts` already exports the identical palette as Tailwind theme tokens (`brand.500`, `accent.500`). Two parallel token systems will diverge | Wrong Assumption | Remove CSS var declarations; use Tailwind color utilities from `packages/config` directly (`bg-brand-500`, `text-accent-600`, etc.) | ACCEPT |
| 5 | `packages/ui` (Button, Input, Badge, Avatar) is already in `apps/web` deps (`"@riplai/ui": "workspace:*"`) but spec ignores it and defines raw HTML patterns — creates two styling conventions in one app, guaranteed divergence | Wrong Assumption | Spec should state: use `Button` from `@riplai/ui` for all button-like elements; use `Input` from `@riplai/ui` for form fields; use raw `<a>` only for navigation links | ACCEPT |
| 6 | Tech stack line says `"Next.js (latest)"` — context.md rule: "All deps pinned to major only (`^N`) — never 'latest'" | Wrong Assumption | Change to `Next.js ^16` to match context.md and `apps/web/package.json` | ACCEPT |
| 7 | Goal (line 5) and User Story (line 8) still say "register" / "login/register" — decided naming throughout rest of spec is "signup" | Ambiguity | Replace "register" with "signup" in Goal and User Story to match URL/section naming | ACCEPT |
| 8 | Navbar and Footer link to `/features`, `/pricing`, `/demo`, `/about` — these routes are explicitly Out of Scope and won't exist; Must constraint says "all `<a>` in nav use correct routes (not `href="#"`)"; contradiction: correct route doesn't exist | Ambiguity | Decide: either (a) use `href="#"` for out-of-scope nav links and relax the Must constraint, or (b) add minimal placeholder pages for the 4 routes as empty shells within this feature's scope | ACCEPT |
| 9 | Login and Signup pages need a Navbar without the "Masuk" / "Coba Gratis" CTA pair (spec line 226) — `Navbar.tsx` is a shared component with no variant prop defined; implementer has no spec to follow | Ambiguity | Add `variant?: "full" \| "minimal"` prop to `Navbar` spec; "minimal" renders logo + center nav only, omits auth CTAs | ACCEPT |
| 10 | FeatureGrid subtitle text is unspecified — spec defines the CSS class but no copy (line 145: `Sub \`text-base text-gray-500 text-center mb-11\`` with no text) | Missing | Add subtitle copy, e.g. "Dirancang khusus untuk bisnis Indonesia yang tidak punya waktu banyak." (from `refs/design-preview-v2.html` line 403) | ACCEPT |
| 11 | Mobile responsive breakpoints not specified — Must says grids collapse to 1 col on mobile but no Tailwind breakpoint prefix given (`sm:`, `md:`, `lg:`) | Ambiguity | Add breakpoint: `md:grid-cols-N` (collapse below 768px) for hero, feature grid, testimonials, pricing, and signup 2-col | ACCEPT |
| 12 | Login page "Masuk" CTA has `href="/signup"` — semantically wrong (login button pointing to signup); harmless now with `pointer-events-none` but will become a real bug when interactivity is added | Edge Case | Change to `href="/login"` or remove `href` entirely; `pointer-events-none` already prevents navigation | ACCEPT |

---

## Acceptance Tests

### Navbar
- [ ] Logo links to `/` on all pages
- [ ] Nav links render: Fitur, Harga, Demo, Tentang
- [ ] "Masuk" link `href="/login"` present on home page navbar
- [ ] "Coba Gratis" link `href="/signup"` present on home page navbar, styled `rounded-full bg-brand-500`
- [ ] Login and Signup pages render navbar without "Masuk" / "Coba Gratis" CTAs
- [ ] No `onClick` handler exists on any navbar element

### Home (`/`)
- [ ] Page renders without JavaScript enabled (pure HTML)
- [ ] `<h1>` contains "WhatsApp kamu aktif", "24 jam", "bahkan saat tidur"
- [ ] "24 jam" renders with gradient text (brand-500 → brand-400), not plain color
- [ ] Hero section has brand-50 radial gradient background
- [ ] DemoChat widget is visible, tilted `-0.8deg`, shows at least 2 chat bubbles
- [ ] DemoChat input and send button are non-interactive (`pointer-events-none` or no event handlers)
- [ ] DemoChat header color is `#10B981` — NOT `#075E54`
- [ ] Bot bubbles in DemoChat use `bg-[#E0E7FF]` — NOT `#DCF8C6`
- [ ] LogoStrip renders "DIPERCAYA OLEH" label + 5 business names
- [ ] FeatureGrid renders 6 cards in 3×2 layout, collapses to 1 col on mobile
- [ ] FeatureGrid uses Heroicons (SVG), no emoji
- [ ] HowItWorks renders 3 steps on `bg-[#ECFDF5]`
- [ ] Testimonials renders 3 quote cards with avatar initials
- [ ] PricingCards renders 4 cards; Growth card has `border-brand-500` ring and "Terpopuler" badge
- [ ] All pricing CTAs are `<a href="/signup">` — not `<button>`
- [ ] Custom plan CTA is `<a href="mailto:hello@riplai.id">`
- [ ] Footer background is `#0D1117`
- [ ] No "AI" appears anywhere in rendered copy — must use "admin otomatis" / "penjawab 24 jam" etc.
- [ ] No WhatsApp trademark colors (`#075E54`, `#ECE5DD`) present in any element

### Login (`/login`)
- [ ] Page renders centered card `max-w-[400px]`
- [ ] RiplaiLogo mark visible above heading
- [ ] Heading: "Selamat datang kembali"
- [ ] Error banner renders (static design state) in `bg-[#FEF2F2]`
- [ ] Email field renders with `input-error-state` styling
- [ ] Password field renders with eye icon (static, non-interactive)
- [ ] "Lupa kata sandi?" link present and styled `text-accent-500`
- [ ] "Masuk" CTA is non-interactive (no form submission occurs)
- [ ] "Daftar gratis" link → `href="/signup"`
- [ ] No `<form action>` or `onSubmit` in page source

### Signup (`/signup`)
- [ ] Page renders 2-col layout; collapses to 1 col on mobile
- [ ] Heading: "Coba gratis 14 hari"
- [ ] 5 form fields render in order: nama, email, WA number (+62 prefix), jenis bisnis select, kata sandi
- [ ] Kata sandi field renders with `input-error-state` + error message "Minimal 8 karakter"
- [ ] Checkbox renders checked state (visual only)
- [ ] T&C link → `href="/terms"`, Privacy link → `href="/privacy"`
- [ ] Submit CTA renders loading state (spinner + "Membuat akun...") non-interactive
- [ ] "Masuk" link → `href="/login"`
- [ ] Benefits panel renders on right with 5 benefit rows + green check circles
- [ ] No form submission occurs on any interaction

### Privacy (`/privacy`) and Terms (`/terms`)
- [ ] Sticky TOC renders on left with all section links
- [ ] `[NOMOR NIB]` visible as literal placeholder text (not replaced)
- [ ] `[1 Juni 2026]` visible as literal placeholder
- [ ] "Kebijakan Privasi" / "Syarat & Ketentuan" H1 present
- [ ] All 11 sections render for Privacy; all 12 sections render for Terms

### Cross-cutting
- [ ] No `'use client'` directive in any file in `apps/web`
- [ ] `rounded-lg` does not appear on any button or `<a>` CTA element
- [ ] All button-like elements use `rounded-full` (pill shape)
- [ ] Plus Jakarta Sans is the only font loaded on all pages
- [ ] `@riplai/api-client` is not imported anywhere in `apps/web`
- [ ] `next build` completes without TypeScript errors
