/**
 * The case-study content model — one case study is a data object whose shape
 * maps directly onto the Figma template's named sections (Hero, Metrics,
 * chapter, chapter-divider). Adding a case study means filling in this shape,
 * not hand-composing layout. Mockups stay OUT of this schema on purpose —
 * they're hand-built React components per case study, composed in the page
 * alongside the data, so this file only ever holds copy.
 */

export type CaseStudyStat = { value: string; label: string };

export type CaseStudySubheading = { eyebrow: string; title: string };

export type CaseStudyChecklist = { title: string; items: string[] };

export type CaseStudyStep = { title: string; description: string };

/**
 * A comparison table — options against criteria, or alternatives against a
 * verdict. The one shape in this file that isn't flat: `rows` is a 2-D array,
 * and every row is expected to be `headers.length` long.
 *
 * Added for the Omny case study, whose argument turns on two such comparisons.
 * Deliberately plain strings, like every other type here — a table is copy, not
 * layout, so it stays in the data file rather than becoming a hand-built
 * per-page component.
 */
export type CaseStudyTable = {
  title?: string;
  headers: string[];
  rows: string[][];
};

/**
 * A dark two-column editorial panel — a label (e.g. "Insight", "Tip") next
 * to one emphasized line. Traced from the Figma blog reference, where the
 * same pattern serves both a pull-quote ahead of a section and a "/tip"
 * aside — kept as one flexible shape rather than two components.
 */
export type CaseStudyPullQuote = { label?: string; quote: string };

/**
 * A small marginal note for the reading grid's right column — a definition,
 * a stat, a short aside paired with a chapter. Not sticky: it's a normal
 * grid cell, so it scrolls in the document flow with its chapter rather than
 * staying pinned.
 */
export type CaseStudySideCard = { label?: string; text: string };

/**
 * One chapter = a CaseHeading + body paragraphs, optionally preceded by a
 * pull-quote/tip panel, optionally paired with one or more side cards in the
 * right reading-column, and followed by a checklist or a numbered-step list
 * (never both checklist and steps — matches every instance in the Figma
 * template).
 */
export type CaseStudyChapter = {
  id: string;
  heading: CaseStudySubheading;
  pullQuote?: CaseStudyPullQuote;
  paragraphs: string[];
  /** A comparison table. Renders last in the chapter — it summarizes the prose,
   *  checklist and steps above it rather than introducing them. */
  table?: CaseStudyTable;
  checklist?: CaseStudyChecklist;
  steps?: CaseStudyStep[];
  sideCards?: CaseStudySideCard[];
};

/**
 * A step-list that isn't attached to any chapter's `paragraphs` — e.g. one
 * that needs to render between two mockups mid-narrative, where a chapter's
 * fixed paragraphs-then-steps order doesn't fit. Kept as data (title + a
 * typed `steps` array) rather than a copy string hand-written in the page,
 * same as every other piece of case-study copy.
 */
export type CaseStudyStandaloneSteps = { title: string; steps: CaseStudyStep[] };

export type CaseStudyData = {
  metadataTitle: string;
  metadataDescription: string;
  hero: {
    tags: string[];
    title: string;
    accent: string;
    subtitle: string;
  };
  /** Optional: only render the metrics band when there's a real, honest number to show — not every project has one. */
  stats?: CaseStudyStat[];
  chapters: CaseStudyChapter[];
  /** A step-list positioned mid-narrative, outside any single chapter — see CaseStudyStandaloneSteps. */
  standaloneSteps?: CaseStudyStandaloneSteps;
  /** The closing pull-quote/takeaway, after the last chapter and before "More Projects". */
  closingQuote?: CaseStudyPullQuote;
};
