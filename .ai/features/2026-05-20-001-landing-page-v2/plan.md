# Plan: Landing Page v2 — `apps/web` Full Build

## Tasks

- [ ] 1. Rewrite `DemoChat` as interactive client component → Done when: `'use client'` present; `maxHeight` prop accepted; initial state matches spec (scripted "Halo, mau tanya kamar..." exchange); sending "kamar" returns reply with "Deluxe" and "Suite"; "booking" → "reservasi"; "sarapan" → "sarapan" + "kolam"; "xyz" → fallback "Tim kami"; typing indicator (3 dots) visible immediately after send; bot reply appended 600 ms after indicator; input cleared after send; chat area scrolls to bottom on each new message
- [ ] 2. Fix `Navbar`: unify to single component with `variant?: "full" | "minimal"` prop; fix `navLinks` hrefs (`/features`, `/pricing`, `/demo`, `/about`); update `app/(marketing)/layout.tsx` (default full) and `app/(auth)/layout.tsx` (`variant="minimal"`) → Done when: full variant renders "Masuk" + "Coba Gratis" CTAs; minimal variant omits auth CTAs; all center nav links navigate to correct routes
- [ ] 3. Fix `Footer`: correct Produk links (Fitur→`/features`, Harga→`/pricing`, Demo→`/demo`), Perusahaan links (Tentang→`/about`, Blog→`#`); change `py-16` → `py-11` → Done when: Fitur/Harga/Demo/Tentang links are correct hrefs; Blog is `href="#"`; footer padding is `py-11`
- [ ] 4. Fix `Hero`: wrap DemoChat column in `hidden md:block`; change CTA text "Coba Gratis 14 Hari →" → "Coba Gratis →"; fix "Lihat Demo" `href` → `/demo`; update caption to "Ini yang tamu kamu terima jam 11 malam, dibalas otomatis. Coba tanya →"; pass `maxHeight="220px"` (or `chatHeight` prop) to `DemoChat` → Done when: DemoChat invisible at viewport < 768 px; "Lihat Demo" navigates `/demo`; caption text matches spec; DemoChat chat area `max-h-[220px]` in Hero
- [ ] 5. Fix `PricingCards`: H2 → "Harga jelas. Tumbuh sesuai skala bisnismu."; add sub "Mulai gratis, upgrade kapan saja."; Bulanan pill → `bg-white shadow-sm rounded-full font-semibold text-gray-900 px-4 py-1.5`; Tahunan pill → "Tahunan -20%"; CTA labels per spec ("Coba Gratis" / "Pilih Starter" / "Pilih Growth" / "Hubungi Kami"); Custom email → `mailto:hello.riplai@gmail.com` → Done when: correct H2/sub render; Growth CTA label is "Pilih Growth"; Custom href is `mailto:hello.riplai@gmail.com`; annual toggle pills are `<span>` with no click handlers
- [ ] 6. Fix `Testimonials`: replace with spec-exact data — KW/Kadek Wira/Pemilik Villa·Seminyak, Bali; NM/Nyoman Mega/Warung & Café·Ubud, Bali; MD/Mbak Dewi/Villa & Homestay·Canggu, Bali; exact quotes per spec → Done when: all 3 names, roles, and quote strings match spec verbatim
- [ ] 7. Build `/features` page: create `app/(marketing)/features/page.tsx`; delete stub `app/features/page.tsx`; implement H1 "Fitur yang kamu butuhkan…", sub, 2-col `grid-cols-1 md:grid-cols-2` feature cards (same 6 features, `p-7` padding, `w-12 h-12` icon container, `w-[48px] h-[48px]` icon), bottom CTA `<a href="/signup">Coba Gratis →</a>` → Done when: `/features` returns 200; Navbar full + Footer render; 6 feature cards in 2-col grid; "Coba Gratis →" links to `/signup`
- [ ] 8. Build `/pricing` page: create `app/(marketing)/pricing/page.tsx`; delete stub `app/pricing/page.tsx`; implement H1/sub, annual toggle (UI only, Bulanan active), 4-card `PricingCards`-style grid, 10-row feature comparison table (Gratis/Starter/Growth/Custom columns) with ✓/— cells per spec → Done when: `/pricing` returns 200; Growth card has `border-2 border-brand-500`; comparison table renders all 10 rows with correct cell values; toggle has no click handlers
- [ ] 9. Build `/demo` page: create `app/(marketing)/demo/page.tsx`; delete stub `app/demo/page.tsx`; implement H1 "Coba admin otomatis langsung", sub, `DemoChat` centered `max-w-[440px]` with `max-h-[420px]`; disclaimer "Ini demo menggunakan data contoh…"; CTA `<a href="/signup">Coba dengan data bisnis kamu →</a>` → Done when: `/demo` returns 200; DemoChat interactive with `max-h-[420px]`; disclaimer text present; no `'use client'` on page file
- [ ] 10. Build `/about` page: create `app/(marketing)/about/page.tsx`; delete stub `app/about/page.tsx`; implement H1/sub, stats row (200+/Bisnis aktif · 98%/Akurasi jawaban · 1,2dtk/Rata-rata respons), Misi card (exact copy per spec), Informasi Perusahaan card (Pengelola/Domisili/Email rows, email link `hello.riplai@gmail.com`) → Done when: `/about` returns 200; all 3 stat numbers render; Misi body copy matches spec; email is `href="mailto:hello.riplai@gmail.com"` with `text-brand-500`
- [ ] 11. Fix `/signin` page: replace logo container (`w-11 h-11 bg-brand-500 rounded-[12px]`) with `<RiplaiLogo size={44} />`; subtitle → "Masuk ke dashboard Riplai kamu."; `mb-7` → `mb-6` on sub; CTA `opacity-80` → `opacity-75`; add `href="#"` on CTA `<a>`; replace raw `<input type="email">` and `<input type="password">` with `Input` from `@riplai/ui` → Done when: RiplaiLogo renders without brand bg container; CTA is `pointer-events-none opacity-75`; email and password fields use `@riplai/ui` `Input`; `href="#"` on CTA
- [ ] 12. Fix `/signup` page: replace raw `<input type="text">`, `<input type="email">`, `<input type="tel">`, `<input type="password">` with `Input` from `@riplai/ui`; keep `<select>` as raw HTML; ensure all `<input>` use `defaultValue` not `value` → Done when: text/email/tel/password inputs render via `@riplai/ui` `Input`; `<select>` for Jenis bisnis has 6 options (Apotek/Toko Obat · Klinik/Dokter · Restoran/F&B · Villa/Penginapan · Toko Retail · Lainnya); T&C links to `/terms` and `/privacy`

