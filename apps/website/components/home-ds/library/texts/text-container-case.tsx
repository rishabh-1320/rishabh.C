import type { ElementType, ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * Figma "text-container-case" — the generic type-scale primitive for
 * case-study reading content. A closed set of named roles, not an extensible
 * token scale like the homepage's hp-* roles, so the sizes are hardcoded here
 * rather than added to packages/ds-ui/src/tokens.ts.
 *
 * Two generations live here side by side. The original ten roles
 * (Title…Quote) came from the earlier case-study frames and are literal black
 * in Figma, mapped to the existing `heading` token (#181818). The five roles
 * below them (Eyebrow…Figure Caption) came from the newer frames, which use
 * their own grey pair — `case-heading` #212121 / `case-body` #595959 — and
 * reuse Figma style names (H3, Body, Caption) at *different* values. They are
 * therefore added under new names rather than overwriting, so the live
 * Chestnut page keeps rendering exactly as before.
 */
export type TextContainerCaseType =
  | "Title"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "Subtitle"
  | "Body"
  | "Body Small"
  | "Caption"
  | "Quote"
  // Roles added from the newer case-study frames (nodes 573:8042, 573:8083,
  // 572:7926). Names are deliberately distinct from the ten above — the same
  // Figma style names (H3/Body/Caption) carry *different* values there, so
  // reusing the names would silently restyle the Chestnut page.
  | "Eyebrow"
  | "Section Title"
  | "Prose"
  | "Quote Big"
  | "Figure Caption"
  // Display sizes from the assembled template (node 573:8093).
  | "Display Hero"
  | "Section H1"
  | "Section H2";

/**
 * Every Figma text node in these frames carries `word-break: break-word`. It
 * matters: without it a single long word at 90px paints straight past its box
 * regardless of column width, which is exactly what pushed a 390px viewport to
 * 587px of horizontal scroll. `overflow-wrap` is the standards-track spelling of
 * what Figma's export calls `word-break: break-word`.
 */
const BASE = "[overflow-wrap:break-word]";

/**
 * Sizes are mobile-first. The `lg` value in each responsive role is the
 * unchanged Figma desktop spec — Figma draws this template at 1440/1655 only, so
 * the smaller steps are derived, with tracking held at the same em ratio as the
 * desktop value so the letterfit survives the scale-down.
 */
const VARIANT: Record<TextContainerCaseType, string> = {
  Title: "font-ds-inter text-[64px] font-bold leading-[67.2px] tracking-[-1.6px] text-ds-heading",
  H1: "font-ds-inter text-[48px] font-bold leading-[52.8px] tracking-[-1px] text-ds-heading",
  H2: "font-ds-inter text-[36px] font-semibold leading-[41.4px] tracking-[-0.5px] text-ds-heading",
  H3: "font-ds-inter text-[28px] font-semibold leading-[33.6px] tracking-[-0.3px] text-ds-heading",
  H4: "font-ds-inter text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-ds-heading",
  Subtitle: "font-ds-inter text-[20px] font-medium leading-[26px] text-ds-heading",
  Body: "font-ds-inter text-[18px] font-normal leading-[1.4] text-ds-heading",
  "Body Small": "font-ds-inter text-[16px] font-normal leading-[1.4] text-ds-heading",
  Caption: "font-ds-inter text-[14px] font-normal leading-[1.4] tracking-[0.1px] text-ds-heading",
  Quote: "font-ds-inter text-[20px] font-medium italic leading-[31px] text-ds-heading",
  // Figma "Mono/Nav" — 16/20, +0.48px, uppercase. Used for the side-text eyebrow
  // and the quote block's attribution name. Sub-20px, so 1.4 rather than Figma's 20px.
  Eyebrow: "font-ds-inter text-[16px] font-normal leading-[1.4] tracking-[0.48px] uppercase text-ds-heading",
  // Figma "Heading/H3" — 32/36, -0.32px, Regular (not the semibold 28px `H3` above).
  // Steps down on narrow viewports: it doubles as the hero *subtitle*, and 32px
  // of paragraph copy on a 390px screen reads as a heading, not a subtitle.
  "Section Title":
    "font-ds-inter text-[24px] font-normal leading-[28px] tracking-[-0.24px] md:text-[28px] md:leading-[32px] md:tracking-[-0.28px] lg:text-[32px] lg:leading-[36px] lg:tracking-[-0.32px] text-ds-case-heading",
  // Figma "Body/Default" — 18px (the `Body` role above is near-black). Figma
  // specifies 24px leading; the sub-20px house rule of 1.4 takes precedence.
  Prose: "font-ds-inter text-[18px] font-normal leading-[1.4] text-ds-case-body",
  // Figma "inter/quote big" — 36 Medium Italic. Figma lineHeight 100 is 100%, i.e. leading-none.
  "Quote Big":
    "font-ds-inter text-[24px] font-medium italic leading-[28px] md:text-[28px] md:leading-[32px] lg:text-[36px] lg:leading-none text-ds-case-heading",
  // Figma "Label/Caption" — 14 Italic, gray/800. Figma's 100% leading is
  // overridden by the sub-20px house rule of 1.4.
  "Figure Caption": "font-ds-inter text-[14px] font-normal italic leading-[1.4] text-ds-case-caption",
  // Figma "Display/Hero" — the case-study page title.
  "Display Hero":
    "font-ds-inter text-[40px] font-normal leading-[44px] tracking-[-0.8px] md:text-[64px] md:leading-[68px] md:tracking-[-1.28px] lg:text-[90px] lg:leading-[84px] lg:tracking-[-1.8px] text-ds-case-heading",
  // Figma "Heading/H1" — closing "Next projects" heading. Distinct from the 48px bold `H1` above.
  "Section H1":
    "font-ds-inter text-[36px] font-normal leading-[40px] tracking-[-0.72px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.28px] text-ds-case-heading",
  // Figma "Heading/H2" — the sub-introduction block. Distinct from the 36px semibold `H2` above.
  "Section H2":
    "font-ds-inter text-[28px] font-normal leading-[32px] tracking-[-0.42px] md:text-[36px] md:leading-[40px] md:tracking-[-0.54px] lg:text-[46px] lg:leading-[52px] lg:tracking-[-0.69px] text-ds-case-heading"
};

const DEFAULT_TAG: Record<TextContainerCaseType, ElementType> = {
  Title: "h1",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  Subtitle: "p",
  Body: "p",
  "Body Small": "p",
  Caption: "p",
  Quote: "p",
  Eyebrow: "p",
  "Section Title": "h3",
  Prose: "p",
  "Quote Big": "p",
  "Figure Caption": "figcaption",
  "Display Hero": "h1",
  "Section H1": "h2",
  "Section H2": "h2"
};

export function TextContainerCase({
  type = "Body",
  as,
  children,
  className
}: {
  type?: TextContainerCaseType;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const Tag = as ?? DEFAULT_TAG[type];
  return <Tag className={cn(BASE, VARIANT[type], className)}>{children}</Tag>;
}
