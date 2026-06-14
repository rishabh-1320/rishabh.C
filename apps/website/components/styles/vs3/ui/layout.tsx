import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/** Section — owns vertical rhythm + section background (and dark inversion). */
type SectionBg = "page" | "sunken" | "tint" | "ink";
type SectionPad = "md" | "lg";

const SECTION_BG: Record<SectionBg, string> = {
  page: "bg-vs3-surface-page",
  sunken: "bg-vs3-surface-sunken",
  tint: "bg-vs3-surface-tint",
  ink: "bg-vs3-surface-ink vs3-inverted"
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
        width === "content" ? "max-w-vs3-content" : "max-w-vs3-prose",
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
