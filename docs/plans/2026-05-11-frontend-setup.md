# 2026-05-11 — Frontend Project Setup Plan
> Goal: scaffold the full Turborepo monorepo with complete folder structure and a Hello World page in each app that calls `GET http://localhost:8080/health` and renders a styled Tailwind card.

## Stack
| Tool | Version |
|---|---|
| Node.js | 24 (pin via `.nvmrc`) |
| pnpm | latest |
| Turborepo | latest |
| Next.js | latest (16.x) |
| TypeScript | strict |
| Tailwind CSS | v4 |
| Axios | latest (api-client) |
| TanStack Query | v5 (merchant app) |
| Zustand | v5 (merchant app) |

---

## Final Folder Structure

```
riplai-web/
├── .nvmrc                          # "24"
├── .node-version                   # "24"
├── .gitignore
├── package.json                    # root — devDeps: turbo, typescript
├── pnpm-workspace.yaml             # workspaces: ["apps/*", "packages/*"]
├── turbo.json                      # pipeline: build, dev, lint, type-check
├── tsconfig.json                   # root tsconfig (references only)
│
├── apps/
│   ├── web/                        # Landing page — riplai.id
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx            # Hello World: calls GET /health
│   │   ├── components/
│   │   │   └── .gitkeep
│   │   ├── public/
│   │   │   └── .gitkeep
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── merchant/                   # Merchant PWA — inbox + dashboard
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx            # Hello World: calls GET /health
│   │   │   ├── (auth)/
│   │   │   │   └── login/
│   │   │   │       └── .gitkeep
│   │   │   └── (app)/
│   │   │       ├── layout.tsx      # protected layout stub
│   │   │       ├── inbox/
│   │   │       │   ├── page.tsx    # stub
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx # stub
│   │   │       ├── dashboard/
│   │   │       │   └── page.tsx    # stub
│   │   │       └── knowledge-base/
│   │   │           └── page.tsx    # stub
│   │   ├── components/
│   │   │   └── inbox/
│   │   │       └── .gitkeep
│   │   ├── hooks/
│   │   │   └── .gitkeep
│   │   ├── store/
│   │   │   └── .gitkeep
│   │   ├── public/
│   │   │   └── .gitkeep
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── admin/                      # Admin panel — internal only
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx            # Hello World: calls GET /health
│       │   └── (app)/
│       │       ├── merchants/
│       │       │   ├── page.tsx    # stub
│       │       │   └── [id]/
│       │       │       └── page.tsx # stub
│       │       ├── onboarding/
│       │       │   └── page.tsx    # stub
│       │       └── system/
│       │           └── page.tsx    # stub
│       ├── components/
│       │   └── .gitkeep
│       ├── public/
│       │   └── .gitkeep
│       ├── next.config.ts
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── package.json
│
└── packages/
    ├── config/                     # Shared tooling config
    │   ├── tailwind.config.base.ts
    │   ├── tsconfig.base.json
    │   ├── eslint.config.base.js
    │   └── package.json
    │
    ├── types/                      # Shared TypeScript types
    │   ├── src/
    │   │   ├── api/
    │   │   │   ├── merchant.ts
    │   │   │   ├── conversation.ts
    │   │   │   ├── message.ts
    │   │   │   └── knowledge.ts
    │   │   └── index.ts
    │   └── package.json
    │
    ├── utils/                      # Shared utility functions
    │   ├── src/
    │   │   ├── currency.ts         # formatRupiah()
    │   │   ├── phone.ts            # formatWANumber()
    │   │   ├── date.ts             # Indonesian date helpers
    │   │   └── index.ts
    │   └── package.json
    │
    ├── api-client/                 # Axios client + endpoints + fixtures
    │   ├── src/
    │   │   ├── client.ts           # Axios instance, USE_FIXTURES toggle
    │   │   ├── __fixtures__/
    │   │   │   ├── health.json
    │   │   │   ├── conversations.json
    │   │   │   ├── messages.json
    │   │   │   └── merchant.json
    │   │   ├── endpoints/
    │   │   │   ├── auth.ts
    │   │   │   ├── conversations.ts
    │   │   │   ├── messages.ts
    │   │   │   ├── merchant.ts
    │   │   │   └── knowledge.ts
    │   │   └── index.ts
    │   └── package.json
    │
    └── ui/                         # Shared React components
        ├── src/
        │   ├── components/
        │   │   ├── Button.tsx
        │   │   ├── Input.tsx
        │   │   ├── Badge.tsx
        │   │   └── Avatar.tsx
        │   └── index.ts
        └── package.json
```

