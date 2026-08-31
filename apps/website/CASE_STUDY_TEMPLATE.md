# Case-study template

The contract for how case-study pages get built: a content schema, a set of
template components that render it, and the components those are built
from. This document is what an agent (or you) should read before touching
`app/casestudy/*` — it exists so nobody has to rediscover this by reading
the Figma file from scratch.

## The pipeline

```
lib/case-study-types.ts   ← the schema (CaseStudyData / CaseStudyChapter)
   → lib/<name>-case-study.ts   ← one data object per case study (copy only, no layout)
      → components/case-study/template/*   ← renders the schema, built only from library/ components
         → app/casestudy/<name>/page.tsx   ← composes the template components + hand-placed mockups
```

`chestnutCaseStudy` (`lib/chestnut-case-study.ts`) is the reference
implementation — `app/casestudy/chestnut/page.tsx` is the reference page.

## The strict rule

**Every template component is built only from `components/home-ds/library/`
(plus the case-study-only `components/case-study/*` helpers, which are
themselves built only from the library).** If a piece of the Figma
case-study reference needs a visual treatment the library doesn't have —
don't invent a one-off. Stop, pull the exact spec, and report it as a gap
so the Figma design system gets extended first, then build the real thing.
This document exists specifically so that decision doesn't get improvised
per page.

Two examples of following this correctly, both from this pass:
- `text-container-case` and a standalone `ContentColumn` export didn't
  exist — built as real library additions
  (`library/texts/text-container-case.tsx`,
  `library/case-study-blocks/three-column-block.tsx`), not one-off styling
  in the page.
- The case-study hero's tags needed accent-orange text on `MinimalBadge`'s
  existing `bare` shape, and the metrics band needed `MetricCardDiv`
  padding without the homepage's divider border — both didn't exist as
  variants, so `MinimalBadge` gained `accent-bare` and `MetricCardDiv`
  gained `panel`, rather than fighting the existing variants with
  `className` overrides (which don't reliably win against Tailwind's own
  class ordering — verified the hard way earlier in this project).

## Schema → component mapping

| Schema field | Renders via |
|---|---|
| `hero` (`tags`, `title`, `accent`, `subtitle`) | `CaseHero` — `MinimalBadge tone="accent-bare"` for tags, `TextContainerCase type="Title"` (two-tone split on `accent`), `type="Subtitle"` |
| `stats` | `CaseMetrics` — a row of `MetricCardDiv variant="panel"` |
| one `CaseStudyChapter` | `CaseChapter` — `TextContainerCase type="Caption"` (eyebrow) + `type="H1"` (title) + `type="Body"` (one instance per paragraph) |
| `chapter.pullQuote` / `closingQuote` | `CasePullQuote` — `type="Caption"` (label) + `type="Quote"` |
| `chapter.checklist` | `CaseChecklist` — `type="H4"` (title) + bulleted `type="Body Small"` items |
| `chapter.sideCards` | `CaseSideCard`, stacked inside the chapter's `RightColumn` |
| `chapter.steps` / `standaloneSteps` | the existing `NumberedRow` (`components/case-study/numbered-row.tsx`), reused directly — not rebuilt |

## The assembled template — Figma node `573:8093`

Figma has a complete case-study page, **"Case Study Template"** (`573:8093`),
composing every section variation the site needs. It is rendered block for block
by `components/case-study/template/case-study-template.tsx`, which both the
`CaseStudyTemplate` Storybook story and the `/casestudy/template` route consume —
so they cannot drift. That route is a reference with placeholder copy: it is
disallowed in `app/robots.ts` and absent from `app/sitemap.ts`.

**Start a new case study by picking blocks from that file**, not by inventing
layout. The 15 blocks, in order:

