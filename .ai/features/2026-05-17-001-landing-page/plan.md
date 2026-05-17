# Plan: Landing Page Static Views

## Tasks

- [ ] 1. Add `@heroicons/react ^2` to `apps/web/package.json` dependencies; run `pnpm install` from repo root
       → Done when: `import { BoltIcon } from '@heroicons/react/24/outline'` resolves without TS error in apps/web

- [ ] 2. Add `.gradient-text` and `.hero-grain` to `apps/web/app/globals.css`
       → Done when: `globals.css` contains gradient-text clip rule and `::before` grain noise URL; no other CSS vars added (tokens already in `@theme`)

- [ ] 3. Rewrite `RiplaiLogo.tsx` — replace text stub with Bubble Ripple SVG mark + wordmark; props: `size` (height px, default 32), `variant` (`"default"` | `"white"` | `"mono"`); width auto-scaled from viewBox 0 0 40 46
       → Done when: mark renders bubble path + dot + 3 arcs; variant="white" makes bubble fill white; variant="default" uses brand-500; wordmark "riplai" in font-extrabold tracking-tight beside mark

- [ ] 4. Refactor app layout — remove Navbar and Footer from `app/layout.tsx` (keep HTML/body/fonts/metadata); create `app/(marketing)/layout.tsx` wrapping children with `<Navbar />` + `<Footer />`; create `app/(auth)/layout.tsx` wrapping children with `<NavbarMinimal />`; delete `app/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx` stubs (will be recreated in route groups)
       → Done when: root layout.tsx has no Navbar/Footer import; (marketing) and (auth) group layouts exist; `pnpm type-check` passes

- [ ] 5. Rewrite `Navbar.tsx` — full variant: sticky, logo → `/`, nav links (Fitur→`#`, Harga→`#`, Demo→`#`, Tentang→`#`), "Masuk"→`/signin`, "Coba Gratis"→`/signup` pill; extract `NavbarMinimal` export: logo + nav links only, no auth CTAs; mobile: hamburger icon visible, no drawer (static)
       → Done when: full navbar has "Masuk" link + "Coba Gratis" rounded-full; minimal navbar has neither; no onClick; no `'use client'`

- [ ] 6. Rewrite `Footer.tsx` — dark `bg-[#0D1117]`, RiplaiLogo variant="white", tagline, 3 link columns (Produk, Perusahaan, Legal), copyright line; Blog link uses `href="#"`
       → Done when: footer bg is dark; logo SVG renders in white variant; 3 columns present; © 2026 Riplai text correct

- [ ] 7. Create `apps/web/components/demo/DemoChat.tsx` — static 2-exchange chat snapshot; header `bg-brand-500`, name "Villa Ubud Jiwa", sub "Penjawab 24 jam aktif"; chat bg `#F0F4F0`; customer bubbles `bg-[#E0E7FF]`; bot bubbles `bg-white` + "Admin Otomatis" in `text-accent-500`; input bar + send icon both `pointer-events-none opacity-60`; no JS
       → Done when: widget renders 2 customer + 2 bot bubbles; header not `#075E54`; chat bg not `#ECE5DD`; no `'use client'`

- [ ] 8. Create `apps/web/components/landing/Hero.tsx` — 2-col grid, left: badge pill (accent-100), H1 58px with `.gradient-text` on "24 jam", sub copy, CTA links (→`/signup`, →`/demo`), trust line, 4-avatar social proof; right: DemoChat with `rotate-[-0.8deg]` + caption; section applies `.hero-grain` class
       → Done when: H1 font-size 58px tracking-[-0.04em] leading-[1.06]; "24 jam" renders gradient; both CTAs are `<a>` not `<button>`; DemoChat tilted; hero bg has radial gradient + grain

- [ ] 9. Create `apps/web/components/landing/LogoStrip.tsx` — white bg, border-y, "DIPERCAYA OLEH" label, 5 business name spans in text-gray-400 font-bold
       → Done when: strip renders all 5 names; label uppercased; no interactive elements

- [ ] 10. Create `apps/web/components/landing/FeatureGrid.tsx` — H2 34px, sub copy "Dirancang khusus untuk bisnis Indonesia yang tidak punya waktu banyak.", 3×2 grid; each card: icon container (brand-50 or accent-100), `[22px]` Heroicon, title, desc; cards collapse to 1 col on `md:` breakpoint
        → Done when: 6 cards render with correct Heroicons (not emoji); brand-50 bg for cards 1,2,3,5; accent-100 bg for 4,6; grid is `grid-cols-1 md:grid-cols-3`

- [ ] 11. Create `apps/web/components/landing/HowItWorks.tsx` — `bg-[#ECFDF5]`, H2, 3-col grid (collapse to 1 col `md:`); each step: icon container `w-14 h-14 rounded-2xl`, Heroicon, numbered title, desc
        → Done when: section bg is brand-50; 3 steps render with correct icons (ChatBubbleLeftRight, Bolt, ChartBar); grid collapses on mobile

- [ ] 12. Create `apps/web/components/landing/Testimonials.tsx` — white bg, H2, 3-col grid (collapse to 1 col `md:`); each card: quote mark `text-[#A7F3D0]`, quote text, avatar circle with initials + bg color, name + role
        → Done when: 3 testimonials render with correct avatar colors (brand-500, accent-500, brand-600); grid collapses; no `'use client'`

