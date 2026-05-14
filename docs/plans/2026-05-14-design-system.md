# Riplai — Design System & UI/UX Plan
> Decision log from brand/UX session on 2026-05-14  
> Applies to: `apps/web`, `apps/partner`, `apps/admin`, `packages/ui`, `packages/config`

---

## 1. Brand Identity

| Attribute       | Decision                                                         |
|-----------------|------------------------------------------------------------------|
| Personality     | Friendly & Approachable — warm, modern, makes tech feel easy     |
| Primary audience| SMB owners (non-technical) — clinics, shops, F&B, villas         |
| Brand voice     | Conversational Indonesian SMB context; simple words, clear CTAs  |
| Logo            | See Section 2 below                                              |

---

## 2. Logo Design

### Name anatomy
"riplai" = **ripl** (ripple — messages spreading, reaching people) + **ai** (the intelligence behind every reply).  
Always written lowercase in the mark: **riplai** — never "Riplai".

### Brand positioning note
Do NOT use "AI" in product copy for SMB audiences. Indonesian SMBs (clinics, retail, F&B, villas) respond better to warmth and outcomes than AI jargon. Use contextual terms instead:

- **admin otomatis** — feature labels, UI copy, onboarding ("Aktifkan admin otomatis kamu")
- **jago balas** — conversational/how-it-works copy ("Jago balas beraksi setiap saat")
- **penjawab 24 jam** — hero headlines, taglines, emotional hook
- **tim siaga** — reliability claims, professional/formal contexts

The wordmark carries no "ai" color accent — "riplai" is a product name, not an AI declaration.

### Logo mark — FINAL: Bubble Ripple

A rounded speech bubble with a source dot at the left and three concentric arc lines radiating
rightward — like ripples spreading from where a message originates. The arcs fan across most of
the bubble interior, growing fainter as they reach the far edge.

```
  ╭──────────────╮
 │ )  ))  )))    │    riplai
 │               │
  ╰──╮──────────╯
     │
```

**Canonical SVG paths** (viewBox="0 0 40 46"):

```svg
<!-- Bubble shell — brand-500 fill -->
<path d="M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z"
      fill="#10B981"/>

<!-- Source dot — left-center of bubble interior -->
<circle cx="12" cy="19" r="2.5" fill="white"/>

<!-- Arc 1 — r=6, full opacity -->
<path d="M12,13 A6,6 0 0,1 12,25"
      stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>

<!-- Arc 2 — r=11, 65% opacity -->
<path d="M12,8 A11,11 0 0,1 12,30"
      stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".65"/>

<!-- Arc 3 — r=16, 35% opacity -->
<path d="M12,3 A16,16 0 0,1 12,35"
      stroke="white" stroke-width="1.2" stroke-linecap="round" fill="none" opacity=".35"/>
```