| # | Figma node | Section | Rendered by |
|---|---|---|---|
| 1 | `573:8626` | Navbar | `NavBar`, via `app/casestudy/layout.tsx` |
| 2 | `573:8651` | Hero | `CaseHero` |
| 3 | `573:8697` | 4-up metric row | `CaseMetrics` |
| 4 | `573:8737` | Sub-introduction | `ThreeColumnBlock` + `TextContainerCase type="Section H2"` |
| 5 | `573:8837` | Left eyebrow+title, body centre | `ThreeColumnBlock left={<SideText …>}` |
| 6 | `573:8779` | Body, full side-text right | `ThreeColumnBlock right={<SideText …>}` |
| 7 | `573:8911` | Visual in the reading column | `ThreeColumnBlock` + `VisualBlock` |
| 8 | `573:8870` | Titles in both margins | `ThreeColumnBlock left/right` |
| 9 | `573:8938` | Full-bleed visual | `ThreeColumnBlock columns={false}` + `VisualBlock` |
| 10 | `573:9146` | Full-bleed pull quote | `ThreeColumnBlock columns={false}` + `TextBlock` |
| 11 | `573:9182` | Title+visual+body left, eyebrow+body right | `ThreeColumnBlock left/right` |
| 12 | `578:21762` | Two visuals side by side | `VisualPair` |
| 13 | `573:9222` | All three columns filled | `ThreeColumnBlock left/right` + `VisualBlock` |
| 14 | `573:9314` | End-of-article marker | `EndOfArticleMarker` |
| 15 | `573:9059` | Closing project grid | `MoreProjects` |
| — | `573:9357` | CTA + footer | `CtaFooter`, via the layout |

`MoreProjects` renders "all case studies except `current`" — pass a **real** case
study id, or it renders all four.

## Library blocks from the newer Figma frames

Four more building blocks were traced from the case-study frames. They are
library components (`components/home-ds/library/`), not schema-driven template
components — nothing in `lib/case-study-types.ts` produces them yet, so pages
compose them by hand for now.

| Component | Figma node | What it is |
|---|---|---|
| `case-study-blocks/visual-block.tsx` → `VisualBlock` | `572:7926` | A bordered 837:471 media well with an optional caption strip (badge row + italic caption). Renders an "Image / Video" placeholder when given no children. |
| `case-study-blocks/side-text.tsx` → `SideText` | `573:8042` | Marginal column: category eyebrow → section title → visual → short paragraph. Built for `RightColumn`. |
| `case-study-blocks/text-block.tsx` → `TextBlock` | `573:8083` | Full-width pull-quote band — category wash, 2px category rule on the left edge, big centred italic quote, optional avatar/name/designation. |
| `misc/badge-group.tsx` → `BadgeGroup` | `569:7897` | A 24px-gapped row of `MinimalBadge tone="bare"`. |
| `case-study-blocks/visual-pair.tsx` → `VisualPair` | `578:21799` | Two Visual Blocks side by side, 24px apart, captions on and badge row off. Stacks below `lg`. |
| `case-study-blocks/end-of-article-marker.tsx` → `EndOfArticleMarker` | `573:9329` | Circle / triangle / square in `canvas-muted`, closing the article. Decorative, `aria-hidden`. Figma exports the circle and triangle as localhost image assets; they're drawn in CSS/SVG here so the build depends on nothing external. |

**`SideText`'s four parts are each optional.** The assembled template instances
it eight times in six combinations, by hiding children. Pass only what you need;
`showVisual` renders the Visual Block's placeholder well without a real child.

`TextBlock` is **not** the same thing as `template/case-pull-quote.tsx`. That one
is a small inline label+quote inside a chapter's prose; `TextBlock` is a
full-width band with attribution. Both exist on purpose.

### Category colours

`SideText` and `TextBlock` take a `category` prop (default `"blue"`, the only
category Figma defines). The mapping lives in
`case-study-blocks/category-tone.ts`; the values are `ds-category-blue*` tokens.
Adding a category = one token triple in `packages/ds-ui/src/tokens.ts` plus one
entry in that map.

Note the eyebrow blue (`#2E54D9`) is a *different* hex from the liner blue
(`#2C6486`) and, unlike the other two, carried no Figma variable — it reads as a
raw override on the side-text instance. It is modelled as a third role of the
category rather than normalised away. **Worth confirming against design intent.**

### The two type-scale generations

`TextContainerCase` now carries fifteen roles, in two groups. The original ten
(`Title`…`Quote`) came from the earlier frames. The five newer ones
(`Eyebrow`, `Section Title`, `Prose`, `Quote Big`, `Figure Caption`) came from
these frames, which reuse Figma style names — H3, Body, Caption — at *different*
values, and use their own grey pair — `case-heading` #212121 and `case-body`
#595959 — rather than `heading` #181818. They were therefore added under new
names instead of overwriting, so existing pages render exactly as before.

