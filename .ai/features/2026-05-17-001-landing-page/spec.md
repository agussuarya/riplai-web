# Spec: Landing Page Static Views — `apps/web`
> Status: final - reviewed 2026-05-17

## Goal
Build all public-facing static pages for riplai.id: home, signin, signup, privacy policy, and terms — pure server-rendered HTML, zero client-side interactivity.

## User Story
As an Indonesian SMB owner, I want to browse riplai's landing pages and see signin/signup forms so that I understand the product and know how to sign up.

## Inputs
| File | Purpose |
|------|---------|
| `.ai/features/2026-05-17-001-landing-page/refs/design-preview-v2.html` | Visual source of truth for all pages |
| `.ai/features/2026-05-17-001-landing-page/refs/logo-concepts.html` | Canonical logo SVG (Bubble Ripple, Option 2) |
| `.ai/features/2026-05-17-001-landing-page/refs/design-review-v2.md` | Locked design decisions |
| `.ai/features/2026-05-17-001-landing-page/refs/landing-page-build.md` | Copy, pricing tiers, component spec |

Tech stack: Next.js (latest), Tailwind CSS v4, Plus Jakarta Sans, Heroicons v2 (`@heroicons/react/24/outline`).

## Outputs

### Pages
| Route      | File | Description            |
|------------|------|------------------------|
| `/`        | `app/page.tsx` | Home — 8 sections      |
| `/signin`  | `app/signin/page.tsx` | Signin — centered card |
| `/signup`  | `app/signup/page.tsx` | Signup — 2-col form    |
| `/privacy` | `app/privacy/page.tsx` | Kebijakan Privasi      |
| `/terms`   | `app/terms/page.tsx` | Syarat & Ketentuan     |

### Components
| File | Notes |
|------|-------|
| `components/logo/RiplaiLogo.tsx` | Canonical SVG mark + wordmark |
| `components/layout/Navbar.tsx` | Sticky nav, all `<a>` links |
| `components/layout/Footer.tsx` | Dark footer |
| `components/landing/Hero.tsx` | Split layout, DemoChat inline |
| `components/landing/LogoStrip.tsx` | "Dipercaya oleh" text strip |
| `components/landing/FeatureGrid.tsx` | 3×2 icon grid |
| `components/landing/HowItWorks.tsx` | 3 steps, brand-50 bg |
| `components/landing/Testimonials.tsx` | 3 quote cards |
| `components/landing/PricingCards.tsx` | 4-tier cards |
| `components/demo/DemoChat.tsx` | Static chat widget display |
| `app/globals.css` | CSS vars + grain noise utility |

All files: server components (no `'use client'`).

- Add subtitle copy, e.g. "Dirancang khusus untuk bisnis Indonesia yang tidak punya waktu banyak." (from refs/design-preview-v2.html line 403)

## UI / Behavior

### Global

**CSS variables** (in `globals.css`):
```css
:root {
  --brand-500: #10B981; --brand-600: #059669; --brand-700: #047857;
  --brand-50:  #ECFDF5; --brand-200: #A7F3D0;
  --accent-500: #6366F1; --accent-600: #4F46E5; --accent-100: #E0E7FF;
}
```

**Font:** Plus Jakarta Sans 800/700/600/500/400. Loaded in `layout.tsx`. No other font on public pages.

**Section backgrounds** (home page):
| Section      | bg |
|-------------|-----|
| Hero        | `radial-gradient(ellipse 65% 90% at 0% 0%, #ECFDF5 0%, transparent 60%), #fff` + grain `::before` |
| LogoStrip   | `bg-white border-y border-gray-100` |
| FeatureGrid | `bg-gray-50` |
| HowItWorks  | `bg-[#ECFDF5]` |
| Testimonials| `bg-white` |
| PricingCards| `bg-gray-50` |
| Footer      | `bg-[#0D1117]` always |

---

