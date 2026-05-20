# Spec: Landing Page v2 — `apps/web` Full Build
> Status: draft

## Goal
Build all public-facing pages for `apps/web` (port 3001) — landing home + inner pages + legal — with v2 redesign: split hero, riplai-branded DemoChat (interactive), 4-tier pricing, and complete route set.

## User Story
As an Indonesian SMB owner, I want to browse riplai's landing pages and sign up for a trial so I understand the product, see it demo live, and can create an account in under 5 minutes.

## Inputs

| File | Purpose |
|------|---------|
| `refs/previews/landing.html` | Visual source of truth — all page sections, exact copy, tokens |
| `refs/previews/register.html` | /signup page layout + form states |
| `refs/previews/login.html` | /signin page layout |
| `refs/previews/privacy.html` | Kebijakan Privasi full content |
| `refs/previews/terms.html` | Syarat & Ketentuan full content |
| `refs/design-review-v2.md` | Locked design decisions (hero layout, demo widget, section order) |
| `refs/landing-page-build.md` | Copy, pricing tiers, demo script, component spec |
| `refs/design-preview-v2.html` | Extended component library + dashboard previews |

Tech: Next.js ^16, TypeScript strict, Tailwind v4, `packages/config` tokens, Heroicons v2 (`@heroicons/react/24/outline`), Plus Jakarta Sans via `next/font/google`.

## Outputs

### Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home — 7 sections |
| `/features` | `app/features/page.tsx` | Full 6-feature breakdown |
| `/pricing` | `app/pricing/page.tsx` | Pricing table + comparison |
| `/demo` | `app/demo/page.tsx` | Standalone DemoChat + copy |
| `/about` | `app/about/page.tsx` | Mission, story, values, contact |
| `/signin` | `app/signin/page.tsx` | Sign-in form |
| `/signup` | `app/signup/page.tsx` | Sign-up form (2-col layout) |
| `/privacy` | `app/privacy/page.tsx` | Kebijakan Privasi |
| `/terms` | `app/terms/page.tsx` | Syarat & Ketentuan |

### Components

| File | Notes |
|------|-------|
| `components/logo/RiplaiLogo.tsx` | SVG mark + wordmark, size prop, 3 variants |
| `components/layout/Navbar.tsx` | Sticky nav, variant prop (full/minimal) |
| `components/layout/Footer.tsx` | Dark footer |
| `components/landing/Hero.tsx` | Split layout, DemoChat right column |
| `components/landing/LogoStrip.tsx` | "Dipercaya oleh" text strip |
| `components/landing/FeatureGrid.tsx` | 3×2 icon grid |
| `components/landing/HowItWorks.tsx` | 3 steps, brand-50 bg |
| `components/landing/Testimonials.tsx` | 3 quote cards |
| `components/landing/PricingCards.tsx` | 4-tier cards, Growth highlighted |
| `components/demo/DemoChat.tsx` | Interactive chat — `'use client'` |
| `app/globals.css` | CSS vars, grain noise utility, gradient-text |

---

## UI / Behavior

### Global

**Font:** Plus Jakarta Sans loaded in `app/layout.tsx` via `next/font/google`, variable `--font-sans`, applied to `<html>`. No other font on public pages.

**Section bg rhythm (home `/`):**

| Section | Background |
|---------|-----------|
| Hero | `radial-gradient(ellipse 65% 90% at 0% 0%, #ECFDF5 0%, transparent 60%), #fff` + grain `::before` (3% opacity) |
| LogoStrip | `bg-white border-y border-gray-100` |
| FeatureGrid | `bg-gray-50` |
| HowItWorks | `bg-[#ECFDF5]` |
| Testimonials | `bg-white` |
| PricingCards | `bg-gray-50` |
| Footer | `bg-[#0D1117]` always |

**CSS utilities in `globals.css`:**
```css
.gradient-text {
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-section { position: relative; }
.hero-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
}
```

---

### Navbar
- `sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100`
- Props: `variant?: "full" | "minimal"` — minimal = logo + nav links only, no auth CTAs
- Left: `RiplaiLogo` (size=30)
- Center: `<a href="/features">Fitur</a>` · `<a href="/pricing">Harga</a>` · `<a href="/demo">Demo</a>` · `<a href="/about">Tentang</a>` — `text-sm font-medium text-gray-500`
- Right (full only): `<a href="/signin">Masuk</a>` (text-sm font-semibold text-gray-500) + `<a href="/signup" class="rounded-full bg-brand-500 text-white px-5 py-2 text-sm font-bold">Coba Gratis</a>`
- Mobile: hamburger icon visual only (no drawer — CSS `md:hidden`)

