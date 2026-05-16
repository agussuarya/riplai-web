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