The assembled template then added three display roles — `Display Hero` (90/84,
Figma Display/Hero), `Section H1` (64/68, Heading/H1) and `Section H2` (46/52,
Heading/H2). Figma sets these to literal `#000000`; they use `case-heading`
#212121 instead, so every case-study heading shares one near-black.

Note `Section Title` (32/36/-0.32) *is* Figma's Heading/H3 and does double duty:
as a section heading in `SideText`, and as the hero subtitle recoloured to
`!text-ds-case-muted`.

### Responsive type

Figma draws this template at desktop width only. Five roles therefore step down
below `lg`, with **the `lg` value being the untouched Figma spec** — desktop is
pixel-identical to the file, and only narrower viewports use derived values.
Tracking is held at the same em ratio as the desktop value at every step.

| Role | base (<768) | `md` (≥768) | `lg` (≥1024) = Figma |
|---|---|---|---|
| `Display Hero` | 40 / 44 | 64 / 68 | 90 / 84 |
| `Section H1` | 36 / 40 | 48 / 52 | 64 / 68 |
| `Section H2` | 28 / 32 | 36 / 40 | 46 / 52 |
| `Section Title` | 24 / 28 | 28 / 32 | 32 / 36 |
| `Quote Big` | 24 / 28 | 28 / 32 | 36 / 36 |

`TextContainerCase` also applies `overflow-wrap: break-word` to **every** role.
This is not cosmetic and should not be removed: Figma's own text nodes carry
`word-break: break-word`, and without it one long word at 90px paints past its
box no matter how wide the column is — which is what pushed a 390px viewport to
587px of horizontal scroll before this was added.

**When authoring a new case study, use the newer eight.** The original ten exist
for Chestnut's sake.

## The 3-column authoring pattern

`ThreeColumnBlock` (`library/case-study-blocks/three-column-block.tsx`) is
the case-study reading layout, and the rule for choosing between its two
modes is strict:

- **All text content uses `columns` (3-column) — always, with no
  exceptions for "nothing to put in the margin."** `CaseChapter` and
  `CaseStandaloneSteps` render 3-column unconditionally; when a chapter has
  no `sideCards`, `RightColumn` is simply empty rather than the block
  dropping to a full-width slot. This matches the real Figma instances
  exactly: even a chapter with no side content (e.g. node `480:4417`) still
  has `LeftColumn`/`RightColumn` present, just empty — confirmed by
  inspecting the instance, not assumed. The reading content itself always
  goes in the middle (`ContentColumn`, which `ThreeColumnBlock` wraps
  `children` in automatically) — never hand-placed directly in a
  `columns={false}` block.
- **`columns={false}` (the single full-width slot) is reserved for pure
  visuals — images, video, mockups/design** (every `MockupFrame` wrap
  between chapters uses this), **plus two explicit, named exceptions:**
  - **`CaseHero`** — the hero's tags/title/subtitle render in a
    `columns={false}` block. This is a deliberate exception, not an
    oversight — don't "fix" it into 3-column.
  - **`CaseMetrics`** — the stats band is also `columns={false}`, matching
    the real Figma instance (node `480:4071` explicitly sets
    `prop3Column={false}`).

If you're adding a new template piece and unsure which mode it needs: if
it's body/reading text, it's 3-column, full stop — unless it's a new,
explicitly-approved exception like the two above.

### Its exact dimensions (don't re-derive these from Figma)

Taken from the *instanced* columns inside `content-block` (node `422:7135`), not
from the standalone column symbols (`422:7113-5`) — the symbols sit at w-368 on
the canvas with no max-width, which is a canvas artifact, not the real usage.

| Part | Value |
|---|---|
| Outer block padding | `24px` horizontal, `48px` vertical |
| Left / Right column | `w-350`, `min-w-280`, `max-w-350` |
| Content column | `flex-1`, `max-w-900` |
| Every column's own padding | `12px` |