---

## Step-by-Step Implementation

### Step 1 — Root scaffold

**File: `.nvmrc`**
```
24
```

**File: `.node-version`**
```
24
```

**File: `pnpm-workspace.yaml`**
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

**File: `package.json`** (root)
```json
{
  "name": "riplai-web",
  "private": true,
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "type-check": "turbo type-check",
    "dev:web": "turbo dev --filter=@riplai/web",
    "dev:merchant": "turbo dev --filter=@riplai/merchant",
    "dev:admin": "turbo dev --filter=@riplai/admin"
  },
  "devDependencies": {
    "turbo": "latest",
    "typescript": "^5"
  },
  "engines": {
    "node": ">=24",
    "pnpm": ">=9"
  },
  "packageManager": "pnpm@latest"
}
```

**File: `turbo.json`**
```json
{
  "$schema": "https://turborepo.org/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

**File: `tsconfig.json`** (root — references only)
```json
{
  "files": [],
  "references": [
    { "path": "packages/config" },
    { "path": "packages/types" },
    { "path": "packages/utils" },
    { "path": "packages/api-client" },
    { "path": "packages/ui" },
    { "path": "apps/web" },
    { "path": "apps/merchant" },
    { "path": "apps/admin" }
  ]
}
```

**File: `.gitignore`**
```
node_modules/
.next/
dist/
.turbo/
*.tsbuildinfo
.env*.local
.DS_Store
```

---

### Step 2 — packages/config

**File: `packages/config/package.json`**
```json
{
  "name": "@riplai/config",
  "version": "0.0.1",
  "private": true,
  "exports": {
    "./tailwind": "./tailwind.config.base.ts",
    "./tsconfig": "./tsconfig.base.json",
    "./eslint": "./eslint.config.base.js"
  }
}
```

**File: `packages/config/tsconfig.base.json`**
```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUncheckedIndexedAccess": true
  }
}
```

**File: `packages/config/tailwind.config.base.ts`**
```typescript
import type { Config } from "tailwindcss";

export const baseConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#ecfdf5",
          500: "#10b981",
          600: "#059669",
          900: "#064e3b",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
};
```

**File: `packages/config/eslint.config.base.js`**
```js
/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
    },
  },
];
```

---

### Step 3 — packages/types

**File: `packages/types/package.json`**
```json
{
  "name": "@riplai/types",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  }
}
```

**File: `packages/types/src/api/merchant.ts`**
```typescript
export interface Merchant {
  id: string;
  wa_number: string;
  owner_wa: string;
  plan: "free" | "starter" | "growth" | "managed";
  is_active: boolean;
  created_at: string;
}

export interface MerchantUsage {
  merchant_id: string;
  month: string;
  reply_count: number;
  reply_cap: number;
}
```

**File: `packages/types/src/api/conversation.ts`**
```typescript
export type ConversationStatus = "needs_reply" | "bot_handled" | "waiting";

export interface Conversation {
  id: string;
  merchant_id: string;
  customer_wa: string;
  status: ConversationStatus;
  last_message_at: string;
  created_at: string;
}
```

**File: `packages/types/src/api/message.ts`**
```typescript
export type MessageDirection = "inbound" | "outbound";

export interface Message {
  id: string;
  conversation_id: string;
  direction: MessageDirection;
  body: string;
  sent_by: "customer" | "bot" | "owner";
  created_at: string;
}
```

**File: `packages/types/src/api/knowledge.ts`**
```typescript
export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  price: number;
  description: string;
}

