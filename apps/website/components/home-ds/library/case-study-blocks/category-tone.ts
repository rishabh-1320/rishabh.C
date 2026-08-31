/**
 * Case-study category accents. The Figma file colors a case study by category
 * via a `category/<name>/default` variable plus a matching `<name>/50` wash —
 * blue is the only category defined today (nodes 573:8042, 573:8083). Adding
 * another is one token triple in packages/ds-ui/src/tokens.ts plus one entry
 * here.
 *
 * The `eyebrow` blue (#2E54D9) is a different hex from the `default` liner blue
 * (#2C6486) and, unlike the other two, carried no Figma variable — it reads as
 * a raw override on the side-text instance. It is modelled as a third role of
 * the category rather than silently normalised to `default`; see the note in
 * CASE_STUDY_TEMPLATE.md.
 *
 * Colour classes use the `!` important prefix because they override a colour
 * already baked into a TextContainerCase role, and Tailwind's compiled class
 * order — not source order — decides which of two same-property classes wins.
 * This bit the project before; see components/case-study/result-band.tsx.
 */
export type CategoryTone = "blue";

export const CATEGORY: Record<CategoryTone, { wash: string; liner: string; eyebrow: string }> = {
  blue: {
    wash: "bg-ds-category-blue-wash",
    liner: "bg-ds-category-blue",
    eyebrow: "!text-ds-category-blue-eyebrow"
  }
};