**Responsive:** Figma only draws the 1200px desktop grid. Three near-fixed
columns cannot fit a narrow viewport — with the side columns pinned and
`shrink-0`, a 768px viewport left the *reading* column 24px wide. Below `lg` the
row therefore stacks and all three columns go full-width. `lg` is the narrowest
breakpoint that still fits 280 + 280 + a usable content column.

None of these get wrapped in the homepage's `ContainerBlock` (120px rail) —
confirmed against the real Figma instances (not just the isolated
documentation symbols, which showed debug borders that don't actually
appear on a live instance): case-study content-blocks sit full-bleed at
1440px with only their own 48px padding.

## Adding a new case study

1. Write a new `lib/<name>-case-study.ts` conforming to `CaseStudyData` —
   copy only, no layout decisions. Omit optional fields (`sideCards`,
   `checklist`, `pullQuote`, `stats`, `standaloneSteps`) rather than padding
   them with filler.
2. Write `app/casestudy/<name>/page.tsx` following `chestnut/page.tsx`'s
   shape: `CaseHero` → optional `CaseMetrics` → `CaseChapter` per chapter
   (with hand-placed `MockupFrame`s wrapped in `ThreeColumnBlock
   columns={false}` between them, same as Chestnut) → `MoreProjects` →
   `CtaFooter`.
3. If a chapter needs a visual the mapping table above doesn't cover —
   stop and report it. Don't hand-roll it.

**Then register it in five more places.** Steps 1–2 give you a page that only
works if you type the URL; these are what actually surface it. All five were
missed by the original version of this list:

| File | What to add |
|---|---|
| `lib/site-content.ts` | a `WorkCard` in `works` (`id: "work-<name>"`) |
| `components/home-ds/images.ts` | a `workImages["work-<name>"]` entry |
| `components/case-study/more-projects.tsx` | an entry in `CASE_STUDIES` — `workId` must match the `WorkCard.id`, **not** the route slug |
| `app/sitemap.ts` | the `/casestudy/<name>` URL |
| `components/home-ds/sections/ds-work.tsx` | nothing, unless you want it on the homepage — the `slice()` there caps what's shown, and a case study over the cap is silently invisible |

`MoreProjects` shows the first three of "all the others", so past four case
studies some won't appear in a given page's closing grid. That's the cap, not a
bug.

## Migration status

**All five case studies render through this template** — `chestnut`,
`dashboard`, `onboarding`, `design-system` and `omny`. `DummyChapter` is gone; the
placeholder `DummyContent` survives only for `app/explorations/dummy/page.tsx`,
the noindex skeleton for the (not yet built) AI Explorations template.

The three migrations needed **zero new template components** — every field the
schema offers was already covered. `omny` needed one: `CaseTable` (below).
Things worth knowing for the next page:

- `dashboard` has no hero mockup, so it uses `<CaseHero … showVisual />`, which
  renders the Visual Block's empty "Image / Video" well. That placeholder is
  live on the page until a real hero visual exists.
- None of the three defines `stats`, `sideCards`, `pullQuote` (except
  dashboard's `closingQuote`) or `standaloneSteps`, so their reading grids show
  empty margins. That's the documented 3-column behaviour, not a bug.
- `omny` is specified but not built, so it has no `stats` either, and all seven
  of its visuals are empty `VisualBlock` wells carrying the caption that
  describes what each must eventually hold. Replace them with `MockupFrame`s as
  screens arrive.

### `CaseTable` — comparison tables

`CaseStudyTable = { title?, headers: string[], rows: string[][] }`, set as
`table?` on a chapter and rendered by
`components/case-study/template/case-table.tsx`.

Two things about it are deliberate:

- **It renders last in the chapter**, after paragraphs, checklist and steps. A
  comparison table summarizes what precedes it — a matrix scoring three numbered
  rounds has to follow those rounds, not lead them.
- **The `w-full overflow-x-auto` wrapper is load-bearing.** Without `w-full` a
  shrink-to-fit wrapper grows to the table's min-content width and pushes the
  whole page into horizontal scroll; that exact bug shipped twice in this repo's
  mockups. On a 390px viewport the matrix is 478px wide and scrolls inside its
  318px column, which is correct.

An empty string in `headers` renders a blank corner cell — normal for a criteria
matrix whose first column holds row labels.