- [ ] 13. Create `apps/web/components/landing/PricingCards.tsx` — gray-50 bg, H2, annual toggle (2 static `<span>` pills, no state), 4-col grid (collapse to 1 col `md:`); Growth card: `border-2 border-brand-500 scale-[1.03]` + "Terpopuler" absolute badge; all CTAs `<a href="/signup">` except Custom → `<a href="mailto:hello@riplai.id">`; all links `rounded-full`
        → Done when: 4 cards render; Growth has brand-500 border + badge; all CTA anchors correct; no `<button>` elements; annual toggle is visual-only

- [ ] 14. Create `apps/web/app/(marketing)/page.tsx` — assemble sections in order: Hero, LogoStrip, FeatureGrid, HowItWorks, Testimonials, PricingCards
        → Done when: home page renders all 6 sections; `pnpm build` passes for apps/web; no JS errors in browser console

- [ ] 15. Create `apps/web/app/(auth)/signin/page.tsx` — flex-1 centered layout; card max-w-[400px]; RiplaiLogo mark centered; H1 "Selamat datang kembali"; static error banner (bg-[#FEF2F2]); email field with `input-error-state` styling; password field with static eye icon; "Lupa kata sandi?" link; "Masuk" `<a>` with `pointer-events-none`; "Daftar gratis" → `/signup`
        → Done when: page renders centered card; error banner visible; inputs render with correct border states; no form submission possible; "Daftar gratis" links to /signup

- [ ] 16. Create `apps/web/app/(auth)/signup/page.tsx` — 2-col grid (collapse to 1 col `md:`); left: H1 "Coba gratis 14 hari", 5 fields (nama, email, WA +62 prefix, jenis bisnis select, kata sandi with error state), checked checkbox visual, loading CTA `pointer-events-none opacity-70`, "Masuk" → `/signin`; right: brand-50 panel with 5 benefit rows + check circles
        → Done when: 2-col layout renders; all 5 fields present; checkbox shows checked state; CTA non-interactive; benefits panel visible; "Masuk" links to /signin

- [ ] 17. Create `apps/web/app/(marketing)/privacy/page.tsx` — doc layout; sticky TOC left (11 section links); right: H1 "Kebijakan Privasi", effective date with `[1 Juni 2026]` placeholder, 11 sections in Bahasa Indonesia per `refs/landing-page-build.md §7.1`; operator identity with `[NOMOR NIB]` visible
        → Done when: TOC renders 11 links; all 11 section H2s present; `[NOMOR NIB]` and `[1 Juni 2026]` visible as literal text in page output

- [ ] 18. Create `apps/web/app/(marketing)/terms/page.tsx` — same doc layout as privacy; H1 "Syarat & Ketentuan"; 12 sections in Bahasa Indonesia per `refs/landing-page-build.md §7.2`; governing law section present
        → Done when: 12 section H2s present; governing law "Hukum Republik Indonesia" text visible; `pnpm type-check` passes across apps/web

---

## Files Touched

**Modified:**
- `apps/web/package.json` — add `@heroicons/react ^2`
- `apps/web/app/globals.css` — add `.gradient-text` + `.hero-grain` classes
- `apps/web/app/layout.tsx` — remove Navbar, Footer imports
- `apps/web/components/logo/RiplaiLogo.tsx` — full rewrite to SVG Bubble Ripple
- `apps/web/components/layout/Navbar.tsx` — add NavbarMinimal export, fix hrefs, auth CTAs
- `apps/web/components/layout/Footer.tsx` — full rewrite to dark footer

**New:**
- `apps/web/app/(marketing)/layout.tsx`
- `apps/web/app/(marketing)/page.tsx`
- `apps/web/app/(marketing)/privacy/page.tsx`
- `apps/web/app/(marketing)/terms/page.tsx`
- `apps/web/app/(auth)/layout.tsx`
- `apps/web/app/(auth)/signin/page.tsx`
- `apps/web/app/(auth)/signup/page.tsx`
- `apps/web/components/demo/DemoChat.tsx`
- `apps/web/components/landing/Hero.tsx`
- `apps/web/components/landing/LogoStrip.tsx`
- `apps/web/components/landing/FeatureGrid.tsx`
- `apps/web/components/landing/HowItWorks.tsx`
- `apps/web/components/landing/Testimonials.tsx`
- `apps/web/components/landing/PricingCards.tsx`

**Deleted** (replaced by route-group equivalents):
- `apps/web/app/page.tsx`
- `apps/web/app/privacy/page.tsx`
- `apps/web/app/terms/page.tsx`

---

## Env / Config Needed
- None — fully static, no env vars

---

## Dependencies
- `packages/ui` exports Button, Input, Badge, Avatar — confirmed exists
- `packages/config` brand/accent tokens loaded in `globals.css` via `@theme` — confirmed exists
- `apps/web/lib/fonts.ts` Jakarta + mono font setup — confirmed exists, used in layout.tsx
- `pnpm install` must complete after Task 1 before any subsequent task