For inverted contexts (white bubble on green square app icon), swap fill colors:
bubble → white (opacity .93), dot and arcs → `brand-600` (#059669).

At favicon size (≤24px): drop Arc 3, thicken Arc 1 and Arc 2 for legibility.

### Color application

| Context                  | Bubble fill      | Mark (dot + arcs) | Wordmark       |
|--------------------------|------------------|-------------------|----------------|
| Default (light bg)       | `brand-500`      | white             | `gray-900`     |
| On dark / colored bg     | `brand-500`      | white             | white          |
| App icon (rounded square)| `brand-500` bg   | white bubble + `brand-600` arcs | — |
| Monochrome (print/stamp) | black            | white             | black          |

### Typography of wordmark

Font: **Plus Jakarta Sans** — weight 800, tracking `-0.02em`, all lowercase: **riplai**  
Color: `gray-900` on light, white on dark.  
Do NOT render "ai" in a different color — it is not an AI branding element.

### Sizing & clearspace

Minimum size: 24px height for the mark alone. Below that, use wordmark only.  
Clearspace: equal to the height of the lowercase "r" on all four sides.

### Alternative marks

| Mark variant          | When to use                              |
|-----------------------|------------------------------------------|
| Icon + wordmark (H)   | Default — headers, landing page, emails  |
| Icon only             | Favicon, PWA icon, app store badge       |
| Wordmark only         | Tight horizontal spaces, footer          |

### What to avoid

- Do not stretch or distort the bubble mark
- Do not use `brand-600` or darker as the bubble fill — reads heavy, not friendly
- Do not add a drop shadow to the mark — flat and modern
- Do not place the mark on a busy photo background without a solid container
- Do not highlight "ai" in the wordmark in any accent color
- Do not use the old Bubble Spark (sparkle/star) direction — decision superseded 2026-05-14

---

## 3. Color System

### Primary Palette (Emerald)

| Token          | Hex       | Usage                                          |
|----------------|-----------|------------------------------------------------|
| `brand-50`     | `#ECFDF5` | Light backgrounds, success banners, hover fill |
| `brand-100`    | `#D1FAE5` | Selected state backgrounds                     |
| `brand-200`    | `#A7F3D0` | Borders on hover                               |
| `brand-400`    | `#34D399` | Disabled primary buttons                       |
| `brand-500`    | `#10B981` | **Primary button, links, active nav item**     |
| `brand-600`    | `#059669` | Button hover, pressed state                    |
| `brand-700`    | `#047857` | Dark text on brand-50 backgrounds              |
| `brand-900`    | `#064E3B` | Deep brand text (rarely used)                  |

### Accent Palette (Indigo — bot / otomatis)

| Token          | Hex       | Usage                                          |
|----------------|-----------|------------------------------------------------|
| `accent-100`   | `#E0E7FF` | Bot-generated message bubble background        |
| `accent-500`   | `#6366F1` | Bot badges, "Bot Handled" indicators, KB items |
| `accent-600`   | `#4F46E5` | Accent hover                                   |

### Neutral Palette

| Token          | Hex       | Usage                                          |
|----------------|-----------|------------------------------------------------|
| `gray-50`      | `#F9FAFB` | Page background                                |
| `gray-100`     | `#F3F4F6` | Card/sidebar background                        |
| `gray-200`     | `#E5E7EB` | Borders, dividers                              |
| `gray-400`     | `#9CA3AF` | Placeholder text, disabled labels              |
| `gray-600`     | `#4B5563` | Secondary text, meta info                      |
| `gray-900`     | `#111827` | Primary text, headings                         |

### Semantic Colors

| Token          | Hex       | Usage                                          |
|----------------|-----------|------------------------------------------------|
| `red-50`       | `#FEF2F2` | Error backgrounds                              |
| `red-600`      | `#DC2626` | Error text, danger buttons                     |
| `yellow-50`    | `#FFFBEB` | Warning backgrounds                            |
| `yellow-600`   | `#D97706` | Warning text                                   |
| `green-50`     | `#F0FDF4` | Success backgrounds                            |
| `green-600`    | `#16A34A` | Success text                                   |

### Dark Mode Palette

Dark mode uses a blue-gray base (not pure black) — warmer and easier on the eyes. Brand green (#10B981) stays the same on dark backgrounds; only the subtle tints shift to rgba so they don't bleed.

| Token role        | Light           | Dark                        |
|-------------------|-----------------|-----------------------------|
| Base background   | `#F9FAFB`       | `#0D1117`                   |
| Surface (cards)   | `#FFFFFF`       | `#161B22`                   |
| Subtle / inputs   | `#F3F4F6`       | `#1C2330`                   |
| Hover             | `#F3F4F6`       | `#21293A`                   |
| Border            | `#E5E7EB`       | `#30394A`                   |
| Text primary      | `#111827`       | `#E6EDF3`                   |
| Text secondary    | `#6B7280`       | `#8B949E`                   |
| Text muted        | `#9CA3AF`       | `#6E7681`                   |
| Brand subtle      | `#ECFDF5`       | `rgba(16,185,129,0.13)`     |
| Brand subtle 2    | `#D1FAE5`       | `rgba(16,185,129,0.22)`     |
| Brand text        | `#047857`       | `#34D399`                   |
| Accent subtle     | `#E0E7FF`       | `rgba(99,102,241,0.16)`     |
| Accent text       | `#4F46E5`       | `#818CF8`                   |
| Chat customer bg  | `#FFFFFF`       | `#1C2330`                   |
| Chat bot bg       | `#E0E7FF`       | `rgba(99,102,241,0.18)`     |
| Chat area         | `#ECE5DD`       | `#131C24`                   |

> Brand-500 `#10B981` and accent-500 `#6366F1` are unchanged in dark mode — they are already vivid enough to read on dark surfaces. Only their subtle tint variants change.

### WhatsApp Context
The app is deeply tied to WhatsApp. Use brand-500 (emerald) as a conscious nod to
WhatsApp's green, but keep it distinct enough via typography and layout. Never use
WhatsApp's exact green (#25D366) — avoid confusion with the actual WA UI.

---

## 4. Typography

**Primary font: Plus Jakarta Sans** — designed by Tokotype (Indonesian), warm but credible, pairs naturally with pill buttons and the emerald palette. One font covers all roles via weight variation; no separate display font needed.

**Monospace: JetBrains Mono** — Knowledge Base editor only.

**Why not Inter:** too neutral/cold for a friendly pill-button brand.
**Why not DM Sans:** too rounded — risks feeling like a children's app for SMB clinic/hotel owners.

| Role            | Font                | Weight | Size            | Line Height |
|-----------------|---------------------|--------|-----------------|-------------|
| Hero heading    | Plus Jakarta Sans   | 800    | 48px / 3rem     | 1.1         |
| Page heading    | Plus Jakarta Sans   | 700    | 24px / 1.5rem   | 1.25        |
| Section heading | Plus Jakarta Sans   | 600    | 18px / 1.125rem | 1.4         |
| Card title      | Plus Jakarta Sans   | 600    | 16px / 1rem     | 1.4         |
| Body            | Plus Jakarta Sans   | 400    | 14px / 0.875rem | 1.6         |
| Body strong     | Plus Jakarta Sans   | 500    | 14px / 0.875rem | 1.6         |
| Small / meta    | Plus Jakarta Sans   | 400    | 12px / 0.75rem  | 1.5         |
| Button label    | Plus Jakarta Sans   | 600    | 14px / 0.875rem | 1           |
| Chat bubble     | Plus Jakarta Sans   | 400    | 14px / 0.875rem | 1.6         |
| Monospace (KB)  | JetBrains Mono      | 400    | 13px            | 1.6         |

```typescript
// next/font/google setup
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
})
```

---

## 5. Spacing & Sizing

Use an 8px base grid. All spacing values are multiples of 4px (Tailwind default).

| Spacing use       | Value  | Tailwind class  |
|-------------------|--------|-----------------|
| Component padding | 12px   | `p-3`           |
| Card padding      | 20px   | `p-5`           |
| Section gap       | 24px   | `gap-6`         |
| Page padding (x)  | 24px   | `px-6`          |
| Sidebar width     | 240px  | `w-60`          |
| Header height     | 56px   | `h-14`          |

---

## 6. Component Specifications

### 6.1 Buttons

Shape: **pill** (`border-radius: 9999px`). This is the defining shape of Riplai's UI.

```
╭──────────────────╮
│   Save Changes   │
╰──────────────────╯
border-radius: 9999px | padding: px-6 py-2.5
```

| Variant     | Background     | Text       | Hover              | Disabled       |
|-------------|----------------|------------|--------------------|----------------|
| `primary`   | `brand-500`    | white      | `brand-600`        | `brand-400`    |
| `secondary` | white          | `gray-900` | `gray-50`          | `gray-200` bg  |
| `danger`    | `red-600`      | white      | `red-700`          | `red-300`      |
| `ghost`     | transparent    | `brand-600`| `brand-50` bg      | opacity-50     |
| `ai`        | `accent-500`   | white      | `accent-600`       | `accent-300`   |

> `ai` variant is used for bot/otomatis actions (e.g., "Rangkum", "Sarankan Balasan").

Sizes:
- `sm`: `px-4 py-1.5 text-xs`
- `md`: `px-6 py-2.5 text-sm` (default)
- `lg`: `px-8 py-3 text-base`

### 6.2 Inputs

```
Label text (sm, gray-700, font-medium)
┌─────────────────────────────────────┐
│ Placeholder text                    │
└─────────────────────────────────────┘
border: gray-300 | radius: rounded-xl (not pill — readability)
focus: ring-2 ring-brand-500 border-brand-500
error: border-red-500 ring-red-200
```

### 6.3 Badges / Status Chips

Conversation status badges — always pill-shaped, compact:

| Status        | Background   | Text color   | Label          |
|---------------|--------------|--------------|----------------|
| `needs_reply` | `red-100`    | `red-700`    | Needs Reply    |
| `bot_handled` | `brand-100`  | `brand-700`  | Bot Handled    |
| `waiting`     | `yellow-100` | `yellow-700` | Waiting        |
| `ai`          | `accent-100` | `accent-600` | AI             |

### 6.4 Cards

```
┌─────────────────────────────────────────┐
│                                         │
│   Content                               │
│                                         │
└─────────────────────────────────────────┘
bg: white | border: gray-200 | radius: rounded-2xl | shadow: shadow-sm
padding: p-5 | hover (interactive cards): shadow-md + border-brand-200
```

### 6.5 Chat Bubbles (Inbox)

```
Customer (left):
  ┌──────────────────────┐
  │ Hey, apakah buka...  │  bg: gray-100, text: gray-900, radius: rounded-2xl rounded-tl-sm
  └──────────────────────┘
  08:32 · Customer

Bot reply (right):
                  ┌──────────────────────┐
                  │ Halo! Kami buka...   │  bg: accent-100, text: gray-900, radius: rounded-2xl rounded-tr-sm
                  └──────────────────────┘
                           08:32 · Bot ✦

Partner reply (right):
                  ┌──────────────────────┐
                  │ Baik, terima kasih   │  bg: brand-500, text: white, radius: rounded-2xl rounded-tr-sm
                  └──────────────────────┘
                              08:35 · You
```

> Bot messages get a sparkle icon (✦) to distinguish from partner replies.

### 6.6 Avatar

WA number-based: show last 4 digits as initials. Background cycles through brand/accent palette.

---

## 7. Layout System

### 7.1 Sidebar + Content (Partner & Admin apps)

```
┌──────────┬──────────────────────────────────────────────┐
│          │  ┌──── Header bar (h-14, border-b) ────────┐ │
│ Sidebar  │  │  Page title              [notif] [avatar]│ │
│ (w-60)   │  └─────────────────────────────────────────┘ │
│          │                                              │
│ Logo     │  Main content area                          │
│ ──────── │  px-6 py-6, max-w-5xl mx-auto              │
│ Nav item │                                              │
│ Nav item │                                              │
│ Nav item │                                              │
│          │                                              │
│ ──────── │                                              │
│ User     │                                              │
└──────────┴──────────────────────────────────────────────┘
```

Sidebar states:
- Desktop (≥1024px): always visible, `w-60`
- Tablet (768–1023px): icon-only collapsed, `w-16`, expand on hover
- Mobile (<768px): hidden by default, slide-in sheet via hamburger

### 7.2 Page Backgrounds

- `apps/partner` + `apps/admin`: `bg-gray-50` (not pure white — reduces eye strain)
- `apps/web` (landing): `bg-white` with intentional white space

---

## 8. Navigation Structure

### 8.1 Partner App — `apps/partner`

```
Sidebar:
├── Inbox          [chat icon]  — /inbox (default landing)
├── Analytics      [bar chart]  — /analytics
├── Knowledge Base [book icon]  — /knowledge-base
└── Settings       [gear icon]  — /settings

Bottom of sidebar:
└── [Avatar] Partner name · Plan badge
```

### 8.2 Admin App — `apps/admin`

```
Sidebar:
├── Partners       [users icon] — /partners
├── Onboarding     [plus icon]  — /onboarding
└── System         [server]     — /system

Bottom of sidebar:
└── [Avatar] Admin user
```

---

## 9. Page-by-Page Wireframes

### 9.1 Inbox — `/inbox` (most-used screen)

```
┌──────────────────────────────────────────────────────────────┐
│ Inbox                                    [Filter ▾] [Search] │
├──────────────────┬───────────────────────────────────────────┤
│ Conversations    │ Thread: 081234567890                      │
│ ──────────────── │ ─────────────────────────────────────────│
│ ● 081234...      │                                           │
│   Needs Reply    │  Customer: Apakah buka hari Minggu?      │
│   2 mnt lalu     │  08:30                                    │
│ ──────────────── │                                           │
│ ○ 085678...      │           Bot ✦: Halo! Kami buka setiap  │
│   Bot Handled    │           hari 09.00–21.00 WIB. 08:30    │
│   5 mnt lalu     │                                           │
│ ──────────────── │  Customer: Oke, terima kasih             │
│ ○ 087890...      │  08:31                                    │
│   Waiting        │                                           │
│   10 mnt lalu    │ ─────────────────────────────────────────│
│                  │ ┌────────────────────────────┐  ╭──────╮ │
│                  │ │ Ketik balasan...            │  │ Kirim│ │
│                  │ └────────────────────────────┘  ╰──────╯ │
└──────────────────┴───────────────────────────────────────────┘
```

Mobile: conversation list is full-width. Tap to open thread (full-screen).

### 9.2 Analytics — `/analytics`

```
┌─────────────────────────────────────────────────────┐
│ Analytics                    [This month ▾]         │
│                                                     │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐         │
│  │Total chats│ │Bot handled│ │Needs reply│         │
│  │    248    │ │  182 (73%)│ │    31     │         │
│  └───────────┘ └───────────┘ └───────────┘         │
│                                                     │
│  Usage this month                                   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░  182 / 500 replies used       │
│                                                     │
│  Volume by day (bar chart)                          │
│  Mon Tue Wed Thu Fri Sat Sun                        │
│   ▐   ▐▌  ▐▌  ▌   ▐   ▐   ▐                       │
└─────────────────────────────────────────────────────┘
```

### 9.3 Knowledge Base — `/knowledge-base`

```
┌─────────────────────────────────────────────────────┐
│ Knowledge Base                       [Edit ✎]       │
│                                                     │
│  Business Profile                              ▾    │
│  ┌───────────────────────────────────────────────┐  │
│  │ Klinik Sehat Sentosa — klinik umum di Jakarta │  │
│  │ Buka Senin–Sabtu 08.00–17.00 WIB              │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Products / Services (3)                       ▾    │
│  ┌──────────────────┐ ┌──────────────────┐          │
│  │ Konsultasi Umum  │ │ Cek Lab          │          │
│  │ Rp 75.000        │ │ Rp 150.000       │          │
│  └──────────────────┘ └──────────────────┘          │
│                                                     │
│  FAQs (5)                                      ▾    │
│  Promos (1)                                    ▾    │
└─────────────────────────────────────────────────────┘
```

### 9.4 Settings — `/settings`

Tabbed layout:
- **Profile** — business name, WA number, partner contact
- **Bot** — operating hours, auto-reply on/off toggle, bot name
- **Plan** — current plan, usage, upgrade CTA
- **Notifications** — partner gets WA notif when bot can't answer

### 9.5 Admin: Partners Table — `/partners`

```
┌──────────────────────────────────────────────────────────┐
│ Partners                       [Search]  [+ Add Partner] │
│                                                          │
│  Name            WA Number    Plan     Status   Usage    │
│  ──────────────────────────────────────────────────────  │
│  Klinik Sehat    628123...    Starter  ● Active  73%     │
│  Restoran Maju   628456...    Growth   ● Active  41%     │
│  Hotel Bintang   628789...    Free     ○ Inactive  0%    │
└──────────────────────────────────────────────────────────┘
```

---

## 10. Interaction Patterns

| Pattern             | Behavior                                                          |
|---------------------|-------------------------------------------------------------------|
| Button loading      | Spinner replaces icon; button disabled; no text change            |
| Form validation     | Inline error below field on blur; red border + icon               |
| Toast notifications | Bottom-right, 4s auto-dismiss, slide-up animation                 |
| Empty states        | Illustration + heading + action CTA (not just "No data")          |
| Skeleton loading    | Match shape of real content; pulse animation                      |
| Confirm destructive | Modal dialog, not browser `confirm()` — red danger button         |
| Real-time updates   | New conversation badge on sidebar; thread auto-scrolls to bottom  |

---

## 11. Tailwind Config Updates (Action Items)

The existing `tailwind.config.base.ts` in `packages/config` needs these updates:

```typescript
// packages/config/tailwind.config.base.ts
export const baseConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#34D399",
          500: "#10B981",  // primary
          600: "#059669",  // hover
          700: "#047857",
          900: "#064E3B",
        },
        accent: {
          100: "#E0E7FF",
          500: "#6366F1",  // AI / indigo
          600: "#4F46E5",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
};
```

---

## 12. Button Component Update (Action Items)

The existing `packages/ui/src/components/Button.tsx` uses `rounded-lg`.  
**Must update to `rounded-full`** (pill) per design decision:

```tsx
const base = "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50";
const variants = {
  primary:   "bg-brand-500 text-white hover:bg-brand-600",
  secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
  danger:    "bg-red-600 text-white hover:bg-red-700",
  ghost:     "bg-transparent text-brand-600 hover:bg-brand-50",
  ai:        "bg-accent-500 text-white hover:bg-accent-600",
};
```

---

## 13. Landing Page (`apps/web`) Design Direction

Target: non-technical SMB owners. Must load fast, communicate value in 5 seconds.

**Hero section:**
```
riplai  ✦
──────────────────────────────────────────────────
WhatsApp kamu aktif 24 jam,
bahkan saat kamu tidur.

Admin otomatis menjawab pertanyaan pelanggan,
berdasarkan data bisnis kamu.

╭─────────────────╮   ╭──────────────────────╮
│  Coba Gratis →  │   │  Lihat Demo          │
╰─────────────────╯   ╰──────────────────────╯

[Interactive demo: visitor types → bot replies]
──────────────────────────────────────────────────
```

Color: white background, brand-500 for CTA, gray-900 for headings.  
Do NOT use a hero image — use the interactive demo bot instead.

---

## 14. Design Preview File

An interactive HTML prototype is at `docs/plans/design-preview.html`. Open it directly in a browser — no build step needed.

| Tab              | What it shows                                            |
|------------------|----------------------------------------------------------|
| Partner Dashboard| Full inbox layout: sidebar, conversation list, thread    |
| Landing Page     | Hero, interactive demo bot, how-it-works, pricing, footer|
| Components       | Logo variants, colors, buttons, badges, inputs, cards    |

The preview uses Tailwind CDN + Inter from Google Fonts — requires an internet connection.

---

## 15. Page Inventory & Missing Pages

### `apps/web` — Landing / Marketing

| Page                    | Route           | Status       | Priority |
|-------------------------|-----------------|--------------|----------|
| Home                    | `/`             | In plan      | P0       |
| Pricing                 | `/pricing`      | In plan      | P0       |
| Privacy Policy          | `/privacy`      | **Missing**  | **P0 — legal** |
| Terms & Conditions      | `/terms`        | **Missing**  | **P0 — legal** |
| About                   | `/about`        | Missing      | P2       |
| Contact / Support       | `/contact`      | Missing      | P2       |

> Privacy Policy and Terms & Conditions are required before any partner can sign up. They must exist before public launch.

### `apps/partner` — Partner Dashboard

| Page                    | Route                    | Status       | Priority |
|-------------------------|--------------------------|--------------|----------|
| Login                   | `/login`                 | In plan      | P0       |
| Inbox (list)            | `/inbox`                 | In plan      | P0       |
| Inbox (thread)          | `/inbox/[id]`            | In plan      | P0       |
| Analytics               | `/analytics`             | In plan      | P0       |
| Knowledge Base          | `/knowledge-base`        | In plan      | P0       |
| Settings                | `/settings`              | In plan      | P0       |
| Forgot Password         | `/forgot-password`       | **Missing**  | **P1**   |
| Reset Password          | `/reset-password`        | **Missing**  | **P1**   |
| Onboarding wizard       | `/onboarding`            | Undecided    | P1       |
| 404 / Error             | `not-found.tsx`          | **Missing**  | P2       |

> Forgot/reset password are required for any production auth system. Onboarding wizard is important for SMB users who need to be guided through their first setup.

### `apps/admin` — Admin Panel

| Page                    | Route                    | Status       | Priority |
|-------------------------|--------------------------|--------------|----------|
| Login                   | `/login`                 | **Missing**  | **P0**   |
| Partners list           | `/partners`              | In plan      | P0       |
| Partner detail          | `/partners/[id]`         | In plan      | P0       |
| Onboarding (add partner)| `/onboarding`            | In plan      | P0       |
| System health           | `/system`                | In plan      | P0       |
| 404 / Error             | `not-found.tsx`          | Missing      | P2       |

> Admin login page is completely missing from all plans. Admin must also be authenticated.

### Summary of missing pages

| Page                    | App           | Why it matters                              |
|-------------------------|---------------|---------------------------------------------|
| Privacy Policy          | web           | Legal obligation before collecting user data|
| Terms & Conditions      | web           | Required for partner agreement at signup    |
| Admin Login             | admin         | Admin has no auth entry point               |
| Forgot Password         | partner       | Standard auth flow — users forget passwords |
| Reset Password          | partner       | Required to complete forgot-password flow   |
| Partner Onboarding      | partner       | SMB users need guided first-run setup       |

---

## 16. What's Not Decided Yet

These require a separate decision session or design sprint:

- [ ] Final logo SVG — spec is in Section 2, needs execution in Figma/Framer
- [ ] Illustration style (if any — for empty states, hero, onboarding)
- [ ] Dark mode — **not in scope for MVP**
- [ ] Micro-animations (Framer Motion) — evaluate after MVP
- [ ] Icon library — Heroicons (already Tailwind-native) is the default choice
- [ ] Landing page Bahasa vs English — assume Indonesian for now
- [ ] Onboarding flow UX for new partners (multi-step wizard detail)
- [ ] App naming: existing plans use `apps/merchant` — rename to `apps/partner` for consistency
