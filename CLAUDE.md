# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal blog (demivan.me) built with Nuxt 4, Nuxt UI v3, Nuxt Content v3, and Tailwind CSS v4. Deployed as a static site to Cloudflare Pages via Nitro's `cloudflare-pages-static` preset (build output: `dist/`).

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm generate` — Static site generation (used for deployment)
- `pnpm lint` — Lint with ESLint (antfu flat config)

## Architecture

**Content-driven blog**: Markdown files in `content/posts/` are the source of truth for blog posts. Collections defined in `content.config.ts` — `content` (all pages) and `posts` (blog posts with typed schema). Posts use YAML frontmatter (`title`, `description`, `date`, `lang`, `duration`, `keywords`).

**Content API**: Uses Nuxt Content v3 `queryCollection()` API with `useAsyncData`. Example: `queryCollection('posts').order('date', 'DESC').all()`.

**Routing**: File-based via `pages/`. The catch-all `pages/posts/[...slug].vue` renders individual posts. `Page.vue` component wraps all content pages for consistent layout (header, date, breadcrumbs).

**Styling**: Nuxt UI v3 with Tailwind CSS v4. Global styles in `assets/css/main.css`. Dark mode via `@nuxt/color-mode` (bundled with Nuxt UI) with `.dark` class on `<html>`. Prose/typography from `@tailwindcss/typography` (bundled with Nuxt UI).

**Icons**: `@nuxt/icon` with `<UIcon>` component. Icon packs installed locally (`@iconify-json/ri`, `@iconify-json/simple-icons`, etc.). Custom SVG icons in `public/icons/` with `custom-` prefix (e.g., `custom-cosmere`).

**Fonts**: `@nuxt/fonts` with Google provider for Inter and Fira Code.

**Custom syntax highlighting**: `fluent.tmLanguage.json` provides TextMate grammar for Fluent i18n syntax, registered in nuxt.config.ts under `content.build.markdown.highlight.langs`.

**Redirects**: Defined in `nuxt.config.ts` under `routeRules` (not a hand-written `_redirects` file). Nitro's Cloudflare Pages preset generates `dist/_redirects` at build time. Note: the status-code key is `statusCode`, not `status` — Nuxt's upgrade-guide rename hasn't landed in Nitro 2.x yet, so `status` is silently ignored.

## Conventions

- Vue 3 Composition API with `<script setup>` syntax
- TypeScript throughout
- Auto-imports for Nuxt composables and components (no explicit imports needed)
- Nuxt UI components use `U` prefix (e.g., `<UButton>`, `<UIcon>`, `<UColorModeButton>`)
- pnpm as package manager
- Post filenames: `{number}.{slug}.md` (e.g., `1.vue-i18n-difficulties.md`)
- ESLint flat config via `eslint.config.js` with `@antfu/eslint-config`