### Navbar
- `sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100`
- Left: `RiplaiLogo` (mark 30px + wordmark "riplai")
- Center: `<a href="/features">Fitur</a>` · Harga → `/pricing` · Demo → `/demo` · Tentang → `/about` (`text-sm font-medium text-gray-500`)
- Right: `<a href="/login" class="text-sm font-semibold text-gray-500">Masuk</a>` + `<a href="/signup" class="...rounded-full bg-brand-500 text-white px-5 py-2 text-sm font-bold">Coba Gratis</a>`
- Mobile: hamburger visual (icon only, no drawer — static)

---

### Home (`/`)

**Section order:** Navbar → Hero → LogoStrip → FeatureGrid → HowItWorks → Testimonials → PricingCards → Footer

#### Hero
2-col grid, `gap-14 max-w-[1100px] mx-auto py-24 px-16`

**Left:**
- Badge: `<span class="inline-flex items-center gap-1.5 bg-accent-100 text-accent-600 text-xs font-bold px-3.5 py-1 rounded-full mb-6">Admin Otomatis WhatsApp</span>`
- H1 `text-[58px] font-extrabold tracking-[-0.04em] leading-[1.06] mb-5`:
  `WhatsApp kamu aktif` `<br>` `<span class="gradient-text">24 jam</span>,` `<br>` `bahkan saat tidur.`
- Gradient CSS: `background: linear-gradient(135deg, #10B981 0%, #34D399 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`
- Sub `text-[17px] text-gray-500 leading-[1.65] max-w-[420px] mb-8`: "Admin otomatis menjawab chat pelanggan berdasarkan data bisnis kamu. Kamu tidak perlu balas satu per satu."
- CTA row `flex gap-3 flex-wrap items-center`:
  - `<a href="/signup" class="text-[15px] font-bold text-white bg-brand-500 px-7 py-3 rounded-full">Coba Gratis 14 Hari →</a>`
  - `<a href="/demo" class="text-[15px] font-semibold text-gray-900 bg-gray-100 border border-gray-200 px-7 py-3 rounded-full">Lihat Demo</a>`
- Trust line `text-xs text-gray-400 mt-3.5`: "Tidak perlu kartu kredit · Setup dalam 5 menit"
- Social proof `mt-9 flex items-center gap-3`:
  - 4 avatar initials stacked (`-mr-2`): AS `bg-brand-500`, RM `bg-accent-500`, HB `bg-brand-600`, KS `bg-[#0F766E]`; `w-7 h-7 rounded-full border-2 border-white text-[9px] font-bold text-white`
  - "**200+** bisnis Indonesia sudah pakai Riplai" `text-sm text-gray-500`

**Right:**
- `DemoChat` widget, `max-w-[360px]`, `rotate-[-0.8deg]`, CSS drop-shadow `0 20px 40px rgba(0,0,0,.12)`, border-radius 22px
- Caption `text-[11.5px] text-gray-400 text-center mt-3`: "Ini yang tamu kamu terima jam 11 malam, dibalas otomatis."

**Hero background:**
```css
.hero-section { position: relative; background: radial-gradient(ellipse 65% 90% at 0% 0%, #ECFDF5 0%, transparent 60%), #ffffff; }
.hero-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
}
```

#### DemoChat (static display)
Branded chat widget — no send functionality, no typing animation.

- Outer: `border border-gray-200 rounded-[22px] overflow-hidden bg-white`
- **Header:** `bg-brand-500 px-4 py-3 flex items-center gap-2.5`
  - Avatar `w-9 h-9 rounded-full bg-white/20` with riplai SVG mark inside
  - Name `text-sm font-bold text-white`: "Villa Ubud Jiwa"
  - Sub `text-[11px] text-[#A7F3D0]`: "Penjawab 24 jam aktif"
- **Chat area** `bg-[#F0F4F0] p-3.5 flex flex-col gap-2.5`:
  - Timestamp center `text-[10px] text-gray-400 text-center mb-2`: "Sabtu, 23:05"
  - Customer bubbles (right-aligned): `bg-[#E0E7FF] rounded-[8px_8px_2px_8px] p-2 max-w-[220px]` + timestamp `text-[10px] text-gray-400 text-right mt-1`
  - Bot bubbles (left-aligned): `bg-white rounded-[8px_8px_8px_2px] p-2 max-w-[240px]` + "Admin Otomatis" `text-[10px] text-accent-500 font-semibold text-right mt-1`
  - Show 2 exchanges from design-preview (Sabtu 23:05 — room inquiry + bot reply)
