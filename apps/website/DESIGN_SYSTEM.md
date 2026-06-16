# Design System

The website renders on **one** canonical design system, `ds`. This document is the contract: how it's built, the rules, and how to extend it so new work can't drift.

## One system, three buckets

| Bucket | Namespace | Where | Status |
|---|---|---|---|
| **Canonical** | `--ds-*` / `ds-*` / `@packages/ds-ui` | the live site: `/`, case studies, 404 | the only system you build new work in |
| **Legacy** | `:root` `--color/surface/text/brand-*` / default Tailwind namespace / `@packages/ui` | shared generics consumed by other apps + transitional CSS | frozen — do not use on the live site |
| **Quarantined** | `--vs3-*`, `.theme-*` (atelier/kinetic/spatial/signature) | `/styles/*`, `/vs3` (noindexed reference routes) | frozen — never imported by canonical code |

The buckets share no token names, so they cannot collide or drift into each other.

## The pipeline (single source of truth → screen)

```
packages/ds-ui/src/tokens.ts        ← every visual value, once (the ONLY place raw values live)
   → tokensToCss()                   ← flattens to --ds-* on :root, + .ds-inverted flip + mobile block
   → injected once in app/layout.tsx (<style>)
apps/website/tailwind.config.ts     ← `ds-*` utilities map to the --ds-* vars (the canonical namespace)
   → packages/ds-ui/src/*           ← token-only primitives (Text, Button, Card, Section, …)
      → components/home-ds/sections  ← feature sections compose primitives only
         → lib/site-content.ts       ← all copy lives here, shared across every renderer
```

A page opts into the system by carrying `.ds-root` (sets the canonical background/ink/font). The homepage wrapper and `app/casestudy/layout.tsx` do this; quarantine routes never do.

## Rules (enforced by `scripts/check-drift-ds.mjs`)

1. **No raw values in feature sections** — never a hex/rgb/hsl colour, a `px` value, a `font-family` literal, or a `font-[…]` utility. Use a `ds-*` utility or a primitive.
2. **New visual values go in `tokens.ts` only** — then expose them as a `ds-*` utility in `apps/website/tailwind.config.ts`. Never inline.
3. **Sections compose primitives** — `<Text variant>`, `<Section bg pad>`, `<Card>`, `<Button>`, etc. Don't hand-roll typographic/colour utilities in a section when a primitive exists.
4. **Never use the legacy default namespace** (`bg-surface-*`, `text-text-*`, `text-primary`, `bg-brand-*`, `font-display`) in canonical code — that's the frozen bucket.
5. **Dark sections** use `<Section bg="ink">` (adds `.ds-inverted`, which flips the ink/accent/border tokens) — never hardcode light-on-dark colours.

Run the guard: `npm run lint:drift:ds`. (The quarantined systems keep their own guards: `lint:drift`, `lint:drift:vs3`.)

## Recipes

- **Add a token:** add it to the right group in `packages/ds-ui/src/tokens.ts`, then add a `ds-*` entry referencing `var(--ds-…)` in `apps/website/tailwind.config.ts`.
- **Add a primitive:** create `packages/ds-ui/src/<name>.tsx` (consume only `ds-*` utilities), export it from `src/index.ts`.
- **Add a section:** create `components/home-ds/sections/<name>.tsx`, import primitives from `@packages/ds-ui`, pull copy from `lib/site-content.ts`, compose. No raw values.
- **Add a new app:** depend on `@packages/ds-ui`, inject `tokensToCss()` in its root layout, add `presets: [dsPreset]` + the package's `content` glob to its tailwind config.

## Quarantine & promotion policy

Experiments live under `app/styles/*` and `app/vs3/*`, are `robots: noindex` at the route level (and disallowed in `robots.ts`), and are excluded from `sitemap.ts`. They must never be imported by canonical code. To promote an experiment to canonical, fold its decisions into `tokens.ts` + the `ds-ui` primitives via the pipeline above — don't fork a parallel system.
