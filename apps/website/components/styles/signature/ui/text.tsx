import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/**
 * Text — the ONLY way to render type in the signature system.
 *
 * Each variant locks family + size + line-height + weight + tracking + default
 * color together. You select a role, never raw numbers — so it is structurally
 * impossible to pair (say) a 36px size with the wrong line-height or weight.
 * This is the primary defense against type drift.
 */
export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "lead"
  | "body"
  | "body-sm"
  | "caption"
  | "eyebrow"
  | "script";

const VARIANT: Record<TextVariant, string> = {
  // Serif display (Fraunces) — friendly, warm
  display:
    "font-serif text-display font-normal tracking-display-tight text-[color:var(--text-primary)]",
  h1: "font-serif text-h1 font-normal tracking-display-tight text-[color:var(--text-primary)]",
  h2: "font-serif text-h2 font-normal tracking-head-tight text-[color:var(--text-primary)]",
  // Sans (Hanken Grotesk) — structural
  h3: "font-sans text-h3 font-semibold tracking-head-tight text-[color:var(--text-primary)]",
  h4: "font-sans text-h4 font-semibold text-[color:var(--text-primary)]",
  lead: "font-sans text-h4 font-normal leading-relaxed text-[color:var(--text-secondary)]",
  body: "font-sans text-body font-normal text-[color:var(--text-secondary)]",
  "body-sm": "font-sans text-body-sm font-normal text-[color:var(--text-secondary)]",
  caption: "font-sans text-caption font-medium text-[color:var(--text-muted)]",
  eyebrow:
    "font-sans text-eyebrow font-semibold uppercase tracking-eyebrow text-[color:var(--text-muted)]",
  // Handwritten accent (Caveat Brush)
  script: "font-script text-h4 font-normal text-[color:var(--accent)]"
};

const DEFAULT_TAG: Record<TextVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  body: "p",
  "body-sm": "p",
  caption: "p",
  eyebrow: "p",
  script: "span"
};

type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  as?: ElementType;
  className?: string;
  id?: string;
};

export function Text({ children, variant = "body", as, className, id }: TextProps) {
  const Tag = as ?? DEFAULT_TAG[variant];
  return (
    <Tag id={id} className={cn(VARIANT[variant], className)}>
      {children}
    </Tag>
  );
}
