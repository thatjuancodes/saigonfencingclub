# 🧠 CODEX PROJECT CONTEXT

This file defines the rules and conventions Codex should follow when generating, editing, or explaining code in this repository.

---

## 📦 Project Overview
- **Framework:** Astro
- **Purpose:** Static marketing website hosted on Netlify
- **Language:** TypeScript (preferred when available)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (used sparingly for interactivity or form UI)
- **Package Manager:** pnpm
- **Build Target:** Static (no SSR)
- **Deployment:** Netlify (`astro build` → `dist/`)

---

## 🧱 Code Conventions

### 🗂️ Structure
- Use **lowercase, kebab-case** for files and folders.  
  Example: `about-page.astro`, `hero-section.astro`
- Reusable UI components live under `/src/components/`.
- Use `/src/layouts/` for shared page layouts.
- Use `/src/content/` for Markdown or CMS-driven content.

### 🧩 Components
- Keep components small, focused, and stateless when possible.
- Each component should do **one thing well**.
- Use **React islands** only when interactivity is needed.
- Use `<script setup lang="ts">` syntax for scripts.
- Default export components.
- For styling, prefer extending `shadcn/ui` base components rather than overriding them heavily.

### 🎨 Styling
- Use Tailwind utility classes directly in markup.
- Avoid inline styles unless absolutely necessary.
- Follow `tailwind.config.mjs` tokens (colors, spacing, typography).
- Apply consistent vertical rhythm:
  - **One empty line** between sibling elements and components for readability.
- Keep component markup and class lists **clean and minimal**.
- Prefer extracting repeating styles into reusable classes, partials, or components (DRY principle).

### ♻️ DRY (Don't Repeat Yourself)
- Avoid duplicating markup or logic.
- Extract reusable parts into components or layout fragments.
- Centralize shared values (colors, spacing, breakpoints) in Tailwind config or constants.
- Reuse content blocks or markdown includes where applicable.
- When editing, check for similar existing code before adding new files or components.

### 📥 Imports
- Use alias imports (`@/components/...`) instead of long relative paths.
- Do not use absolute URLs for local assets.

---

## ⚙️ Tooling & Commands

All commands use `pnpm`:
```bash
pnpm install
pnpm dev
pnpm build
pnpm astro add <integration>
