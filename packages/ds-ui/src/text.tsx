import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/**
 * Text — the only way to render type in ds.
 *
 * Each variant locks family + size + line-height + weight + tracking + default
 * color together (size/lh/tracking via the `text-ds-*` Tailwind preset and
 * `--ds-type-*` vars; weight via the token var). Pick a role, never numbers —
 * so a size can never pair with the wrong line-height or weight.
 */
export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "lead"
  | "body"
  | "body-sm"
  | "caption"
  | "eyebrow"
  | "script"
  | "display-script"
  | "stat"
  // Homepage 2026 refresh — additive only, existing roles above are untouched
  | "hp-eyebrow"
  | "hp-eyebrow-loose"
  | "hp-title"
  | "hp-headline"
  | "hp-card-title"
  | "hp-body"
  | "hp-year"
  | "hp-bio"
  | "hp-meta"
  | "hp-caption"
  | "hp-subtitle"
  | "hp-lede"
  // Case-study restyle — reading-context roles
  | "hp-heading"
  | "hp-prose";

const VARIANT: Record<TextVariant, string> = {
  display:
    "font-ds-serif text-ds-display font-[var(--ds-type-display-weight)] tracking-[var(--ds-type-display-tracking)] text-ds-ink",
  h1: "font-ds-serif text-ds-h1 font-[var(--ds-type-h1-weight)] tracking-[var(--ds-type-h1-tracking)] text-ds-ink",
  h2: "font-ds-serif text-ds-h2 font-[var(--ds-type-h2-weight)] tracking-[var(--ds-type-h2-tracking)] text-ds-ink",
  h3: "font-ds-sans text-ds-h3 font-[var(--ds-type-h3-weight)] tracking-[var(--ds-type-h3-tracking)] text-ds-ink",
  lead: "font-ds-sans text-ds-lead font-[var(--ds-type-lead-weight)] text-ds-ink-soft",
  body: "font-ds-sans text-ds-body font-[var(--ds-type-body-weight)] text-ds-ink-soft",
  "body-sm": "font-ds-sans text-ds-body-sm font-[var(--ds-type-body-sm-weight)] text-ds-ink-soft",
  caption: "font-ds-sans text-ds-caption font-[var(--ds-type-caption-weight)] text-ds-ink-muted",
  eyebrow:
    "font-ds-sans text-ds-eyebrow font-[var(--ds-type-eyebrow-weight)] uppercase tracking-[var(--ds-type-eyebrow-tracking)] text-ds-ink-muted",
  script: "font-ds-script text-ds-script font-[var(--ds-type-script-weight)] text-ds-accent",
  "display-script":
    "font-ds-script text-ds-display-script font-[var(--ds-type-display-script-weight)] text-ds-ink",
  stat: "font-ds-serif text-ds-stat font-[var(--ds-type-stat-weight)] tracking-[var(--ds-type-stat-tracking)] text-ds-ink",

  // Homepage 2026 refresh — Inter-based roles, new colors only (see tokens.ts)
  "hp-eyebrow":
    "font-ds-inter text-ds-hp-eyebrow font-[var(--ds-type-hp-eyebrow-weight)] tracking-[var(--ds-type-hp-eyebrow-tracking)] uppercase text-ds-ink-soft",
  "hp-eyebrow-loose":
    "font-ds-inter text-ds-hp-eyebrow-loose font-[var(--ds-type-hp-eyebrow-loose-weight)] tracking-[var(--ds-type-hp-eyebrow-loose-tracking)] uppercase text-ds-accent",
  "hp-title":
    "font-ds-inter text-ds-hp-title font-[var(--ds-type-hp-title-weight)] tracking-[var(--ds-type-hp-title-tracking)] text-ds-heading",
  "hp-headline":
    "font-ds-inter text-ds-hp-headline font-[var(--ds-type-hp-headline-weight)] tracking-[var(--ds-type-hp-headline-tracking)] text-ds-nav-muted",
  "hp-card-title":
    "font-ds-inter text-ds-hp-card-title font-[var(--ds-type-hp-card-title-weight)] tracking-[var(--ds-type-hp-card-title-tracking)] text-ds-heading",
  "hp-body":
    "font-ds-inter text-ds-hp-body font-[var(--ds-type-hp-body-weight)] tracking-[var(--ds-type-hp-body-tracking)] text-ds-body-muted",
  "hp-year":
    "font-ds-inter text-ds-hp-year font-[var(--ds-type-hp-year-weight)] tracking-[var(--ds-type-hp-year-tracking)] text-ds-heading",
  "hp-bio":
    "font-ds-inter text-ds-hp-bio font-[var(--ds-type-hp-bio-weight)] tracking-[var(--ds-type-hp-bio-tracking)] text-ds-tag-muted",
  "hp-meta":
    "font-ds-inter text-ds-hp-meta font-[var(--ds-type-hp-meta-weight)] tracking-[var(--ds-type-hp-meta-tracking)] text-ds-tag-muted",
  "hp-caption":
    "font-ds-inter text-ds-hp-caption font-[var(--ds-type-hp-caption-weight)] tracking-[var(--ds-type-hp-caption-tracking)] text-ds-body-muted",
  "hp-subtitle":
    "font-ds-inter text-ds-hp-subtitle font-[var(--ds-type-hp-subtitle-weight)] tracking-[var(--ds-type-hp-subtitle-tracking)] text-ds-heading",
  "hp-lede":
    "font-ds-inter text-ds-hp-lede font-[var(--ds-type-hp-lede-weight)] tracking-[var(--ds-type-hp-lede-tracking)] text-ds-caption-muted",

  // Case-study restyle — reading-context roles
  "hp-heading":
    "font-ds-inter text-ds-hp-heading font-[var(--ds-type-hp-heading-weight)] tracking-[var(--ds-type-hp-heading-tracking)] text-ds-heading",
  "hp-prose":
    "font-ds-inter text-ds-hp-prose font-[var(--ds-type-hp-prose-weight)] tracking-[var(--ds-type-hp-prose-tracking)] text-ds-body-muted"
};

const DEFAULT_TAG: Record<TextVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  lead: "p",
  body: "p",
  "body-sm": "p",
  caption: "p",
  eyebrow: "p",
  script: "span",
  "display-script": "h2",
  stat: "span",
  "hp-eyebrow": "p",
  "hp-eyebrow-loose": "p",
  "hp-title": "h2",
  "hp-headline": "p",
  "hp-card-title": "h3",
  "hp-body": "p",
  "hp-year": "span",
  "hp-bio": "p",
  "hp-meta": "span",
  "hp-caption": "p",
  "hp-subtitle": "p",
  "hp-lede": "p",
  "hp-heading": "h2",
  "hp-prose": "p"
};

export function Text({
  children,
  variant = "body",
  as,
  className,
  id
}: {
  children: ReactNode;
  variant?: TextVariant;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  const Tag = as ?? DEFAULT_TAG[variant];
  return (
    <Tag id={id} className={cn(VARIANT[variant], className)}>
      {children}
    </Tag>
  );
}
