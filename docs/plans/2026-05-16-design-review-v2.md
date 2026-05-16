# Riplai — Design Review v2
> Session: 2026-05-16  
> Scope: Full design audit of landing page, partner dashboard, and component library  
> Supersedes open questions in `2026-05-14-design-system.md §16`

---

## 1. Locked Decisions (resolved from open questions)

| # | Question | Decision |
|---|----------|----------|
| 1 | Hero layout | **Split layout** — headline + CTA left, demo widget right (Option B) |
| 2 | Landing background | **Subtle mesh gradient** — brand-50 radial at top-left, fades to white; CSS grain noise on hero only |
| 3 | Demo widget | **Hybrid** — WA bubble layout, riplai-branded header (brand-500, not #075E54) + riplai logo avatar for bot replies |
| 4 | Typography | **Plus Jakarta Sans 800 only** — hero at 60px / -0.04em tracking; gradient text on "24 jam" (brand-500→brand-400) |
| 5 | Pricing tiers on landing | **4 cards** — Free / Starter / Growth / Custom |
| 6 | Illustration direction | **Micro-illustrations** — geometric SVG compositions, no characters, brand token colors |
| 7 | Mobile partner dashboard | **In scope for MVP** — sidebar becomes 4-icon bottom tab bar on mobile |
| 8 | Sidebar nav active state | **Floating pill (`mx-2 rounded-full`)** — no left indicator bar |

---

## 2. Landing Page — Fixes & Improvements

### 2.1 Hero Section (full rewrite)

**Current problems:**
- Center-aligned layout is generic
- 46px hero heading is too small for emotional pitch
- Demo widget imitates WhatsApp colors — creates brand confusion
- No background depth — pure white feels blank

**Resolved design:**

```
Layout: 2-column grid, gap-16, max-w-6xl, py-24

Left column:
  ┌─────────────────────────────────┐
  │ [Pill badge: "Admin Otomatis"]  │
  │                                 │
  │ WhatsApp kamu aktif             │  ← font-size: 60px
  │ 24 jam, bahkan                  │  ← letter-spacing: -0.04em
  │ saat kamu tidur.                │  ← line-height: 1.06
  │ ("24 jam" = gradient brand-500→brand-400)
  │                                 │
  │ [sub 18px, max-w-sm]           │
  │ Admin otomatis menjawab        │
  │ pertanyaan pelanggan...        │
  │                                 │
  │ [Coba Gratis 14 Hari →] [Demo] │  ← pill buttons
  │                                 │
  │ Tidak perlu kartu kredit · 5 menit
  └─────────────────────────────────┘

Right column:
  ┌─────────────────────────────────┐
  │   Demo widget                   │  ← box-shadow: 0 24px 60px rgba(0,0,0,.12)
  │   rotate(-1deg)                 │  ← slight tilt makes it feel like screenshot
  │   border-radius: 22px           │
  └─────────────────────────────────┘

Background (hero section only):
  - Radial gradient: brand-50 at top-left corner → white by center
  - CSS grain noise: 2% opacity (url("data:image/svg+xml,<svg>..."))
  - No image, no blobs, no circles — subtle and fast
```

**Hero badge update:**
- Keep `accent-100` bg + `accent-600` text
- Replace sparkle SVG with a Heroicon (`SparklesIcon` or `BoltIcon`)
- Text: "Admin Otomatis WhatsApp" — unchanged

**Gradient text implementation (CSS):**
```css
.gradient-text {
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 2.2 Demo Widget (hybrid riplai-branded)

**Current problem:** Uses `#075E54` header (WhatsApp's exact dark green). Meta trademark risk + brand confusion.

**Resolved design:**

```
Demo container:
  border: 1px solid gray-200
  border-radius: 22px
  box-shadow: 0 8px 40px rgba(0,0,0,.10)
  overflow: hidden

Header bar (CHANGED):
  background: brand-500 (#10B981)      ← NOT #075E54
  padding: 12px 16px
  Avatar: riplai logo mark (white bubble on green circle)
  Name: "Apotek Sehat" · white
  Sub: "Penjawab 24 jam aktif" · brand-200  ← NOT "online"

Chat area:
  background: #F0F4F0   ← neutral warm white, NOT #ECE5DD (WA exact)

Customer bubbles (left):
  background: white
  border-radius: 8px 8px 8px 2px
  font-size: 13px, gray-900

Bot reply bubbles (right):   ← CHANGED from #DCF8C6 (WA green)
  background: accent-100 (#E0E7FF)
  border-radius: 8px 8px 2px 8px
  font-size: 13px, gray-900
  timestamp + ✦ icon (sparkle, accent-500)

Input bar:
  background: gray-50
  border-top: 1px solid gray-200
  Send button: brand-500
```

### 2.3 Missing Sections — Must Add

Order of sections on home page (`/`):

| # | Section | Status in preview | Priority |
|---|---------|-------------------|----------|
| 1 | Hero (split layout) | Needs rework | P0 |
| 2 | LogoStrip ("Dipercaya oleh...") | Missing | P1 |
| 3 | FeatureGrid (3×2) | Missing | P0 |
| 4 | HowItWorks (3 steps) | Present, needs emoji→icon fix | P0 |
| 5 | Testimonials (3 cards) | Missing | P1 |
| 6 | Pricing (4 cards) | Present, needs 4th card | P0 |
| 7 | Footer | Present, good | — |

### 2.4 HowItWorks — Replace Emoji with Heroicons

**Current:** 💬 ✦ 📊 (emoji — inconsistent rendering, informal)  
**Fix:** Heroicons inside colored icon containers

```
Step 1: ChatBubbleLeftRightIcon  — bg: brand-100, icon: brand-600
Step 2: BoltIcon (or SparklesIcon) — bg: accent-100, icon: accent-600
Step 3: ChartBarIcon              — bg: brand-100, icon: brand-600
```

Container: `w-14 h-14 rounded-2xl`, centered icon `w-7 h-7`

### 2.5 Pricing — 4-Card Layout

**Addition: Custom card (rightmost)**

```tsx
// Custom tier card
<div className="card border-gray-200">
  <div className="badge-muted mb-3">Enterprise</div>
  <h3>Custom</h3>
  <p className="text-3xl font-extrabold">Hubungi Kami</p>
  <p className="text-xs text-gray-400 mb-4">Disesuaikan untuk kebutuhan kamu</p>
  <ul>
    <li>✓ Balasan tidak terbatas</li>
    <li>✓ Nomor WA tidak terbatas</li>
    <li>✓ SLA + dukungan dedicated</li>
    <li>✓ API akses</li>
    <li>✓ Onboarding khusus</li>
  </ul>
  <Button variant="secondary">Hubungi Kami</Button>  {/* ghost/secondary, not primary */}
</div>
```

Desktop grid: `grid-cols-4 gap-4` (tighter gap than 3-col)  
Growth: `ring-2 ring-brand-500 scale-[1.02]` — stays most prominent  
Mobile: `grid-cols-1`, Growth rendered first (reorder via CSS order property)

---

## 3. Partner Dashboard — Fixes & Improvements

### 3.1 Thread Header — Add Action Buttons

**Current:** Shows avatar + name + badge only. No actions.  
**Fix:**

```
Thread header right side:
  [Mark Handled ✓] (ghost variant, brand-600 text)
  [✦ Sarankan Balasan] (ai variant, accent-500 bg)
  [⋮] (overflow menu → View History, Block Contact)
```

"Sarankan Balasan" (Suggest Reply) is the core AI action — must be prominent.  
"Mark Handled" removes the "Needs Reply" badge and moves conversation out of priority queue.

### 3.2 Avatar Background Colors — Standardize

**Current (preview):** 5 different colors including off-brand #8B5CF6 (purple) and #64748B.

**Fixed palette (4 colors only):**

```typescript
const avatarColors = [
  '#10B981',  // brand-500
  '#6366F1',  // accent-500
  '#059669',  // brand-600
  '#0F766E',  // teal-700 (similar enough to brand family)
]
// deterministic: colorIndex = parseInt(phoneNumber.slice(-4)) % 4
```

Remove #8B5CF6 and #64748B — not in the token system.

### 3.3 Inbox Unread Count Badge

**Current:** `background:#10B981` (green) for unread count.  
**Fix:** `background:red-500 (#EF4444)`, white text.

Green communicates brand, not urgency. Unread messages need urgency signal.  
The sidebar nav item active state already uses brand-sub — the green badge on top of green active state creates visual noise.

### 3.4 Chat Area Background

**Current:** `#ECE5DD` — WhatsApp's exact background color.  
**Fix:** `#F0F3F0` — a neutral warm white, slightly green-tinted but unmistakably distinct.

Dark mode: `#131C24` — unchanged (already different from WA).

### 3.5 Sidebar Nav — Floating Pill Active State

**Current:** `border-radius:12px`, full-width fill.  
**Fix:**

```css
/* Inactive hover */
.nav-item:hover {
  background: var(--bg-hover);
  border-radius: 12px;  /* rounded-xl — soft, not pill */
}

/* Active */
.nav-item.active {
  background: var(--brand-sub);      /* #ECFDF5 */
  color: var(--brand-text);          /* #047857 */
  font-weight: 600;
  border-radius: 9999px;             /* pill */
  margin-left: 8px;                  /* mx-2 — floats inside sidebar */
  margin-right: 8px;
}

/* Active icon */
.nav-item.active svg {
  color: #10B981;
}
```

This makes the active item a floating pill, reinforcing riplai's pill identity in the product UI.

### 3.6 Mobile — Bottom Tab Bar

On `<768px`, sidebar transforms to a bottom tab bar:

```
┌────────────────────────────────────────┐
│                                        │
│              Main content              │
│                                        │
├──────────┬──────────┬──────────┬───────┤
│   Inbox  │Analytics │    KB    │  Atur │
│    ●3    │          │          │       │
│  [icon]  │  [icon]  │  [icon]  │[icon] │
└──────────┴──────────┴──────────┴───────┘
  h-16, bg-white, border-top: gray-200
  Active icon: brand-500. Inactive: gray-400.
  "Inbox" tab shows red unread dot when count > 0.
```

Inbox conversation thread on mobile:
- Conversation list = full screen
- Tap conversation → thread slides in from right (CSS slide-right animation, 200ms ease-out)
- Back button (← chevron) in thread header returns to list
- Reply input: `position:fixed`, `bottom:0`, rises with keyboard (`env(safe-area-inset-bottom)`)

---

## 4. Component Library — Additions & Fixes

### 4.1 Focus Ring — Fix A11y

**Current:** `box-shadow: 0 0 0 3px rgba(16,185,129,.12)` — nearly invisible.  
**Fix:**

```css
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16,185,129,0.25);  /* 25% not 12% */
}
```

Buttons: `focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2`

### 4.2 Toggle/Switch Component (NEW — required for Settings)

```
OFF state:
  ┌──────────┐
  │ ○        │  bg: gray-200, knob: white
  └──────────┘

ON state:
  ┌──────────┐
  │        ● │  bg: brand-500, knob: white
  └──────────┘

Spec: w-11 h-6, knob: w-5 h-5, transition: 150ms ease
Disabled: opacity-50, cursor-not-allowed
```

Used in: Settings → Bot auto-reply toggle, operating hours on/off, notification preferences.

### 4.3 Micro-Illustration System (Empty States)

Geometric SVG compositions, inline (no external file dependency), using brand tokens:

| Screen | Composition | Colors |
|--------|-------------|--------|
| Inbox empty | Speech bubble outline + clock hands | brand-200, brand-400 |
| KB empty | 3 stacked card outlines + pen tip | accent-100, accent-500 |
| Analytics empty | Bar chart outline (3 bars, ascending) | brand-100, brand-500 |
| Search no results | Magnifier + question mark | gray-200, gray-400 |

All compositions: `viewBox="0 0 120 100"`, max-width 160px, centered.  
Below illustration: heading (gray-700, 16px/600) + 1-line description (gray-500, 14px) + optional CTA.

Example empty inbox:
```
"Belum ada percakapan"
"Percakapan WhatsApp akan muncul di sini saat pelanggan mengirim pesan."
[Atur Knowledge Base →]  ← ghost button, guides to next action
```

---

## 5. Background Texture — Implementation

Hero section grain overlay (CSS-only, no external image):

```css
.hero-section {
  position: relative;
  background: radial-gradient(
    ellipse 80% 60% at 15% 30%,
    #ECFDF5 0%,
    transparent 70%
  ), white;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}
```

Section rhythm (alternating backgrounds, landing page only):

```
Hero          → white + brand-50 radial gradient
LogoStrip     → gray-50
FeatureGrid   → white
HowItWorks    → brand-50 (flat, no gradient)
Testimonials  → white
Pricing       → gray-50
Footer        → #0D1117 (dark — always)
```

---

## 6. Typography Refinement

Hero heading update (landing page only):

```css
.hero-heading {
  font-size: 60px;          /* was 46px in preview, 48px in spec */
  font-weight: 800;
  letter-spacing: -0.04em;  /* was -0.03em */
  line-height: 1.06;        /* was 1.13 */
  color: #111827;
}

/* Gradient phrase: "24 jam" */
.hero-heading .gradient {
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

Section headings (h2 on landing): `font-size: 32px`, `font-weight: 800`, `-0.03em` tracking.  
(Was 26px in preview — too close to body text size to read as a section break.)

---

## 7. Updated Implementation Priority

### Landing page changes (in order)

| Task | File | Priority |
|------|------|----------|
| Fix hero: split layout, 60px heading, gradient "24 jam" | `Hero.tsx` | P0 |
| Fix demo widget: brand-500 header, accent-100 bot bubbles | `DemoChat.tsx` | P0 |
| Add hero background: radial gradient + grain | `globals.css` / `Hero.tsx` | P0 |
| Fix HowItWorks: Heroicons replacing emoji | `HowItWorks.tsx` | P0 |
| Add 4th pricing card (Custom) | `PricingCards.tsx` | P0 |
| Add FeatureGrid section to home page | `FeatureGrid.tsx` + `page.tsx` | P0 |
| Add Testimonials section | `Testimonials.tsx` + `page.tsx` | P1 |
| Add LogoStrip section | `LogoStrip.tsx` + `page.tsx` | P1 |
| Fix section h2 sizing (26px → 32px) | Global | P1 |

### Dashboard changes (in order)

| Task | File | Priority |
|------|------|----------|
| Sidebar active state → floating pill | `Sidebar.tsx` / CSS | P0 |
| Thread header: add action buttons | `ThreadHeader.tsx` | P0 |
| Inbox badge: green → red | `Sidebar.tsx` | P0 |
| Avatar colors: standardize to 4 | `Avatar.tsx` | P1 |
| Chat area background: #ECE5DD → #F0F3F0 | CSS tokens | P1 |
| Mobile: bottom tab bar on <768px | `Sidebar.tsx` / `MobileNav.tsx` | P1 |
| Mobile: thread slide-in + fixed reply input | `Thread.tsx` | P1 |

### Component additions

| Task | Priority |
|------|----------|
| Toggle/Switch component | P0 (Settings page blocked without it) |
| Focus ring fix (accessibility) | P0 |
| Micro-illustration SVGs (4 empty states) | P1 |

---

## 8. What's Still Undecided

| Item | Reason | Suggested resolution |
|------|--------|---------------------|
| Final logo SVG in Figma | Needs execution beyond HTML prototype | Can proceed with inline SVG spec from design-system.md §2 |
| Framer Motion vs CSS transitions | Post-MVP | Use CSS only for MVP; revisit after launch |
| Icon library version | Heroicons v2 vs v1 API differs | Lock to Heroicons v2 (`@heroicons/react/24/outline`) |
| Blog/Artikel route | Footer placeholder exists | Empty route is fine for MVP; no content needed |
| Annual pricing discount | 20% standard but unconfirmed | Placeholder UI with "Hemat 20%" — no billing logic yet |