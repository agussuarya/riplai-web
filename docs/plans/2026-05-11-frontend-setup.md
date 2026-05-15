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
│   ├── web/                        # Landing page — riplai.id (port 3001)
│   │   ├── app/
│   │   │   ├── layout.tsx          # Root layout: Navbar + Footer + fonts
│   │   │   ├── globals.css         # @import "tailwindcss" + CSS token vars
│   │   │   ├── page.tsx            # Home — Hero, Fitur, HowItWorks, Pricing, Testimonials
│   │   │   ├── fitur/
│   │   │   │   └── page.tsx        # Full feature breakdown
│   │   │   ├── harga/
│   │   │   │   └── page.tsx        # 4-tier pricing table
│   │   │   ├── demo/
│   │   │   │   └── page.tsx        # Interactive chat demo (DemoChat component)
│   │   │   ├── tentang/
│   │   │   │   └── page.tsx        # About / Tentang Kami
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx        # Kebijakan Privasi (UU PDP compliant)
│   │   │   └── terms/
│   │   │       └── page.tsx        # Syarat & Ketentuan
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx      # Logo + nav + CTA; sticky + mobile hamburger
│   │   │   │   └── Footer.tsx      # Links, copyright, legal links
│   │   │   ├── logo/
│   │   │   │   └── RiplaiLogo.tsx  # Canonical Bubble Ripple SVG + wordmark
│   │   │   ├── landing/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── LogoStrip.tsx
│   │   │   │   ├── FiturGrid.tsx
│   │   │   │   ├── HowItWorks.tsx
│   │   │   │   ├── PricingCards.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   └── WaitlistModal.tsx
│   │   │   └── demo/
│   │   │       └── DemoChat.tsx    # Scripted interactive chat, 'use client'
│   │   ├── lib/
│   │   │   └── fonts.ts            # Plus Jakarta Sans + JetBrains Mono
│   │   ├── public/
│   │   │   └── .gitkeep
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── partner/                    # Partner PWA — inbox + analytics
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx            # Hello World: calls GET /health
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx    # stub
│   │   │   │   ├── forgot-password/
│   │   │   │   │   └── page.tsx    # stub
│   │   │   │   └── reset-password/
│   │   │   │       └── page.tsx    # stub
│   │   │   └── (app)/
│   │   │       ├── layout.tsx      # protected layout stub (sidebar + header)
│   │   │       ├── inbox/
│   │   │       │   ├── page.tsx    # stub
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx # stub
│   │   │       ├── analytics/
│   │   │       │   └── page.tsx    # stub
│   │   │       ├── knowledge-base/
│   │   │       │   └── page.tsx    # stub
│   │   │       ├── settings/
│   │   │       │   └── page.tsx    # stub
│   │   │       └── onboarding/
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
│       │   ├── (auth)/
│       │   │   └── login/
│       │   │       └── page.tsx    # stub
│       │   └── (app)/
│       │       ├── partners/
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
    "dev:partner": "turbo dev --filter=@riplai/partner",
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
    { "path": "apps/partner" },
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
          50:  "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          900: "#064E3B",
        },
        accent: {
          100: "#E0E7FF",
          500: "#6366F1",
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

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "ai";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    primary:   "bg-brand-500 text-white hover:bg-brand-600",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    danger:    "bg-red-600 text-white hover:bg-red-700",
    ghost:     "bg-transparent text-brand-600 hover:bg-brand-50",
    ai:        "bg-accent-500 text-white hover:bg-accent-600",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
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
type BadgeVariant = "needs_reply" | "bot_handled" | "waiting" | "ai";

const styles: Record<BadgeVariant, string> = {
  needs_reply: "bg-red-100 text-red-700",
  bot_handled: "bg-brand-100 text-brand-700",
  waiting:     "bg-yellow-100 text-yellow-700",
  ai:          "bg-accent-100 text-accent-600",
};

const labels: Record<BadgeVariant, string> = {
  needs_reply: "Needs Reply",
  bot_handled: "Bot Handled",
  waiting:     "Waiting",
  ai:          "AI",
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

### Step 7 — apps/web (Landing Page scaffold)

> Full landing page spec and content decisions in: `docs/plans/2026-05-14-landing-page-plan.md`

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
    "@heroicons/react": "^2",
    "@riplai/config": "workspace:*",
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

> Note: `@riplai/api-client` is NOT a dependency of apps/web. The landing page is fully static — no API calls. Remove it from deps to keep the bundle clean.

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
  transpilePackages: ["@riplai/ui"],
};

export default config;
```

**File: `apps/web/tailwind.config.ts`**
```typescript
import { baseConfig } from "@riplai/config/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  ...baseConfig,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
};

export default config;
```

**File: `apps/web/lib/fonts.ts`**
```typescript
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});
```

**File: `apps/web/app/globals.css`**
```css
@import "tailwindcss";

