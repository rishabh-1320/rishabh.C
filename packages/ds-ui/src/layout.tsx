import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/** Section — owns vertical rhythm + section background (and dark inversion). */
type SectionBg = "page" | "sunken" | "cream" | "ink" | "paper";
type SectionPad = "none" | "md" | "lg";

const SECTION_BG: Record<SectionBg, string> = {
  page: "bg-ds-surface-page",
  sunken: "bg-ds-surface-sunken",
  cream: "bg-ds-surface-cream",
  // ds-inverted flips the token vars, so child primitives auto-invert.
  ink: "bg-ds-surface-ink ds-inverted",
  // Homepage 2026 refresh — pure-white bg, additive (page/sunken/cream/ink unchanged)
  paper: "bg-ds-surface-paper"
};

// "none" lets a page own its own vertical padding (e.g. bespoke case-study layouts).
const SECTION_PAD: Record<SectionPad, string> = {
  none: "",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28"
};

export function Section({
  children,
  bg = "page",
  pad = "lg",
  id,
  className
}: {
  children: ReactNode;
  bg?: SectionBg;
  pad?: SectionPad;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn(SECTION_BG[bg], SECTION_PAD[pad], className)}>
      {children}
    </section>
  );
}

/** Container — owns max content width + horizontal gutters. */
const CONTAINER_WIDTH = {
  content: "max-w-ds-content",
  prose: "max-w-ds-prose",
  // Homepage 2026 refresh — new widths only; "content"/"prose" behavior above
  // is untouched so case-study pages and shared chrome render unchanged.
  hp: "max-w-ds-hp",
  "hp-wide": "max-w-ds-hp-wide"
} as const;

export function Container({
  children,
  width = "content",
  className
}: {
  children: ReactNode;
  width?: keyof typeof CONTAINER_WIDTH;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full px-5 md:px-8", CONTAINER_WIDTH[width], className)}>
      {children}
    </div>
  );
}

/** Stack — vertical flow with a fixed gap step. */
type Gap = "xs" | "sm" | "md" | "lg" | "xl";
const GAP: Record<Gap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-8",
  xl: "gap-12"
};

export function Stack({
  children,
  gap = "md",
  as = "div",
  className
}: {
  children: ReactNode;
  gap?: Gap;
  as?: ElementType;
  className?: string;
}) {
  const Tag = as;
  return <Tag className={cn("flex flex-col", GAP[gap], className)}>{children}</Tag>;
}