export interface Promo {
  title: string;
  description: string;
  valid_until: string;
}

export interface KnowledgeBase {
  merchant_id: string;
  business_profile: string;
  products: Product[];
  faqs: FAQ[];
  promos: Promo[];
}
```

**File: `packages/types/src/index.ts`**
```typescript
export * from "./api/merchant";
export * from "./api/conversation";
export * from "./api/message";
export * from "./api/knowledge";
```

---

### Step 4 — packages/utils

**File: `packages/utils/package.json`**
```json
{
  "name": "@riplai/utils",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  }
}
```

**File: `packages/utils/src/currency.ts`**
```typescript
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}
```

**File: `packages/utils/src/phone.ts`**
```typescript
export function formatWANumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("62")) return "0" + digits.slice(2);
  return digits;
}
```

**File: `packages/utils/src/date.ts`**
```typescript
const ID_LOCALE = "id-ID";

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(ID_LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString(ID_LOCALE, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
```

**File: `packages/utils/src/index.ts`**
```typescript
export * from "./currency";
export * from "./phone";
export * from "./date";
```

---

### Step 5 — packages/api-client

**File: `packages/api-client/package.json`**
```json
{
  "name": "@riplai/api-client",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "dependencies": {
    "axios": "^1"
  }
}
```

**File: `packages/api-client/src/client.ts`**
```typescript
import axios from "axios";

const USE_FIXTURES = process.env.NEXT_PUBLIC_USE_FIXTURES === "true";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("riplai_token") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("riplai_token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export { USE_FIXTURES };
```

**File: `packages/api-client/src/__fixtures__/health.json`**
```json
{
  "status": "ok",
  "service": "riplai-api",
  "version": "fixture"
}
```

**File: `packages/api-client/src/__fixtures__/conversations.json`**
```json
[
  {
    "id": "conv-1",
    "merchant_id": "merchant-1",
    "customer_wa": "081234567890",
    "status": "needs_reply",
    "last_message_at": "2026-05-11T10:00:00Z",
    "created_at": "2026-05-11T09:00:00Z"
  }
]
```

**File: `packages/api-client/src/__fixtures__/merchant.json`**
```json
{
  "id": "merchant-1",
  "wa_number": "628123456789",
  "owner_wa": "628987654321",
  "plan": "starter",
  "is_active": true,
  "created_at": "2026-01-01T00:00:00Z"
}
```

**File: `packages/api-client/src/endpoints/auth.ts`**
```typescript
import { apiClient } from "../client";

export async function login(email: string, password: string) {
  const res = await apiClient.post<{ token: string }>("/auth/login", {
    email,
    password,
  });
  return res.data;
}
```

**File: `packages/api-client/src/endpoints/conversations.ts`**
```typescript
import type { Conversation } from "@riplai/types";
import { apiClient, USE_FIXTURES } from "../client";
import fixtureData from "../__fixtures__/conversations.json";

export async function getConversations(): Promise<Conversation[]> {
  if (USE_FIXTURES) return fixtureData as Conversation[];
  const res = await apiClient.get<Conversation[]>("/conversations");
  return res.data;
}
```

**File: `packages/api-client/src/endpoints/messages.ts`**
```typescript
import type { Message } from "@riplai/types";
import { apiClient } from "../client";

export async function getMessages(conversationId: string): Promise<Message[]> {
  const res = await apiClient.get<Message[]>(`/conversations/${conversationId}/messages`);
  return res.data;
}

export async function sendReply(conversationId: string, body: string): Promise<void> {
  await apiClient.post(`/conversations/${conversationId}/reply`, { body });
}
```

**File: `packages/api-client/src/endpoints/merchant.ts`**
```typescript
import type { Merchant, MerchantUsage } from "@riplai/types";
import { apiClient, USE_FIXTURES } from "../client";
import fixtureMerchant from "../__fixtures__/merchant.json";

export async function getMerchant(): Promise<Merchant> {
  if (USE_FIXTURES) return fixtureMerchant as Merchant;
  const res = await apiClient.get<Merchant>("/merchant");
  return res.data;
}

export async function getMerchantUsage(): Promise<MerchantUsage> {
  const res = await apiClient.get<MerchantUsage>("/merchant/usage");
  return res.data;
}
```

**File: `packages/api-client/src/endpoints/knowledge.ts`**
```typescript
import type { KnowledgeBase } from "@riplai/types";
import { apiClient } from "../client";

export async function getKnowledgeBase(): Promise<KnowledgeBase> {
  const res = await apiClient.get<KnowledgeBase>("/knowledge-base");
  return res.data;
}
```

**File: `packages/api-client/src/index.ts`**
```typescript
export { apiClient, USE_FIXTURES } from "./client";
export * from "./endpoints/auth";
export * from "./endpoints/conversations";
export * from "./endpoints/messages";
export * from "./endpoints/merchant";
export * from "./endpoints/knowledge";
```

---

### Step 6 — packages/ui

**File: `packages/ui/package.json`**
```json
{
  "name": "@riplai/ui",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "peerDependencies": {
    "react": "^19",
    "react-dom": "^19"
  }
}
```

**File: `packages/ui/src/components/Button.tsx`**
```tsx
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50";
  const variants = {
    primary:   "bg-brand-500 text-white hover:bg-brand-600",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    danger:    "bg-red-600 text-white hover:bg-red-700",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
```

**File: `packages/ui/src/components/Input.tsx`**
```tsx
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={id}
        className={`rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${className}`}
        {...props}
      />
    </div>
  );
}
```

**File: `packages/ui/src/components/Badge.tsx`**
```tsx
type BadgeVariant = "needs_reply" | "bot_handled" | "waiting";

const styles: Record<BadgeVariant, string> = {
  needs_reply: "bg-red-100 text-red-700",
  bot_handled: "bg-green-100 text-green-700",
  waiting:     "bg-yellow-100 text-yellow-700",
};

const labels: Record<BadgeVariant, string> = {
  needs_reply: "Needs Reply",
  bot_handled: "Bot Handled",
  waiting:     "Waiting",
};

export function Badge({ variant }: { variant: BadgeVariant }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[variant]}`}>
      {labels[variant]}
    </span>
  );
}
```

**File: `packages/ui/src/components/Avatar.tsx`**
```tsx
export function Avatar({ waNumber }: { waNumber: string }) {
  const initials = waNumber.slice(-4, -2);
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
      {initials}
    </div>
  );
}
```

**File: `packages/ui/src/index.ts`**
```typescript
export { Button } from "./components/Button";
export { Input } from "./components/Input";
export { Badge } from "./components/Badge";
export { Avatar } from "./components/Avatar";
```

---

### Step 7 — apps/web (Landing Page)

**File: `apps/web/package.json`**
```json
{
  "name": "@riplai/web",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3001",
    "build": "next build",
    "start": "next start --port 3001",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "latest",
    "react": "^19",
    "react-dom": "^19",
    "@riplai/config": "workspace:*",
    "@riplai/api-client": "workspace:*",
    "@riplai/types": "workspace:*",
    "@riplai/ui": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

**File: `apps/web/tsconfig.json`**
```json
{
  "extends": "@riplai/config/tsconfig",
  "compilerOptions": {
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**File: `apps/web/next.config.ts`**
```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: ["@riplai/ui", "@riplai/api-client"],
};

export default config;
```

**File: `apps/web/tailwind.config.ts`**
```typescript
import { baseConfig } from "@riplai/config/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  ...baseConfig,
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
};

export default config;
```

**File: `apps/web/app/layout.tsx`**
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riplai — WA Bot for Indonesian Merchants",
  description: "Auto-reply WhatsApp messages while you sleep.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
```

**File: `apps/web/app/globals.css`**
```css
@import "tailwindcss";
```

**File: `apps/web/app/page.tsx`** — Hello World with GET /health
```tsx
interface HealthResponse {
  status: string;
  service?: string;
  version?: string;
}

async function fetchHealth(): Promise<HealthResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080"}/health`,
      { cache: "no-store" }
    );
    return res.ok ? (res.json() as Promise<HealthResponse>) : null;
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const health = await fetchHealth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h1 className="mb-4 text-xl font-semibold text-gray-900">Riplai — Web</h1>
        <p className="mb-3 text-sm text-gray-500">Backend health check</p>

        {health ? (
          <div className="space-y-2">
            <StatusRow label="Status"  value={health.status}           ok={health.status === "ok"} />
            {health.service && <StatusRow label="Service" value={health.service} ok />}
            {health.version && <StatusRow label="Version" value={health.version} ok />}
          </div>
        ) : (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            Backend unreachable — start the api server at localhost:8080
          </p>
        )}
      </div>
    </main>
  );
}

function StatusRow({ label, value, ok }: { label: string; value: string; ok: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`text-sm font-medium ${ok ? "text-green-600" : "text-red-600"}`}>
        {value}
      </span>
    </div>
  );
}
```

**File: `apps/web/.env.local`**
```
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_USE_FIXTURES=false
```

---

### Step 8 — apps/merchant (Merchant PWA)

Same structure as `apps/web` but on port 3002.

**File: `apps/merchant/package.json`** — same as web but:
- `name: "@riplai/merchant"`, port 3002
- adds `@tanstack/react-query`, `zustand`

**File: `apps/merchant/app/layout.tsx`** — same pattern as web

**File: `apps/merchant/app/page.tsx`** — same Hello World pattern as `apps/web/app/page.tsx` with title "Riplai — Merchant"

**File: `apps/merchant/app/(app)/layout.tsx`** — protected layout stub
```tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  // Auth guard will be added in Phase 3
  return <>{children}</>;
}
```

Stub pages (just export a placeholder `<div>`):
- `app/(auth)/login/page.tsx`
- `app/(app)/inbox/page.tsx`
- `app/(app)/inbox/[id]/page.tsx`
- `app/(app)/dashboard/page.tsx`
- `app/(app)/knowledge-base/page.tsx`

---

### Step 9 — apps/admin (Admin Panel)

Same pattern as merchant but port 3003.

**File: `apps/admin/app/page.tsx`** — Hello World with title "Riplai — Admin"

Stub pages:
- `app/(app)/merchants/page.tsx`
- `app/(app)/merchants/[id]/page.tsx`
- `app/(app)/onboarding/page.tsx`
- `app/(app)/system/page.tsx`

---

### Step 10 — Install & verify

```bash
# Install all deps from repo root
pnpm install

# Run all 3 apps in parallel
pnpm dev
# or individually:
pnpm dev:web       # http://localhost:3001
pnpm dev:merchant  # http://localhost:3002
pnpm dev:admin     # http://localhost:3003
```

**Exit condition:** All 3 apps start without errors. Each shows a styled card. If the backend is running at `localhost:8080/health`, the card shows green status. If not, it shows a red "Backend unreachable" message.

---

## Port Map

| App | Port | URL |
|---|---|---|
| `apps/web` | 3001 | http://localhost:3001 |
| `apps/merchant` | 3002 | http://localhost:3002 |
| `apps/admin` | 3003 | http://localhost:3003 |
| `api` (backend) | 8080 | http://localhost:8080 |

---

## Environment Variables

| Key | Used in | Value |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | all apps | `http://localhost:8080` (local) |
| `NEXT_PUBLIC_USE_FIXTURES` | api-client | `false` (real api) / `true` (fixtures) |

---

## Out of Scope (this plan)
- Auth / JWT flow (Phase 3)
- Inbox / conversation UI (Phase 4)
- Dashboard (Phase 5)
- Admin CRUD (Phase 6)
- PWA manifest (Phase 7)
- CI/CD (Phase 8)