:root {
  --brand-50:   #ECFDF5;
  --brand-100:  #D1FAE5;
  --brand-200:  #A7F3D0;
  --brand-400:  #34D399;
  --brand-500:  #10B981;
  --brand-600:  #059669;
  --brand-700:  #047857;
  --brand-900:  #064E3B;
  --accent-100: #E0E7FF;
  --accent-500: #6366F1;
  --accent-600: #4F46E5;
}
```

**File: `apps/web/app/layout.tsx`**
```tsx
import type { Metadata } from "next";
import { jakarta, mono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "riplai — Penjawab 24 Jam untuk Bisnis Indonesia",
  description:
    "Admin otomatis WhatsApp yang menjawab pertanyaan pelanggan berdasarkan data bisnis kamu. Tanpa perlu angkat telepon.",
  metadataBase: new URL("https://riplai.id"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="bg-white font-sans text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Stub files** — create with minimal placeholder `<div>` export so the app builds. Real content added in landing page phases:

- `app/page.tsx` — Home (beranda)
- `app/fitur/page.tsx`
- `app/harga/page.tsx`
- `app/demo/page.tsx`
- `app/tentang/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/logo/RiplaiLogo.tsx`

**File: `apps/web/.env.local`**
```
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

**Exit condition for this step:** `pnpm dev:web` starts on port 3001, renders a page with Navbar and Footer, no TypeScript errors.

---

### Step 7a — apps/web Landing Page (Phase 1: Foundation)
> See full spec: `docs/plans/2026-05-14-landing-page-plan.md`

- [ ] `components/logo/RiplaiLogo.tsx` — canonical Bubble Ripple SVG, props: `size`, `variant`
- [ ] `components/layout/Navbar.tsx` — sticky, logo + nav links + CTA + mobile hamburger
- [ ] `components/layout/Footer.tsx` — columns + legal links + copyright

### Step 7b — apps/web Landing Page (Phase 2: Home page)

- [ ] `components/demo/DemoChat.tsx` — scripted 3-exchange interactive chat, `'use client'`
- [ ] `components/landing/Hero.tsx` — headline + sub + dual CTA + DemoChat inline
- [ ] `components/landing/FiturGrid.tsx` — 6-feature 3×2 grid (Heroicons)
- [ ] `components/landing/HowItWorks.tsx` — 3 numbered steps on brand-50 bg
- [ ] `components/landing/PricingCards.tsx` — 4 tiers, Growth highlighted, annual toggle UI
- [ ] `components/landing/Testimonials.tsx` — 3 SMB persona quote cards
- [ ] `components/landing/WaitlistModal.tsx` — email capture modal, no backend
- [ ] `app/page.tsx` — assembles all sections

### Step 7c — apps/web Landing Page (Phase 3: Inner pages)

- [ ] `app/fitur/page.tsx` — extended feature breakdown
- [ ] `app/harga/page.tsx` — full pricing comparison table
- [ ] `app/demo/page.tsx` — standalone DemoChat + explanatory copy
- [ ] `app/tentang/page.tsx` — About, placeholder founder story

### Step 7d — apps/web Landing Page (Phase 4: Legal pages)

- [ ] `app/privacy/page.tsx` — full Kebijakan Privasi (Bahasa Indonesia, UU PDP compliant)
- [ ] `app/terms/page.tsx` — full Syarat & Ketentuan

---

### Step 8 — apps/partner (Partner PWA)

Same structure as `apps/web` but on port 3002.

**File: `apps/partner/package.json`** — same as web but:
- `name: "@riplai/partner"`, port 3002
- adds `@tanstack/react-query`, `zustand`

**File: `apps/partner/app/layout.tsx`** — same pattern as web

**File: `apps/partner/app/page.tsx`** — same Hello World pattern as `apps/web/app/page.tsx` with title "riplai — Partner"

**File: `apps/partner/app/(app)/layout.tsx`** — protected layout stub (sidebar + header shell, auth guard added in Phase 3)
```tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  // Auth guard and sidebar added in Phase 3
  return <>{children}</>;
}
```

Stub pages (just export a placeholder `<div>`):
- `app/(auth)/login/page.tsx`
- `app/(auth)/forgot-password/page.tsx`
- `app/(auth)/reset-password/page.tsx`
- `app/(app)/inbox/page.tsx`
- `app/(app)/inbox/[id]/page.tsx`
- `app/(app)/analytics/page.tsx`
- `app/(app)/knowledge-base/page.tsx`
- `app/(app)/settings/page.tsx`
- `app/(app)/onboarding/page.tsx`

---

### Step 9 — apps/admin (Admin Panel)

Same pattern as partner but port 3003.

**File: `apps/admin/app/page.tsx`** — Hello World with title "riplai — Admin"

Stub pages:
- `app/(auth)/login/page.tsx`
- `app/(app)/partners/page.tsx`
- `app/(app)/partners/[id]/page.tsx`
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
pnpm dev:web      # http://localhost:3001
pnpm dev:partner  # http://localhost:3002
pnpm dev:admin    # http://localhost:3003
```

**Exit condition:** All 3 apps start without errors. Each shows a styled card. If the backend is running at `localhost:8080/health`, the card shows green status. If not, it shows a red "Backend unreachable" message.

---

## Port Map

| App | Port | URL |
|---|---|---|
| `apps/web` | 3001 | http://localhost:3001 |
| `apps/partner` | 3002 | http://localhost:3002 |
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

**In scope (added via Steps 7a–7d):**
- Landing page: Home, Fitur, Harga, Demo, Tentang, Privacy, Terms — see `docs/plans/2026-05-14-landing-page-plan.md`

**Still out of scope:**
- Auth / JWT flow
- Inbox / conversation UI (Partner app)
- Partner dashboard — Analytics, Knowledge Base, Settings
- Admin CRUD
- PWA manifest
- CI/CD