---

### Home (`/`)

**Section order:** Navbar (full) → Hero → LogoStrip → FeatureGrid → HowItWorks → Testimonials → PricingCards → Footer

#### Hero
2-col grid `gap-14 max-w-[1100px] mx-auto py-24 px-16`, collapses to 1-col below `md:`

**Left column:**
- Badge: `bg-accent-100 text-accent-600 text-xs font-bold px-3.5 py-1 rounded-full mb-6` — "Admin Otomatis WhatsApp"
- H1 `text-[58px] font-extrabold tracking-[-0.04em] leading-[1.06] mb-5`:
  `WhatsApp kamu aktif` `<br>` `<span class="gradient-text">24 jam</span>,` `<br>` `bahkan saat tidur.`
- Sub `text-[17px] text-gray-500 leading-[1.65] max-w-[420px] mb-8`: "Admin otomatis menjawab chat pelanggan berdasarkan data bisnis kamu. Kamu tidak perlu balas satu per satu."
- CTA row `flex gap-3 flex-wrap items-center`:
  - `<a href="/signup" class="text-[15px] font-bold text-white bg-brand-500 px-7 py-3 rounded-full">Coba Gratis →</a>`
  - `<a href="/demo" class="text-[15px] font-semibold text-gray-900 bg-gray-100 border border-gray-200 px-7 py-3 rounded-full">Lihat Demo</a>`
- Trust line `text-xs text-gray-400 mt-3.5`: "Tidak perlu kartu kredit · Setup dalam 5 menit"
- Social proof `mt-9 flex items-center gap-3`:
  - 4 overlapping avatars (`-mr-2`): AS `bg-brand-500`, RM `bg-accent-500`, HB `bg-brand-600`, KS `bg-[#0F766E]` — `w-7 h-7 rounded-full border-2 border-white text-[9px] font-bold text-white`
  - "**200+** bisnis Indonesia sudah pakai Riplai" `text-sm text-gray-500`

**Right column:**
- `DemoChat` max-w-[360px], `rotate-[-0.8deg]`, `filter: drop-shadow(0 20px 40px rgba(0,0,0,.12))`
- Caption `text-[11.5px] text-gray-400 text-center mt-3`: "Ini yang tamu kamu terima jam 11 malam, dibalas otomatis. Coba tanya →"

---

#### DemoChat (`components/demo/DemoChat.tsx`) — `'use client'`

Branded chat widget. Interactive: visitor types freely, keyword matching returns canned reply.

**Structure:**
```
┌─────────────────────────────────┐
│ Header: brand-500 bg            │  riplai logo + "Villa Ubud Jiwa" + "Penjawab 24 jam aktif"
├─────────────────────────────────┤
│ Chat area: bg-[#F0F4F0]         │  messages, max-h-[220px] overflow-y-auto, auto-scroll
├─────────────────────────────────┤
│ Input bar: bg-gray-50           │  text input + send button (brand-500)
└─────────────────────────────────┘
```

**Initial state** (scripted pre-loaded, not sent by user):
```
Timestamp: "Sabtu, 23:05" (centered, text-[10px] text-gray-400)

Customer bubble (right, bg-[#E0E7FF] rounded-[8px_8px_2px_8px]):
  "Halo, mau tanya kamar untuk besok. 2 orang dewasa" · 23:05

Bot bubble (left, bg-white rounded-[8px_8px_8px_2px]):
  "Halo, selamat malam! Pilihan kamar untuk besok:
   🛏 Deluxe — Rp 750.000/malam
      Balkon · view kebun · sarapan 2 orang
   🛁 Suite — Rp 1.200.000/malam
      Bathtub · view sawah · sarapan 2 orang

   Kamar mana yang diminati?"
  · "Admin Otomatis · 23:05" (text-accent-500 text-[10px] font-semibold text-right)
```

**Keyword matching (case-insensitive):**

