import type { ElementType, ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * Figma "text-container-case" — the generic type-scale primitive for
 * case-study reading content (10 fixed roles, each bound to a Figma
 * variable: fonts/inter/*). A closed set, not an extensible token scale
 * like the homepage's hp-* roles, so the values are hardcoded here rather
 * than added to packages/ds-ui/src/tokens.ts. Every role is literal black
 * in Figma (unbound to a color variable); mapped here to the existing
 * `heading` token (#181818) — the nearest token we already have — rather
 * than introducing a new near-black literal.
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
  | "Quote";

const VARIANT: Record<TextContainerCaseType, string> = {
  Title: "font-ds-inter text-[64px] font-bold leading-[67.2px] tracking-[-1.6px] text-ds-heading",
  H1: "font-ds-inter text-[48px] font-bold leading-[52.8px] tracking-[-1px] text-ds-heading",
  H2: "font-ds-inter text-[36px] font-semibold leading-[41.4px] tracking-[-0.5px] text-ds-heading",
  H3: "font-ds-inter text-[28px] font-semibold leading-[33.6px] tracking-[-0.3px] text-ds-heading",
  H4: "font-ds-inter text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-ds-heading",
  Subtitle: "font-ds-inter text-[20px] font-medium leading-[26px] text-ds-heading",
  Body: "font-ds-inter text-[18px] font-normal leading-[28.8px] text-ds-heading",
  "Body Small": "font-ds-inter text-[16px] font-normal leading-[24.8px] text-ds-heading",
  Caption: "font-ds-inter text-[14px] font-normal leading-[20.3px] tracking-[0.1px] text-ds-heading",
  Quote: "font-ds-inter text-[20px] font-medium italic leading-[31px] text-ds-heading"
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
  Quote: "p"
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
  return <Tag className={cn(VARIANT[type], className)}>{children}</Tag>;
}
