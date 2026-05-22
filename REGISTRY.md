# @chumy registry

Every showcase shutter can be installed with the **`@chumy`** namespace (shadcn registry).

> This is not `npm install`. Use **`npx shadcn@latest add @chumy/...`**

## Publishing (you)

1. Live demo: [https://shutter-designui.vercel.app](https://shutter-designui.vercel.app)
2. Registry JSON is served from `public/r/` (commit after each rebuild).
3. After preset changes:

```bash
npm run registry:build
```

Commit `public/r/` and push.

## Consumer setup

```bash
npx shadcn@latest registry add @chumy=https://shutter-designui.vercel.app/r/{name}.json
```

Local dev (this repo running on port 3000):

```bash
npx shadcn@latest registry add @chumy=http://localhost:3000/r/{name}.json
```

## Base component

```bash
npx shadcn@latest add @chumy/shutter
```

## Naming pattern

Each template is available in every color variant:

```bash
npx shadcn@latest add @chumy/shutter-<template>-<variant>
```

**Variants:** `classic`, `warm`, `dark`, `minimal`, `industrial`

## All presets

### Rectangle

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-rectangle-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-rectangle-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-rectangle-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-rectangle-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-rectangle-industrial` |

### Arch

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-arch-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-arch-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-arch-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-arch-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-arch-industrial` |

### Round

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-round-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-round-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-round-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-round-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-round-industrial` |

### Porthole

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-porthole-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-porthole-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-porthole-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-porthole-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-porthole-industrial` |

### Gothic

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-gothic-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-gothic-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-gothic-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-gothic-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-gothic-industrial` |

### 4-pane casement

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-casement-4-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-casement-4-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-casement-4-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-casement-4-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-casement-4-industrial` |

### Sash

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-sash-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-sash-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-sash-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-sash-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-sash-industrial` |

### Double casement

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-double-casement-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-double-casement-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-double-casement-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-double-casement-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-double-casement-industrial` |

### Independent double

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-double-casement-independent-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-double-casement-independent-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-double-casement-independent-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-double-casement-independent-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-double-casement-independent-industrial` |

### Round holes

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-holes-round-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-holes-round-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-holes-round-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-holes-round-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-holes-round-industrial` |

### Oval holes

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-holes-oval-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-holes-oval-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-holes-oval-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-holes-oval-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-holes-oval-industrial` |

### Rectangular holes

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-holes-rect-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-holes-rect-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-holes-rect-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-holes-rect-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-holes-rect-industrial` |

### Rectangular · curved

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-holes-rect-curved-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-holes-rect-curved-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-holes-rect-curved-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-holes-rect-curved-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-holes-rect-curved-industrial` |

### Fine slats

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-slat-fine-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-slat-fine-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-slat-fine-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-slat-fine-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-slat-fine-industrial` |

### Medium slats

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-slat-medium-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-slat-medium-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-slat-medium-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-slat-medium-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-slat-medium-industrial` |

### Thick slats

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-slat-thick-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-slat-thick-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-slat-thick-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-slat-thick-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-slat-thick-industrial` |

### Chunky slats

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-slat-chunky-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-slat-chunky-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-slat-chunky-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-slat-chunky-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-slat-chunky-industrial` |

### Curved medium

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-curved-medium-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-curved-medium-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-curved-medium-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-curved-medium-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-curved-medium-industrial` |

### Curved thick

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-curved-thick-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-curved-thick-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-curved-thick-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-curved-thick-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-curved-thick-industrial` |

### Curved chunky

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-curved-chunky-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-curved-chunky-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-curved-chunky-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-curved-chunky-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-curved-chunky-industrial` |

### Curved double

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-curved-double-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-curved-double-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-curved-double-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-curved-double-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-curved-double-industrial` |

### Sync double

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-sync-double-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-sync-double-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-sync-double-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-sync-double-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-sync-double-industrial` |

### Double arch

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-double-arch-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-double-arch-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-double-arch-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-double-arch-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-double-arch-industrial` |

### Independent

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-independent-double-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-independent-double-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-independent-double-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-independent-double-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-independent-double-industrial` |

### Stagger 1.5s

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-stagger-1500-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-stagger-1500-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-stagger-1500-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-stagger-1500-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-stagger-1500-industrial` |

### Stagger curved

| Color | Command |
|-------|---------|
| Classic | `npx shadcn@latest add @chumy/shutter-stagger-curved-classic` |
| Warm | `npx shadcn@latest add @chumy/shutter-stagger-curved-warm` |
| Dark | `npx shadcn@latest add @chumy/shutter-stagger-curved-dark` |
| Minimal | `npx shadcn@latest add @chumy/shutter-stagger-curved-minimal` |
| Industrial | `npx shadcn@latest add @chumy/shutter-stagger-curved-industrial` |

## Usage after install

```tsx
import { ShutterRectangleClassic } from "@/components/shutter-rectangle-classic";

export default function Page() {
  return <ShutterRectangleClassic />;
}
```

Props passed to the preset component override the defaults.