## Files Touched

- `apps/web/components/demo/DemoChat.tsx` (modified)
- `apps/web/components/layout/Navbar.tsx` (modified)
- `apps/web/components/layout/Footer.tsx` (modified)
- `apps/web/app/(marketing)/layout.tsx` (modified)
- `apps/web/app/(auth)/layout.tsx` (modified)
- `apps/web/components/landing/Hero.tsx` (modified)
- `apps/web/components/landing/PricingCards.tsx` (modified)
- `apps/web/components/landing/Testimonials.tsx` (modified)
- `apps/web/app/(marketing)/features/page.tsx` (new)
- `apps/web/app/(marketing)/pricing/page.tsx` (new)
- `apps/web/app/(marketing)/demo/page.tsx` (new)
- `apps/web/app/(marketing)/about/page.tsx` (new)
- `apps/web/app/features/page.tsx` (deleted — stub, replaced by (marketing) route)
- `apps/web/app/pricing/page.tsx` (deleted — stub, replaced by (marketing) route)
- `apps/web/app/demo/page.tsx` (deleted — stub, replaced by (marketing) route)
- `apps/web/app/about/page.tsx` (deleted — stub, replaced by (marketing) route)
- `apps/web/app/(auth)/signin/page.tsx` (modified)
- `apps/web/app/(auth)/signup/page.tsx` (modified)

## Env / Config Needed

- None — all pages static; no API calls; no new deps required

## Dependencies

- `@heroicons/react: "^2"` in `apps/web/package.json` ✓ already present
- `@riplai/ui` in `apps/web/package.json` ✓ already present (`Input` component confirmed)
- Plus Jakarta Sans loaded via `next/font/google` in `app/layout.tsx` ✓ already present
- Task 4 depends on Task 1 (DemoChat rewrite must exist before Hero uses maxHeight prop)
- Task 9 depends on Task 1
- Task 2 must precede Task 4 (Navbar unification affects auth layout)
