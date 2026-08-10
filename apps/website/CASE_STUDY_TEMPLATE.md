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

## Not done in this pass

`dashboard`, `onboarding`, and `design-system` case-study pages are still
on the `DummyContent`/`DummyChapter` placeholders
(`components/dummy-content.tsx`) — only Chestnut was migrated, as the
validated example. Migrating the other three is the natural next step,
following the same recipe above, and should need zero new template
components unless their content hits a genuinely new pattern.