- **Input bar** `bg-gray-50 border-t border-gray-200 px-3 py-2.5 flex gap-2`:
  - Input field (static, `pointer-events-none opacity-60`): "Tanya apa saja..."
  - Send button visual: `w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center opacity-60`

#### LogoStrip
`bg-white border-y border-gray-100 py-6 px-16`
- `max-w-[900px] mx-auto flex items-center gap-10 flex-wrap justify-center`
- Label `text-[12px] font-semibold text-gray-400 uppercase tracking-wide`: "DIPERCAYA OLEH"
- 5 name spans `text-sm font-bold text-gray-400`: Apotek Sehat · Klinik Sehat Sentosa · Restoran Padang Maju · Villa Bintang Bali · Toko Batik Nusantara

#### FeatureGrid
`bg-gray-50 py-16 px-12`
- H2 `text-[34px] font-extrabold tracking-[-0.03em] text-center mb-3`: "Semua yang bisnis kamu butuhkan"
- Sub `text-base text-gray-500 text-center mb-11`
- Grid `grid grid-cols-3 gap-4 max-w-[960px] mx-auto`
- Card `bg-white border border-gray-100 rounded-[18px] p-5`

| # | Heroicon | Icon bg | Icon color | Title | Desc |
|---|---------|---------|------------|-------|------|
| 1 | `ChatBubbleLeftRightIcon` | brand-50 | brand-500 | Penjawab 24 Jam | Balas pesan pelanggan otomatis kapan saja. Bahkan saat kamu tidur. |
| 2 | `BookOpenIcon` | brand-50 | brand-500 | Data Bisnis Pintar | Ajarkan bisnis kamu sekali, admin otomatis langsung tahu segalanya. |
| 3 | `ChartBarIcon` | brand-50 | brand-500 | Analitik Percakapan | Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk. |
| 4 | `BellIcon` | accent-100 | accent-500 | Notifikasi ke Kamu | Admin otomatis tidak bisa jawab? Kamu dapat notifikasi email atau dashboard langsung. |
| 5 | `DevicePhoneMobileIcon` | brand-50 | brand-500 | Tanpa Aplikasi Baru | Pelanggan tetap chat lewat WhatsApp biasa. Kamu pantau dari dashboard Riplai. |
| 6 | `Cog6ToothIcon` | accent-100 | accent-500 | Mudah Dikonfigurasi | Atur jam operasional, nama penjawab, dan balasan khusus dalam hitungan menit. |

Icon container: `w-11 h-11 rounded-xl flex items-center justify-center mb-3.5`. Icon size: `w-[22px] h-[22px]`.

#### HowItWorks
`bg-[#ECFDF5] py-16 px-12`
- H2 same style: "Cara kerjanya sederhana"
- Grid `grid grid-cols-3 gap-8 max-w-[860px] mx-auto`
- Each step: `text-center`, icon container `w-14 h-14 rounded-2xl mx-auto mb-4`

| # | Heroicon | Icon bg | Icon color | Title | Desc |
|---|---------|---------|------------|-------|------|
| 1 | `ChatBubbleLeftRightIcon` | brand-200 | brand-600 | 1. Pelanggan chat | Pelanggan kirim pesan WA kapan saja. Siang maupun malam. |
| 2 | `BoltIcon` | accent-100 | accent-600 | 2. Langsung dibalas | Riplai membaca data bisnis kamu dan menjawab dalam hitungan detik. |
| 3 | `ChartBarIcon` | brand-200 | brand-600 | 3. Kamu pantau | Monitor semua percakapan dari dashboard. Balas manual jika perlu. |

#### Testimonials
`bg-white py-16 px-12`
- H2: "Kata mereka yang sudah pakai"
- Grid `grid grid-cols-3 gap-4 max-w-[920px] mx-auto`
- Card `border border-gray-100 rounded-[18px] p-6`
  - Quote mark `text-[32px] text-[#A7F3D0] font-extrabold leading-none mb-3`: `"`
  - Quote `text-sm text-gray-900 leading-[1.65] mb-5`
  - Avatar row: `w-9 h-9 rounded-full text-[11px] font-bold text-white flex items-center justify-center`

