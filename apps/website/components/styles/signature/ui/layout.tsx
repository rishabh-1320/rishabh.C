import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/** Section — owns vertical rhythm + section background. The ONLY source of
 *  block spacing, so section-to-section rhythm can never drift. */
type SectionBg = "page" | "soft" | "cream" | "dark";
type SectionPad = "md" | "lg";

const SECTION_BG: Record<SectionBg, string> = {
  page: "bg-surface-base",
  soft: "bg-surface-soft",
  cream: "bg-surface-cream",
  // surface-inverted flips the semantic tokens, so child primitives auto-invert.
  dark: "bg-surface-dark surface-inverted"
};

const SECTION_PAD: Record<SectionPad, string> = {
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
export function Container({
  children,
  width = "content",
  className
}: {
  children: ReactNode;
  width?: "content" | "prose";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8",
        width === "content" ? "max-w-content" : "max-w-prose",
        className
      )}
    >
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