| Keywords | Reply |
|----------|-------|
| `kamar`, `room`, `harga`, `price`, `tarif`, `berapa` | "Pilihan kamar kami:\n🛏 Deluxe — Rp 750.000/malam (Balkon, sarapan 2 orang)\n🛁 Suite — Rp 1.200.000/malam (Bathtub, view sawah, sarapan 2 orang)\n\nKamar mana yang diminati?" |
| `booking`, `pesan`, `reservasi`, `book` | "Untuk reservasi, kami perlu: nama tamu, tanggal check-in & check-out, dan tipe kamar. Silakan kirimkan detailnya." |
| `tersedia`, `available`, `ada`, `kosong`, `cek`, `check` | "Ketersediaan kamar untuk tanggal yang Anda inginkan bisa kami cek segera. Mohon kirimkan tanggal check-in dan check-out." |
| `sarapan`, `breakfast`, `fasilitas`, `wifi`, `kolam` | "Semua kamar sudah termasuk sarapan untuk 2 orang. Fasilitas lengkap: WiFi gratis, kolam renang, parkir. Ada yang ingin ditanyakan lagi?" |
| _(no match)_ | "Terima kasih pesannya! Tim kami akan segera membalas lebih lanjut. Ada yang bisa dibantu sekarang?" |

**Interaction flow:**
1. Visitor types in input → press Enter or click send button
2. Customer bubble appended immediately (right-aligned, bg-[#E0E7FF])
3. Typing indicator shown (3 animated dots, 600ms delay)
4. Bot reply appended (left-aligned, bg-white) after typing indicator
5. Chat area scrolls to bottom on each new message
6. Input cleared after send

**Disclaimer** below widget: `text-[11.5px] text-gray-400 text-center mt-3`: "Ini demo. Data bisnis nyata bisa berbeda."

---

#### LogoStrip
`bg-white border-y border-gray-100 py-6 px-16`
- Label `text-[12px] font-semibold text-gray-400 uppercase tracking-wide`: "DIPERCAYA OLEH"
- 5 spans `text-sm font-bold text-gray-400`: Apotek Sehat · Klinik Sehat Sentosa · Restoran Padang Maju · Villa Bintang Bali · Toko Batik Nusantara

#### FeatureGrid
`bg-gray-50 py-16 px-12`
- H2 `text-[34px] font-extrabold tracking-[-0.03em] text-center mb-3`: "Semua yang bisnis kamu butuhkan"
- Sub: "Dirancang khusus untuk bisnis Indonesia yang tidak punya waktu banyak."
- Grid `grid grid-cols-3 md:grid-cols-1 gap-4 max-w-[960px] mx-auto` — wait, should collapse: `grid-cols-1 md:grid-cols-3`
- Card `bg-white border border-gray-100 rounded-[18px] p-5`

| # | Heroicon | Icon bg | Icon color | Title | Desc |
|---|---------|---------|-----------|-------|------|
| 1 | `ChatBubbleLeftRightIcon` | brand-50 | brand-500 | Penjawab 24 Jam | Balas pesan pelanggan otomatis kapan saja. Bahkan saat kamu tidur. |
| 2 | `BookOpenIcon` | brand-50 | brand-500 | Data Bisnis Pintar | Ajarkan bisnis kamu sekali, admin otomatis langsung tahu segalanya. |
| 3 | `ChartBarIcon` | brand-50 | brand-500 | Analitik Percakapan | Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk. |
| 4 | `BellIcon` | accent-100 | accent-500 | Notifikasi ke Kamu | Admin otomatis tidak bisa jawab? Kamu dapat notifikasi langsung. |
| 5 | `DevicePhoneMobileIcon` | brand-50 | brand-500 | Tanpa Aplikasi Baru | Pelanggan tetap chat lewat WhatsApp biasa. Kamu kelola dari dashboard. |
| 6 | `Cog6ToothIcon` | accent-100 | accent-500 | Mudah Dikonfigurasi | Atur jam operasional, nama penjawab, dan balasan khusus dalam hitungan menit. |

Icon container: `w-11 h-11 rounded-xl flex items-center justify-center mb-3.5`. Icon: `w-[22px] h-[22px]`.

#### HowItWorks
`bg-[#ECFDF5] py-16 px-12`
- H2: "Cara kerjanya sederhana"
- Grid `grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[860px] mx-auto`, each step `text-center`

| # | Heroicon | Icon bg | Icon color | Title | Desc |
|---|---------|---------|-----------|-------|------|
| 1 | `ChatBubbleLeftRightIcon` | brand-200 | brand-600 | 1. Pelanggan chat | Pelanggan kirim pesan WA kapan saja. Siang maupun malam. |
| 2 | `BoltIcon` | accent-100 | accent-600 | 2. Langsung dibalas | Riplai membaca data bisnis kamu dan menjawab dalam hitungan detik. |
| 3 | `ChartBarIcon` | brand-200 | brand-600 | 3. Kamu pantau | Monitor semua percakapan dari dashboard. Balas manual jika perlu. |

Icon container: `w-14 h-14 rounded-2xl mx-auto mb-4`.

#### Testimonials
`bg-white py-16 px-12`
- H2: "Kata mereka yang sudah pakai"
- Grid `grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[920px] mx-auto`
- Card `border border-gray-100 rounded-[18px] p-6`

| Avatar bg | Init | Name | Role | Quote |
|-----------|------|------|------|-------|
| brand-500 | KW | Kadek Wira | Pemilik Villa · Seminyak, Bali | Tamu WA malam-malam tanya ketersediaan kamar. Sudah dibalas otomatis sebelum saya sempat lihat HP. |
| accent-500 | NM | Nyoman Mega | Warung & Café · Ubud, Bali | Tamu asing tanya menu dan harga dalam bahasa Inggris, langsung dibalas dengan tepat. Sangat membantu. |
| brand-600 | MD | Mbak Dewi | Villa & Homestay · Canggu, Bali | Booking villa naik 30% sejak pakai Riplai. Tamu yang WA tengah malam pun terlayani dengan baik. |

#### PricingCards
`bg-gray-50 py-16 px-12`
- H2: "Harga jelas. Tumbuh sesuai skala bisnismu."
- Sub: "Mulai gratis, upgrade kapan saja."
- Annual toggle: UI display only — 2 `<span>` pills (Bulanan / Tahunan -20%), no state change, no onClick
- Grid `grid grid-cols-1 md:grid-cols-4 gap-3.5 max-w-[1000px] mx-auto`

| Plan | Price | Reply cap | WA# | Features | CTA | CTA style |
|------|-------|----------|-----|----------|-----|-----------|
| Gratis | Rp 0 / selamanya | 50/bln | 1 | KB dasar, laporan ringkas | Coba Gratis | `<a href="/signup">` secondary pill |
| Starter | Rp 199.000 /bln | 500/bln | 1 | KB lengkap, Analytics dasar, notif | Pilih Starter | `<a href="/signup">` secondary pill |
| Growth ⭐ Terpopuler | Rp 499.000 /bln | 2.000/bln | 3 | Analytics lengkap, multi-nomor, prioritas | Pilih Growth | `<a href="/signup">` primary pill |
| Custom | Hubungi Kami | Tidak terbatas | ∞ | Semua Growth + SLA, onboarding, API, dedicated | Hubungi Kami | `<a href="mailto:hello.riplai@gmail.com">` ghost pill |

Growth card: `border-2 border-brand-500 shadow-[0_8px_32px_rgba(16,185,129,.15)] scale-[1.03] z-10 relative`  
Growth badge: `absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full`  
All CTAs: `<a>` links only — no `<button>`, no onClick.

#### Footer
`bg-[#0D1117] text-white py-11 px-12`
- Logo (size=28, white variant) + tagline: "Penjawab 24 jam untuk bisnis Indonesia." `text-sm text-gray-500`
- 3 columns: Produk (Fitur `/features`, Harga `/pricing`, Demo `/demo`) · Perusahaan (Tentang `/about`, Blog `href="#"`) · Legal (Kebijakan Privasi `/privacy`, Syarat & Ketentuan `/terms`)
- Bottom: `© 2026 Riplai. Semua hak dilindungi.` `text-xs text-gray-600`

---

### RiplaiLogo (`components/logo/RiplaiLogo.tsx`)
```
Props: size (number — applied as height px), variant ("default" | "white" | "mono")
```
SVG `viewBox="0 0 40 46"`, width auto-scaled from height:
- Bubble path: `M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z`
- Dot: `cx=12 cy=19 r=2.5` fill `#059669`
- Arc r=6: `M12,13 A6,6 0 0,1 12,25` sw=2.5 stroke `#059669`
- Arc r=11: `M12,8 A11,11 0 0,1 12,30` sw=1.8 stroke `#059669` opacity=0.65
- Arc r=16: `M12,3 A16,16 0 0,1 12,35` sw=1.2 stroke `#059669` opacity=0.35
- Wordmark: "riplai" `font-extrabold tracking-[-0.02em]` — color: `text-gray-900` (default) / `text-white` (white) / `text-gray-600` (mono)

---

### Signin (`/signin`)
Navbar variant: `minimal`. Full-page centered layout `flex-1 flex items-center justify-center py-10 px-6`.

Card `w-full max-w-[400px]`:
- Logo mark centered `w-11 h-11 bg-brand-500 rounded-[12px]`
- H1 `text-[24px] font-extrabold tracking-[-0.02em] text-center mt-4 mb-1`: "Selamat datang kembali"
- Sub `text-sm text-gray-400 text-center mb-6`
- Email field (`Input` from `@riplai/ui`) + Password field (with eye icon visual)
- "Lupa kata sandi?" link `text-[12.5px] text-accent-500 font-semibold float-right`
- CTA: `<a href="/signup" class="...rounded-full bg-brand-500 w-full text-center block pointer-events-none opacity-80">Masuk</a>` — visual only
- Footer: "Belum punya akun? `<a href="/signup" class="text-brand-500 font-bold">Daftar gratis</a>`"

---

### Signup (`/signup`)
Navbar variant: `minimal`. 2-col layout `grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[900px] mx-auto py-10 px-6`, collapses to 1-col on mobile.

**Left — form:**
- H1 `text-[26px] font-extrabold tracking-[-0.02em] mb-1.5`: "Coba gratis 14 hari"
- Sub `text-sm text-gray-400 mb-7`: "Tidak perlu kartu kredit. Setup dalam 5 menit."
- Fields (in order): Nama lengkap · Email bisnis · Nomor WhatsApp bisnis ("+62" prefix icon-l) · Jenis bisnis (`<select>`: Apotek/Toko Obat · Klinik/Dokter · Restoran/F&B · Villa/Penginapan · Toko Retail · Lainnya) · Kata sandi (eye icon visual, static)
- Use `Input` from `@riplai/ui` for all fields; `defaultValue` for design states, not `value`
- T&C checkbox: "Saya setuju dengan `<a href="/terms">Syarat & Ketentuan</a>` dan `<a href="/privacy">Kebijakan Privasi</a>` Riplai"
- CTA: loading state visual `pointer-events-none opacity-70` + spinner SVG + "Membuat akun..." — no action
- Footer: "Sudah punya akun? `<a href="/signin" class="text-brand-500 font-bold">Masuk</a>`"

**Right — benefits panel:**
`bg-[#ECFDF5] rounded-[20px] p-7`
- Title `text-[15px] font-bold text-brand-700 mb-5`: "Kenapa daftar Riplai?"
- 5 benefit rows with check circle (`w-[22px] h-[22px] rounded-full bg-brand-500`):
  1. Admin otomatis aktif 24 jam, 7 hari
  2. Setup dalam 5 menit, langsung aktif
  3. Tidak perlu keahlian teknis
  4. 14 hari gratis, tidak perlu kartu kredit
  5. Batalkan kapan saja

---

### Features (`/features`)
Full-page feature breakdown. Navbar (full) + Footer.
- H1 `text-[40px] font-extrabold tracking-[-0.03em]`: "Fitur yang kamu butuhkan. Tanpa yang tidak perlu."
- Sub `text-[17px] text-gray-500 max-w-[560px]`: "Dirancang khusus untuk bisnis kecil Indonesia yang tidak punya waktu banyak."
- 2-col grid `grid-cols-1 md:grid-cols-2 gap-6` — same 6 features as FeatureGrid but larger cards (padding 28px, icon 48px, larger text)
- Bottom CTA: `<a href="/signup" class="...">Coba Gratis →</a>`

---

### Pricing (`/pricing`)
Full pricing table. Navbar (full) + Footer.
- Same 4-card layout as PricingCards section but full-page context
- Annual toggle: UI only, same behavior as home section
- Below cards: feature comparison table (Gratis / Starter / Growth / Custom columns × feature rows, ✓ / — cells)

Feature comparison rows: Jumlah balasan/bln · Nomor WA · Knowledge Base · Analytics · Notifikasi · Multi-nomor · Prioritas support · API akses · SLA · Onboarding khusus

---

### Demo (`/demo`)
Standalone interactive DemoChat. Navbar (full) + Footer.
- H1 `text-[34px] font-extrabold tracking-[-0.03em]`: "Coba admin otomatis langsung"
- Sub: "Ketik pertanyaan seperti pelanggan sungguhan. Admin otomatis Riplai akan menjawab dari data bisnis Villa Ubud Jiwa."
- `DemoChat` component centered, max-w-[440px], larger height (`max-h-[420px]`)
- Disclaimer below: "Ini demo menggunakan data contoh. Bisnis kamu bisa mengajarkan data yang berbeda."
- Below disclaimer: `<a href="/signup">` CTA "Coba dengan data bisnis kamu →"

---

### About (`/about`)
Navbar (full) + Footer. Placeholder content — replace before launch.

Sections:
1. **Misi** — "Kami percaya setiap bisnis kecil Indonesia berhak punya tim siaga 24 jam — tanpa harus merekrut orang baru."
2. **Kisah Kami** — founder story paragraph (placeholder)
3. **Nilai Kami** — 3 cards: Sederhana · Jujur · Mendukung UMKM Indonesia
4. **Kontak** — email: hello.riplai@gmail.com

---

### Privacy (`/privacy`) and Terms (`/terms`)
Doc layout `flex gap-10 max-w-[900px] mx-auto py-10 px-12`.

Left: sticky TOC `w-[200px] sticky top-16` — anchor links to each section.  
Right: doc body — H1 + effective date + 11 sections (Privacy) / 12 sections (Terms).

- Operator identity: "Layanan riplai dioperasikan oleh **Riplai** (nama usaha terdaftar di Indonesia, NIB: **[NOMOR NIB]**). Kontak: hello.riplai@gmail.com"
- Effective date placeholder: `[1 Juni 2026]`
- Governing law: Hukum Republik Indonesia. Dispute: BANI Jakarta.
- Full content per `refs/landing-page-build.md §7.1` (Privacy) and `§7.2` (Terms).

Navbar: full. Footer: standard.

---

## Constraints

### Must NOT
- Use `#075E54` (WA dark green) or `#ECE5DD` (WA chat bg) — trademark risk
- Use purple `#8B5CF6` or slate `#64748B` — outside token system
- Use emoji as icons — Heroicons v2 (`@heroicons/react/24/outline`) only, except DemoChat scripted replies
- Use `rounded-lg` on buttons — always `rounded-full` (pill)
- Import `@riplai/api-client` anywhere in `apps/web` — landing is static only
- Use `fetch()` to call backend from `apps/web` — no API calls, DemoChat is client-side logic only
- Use the word "AI" in any copy — use: admin otomatis / jago balas / penjawab 24 jam / tim siaga
- Define Tailwind tokens inside `apps/web` — all tokens from `packages/config` only
- Add `'use client'` to any component except `DemoChat`
- Use Framer Motion — CSS transitions and `@keyframes` only

### Must
- Tailwind v4 syntax: `@import "tailwindcss"` in globals.css — no `@tailwind base/components/utilities`
- All `<a>` CTAs that "would submit" use `pointer-events-none opacity-75` (signin/signup form actions)
- Signin/signup: `Input` from `@riplai/ui`; `Button` from `@riplai/ui` for button-like elements; raw `<a>` for nav links
- `defaultValue` on form inputs (not `value`) — avoids controlled component requirement without `'use client'`
- Responsive breakpoints: all multi-col layouts (hero, feature grid, testimonials, pricing, signup 2-col) collapse to 1-col at `md:` (768px)
- Section H2: `text-[34px] font-extrabold tracking-[-0.03em]`
- Hero H1: `text-[58px] font-extrabold tracking-[-0.04em] leading-[1.06]`
- Pill buttons: always `rounded-full`
- Navbar `variant="minimal"` on `/signin` and `/signup`
- Privacy/Terms: `[1 Juni 2026]` and `[NOMOR NIB]` as visible placeholders — do not fill
- `@heroicons/react: "^2"` in `apps/web/package.json`
- Mobile hero: DemoChat widget hidden on mobile (`hidden md:block`) or stacked below copy
- DemoChat in Hero: same component as `/demo` page, smaller height (`max-h-[220px]`)
- All routes in Navbar use correct hrefs (not `href="#"`) except Blog footer link

## Out of Scope
- Form submission or backend API integration
- Annual pricing toggle state change (visual pill only)
- Mobile hamburger drawer open/close
- "Lupa kata sandi?" flow
- Dark mode (landing pages light-only for MVP)
- Email verification or OTP flow
- Auth session, JWT, cookies
- Blog / Artikel route (footer link `href="#"` acceptable)
- DemoChat persistence across page navigation (state resets on mount)
- SEO meta tags beyond `<title>` (open graph, sitemap — post-MVP)