| Avatar bg | Init | Name | Role | Quote |
|-----------|------|------|------|-------|
| brand-500 | IS | Ibu Sari | Pemilik Klinik · Jakarta | Dulu saya jawab WA pasien jam 2 pagi. Sekarang admin otomatis yang kerja, saya bisa tidur tenang. |
| accent-500 | PB | Pak Budi | Restoran Padang · Bandung | Pelanggan tanya menu dan jam buka? Bot sudah jawab sebelum saya sempat buka HP. |
| brand-600 | MD | Mbak Dewi | Villa & Homestay · Bali | Tamu dari luar negeri tanya dalam bahasa Inggris pun dibalas dengan baik. Sangat membantu. |

#### PricingCards
`bg-gray-50 py-16 px-12`
- H2: "Harga yang masuk akal"
- Annual toggle: visual display only (2 `<span>` pills, no state change)
- Grid `grid grid-cols-4 gap-3.5 max-w-[1000px] mx-auto`
- Card `bg-white border border-gray-100 rounded-[20px] p-5 flex flex-col`
- Growth: `border-2 border-brand-500 shadow-[0_8px_32px_rgba(16,185,129,.15)] scale-[1.03] z-10 relative`

| Plan | Price | Cap | WA | Features | CTA label | CTA style |
|------|-------|-----|----|----------|-----------|-----------|
| Gratis | Rp 0 / selamanya | 50 balasan/bln | 1 | KB dasar, laporan ringkas | Mulai Gratis | `<a href="/signup">` secondary pill |
| Starter | Rp 199.000 /bln | 500 balasan/bln | 1 | KB lengkap, Analytics dasar, notif | Coba Sekarang | `<a href="/signup">` secondary pill |
| Growth ⭐ | Rp 499.000 /bln | 2.000 balasan/bln | 3 | Analytics lengkap, multi-nomor, prioritas | Coba 14 Hari Gratis | `<a href="/signup">` primary pill |
| Custom | Hubungi Kami | Tidak terbatas | ∞ | Semua Growth + SLA, onboarding, API, dedicated | Hubungi Kami | `<a href="mailto:hello@riplai.id">` ghost-brand pill |

Growth "Terpopuler" badge: `absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full`.
All CTAs are `<a>` links — not `<button>`. No onClick.

#### Footer
`bg-[#0D1117] text-white py-16 px-12`
- Logo + tagline: "Penjawab 24 jam untuk bisnis Indonesia." `text-sm text-gray-500`
- 3 columns: Produk (Fitur, Harga, Demo) · Perusahaan (Tentang, Blog) · Legal (Kebijakan Privasi, Syarat & Ketentuan)
- Bottom: `© 2026 Riplai. Semua hak dilindungi.` `text-xs text-gray-600`

---

### Login (`/login`)

Full-page centered layout: `flex-1 flex items-center justify-center py-10 px-6`

Card `w-full max-w-[400px]`:
- Logo mark `w-11 h-11 bg-brand-500 rounded-[12px]` centered + "Selamat datang kembali" `text-[24px] font-extrabold tracking-[-0.02em]` + sub `text-sm text-gray-400`
- Error banner (static — shown as design example): `bg-[#FEF2F2] border border-[#FECACA] rounded-[12px] p-3 flex items-center gap-2 mb-5` — "Email atau kata sandi salah. Coba lagi." `text-sm text-[#991B1B] font-medium`
- Fields:
  - Email: label `field-label` + `<input type="email" class="input-base input-error-state" value="budi@apotek.id">` + error msg `field-error`
  - Password: label + `input-icon-wrap` wrapper + `<input type="password" class="input-base with-icon-r">` + eye SVG icon (`icon-r`, static) + "Lupa kata sandi?" `<a href="#" class="text-[12.5px] text-accent-500 font-semibold float-right"`
