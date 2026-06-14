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
  | "script";

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
  script: "font-ds-script text-ds-script font-[var(--ds-type-script-weight)] text-ds-accent"
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
  script: "span"
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
