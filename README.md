# Shutter UI

Single component for a modern roller shutter UI, built with Next.js and shadcn/ui.

**Live demo:** https://shutter-designui.vercel.app

## Requirements

- Node.js 20+ (recommended)
- pnpm, npm, or yarn

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Useful scripts

```bash
npm run dev              # dev server
npm run build            # production build
npm run start            # start production server
npm run lint
npm run registry:build   # regenerate registry JSON
```

## Project structure

- `components/shutter.tsx` — Shutter component
- `app/globals.css` — theme and palette

## Styling and colors

The theme uses CSS variables in `app/globals.css` (OKLCH). Edit:

- `--background`, `--foreground`, `--primary`, `--accent`, `--border`, `--ring`
- `--radius` for corner radius

## shadcn/ui

Configuration in `components.json`:

- `style: base-nova`
- `baseColor: neutral`
- `cssVariables: true`
- `iconLibrary: lucide`

To add shadcn components:

```bash
npx shadcn@latest add button
```

## @chumy registry (shadcn install)

Run `npm run dev` and open the demo — the **Install with shadcn** block lists every command with copy buttons. Under each showcase row you get the five install lines for that template.

Quick start:

```bash
npx shadcn@latest registry add @chumy=https://shutter-designui.vercel.app/r/{name}.json
npx shadcn@latest add @chumy/shutter
npx shadcn@latest add @chumy/shutter-rectangle-classic
```

Pattern: `@chumy/shutter-<template>-<variant>` where variant is `classic`, `warm`, `dark`, `minimal`, or `industrial`.

See **[REGISTRY.md](./REGISTRY.md)** for the full matrix (130 presets), deploy steps, and local setup.

Build the registry:

```bash
npm run registry:build
```

## Using the Shutter component only

Copy the file manually:

```bash
mkdir -p components
cp components/shutter.tsx ./components/shutter.tsx
```

Then:

```tsx
import { Shutter } from "@/components/shutter";

export default function Demo() {
  return <Shutter variant="classic" size="md" showSpeedControl={false} />;
}
```

Notes:

- Hide speed UI with `showSpeedControl={false}`
- Control levels with `level` / `levels` and `onLevelChange` / `onLevelsChange`
- Pick look with `variant`, `shape`, `slatSize`, `holeShape`, `curved`
- Pane background defaults to white; override with `paneBackground` or add `paneOverlay` for a gradient

```tsx
<Shutter variant="warm" paneBackground="#ffffff" />
<Shutter
  variant="classic"
  paneBackground="#e8f4fc"
  paneOverlay="linear-gradient(180deg, rgba(135,175,220,0.5), transparent)"
/>
```

## Deployment

### Vercel

1. Push to GitHub
2. Import the repo on Vercel
3. Build command: `npm run build`
4. Output: `.next`

### Static export (optional)

To export a static site, add `output: "export"` in `next.config.ts` and run:

```bash
npm run build
```

## Notes

- Font: Geist via `next/font`
- UI icons: `lucide-react`