- CTA: `<a href="/signup" class="btn btn-lg btn-primary w-full justify-center mt-1 pointer-events-none opacity-80">Masuk</a>` — visual only, no action
- Footer link `text-center text-[13.5px] text-gray-400 mt-5`: "Belum punya akun? `<a href="/signup" class="text-brand-500 font-bold">Daftar gratis</a>`"

Navbar on this page: logo (links to `/`) + nav links only — no "Masuk" / "Coba Gratis" in nav.

---

### Signup (`/signup`)

2-col layout `max-w-[900px] grid grid-cols-2 gap-14 items-start py-10 px-6 mx-auto`

**Left — form:**
- H1 `text-[26px] font-extrabold tracking-[-0.02em] mb-1.5`: "Coba gratis 14 hari"
- Sub `text-sm text-gray-400 mb-7`: "Tidak perlu kartu kredit. Setup dalam 5 menit."
- Fields (in order):
  1. Nama lengkap — `input-base input-success-state` with value "Budi Santoso" + success msg "✓ Terlihat bagus!"
  2. Email bisnis — `input-base` empty, placeholder "email@bisnis.com"
  3. Nomor WhatsApp bisnis — `input-icon-wrap` with "+62" prefix icon-l, `input-base with-icon-l pl-12`, helper "Nomor WhatsApp yang akan dihubungkan ke Riplai"
  4. Jenis bisnis — `<select class="input-base">` with options: Apotek/Toko Obat · Klinik/Dokter · Restoran/F&B · Villa/Penginapan · Toko Retail · Lainnya
  5. Kata sandi — `input-base input-error-state with-icon-r` + eye icon (static) + error msg "Minimal 8 karakter"
- Checkbox row `flex items-start gap-2.5`: checked box visual (`check-box checked` with SVG check) + "Saya setuju dengan `<a href="/terms">Syarat & Ketentuan</a>` dan `<a href="/privacy">Kebijakan Privasi</a>` Riplai"
- CTA: `<a href="#" class="btn btn-lg btn-primary w-full justify-content-center pointer-events-none opacity-70">` with loading spinner SVG + "Membuat akun..." — visual loading state, no action
- Footer `text-center text-[13.5px] text-gray-400 mt-4`: "Sudah punya akun? `<a href="/login" class="text-brand-500 font-bold">Masuk</a>`"

**Right — benefits panel:**
`bg-[#ECFDF5] rounded-[20px] p-7`
- Title `text-[15px] font-bold text-brand-700 mb-5`: "Kenapa daftar Riplai?"
- 5 benefit rows `flex gap-2.5 items-start`:
  - Check circle `w-[22px] h-[22px] rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0`
  - Text `text-[13.5px] text-gray-900 leading-relaxed`

Benefits:
1. Admin otomatis aktif 24 jam, 7 hari
2. Setup dalam 5 menit, langsung aktif
3. Tidak perlu keahlian teknis
4. 14 hari gratis, tidak perlu kartu kredit
5. Batalkan kapan saja

---

### Privacy Policy (`/privacy`)

Doc layout `flex gap-10 max-w-[900px] mx-auto py-10 px-12`:

**Left — sticky TOC** `w-[200px] flex-shrink-0`:
- `sticky top-16`
- TOC links `text-sm text-gray-400 border-l-2 border-transparent pl-3 py-1 block hover:text-brand-700 hover:border-brand-500`
- Sections: Identitas Pengontrol · Data yang Dikumpulkan · Tujuan Pemrosesan · Dasar Hukum · Hak Subjek Data · Retensi Data · Pihak Ketiga · Keamanan · Cookie · Perubahan Kebijakan · Kontak

**Right — doc body** `flex-1`:
- H1 `text-[26px] font-extrabold tracking-[-0.02em] mb-1.5`: "Kebijakan Privasi"
- Effective date `text-sm text-gray-400 mb-8`: "Berlaku: [1 Juni 2026]"
- Each section: H2 `text-[17px] font-bold border-t border-gray-100 pt-2 mt-7 mb-2.5` + body `text-sm text-gray-500 leading-[1.75] mb-3`
- Operator identity: "Layanan riplai dioperasikan oleh **Riplai** (nama usaha terdaftar di Indonesia, NIB: **[NOMOR NIB]**). Kontak: legal@riplai.id"

