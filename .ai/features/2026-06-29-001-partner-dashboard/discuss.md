# Partner Dashboard — Design Discussion

**Feature:** `2026-06-29-001-partner-dashboard`
**Date:** 2026-06-29
**Status:** Design review — ready for implementation

---

## Brief

Partner (bisnis kecil Indonesia yang pakai Riplai) butuh web dashboard untuk:
- Monitor dan balas percakapan WhatsApp
- Lihat percakapan yang perlu direspon manual
- Kelola knowledge base (apa yang dipelajari admin otomatis)
- Lihat laporan performa
- Atur pengaturan bisnis dan jadwal

Design base: `design-preview-v2.html` (token, font, dark mode, komponen sudah ada).

---

## Domain Models in Scope

| Domain | Key Fields | Digunakan untuk |
|--------|-----------|-----------------|
| `Conversation` | Status (string), HumanTakeover (bool), LastMessageContent, CustomerWANumber, LastMessageAt | Inbox list, filter tab |
| `Message` | Body, Direction ("inbound"/"outbound"), CreatedAt | Bubble rendering di thread |
| `KnowledgeBase` | PersonaName, Content | Editor Data Bisnis |
| `Partner` | Name, Category, Plan, AutoReplyEnabled, IsActive, OwnerEmail | Pengaturan, sidebar profile |
| `Schedule` | Hours map[string]*DayHours{Open,Close} | Grid jam aktif di Pengaturan |
| `ReplyCounter` | Count, PeriodStart | Stat card & usage bar di Laporan |
| `Customer` | WANumber, Profile | Avatar seed di conv list |

---

## Layout

```
┌─────────────────┬──────────────────────────────────────────────────┐
│  sidebar 228px  │                  content area                     │
│                 │                                                    │
│  Pesan    [2]   │  [pesan]     conv-list(276px)  |  thread          │
│  Laporan        │  [laporan]   stats + chart + table                │
│  Data Bisnis    │  [data-bisnis]  persona name + content textarea   │
│  Pengaturan     │  [pengaturan]  WA + auto-reply + schedule + plan  │
│                 │                                                    │
│  [VJ] Villa...  │                                                    │
│      ↓ dropdown │                                                    │
│  Mode Gelap ⬤   │                                                    │
│  Profil Saya    │                                                    │
│  Ganti Sandi    │                                                    │
│  Keluar         │                                                    │
└─────────────────┴──────────────────────────────────────────────────┘
```

---

## Key Design Decisions

### 1. Conversation Status → Badge Mapping

Domain punya `HumanTakeover bool` + `Status string`. UI state derivasi:

| Kondisi | Badge | Warna |
|---------|-------|-------|
| `HumanTakeover = true` | Perlu Dibalas | Red (`badge-needs`) |
| `HumanTakeover = false`, Status = "resolved" | Dibalas Otomatis | Green (`badge-handled`) |
| `HumanTakeover = false`, Status = "waiting" | Menunggu | Yellow (`badge-waiting`) |

**Open question:** Konfirmasi nilai string `Status` dari API. Asumsi: `"open"`, `"resolved"`, `"waiting"`.

### 2. Inbox Filter Tabs (bukan sidebar nav item terpisah)

Inbox punya 2 tab di atas conv list:
- **Semua** — semua percakapan, urut `LastMessageAt` desc
- **Perlu Direspon** — filter `HumanTakeover = true`, badge count merah di tab

Keputusan ini menghindari fragmentasi nav. Partner bisa lihat context percakapan lain sambil tahu berapa yang pending.

### 3. Message Direction → Bubble Type

`Message.Direction` values menentukan posisi bubble:

| Direction | Sender | Bubble class | Posisi |
|-----------|--------|-------------|--------|
| `"inbound"` | customer | `.bubble-in` | kiri |
| `"outbound"` | bot | `.bubble-bot` | kanan, indigo |
| `"outbound"` | partner (manual) | `.bubble-out` | kanan, emerald |

**Gap penting:** `Message` domain tidak punya field untuk bedain bot vs manual outbound.
**Solusi yang disarankan:** Tambah `Source string` field ke `Message` — nilai `"bot"` atau `"partner"`. Perlu dibahas dengan tim backend.

### 4. Knowledge Page — Single Rich Text Editor

`KnowledgeBase` adalah satu blob per partner (`PersonaName` + `Content`).

UI = satu halaman dengan:
- Text input: `PersonaName` ("Nama Penjawab")
- Large textarea: `Content` — partner nulis semua info bisnis dalam plain text
- Panduan placeholder: jam buka, produk/harga, FAQ, kebijakan
- Tombol "Simpan Perubahan" + timestamp terakhir disimpan

Tidak ada kategori — keputusan ini sesuai domain. Satu textarea = satu source of truth. Lebih mudah untuk partner SMB yang tidak terbiasa UI kompleks.

