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
  checklist?: CaseStudyChecklist;
  steps?: CaseStudyStep[];
  sideCards?: CaseStudySideCard[];
};

/** The homepage-style SectionHeader divider marking a new "part" mid-article. */
export type CaseStudyDivider = { eyebrow: string; title: string; accent: string };

export type CaseStudyData = {
  metadataTitle: string;
  metadataDescription: string;
  hero: {
    tags: string[];
    title: string;
    accent: string;
    subtitle: string;
  };
  stats: CaseStudyStat[];
  chapters: CaseStudyChapter[];
};