Content outline per `refs/landing-page-build.md §7.1` (11 sections, Bahasa Indonesia, UU PDP compliant).

---

### Terms & Conditions (`/terms`)

Same doc layout as Privacy.

- H1: "Syarat & Ketentuan"
- 12 sections per `refs/landing-page-build.md §7.2`
- Governing law: Hukum Republik Indonesia. Dispute: BANI Jakarta.

---

### RiplaiLogo component
```
Props: size (number = height px), variant ("default" | "white" | "mono")
Renders: SVG mark (Bubble Ripple) + wordmark span
```

SVG viewBox `0 0 40 46`, width auto-scaled from height:
- Bubble path: `M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z` fill `#10B981` (default) / `white` (white variant)
- Dot: `cx=12 cy=19 r=2.5` fill `#059669`
- Arc 1 r=6: `M12,13 A6,6 0 0,1 12,25` sw=2.5 stroke `#059669`
- Arc 2 r=11: `M12,8 A11,11 0 0,1 12,30` sw=1.8 stroke `#059669` opacity=0.65
- Arc 3 r=16: `M12,3 A16,16 0 0,1 12,35` sw=1.2 stroke `#059669` opacity=0.35
- Wordmark: "riplai" `font-extrabold tracking-[-0.02em]` color matches variant

---

## Constraints

### Must NOT
- Any `onClick`, `onSubmit`, `onChange`, or client-side event handler
- Any `'use client'` directive (pure server components)
- Use `#075E54` (WA dark green) or `#ECE5DD` (WA chat bg) — trademark risk
- Use purple `#8B5CF6` or slate `#64748B` — outside token system
- Use emoji as icons — Heroicons v2 only (`@heroicons/react/24/outline`)
- Use `rounded-lg` on buttons — always `rounded-full` (pill)
- All CTAs that "would submit" must use `pointer-events-none opacity-75` or `<a>` with no href action
- WhatsApp trademark marks or green logo

### Must
- Tailwind v4 syntax: `@import "tailwindcss"` — no `@tailwind base/components/utilities`
- DemoChat: static HTML snapshot of 2-exchange conversation, no JS
- Login/Register: `<input>` fields with `defaultValue` for design states (not `value` — avoids controlled component requirement)
- Privacy/Terms: `[1 Juni 2026]` left as visible placeholders
- All `<a>` in nav use correct routes (not `href="#"`)
- Mobile: hero stacks 1 col, feature/testimonial/pricing grids collapse to 1 col, register 2-col collapses to 1 col
- Section H2: 34px / weight 800 / tracking -0.03em
- Hero H1: 58px / weight 800 / tracking -0.04em / line-height 1.06
- Add "@heroicons/react": "^2" to apps/web/package.json dependencies
- Replace justify-content-center with justify-center
- Remove CSS var declarations; use Tailwind color utilities from packages/config directly (bg-brand-500, text-accent-600, etc.)
- Use Button from @riplai/ui for all button-like elements; use Input from @riplai/ui for form fields; use raw <a> only for navigation links
- Tech stack Change to Next.js ^16 to match context.md and apps/web/package.json
- Use href="#" for out-of-scope nav links
- Add variant?: "full" | "minimal" prop to Navbar spec; "minimal" renders logo + center nav only, omits auth CTAs
- Add breakpoint: md:grid-cols-N (collapse below 768px) for hero, feature grid, testimonials, pricing, and signup 2-col
- Login page "Masuk" CTA has href="/signup" -> remove href entirely

## Out of Scope
- Form submission / backend API
- Annual pricing toggle state (visual pill only, no switching)
- WaitlistModal (removed — CTAs link directly to `/signup`)
- DemoChat typing animation
- Mobile hamburger drawer open/close
- "Lupa kata sandi?" flow
- Dark mode (landing pages light-only for MVP)
- `/features`, `/pricing`, `/demo`, `/about` inner pages (separate feature)
- Auth session, JWT, cookies
- Blog / Artikel route (footer link placeholder only — `href="#"` acceptable)
