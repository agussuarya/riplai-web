# Riplai — Landing Page Build Plan
> Decision session: 2026-05-14  
> Scope: `apps/web` — full public marketing site  
> Target: non-technical Indonesian SMB owners

---

## 1. Pages in Scope

| Route | Page | Priority | Notes |
|-------|------|----------|-------|
| `/` | Home (beranda) | P0 | Hero + fitur highlight + how it works + pricing preview + waitlist CTA |
| `/fitur` | Fitur | P0 | Full feature breakdown per audience type |
| `/harga` | Harga | P0 | 3-tier pricing table with feature comparison |
| `/demo` | Demo | P0 | Interactive chat simulation — no backend needed |
| `/tentang` | Tentang | P1 | Founder story + mission + team |
| `/privacy` | Kebijakan Privasi | P0 (legal) | Full UU PDP-compliant privacy policy |
| `/terms` | Syarat & Ketentuan | P0 (legal) | Full terms of service |

**Language:** Bahasa Indonesia throughout (including legal pages).  
**CTA destination:** "Coba Gratis" → waitlist email capture modal (no backend yet).

---

## 2. Legal Entity Strategy

### Current status: Solopreneur (no PT yet)

**Personal name and home address must NOT appear on the public website.**  
This is achievable. Here's the strategy:

**Step 1 — Register NIB immediately (free, ~30 min)**  
- Go to [oss.go.id](https://oss.go.id) → Daftar Usaha Perorangan  
- Business name: **"Riplai"** or **"Riplai Digital"**  
- Category: KBLI 62099 (Aktivitas Teknologi Informasi lainnya) or 62012 (Portal Web)  
- Your personal name appears on the NIB but is NOT published on the website  
- Cost: **Free**

**Step 2 — Use NIB for Meta Business Verification**  
Meta requires verified business identity — a NIB as Usaha Perorangan is accepted.  
Facebook Business Manager → Settings → Business Info → upload NIB document.

**Step 3 — Upgrade to PT Perorangan later**  
Once you have paying partners, upgrade to single-person PT (UU Cipta Kerja).  
~Rp 2–5 juta + notaris, 1–2 months. Provides limited liability protection.

### Legal pages wording (hides personal identity)

Privacy Policy and T&C identify the operator as:

> *"Layanan riplai dioperasikan oleh **Riplai** (nama usaha terdaftar di Indonesia, NIB: **[NOMOR NIB]**). Untuk pertanyaan terkait privasi, hubungi kami di [legal@riplai.id](mailto:legal@riplai.id)."*

No physical address in the public legal pages — UU PDP allows a contact email as sufficient for small operators. Physical address is only required in formal regulatory filings, not on the consumer-facing website.

### Placeholder tokens

| Placeholder | What to fill |
|-------------|-------------|
| `[NOMOR NIB]` | NIB number from OSS after registration |
| `[legal@riplai.id]` | Actual legal contact email (set up before launch) |
| `[1 Juni 2026]` | Actual effective date of policies |

Remove all references to `[PT RIPLAI TEKNOLOGI INDONESIA]` and physical address — not needed.

Indonesian law basis: **UU PDP No. 27 Tahun 2022** (Perlindungan Data Pribadi).  
Governing law: Hukum Negara Republik Indonesia. Dispute resolution: Pengadilan Negeri Jakarta.

---

## 3. Pricing Structure (Placeholder — to be confirmed)

Four tiers in IDR. Monthly billing. Annual toggle: UI only for MVP, no logic yet.

| Plan | Price | Reply Cap | WA Numbers | Features |
|------|-------|-----------|------------|---------|
| **Gratis** | Rp 0 | 50 balasan/bln | 1 | Knowledge Base dasar, laporan ringkas |
| **Starter** | Rp 199.000 | 500 balasan/bln | 1 | KB lengkap, Analytics dasar, notif WA ke pemilik |
| **Growth** | Rp 499.000 | 2.000 balasan/bln | 3 | Analytics lengkap, multi-nomor, prioritas dukungan |
| **Custom** | Hubungi Kami | Tidak terbatas | Tidak terbatas | Semua fitur Growth + SLA, onboarding khusus, API akses, dukungan dedicated |

**Custom tier is the anchor** — makes Growth look like the obvious choice. Target: hotel chains, franchise networks, multi-outlet F&B. CTA is "Hubungi Kami" → opens a mailto or contact form, not a payment flow.

> All placeholder prices. Adjust before launch. Custom pricing is always quote-based — never publish a number.

---

## 4. Demo Chat Script

Persona: Visitor is a klinik owner previewing the bot from a pelanggan's perspective.

```
Kamu (calon pelanggan):
  "Halo, apakah klinik buka hari Minggu?"

Bot riplai ✦:
  "Halo! 👋 Klinik kami buka setiap Senin–Sabtu pukul 08.00–17.00 WIB. 
   Hari Minggu kami libur. Ada yang bisa kami bantu?"

Kamu:
  "Berapa biaya konsultasi umum?"

Bot riplai ✦:
  "Biaya konsultasi umum Rp 75.000 per kunjungan. 
   Ingin langsung buat jadwal? Balas 'YA' dan kami siapkan."

Kamu:
  "Apakah ada dokter anak?"

Bot riplai ✦:
  "Iya, kami punya dokter anak yang praktik setiap Selasa dan Kamis, 
   pukul 09.00–12.00 WIB. Mau saya bantu daftarkan?"
```

Three scripted exchanges — hardcoded, no API. Typing animation on bot replies.  
Beneath the demo: "Ini adalah contoh bot. Bot sungguhan dilatih dari data bisnis kamu."

---

## 5. File Structure — `apps/web`

```
apps/web/
├── app/
│   ├── layout.tsx              ← root layout: Navbar + Footer, fonts
│   ├── globals.css
│   ├── page.tsx                ← Home (beranda)
│   ├── fitur/
│   │   └── page.tsx
│   ├── harga/
│   │   └── page.tsx
│   ├── demo/
│   │   └── page.tsx
│   ├── tentang/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← logo + nav links + CTA
│   │   └── Footer.tsx          ← links, copyright, legal links
│   ├── logo/
│   │   └── RiplaiLogo.tsx      ← canonical SVG mark + wordmark as React component
│   ├── landing/
│   │   ├── Hero.tsx            ← headline + sub + dual CTA
│   │   ├── LogoStrip.tsx       ← "Dipercaya oleh" partner logos (placeholder)
│   │   ├── FiturGrid.tsx       ← 6-feature icon grid
│   │   ├── HowItWorks.tsx      ← 3-step numbered section
│   │   ├── PricingCards.tsx    ← 4-tier cards (Gratis/Starter/Growth/Custom) with CTA
│   │   ├── Testimonials.tsx    ← 3 placeholder quotes from SMB types
│   │   └── WaitlistModal.tsx   ← email capture modal (no backend — localStorage flag)
│   └── demo/
│       └── DemoChat.tsx        ← interactive scripted chat, 'use client'
│
└── lib/
    └── fonts.ts                ← Plus Jakarta Sans + JetBrains Mono setup
```

---

## 6. Component Design Decisions

### Navbar
- Logo (mark + wordmark) on left
- Nav links: Fitur · Harga · Demo · Tentang
- Right: ghost "Masuk" + primary pill "Coba Gratis"
- Sticky on scroll (`sticky top-0 backdrop-blur`)
- Mobile: hamburger → full-height slide-down menu

### Hero (`/`)
- Headline (800, 48px): "WhatsApp kamu aktif 24 jam, bahkan saat kamu tidur."
- Sub (400, 18px): "Admin otomatis menjawab pertanyaan pelanggan berdasarkan data bisnis kamu — tanpa kamu perlu angkat telepon."
- Dual CTA: `[Coba Gratis →]` (primary pill) + `[Lihat Demo]` (ghost)
- Below CTAs: small social proof line — "Sudah dipakai 200+ bisnis di Indonesia" (placeholder)
- No hero image — show `DemoChat` component inline below the headline

### FiturGrid (`/fitur` + home section)
Six features in a 3×2 grid, each card: icon (Heroicons) + title + 2-line description.

| # | Icon | Feature title | Description |
|---|------|---------------|-------------|
| 1 | `ChatBubbleLeftRightIcon` | Penjawab 24 Jam | Balas pesan pelanggan otomatis, kapan saja — bahkan saat kamu tidur |
| 2 | `BookOpenIcon` | Knowledge Base Pintar | Ajarkan bisnis kamu sekali, bot langsung tahu segalanya |
| 3 | `ChartBarIcon` | Analitik Percakapan | Lihat berapa pesan dibalas, topik terpopuler, dan waktu sibuk |
| 4 | `BellIcon` | Notif ke Kamu | Bot tidak tahu jawabannya? Kamu dapat notifikasi WA langsung |
| 5 | `DevicePhoneMobileIcon` | Tanpa Aplikasi Baru | Semua percakapan tetap di WhatsApp — pelanggan tidak perlu instal apapun |
| 6 | `Cog6ToothIcon` | Mudah Dikonfigurasi | Atur jam operasional, nama bot, dan balasan khusus dalam hitungan menit |

### HowItWorks
Three numbered steps with icon + title + body. Background: `brand-50`.

1. **Sambungkan WhatsApp** — Hubungkan nomor WA bisnis kamu ke riplai dalam 3 menit
2. **Isi Knowledge Base** — Ceritakan tentang bisnis, produk, dan FAQ kamu
3. **Bot langsung bekerja** — Jago balas siap menjawab pelanggan kamu 24 jam

### PricingCards
- Four plans: Gratis · Starter · Growth · Custom
- **Growth** highlighted as "Terpopuler" with `brand-500` border + ring
- Annual toggle (UI only — no logic yet; placeholder 20% off label)
- Each plan: name, price (or "Hubungi Kami"), reply cap, feature list with ✓/— per item, CTA pill
- Custom card CTA: "Hubungi Kami" (ghost variant) → mailto:hello@riplai.id
- On mobile: cards stack vertically, Growth card floats slightly with a shadow to stay prominent

### Testimonials
Three quote cards. Persona archetypes for Indonesian SMB:

1. **Ibu Sari** — Pemilik Klinik, Jakarta — "Dulu saya jawab WA pasien jam 2 pagi. Sekarang bot yang kerja, saya bisa tidur tenang."
2. **Pak Budi** — Restoran Padang, Bandung — "Pelanggan tanya menu dan jam buka? Bot sudah jawab sebelum saya sempat buka HP."
3. **Mbak Dewi** — Villa & Homestay, Bali — "Tamu dari luar negeri tanya dalam bahasa Inggris pun dibalas dengan baik. Sangat membantu."

### Footer
- Logo (wordmark only) + tagline: "Penjawab 24 jam untuk bisnis Indonesia."
- Columns: Produk (Fitur, Harga, Demo) · Perusahaan (Tentang, Blog placeholder) · Legal (Kebijakan Privasi, Syarat & Ketentuan)
- Bottom: © 2026 Riplai. Semua hak dilindungi.

---

## 7. Legal Pages Content Outline

### Privacy Policy (`/privacy`) — Kebijakan Privasi

Structure (under UU PDP No. 27/2022):

1. **Identitas Pengontrol Data** — "Riplai (nama usaha terdaftar di Indonesia, NIB: [NOMOR NIB])", kontak: [legal@riplai.id] — no physical address published
2. **Data yang Kami Kumpulkan**
   - Dari partner (pelanggan riplai): nama bisnis, nomor WhatsApp, email, data penggunaan layanan
   - Dari percakapan WhatsApp: nomor WA pelanggan akhir, isi pesan (untuk fungsi bot)
   - Data teknis: IP address, perangkat, log akses
3. **Tujuan Pemrosesan Data**
   - Menjalankan layanan admin otomatis WhatsApp
   - Melatih Knowledge Base dari data yang diunggah partner
   - Mengirim notifikasi ke pemilik bisnis
   - Peningkatan layanan dan analitik agregat
4. **Dasar Hukum** — Pelaksanaan perjanjian (Pasal 20 UU PDP), kepentingan sah (legitimate interest)
5. **Hak Subjek Data** — Akses, koreksi, penghapusan, pembatasan, portabilitas
6. **Retensi Data** — Data percakapan: 12 bulan aktif + 6 bulan setelah penghentian akun
7. **Pengungkapan Pihak Ketiga** — WhatsApp Business API provider (Meta), layanan hosting, analitik
8. **Keamanan** — Enkripsi in-transit (TLS 1.3), enkripsi at-rest, kontrol akses
9. **Cookie** — Fungsional (sesi, preferensi), analitik (Google Analytics / privacy-first alt)
10. **Perubahan Kebijakan** — 30 hari pemberitahuan via email untuk perubahan material
11. **Kontak** — [legal@riplai.id]

### Terms & Conditions (`/terms`) — Syarat & Ketentuan

Structure:

1. **Definisi** — Layanan, Partner, Pelanggan Akhir, Knowledge Base, Nomor WA Bisnis
2. **Pendaftaran Akun** — Persyaratan, verifikasi nomor WA, tanggung jawab keamanan akun
3. **Layanan yang Diberikan** — Admin otomatis WA, Knowledge Base, Analytics, notifikasi
4. **Pembayaran & Tagihan** — Siklus bulanan, gagal bayar → downgrade ke Free setelah 7 hari, tidak ada refund untuk bulan berjalan
5. **Batasan Penggunaan (Kuota)** — Balasan dihitung per pesan outbound dari bot. Kelebihan kuota → bot berhenti hingga siklus berikutnya
6. **Penggunaan yang Dilarang** — Spam, phishing, penipuan, konten ilegal, pelanggaran Kebijakan WhatsApp Business
7. **Kepatuhan WhatsApp Business API** — Partner wajib mengikuti Meta Business Policy; pelanggaran → penghentian akun tanpa refund
8. **Kekayaan Intelektual** — riplai memiliki platform; partner memiliki Knowledge Base dan data bisnis mereka
9. **Penghentian Layanan** — Partner dapat batalkan kapan saja. riplai dapat hentikan akun melanggar TOS dengan 24 jam notifikasi
10. **Batasan Tanggung Jawab** — Total liabilitas tidak melebihi 3× biaya langganan bulan terakhir
11. **Hukum yang Berlaku** — Hukum Republik Indonesia
12. **Penyelesaian Sengketa** — Musyawarah 30 hari → Arbitrase BANI, Jakarta

---

## 8. About Page Outline (`/tentang`)

**Placeholder story — replace with real content before launch.**

Section structure:
1. **Misi** — "Kami percaya setiap bisnis kecil Indonesia berhak punya tim siaga 24 jam — tanpa harus merekrut orang baru."
2. **Kisah Kami** — Founder terinspirasi dari bisnis keluarga yang kewalahan balas WA. Riplai lahir dari frustrasi itu — alat yang simpel, terjangkau, dan benar-benar bekerja untuk bisnis Indonesia.
3. **Tim** — Placeholder grid (foto + nama + jabatan). To be updated.
4. **Nilai Kami** — Tiga nilai: Sederhana, Jujur, Mendukung UMKM Indonesia
5. **Kontak** — Email + WA support link

---

## 9. RiplaiLogo Component Spec

```tsx
// components/logo/RiplaiLogo.tsx
// Props: size (number, applied to height), variant ("default" | "white" | "mono")
// Renders canonical Bubble Ripple SVG + wordmark via CSS
```

SVG viewBox: `0 0 40 46`. Use `height` prop to scale; width calculated proportionally.
Wordmark: Plus Jakarta Sans 800, tracking -0.02em, lowercase "riplai". Color matches variant.

---

## 10. Implementation Order

### Phase 1 — Foundation
- [ ] `lib/fonts.ts` — Plus Jakarta Sans setup
- [ ] `app/layout.tsx` — root layout with fonts, Navbar, Footer
- [ ] `components/logo/RiplaiLogo.tsx` — reusable SVG logo
- [ ] `components/layout/Navbar.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `app/globals.css` — Tailwind v4 import + CSS variables for brand/accent tokens

### Phase 2 — Home Page
- [ ] `components/landing/Hero.tsx`
- [ ] `components/demo/DemoChat.tsx` (used in Hero + `/demo` page)
- [ ] `components/landing/FiturGrid.tsx`
- [ ] `components/landing/HowItWorks.tsx`
- [ ] `components/landing/PricingCards.tsx`
- [ ] `components/landing/Testimonials.tsx`
- [ ] `components/landing/WaitlistModal.tsx`
- [ ] `app/page.tsx` — assembles all above sections

### Phase 3 — Inner Pages
- [ ] `app/fitur/page.tsx` — extended FiturGrid + per-audience breakdown
- [ ] `app/harga/page.tsx` — full pricing table with comparison grid
- [ ] `app/demo/page.tsx` — standalone DemoChat with explanatory copy
- [ ] `app/tentang/page.tsx` — About with placeholder story

### Phase 4 — Legal Pages
- [ ] `app/privacy/page.tsx` — full Kebijakan Privasi (Bahasa Indonesia)
- [ ] `app/terms/page.tsx` — full Syarat & Ketentuan (Bahasa Indonesia)

---

## 11. Design Tokens — Quick Reference for Implementation

```css
/* In globals.css alongside @import "tailwindcss" */
:root {
  --brand-500: #10B981;
  --brand-600: #059669;
  --brand-50:  #ECFDF5;
  --accent-500: #6366F1;
  --accent-100: #E0E7FF;
}
```

Tailwind config extends must include full brand + accent palette from `2026-05-14-design-system.md` Section 11.

Button shape: **always `rounded-full`** (pill). Never `rounded-lg` for buttons.  
Font: Plus Jakarta Sans for everything. JetBrains Mono for `/knowledge-base` editor only (not needed on landing).

---

## 12. Open Questions (to resolve before launch)

- [ ] **Domain confirmed?** Design preview references `riplai.id` — is this registered?
- [ ] **WhatsApp API provider?** Affects T&C section 7 (which provider's Meta policy to reference)
- [ ] **Annual pricing discount?** Monthly-only for MVP; how much discount for annual? (20% is standard)
- [ ] **Blog / Artikel?** Footer has placeholder — even an empty blog route is fine to ship
- [ ] **Analytics tool?** Google Analytics or privacy-first alt (Umami, Plausible) — affects cookie policy wording
- [ ] **NIB registration** — register at oss.go.id then fill `[NOMOR NIB]` in legal pages before launch
- [ ] **legal@riplai.id mailbox** — set up email forwarding before launch (required by UU PDP)
- [ ] **Refund policy** — confirm "no refund for current month" stance before publishing T&C
- [ ] **Custom plan contact** — does "Hubungi Kami" open mailto or a contact form? (mailto is fine for MVP)
