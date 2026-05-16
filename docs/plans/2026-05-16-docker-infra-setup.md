# Docker Infra Setup

**Date:** 2026-05-16

---

## Tasks

### 1. Pin dependency versions

Fix `"latest"` → locked major in these files:

| File | Package | Fix |
|------|---------|-----|
| `apps/*/package.json` (×3) | `next` | `"^16"` |
| `package.json` (root) | `turbo` | `"^2"` |

Run `pnpm install` after.

### 2. Delete unused files

- `.nvmrc`
- `.node-version`

Covered by `engines.node` in root `package.json`.

### 3. Enable standalone output in each app

```typescript
// apps/web/next.config.ts  (same for admin, partner)
const nextConfig: NextConfig = {
  output: "standalone",
};
```

### 4. Add Docker files

New files at repo root:

```
Dockerfile
docker-compose.yml
.env.staging
.env.production
.dockerignore
Makefile
```

**Dockerfile** — single file, `ARG APP` selects app, `ARG ENV` selects env file:

```dockerfile
# syntax=docker/dockerfile:1
ARG APP=web
ARG ENV=staging

FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps
ARG APP
WORKDIR /repo
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/${APP}/package.json ./apps/${APP}/package.json
COPY packages/api-client/package.json ./packages/api-client/package.json
COPY packages/config/package.json ./packages/config/package.json
COPY packages/types/package.json ./packages/types/package.json
COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/utils/package.json ./packages/utils/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder
ARG APP
ARG ENV
WORKDIR /repo
COPY --from=deps /repo/node_modules ./node_modules
COPY . .
COPY .env.${ENV} .env
RUN pnpm --filter @riplai/${APP} build

FROM node:24-alpine AS runner
ARG APP
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /repo/apps/${APP}/.next/standalone ./
COPY --from=builder /repo/apps/${APP}/.next/static ./apps/${APP}/.next/static
COPY --from=builder /repo/apps/${APP}/public ./apps/${APP}/public
EXPOSE 3000
CMD ["node", "apps/${APP}/server.js"]
```

> Verify `server.js` path after first build — adjust CMD if needed.

**docker-compose.yml** — 3 services, standalone ports, no reverse proxy:

```yaml
services:
  web:
    build:
      context: .
      args:
        APP: web
        ENV: ${ENV:-staging}
    ports:
      - "3001:3000"
    environment:
      - PORT=3000
    restart: unless-stopped

  partner:
    build:
      context: .
      args:
        APP: partner
        ENV: ${ENV:-staging}
    ports:
      - "3002:3000"
    environment:
      - PORT=3000
    restart: unless-stopped

  admin:
    build:
      context: .
      args:
        APP: admin
        ENV: ${ENV:-staging}
    ports:
      - "3003:3000"
    environment:
      - PORT=3000
    restart: unless-stopped
```

**env files** — `NEXT_PUBLIC_*` bake at build time, staging/production need separate builds. Safe to commit (public vars only):

```bash
# .env.staging
NEXT_PUBLIC_API_URL=https://api-staging.riplai.com

# .env.production
NEXT_PUBLIC_API_URL=https://api.riplai.com
```

**Makefile:**

```makefile
.PHONY: up down build logs shell

ENV ?= staging

up:
	docker compose --env-file .env.$(ENV) up -d

down:
	docker compose down

build:
	docker compose --env-file .env.$(ENV) build

logs:
	docker compose logs -f $(APP)

shell:
	docker compose exec $(APP) sh
```

Usage: `make build ENV=production` / `make up` / `make logs APP=web`

**.dockerignore:**

```
node_modules
.next
.turbo
.git
*.log
.env*.local
docs
```