### 5. Profile Dropdown (sidebar footer)

Click avatar/nama partner di sidebar footer → dropdown overlay:
- Header: avatar, nama bisnis, email
- Dark mode toggle (persisted ke localStorage, key: `riplai-dark`)
- Profil Saya
- Ganti Kata Sandi
- Keluar (merah)

### 6. Reports — Data Sources

| Metric | Source | Notes |
|--------|--------|-------|
| Total Percakapan | `COUNT(conversations)` | Filter by period |
| Dibalas Otomatis | `ReplyCounter.Count` | Quota usage this period |
| Perlu Balasan Manual | `COUNT(conversations WHERE HumanTakeover=true)` | Live count |
| Jam Aktif Bot | `Schedule.Hours` | Kalkulasi total jam per hari |
| Bar chart | `Conversation.LastMessageAt` group by day | Daily volume |
| Usage bar | `ReplyCounter.Count / plan_quota` | Relative to plan |

Chart adalah placeholder SVG — analytics API endpoint belum ada. Akan diganti recharts/chart.js nanti.

### 7. Settings — Schedule Grid

`Schedule.Hours` adalah `map[string]*DayHours`. UI menampilkan:
- 7 baris (Senin–Minggu)
- Checkbox per hari (aktif/nonaktif) — `null` DayHours = hari off
- Time input Open + Close per hari aktif
- Disable time inputs saat hari dinonaktifkan

**Open question:** Key string di map — `"monday"` / `"1"` / `"senin"`? Perlu konfirmasi dari API response.

### 8. "Tandai Selesai" Action

Tombol di thread header:
- Set `HumanTakeover = false` via API
- Update badge ke "Dibalas Otomatis"
- Remove dari tab "Perlu Direspon"

### 9. "Sarankan Balasan"

Tombol indigo di atas reply input. Saat diklik → isi input dengan AI-generated suggestion.
**Gap:** Endpoint belum ada di domain. Perlu POST endpoint yang terima `conversationId` dan return `suggested_reply string`.

---

## Component Map

| Komponen | CSS class | Status |
|----------|-----------|--------|
| Sidebar | `.sidebar`, `.nav-item`, `.nav-item.active` | Existing |
| Conv list | `.conv-list`, `.conv-item`, `.conv-item.active` | Existing |
| Filter tabs | `.filter-tabs`, `.filter-tab`, `.filter-tab.active` | **New** |
| Thread | `.thread`, `.thread-header`, `.thread-body`, `.thread-reply` | Existing |
| Bubbles | `.bubble-in`, `.bubble-bot`, `.bubble-out` | Existing |
| Badges | `.badge-needs`, `.badge-handled`, `.badge-waiting` | Existing |
| Action buttons | `.action-btn-ghost`, `.action-btn-ai` | Existing |
| Stat card | `.stat-card` | Existing |
| Settings section | `.settings-section`, `.settings-row` | Existing |
| Toggle | `.toggle-track`, `.toggle-knob` | Existing |
| KB editor | (single textarea + field-group) | Existing components |
| Profile dropdown | `.profile-dropdown`, `.dropdown-item` | **New** |
| Schedule grid | `.schedule-grid`, `.schedule-row`, `.time-input` | **New** |
| Toast notification | (dynamic div) | **New** |

---

## Open Questions (harus dijawab sebelum implementasi API)

1. **`Conversation.Status` values** — string apa saja? `"open"` / `"resolved"` / `"waiting"`?
2. **Message sender differentiation** — bagaimana bedain bot vs manual di outbound messages? `Source string` field?
3. **`Schedule.Hours` map keys** — `"monday"` atau `"1"` atau `"senin"`?
4. **CustomerWANumber format** — selalu E.164 (`628123456789`) atau formatted (`0812-3456-7890`)?
5. **"Tandai Selesai"** — PATCH `HumanTakeover = false`? Atau dedicated endpoint?
6. **"Sarankan Balasan"** — endpoint mana? Request/response shape?
7. **Plan quota per tier** — berapa kuota untuk Free/Starter/Growth? (untuk usage bar di Laporan)

---

## Files

- `discuss.md` — dokumen ini
- `refs/dashboard-design-v1.html` — HTML prototype interaktif

---

## Implementation Notes

### Tech stack untuk implementasi

Berdasarkan codebase yang ada di `apps/partner`:
- Next.js (App Router)
- Tailwind CSS
- Plus Jakarta Sans (sudah di-load)
- Dark mode via `html.dark` class + localStorage

### Priority order

1. **Inbox + Thread** — core value, partner butuh ini duluan
2. **Data Bisnis** — setup flow, penting untuk onboarding
3. **Pengaturan** — schedule + WA connection
4. **Laporan** — nice-to-have, bisa pakai placeholder stats dulu
