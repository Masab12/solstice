# Solstice

Marketing landing page for Solstice, a fictional direct booking engine for independent hotels.

The page is a single, high fidelity hero built around a responsive twelve column grid, a translucent glass design system, and a bespoke rate calendar that stands in for a product screenshot. It exists as a front end reference implementation: no backend, no data fetching, no tracking.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 15, App Router |
| Language | TypeScript, strict mode |
| Styling | Tailwind CSS v4 with a CSS first theme |
| Animation | Motion for React |
| Icons | lucide-react |
| Fonts | Instrument Serif, Outfit, Inter via `next/font` |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

Other scripts:

```bash
npm run build
npm run lint
npm run typecheck
```

## Project structure

```
src/
  app/
    globals.css      Theme tokens, glass utilities, keyframes
    layout.tsx       Font wiring and document metadata
    page.tsx         Page composition
  components/
    ambient-backdrop  Fixed radial glow layer
    site-header       Glass navigation with scroll state and mobile drawer
    hero              Twelve column split, five and seven
    hero-copy         Social proof, display heading, call to action pair
    hero-visual       Product panel plus suspended status cards
    rate-panel        Availability calendar with nightly rates and revenue summary
    floating-card     Reusable suspended glass card with drift animation
    orbit-rings       Decorative concentric ring art
    avatar-stack      Overlapping gradient avatars
    partner-strip     Logo row with hover lift
  content/
    site.ts          All copy, navigation, and sample calendar data
  lib/
    motion.ts        Shared easing curves and animation variants
```

Every string that appears on screen lives in `src/content/site.ts`, including the fourteen day rate calendar. Rebranding the page is a single file edit.

## Design notes

Where most software landing pages reach for a geometric sans, Solstice leads with Instrument Serif at sixty eight pixels and tight negative tracking. The hospitality market reads as premium rather than technical, and the serif does most of that work on its own. Outfit carries the wordmark and Inter handles body and interface text.

The palette is warm rather than the usual product blue: terracotta primary at `#C2410C`, with ambient radial glows in dune and ember at twenty to twenty five percent opacity behind a heavy blur. Panels use a white gradient from seventy five to forty five percent opacity, a twenty pixel backdrop blur, a crisp white border, and an inset highlight ring that reads as refracted light.

The calendar encodes three states in one glance: open nights sit on white, booked nights on a tinted brand wash, and high demand nights on a solid brand gradient. Cells fade up in sequence at thirty millisecond intervals so the grid assembles rather than appears.

Motion follows a single blueprint. The header slides down from twenty pixels above. The two hero columns rise from twenty pixels below over nine tenths of a second. The three suspended cards enter on a spring, staggered between six tenths and one second, then settle into asynchronous sine drift loops of five, five and a half, and four point eight seconds so they never fall into step.

All animation is suppressed under `prefers-reduced-motion`.

## Assets

The page ships with zero external asset dependencies. The rate panel, orbit rings, and avatars are all inline SVG or CSS. Fonts are self hosted at build time by `next/font`.

## Disclaimer

Solstice is not a real company. Every brand name, property name, nightly rate, and metric on this page is invented for demonstration purposes.

## License

Released under the MIT License. See [LICENSE](LICENSE).
