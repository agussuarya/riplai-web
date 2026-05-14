# Riplai Web

Frontend monorepo for the Riplai public site, business dashboard, admin panel, and shared frontend packages.

## Prerequisites

- Node.js 24
- pnpm 11.1.2 or newer

## Install

```bash
pnpm install
```

## Development

```bash
pnpm dev:web
pnpm dev:partner
pnpm dev:admin
```

## Build And Type Check

```bash
pnpm build
pnpm type-check
```

## Ports

| Service | Path | Port |
| --- | --- | --- |
| Public web | `apps/web` | `3001` |
| Business dashboard | `apps/partner` | `3002` |
| Admin panel | `apps/admin` | `3003` |
| Backend API | external service | `8080` |

Copy `.env.example` to a local environment file when backend integration work begins.
