import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/**
 * Text — the only way to render type in vs3. Each variant locks
 * family + size + line-height + weight + tracking + default color. Pick a
 * role, never numbers. workweave's look = one light refined grotesk display.
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
  | "stat";

const VARIANT: Record<TextVariant, string> = {
  display:
    "font-vs3-display text-vs3-display font-[var(--vs3-type-display-weight)] tracking-[var(--vs3-type-display-tracking)] text-vs3-ink",
  h1: "font-vs3-display text-vs3-h1 font-[var(--vs3-type-h1-weight)] tracking-[var(--vs3-type-h1-tracking)] text-vs3-ink",
  h2: "font-vs3-display text-vs3-h2 font-[var(--vs3-type-h2-weight)] tracking-[var(--vs3-type-h2-tracking)] text-vs3-ink",
  h3: "font-vs3-sans text-vs3-h3 font-[var(--vs3-type-h3-weight)] text-vs3-ink",
  lead: "font-vs3-sans text-vs3-lead font-[var(--vs3-type-lead-weight)] text-vs3-ink-soft",
  body: "font-vs3-sans text-vs3-body font-[var(--vs3-type-body-weight)] text-vs3-ink-soft",
  "body-sm": "font-vs3-sans text-vs3-body-sm font-[var(--vs3-type-body-sm-weight)] text-vs3-ink-soft",
  caption: "font-vs3-sans text-vs3-caption font-[var(--vs3-type-caption-weight)] text-vs3-ink-muted",
  eyebrow:
    "font-vs3-mono text-vs3-eyebrow font-[var(--vs3-type-eyebrow-weight)] uppercase tracking-[var(--vs3-type-eyebrow-tracking)] text-vs3-ink-muted",
  stat: "font-vs3-display text-vs3-stat font-[var(--vs3-type-stat-weight)] tracking-[var(--vs3-type-stat-tracking)] text-vs3-ink"
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
  stat: "span"
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
