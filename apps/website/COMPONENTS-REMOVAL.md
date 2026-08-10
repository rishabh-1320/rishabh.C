# Component removal tracker

Tracks the 18 components deliberately removed. `SiteHeader`/`StatusBar` and
the 6 DS-UI primitives were removed outright with no replacement, since
none of them were actually visible/used anywhere before removal. The 10
case-study template components have real replacements now — see
`CASE_STUDY_TEMPLATE.md` for the full schema → component mapping. Chestnut
is migrated to them; `dashboard`/`onboarding`/`design-system` are still on
the `DummyContent` placeholder pending the same migration.

**Removal pass complete and verified:** `tsc` clean, drift-lint clean, all
6 routes (`/`, 4 case studies, `/explorations/dummy`) return 200, no
console/runtime errors, confirmed via Storybook's live index that none of
the 18 remain registered there either.

## Case-study template

| Component | File (deleted) | Was used in | Status |
|---|---|---|---|
| CaseChapter | `components/case-study/case-chapter.tsx` | chestnut, dashboard, onboarding, design-system pages | **Replaced** → `components/case-study/template/case-chapter.tsx` (Chestnut only so far; other 3 pages still on `DummyChapter`) |
| CaseHeading | `components/case-study/case-heading.tsx` | case-chapter.tsx (internal) | Folded into the new `CaseChapter`'s own eyebrow+title rendering, not a separate component |
| CaseHero | `components/case-study/case-hero.tsx` | chestnut, dashboard, onboarding, design-system, explorations/dummy | **Replaced** → `components/case-study/template/case-hero.tsx` (Chestnut only so far) |
| CaseMetrics | `components/case-study/case-metrics.tsx` | chestnut, dashboard, onboarding, design-system | **Replaced** → `components/case-study/template/case-metrics.tsx` (Chestnut only so far) |
| CaseStudyFooter | `components/case-study/case-study-footer.tsx` | chestnut, dashboard, onboarding, design-system, explorations/dummy | No replacement needed — case-study pages use the existing shared `CtaFooter` (`home-ds/site-components/cta-footer.tsx`) directly; no case-study-specific footer is designed in Figma yet |
| Checklist | `components/case-study/checklist.tsx` | case-chapter.tsx (internal) | **Replaced** → `components/case-study/template/case-checklist.tsx` |
| ExplainerCard | `components/case-study/explainer-card.tsx` | reading-grid.tsx (internal) | **Replaced** → `components/case-study/template/case-side-card.tsx` |
| FullWidth | `components/case-study/full-width.tsx` | all 5 case-study/exploration pages, reading-grid.tsx, more-projects.tsx | Superseded by the library's `ContainerBlock` directly — `more-projects.tsx` updated |
| PullQuote | `components/case-study/pull-quote.tsx` | chestnut, dashboard pages, case-chapter.tsx (internal) | **Replaced** → `components/case-study/template/case-pull-quote.tsx` |
| ReadingGrid | `components/case-study/reading-grid.tsx` | chestnut, dashboard, explorations/dummy, case-chapter.tsx (internal) | Superseded by the library's `ThreeColumnBlock` directly (`library/case-study-blocks/three-column-block.tsx`) |

## Chrome

| Component | File (deleted) | Was used in | Status |
|---|---|---|---|
| SiteHeader | `components/site-header.tsx` | `app/layout.tsx` (already CSS-hidden on every page via `data-hide-site-header`) | Removed (no replacement needed — already invisible everywhere) |
| StatusBar | `components/status-bar.tsx` | `app/layout.tsx` (already CSS-hidden on every page via `data-hide-status-bar`) | Removed (no replacement needed — already invisible everywhere) |

## DS-UI primitives

| Component | File (deleted) | Was used in | Status |
|---|---|---|---|
| Card | `packages/ds-ui/src/card.tsx` | Not used anywhere in the live app | Removed (was already unused) |
| Divider | `packages/ds-ui/src/misc.tsx` (function removed, file kept — also holds `TextLink`, not on the removal list) | Not used anywhere in the live app | Removed (was already unused) |
| Eyebrow | `packages/ds-ui/src/misc.tsx` (function removed, file kept) | Not used anywhere in the live app | Removed (was already unused) |
| IconBadge | `packages/ds-ui/src/misc.tsx` (function removed, file kept) | Not used anywhere in the live app | Removed (was already unused) |
| PhotoCard | `packages/ds-ui/src/photo-card.tsx` | Not used anywhere in the live app | Removed (was already unused) |
| Row | `packages/ds-ui/src/row.tsx` | Not used anywhere in the live app | Removed (was already unused) |

## Also touched (not deleted, but depended on a removed component)

| File | Why | Fix |
|---|---|---|
| `components/case-study/more-projects.tsx` | Used `FullWidth` internally | Swapped to `DummyContent` |
