import type { ReactNode } from "react";
import { BadgeGroup } from "@/components/home-ds/library/misc/badge-group";
import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { VisualBlock } from "@/components/home-ds/library/case-study-blocks/visual-block";

/**
 * Splits the title into quiet/accent spans, matching Figma's manual
 * two-tone coloring — same approach as the homepage's HeroTitle and
 * CtaFooter (EmphasizedHeadline/EmphasizedTagline), reimplemented here
 * rather than shared since each is a small private helper scoped to its
 * own file in this codebase's existing convention.
 */
function EmphasizedTitle({ text, accent }: { text: string; accent: string }) {
  const idx = text.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-ds-accent">{text.slice(idx, idx + accent.length)}</span>
      {text.slice(idx + accent.length)}
    </>
  );
}

/**
 * Figma case-study hero — the assembled template's opening block (node
 * 573:8651): a muted badge row, a two-tone 90px title, a 32px subtitle in
 * gray/600, then an optional full-bleed visual with its caption.
 *
 * No ContainerBlock wrapper: the real instance sits full-bleed with only the
 * content-block's own padding, not nested inside the homepage's 120px rail.
 *
 * The badges are `bare` (muted #A5A19C) here, not the `accent-bare` orange the
 * earlier hero (node 480:4296) used — the template's Badge Group takes the
 * default tone.
 */
export function CaseHero({
  tags,
  title,
  accent,
  subtitle,
  visual,
  caption,
  showVisual = false,
  children
}: {
  tags: string[];
  title: string;
  accent: string;
  subtitle: string;
  /** Hero media. Implies `showVisual`. */
  visual?: ReactNode;
  caption?: string;
  /** Render the Visual Block's placeholder well even with no `visual` passed. */
  showVisual?: boolean;
  children?: ReactNode;
}) {
  const withVisual = Boolean(visual) || showVisual;

  return (
    <ThreeColumnBlock columns={false}>
      <div className="flex flex-col items-start justify-center gap-6">
        <BadgeGroup items={tags} />
        <TextContainerCase type="Display Hero" className="w-full">
          <EmphasizedTitle text={title} accent={accent} />
        </TextContainerCase>
        <TextContainerCase type="Section Title" as="p" className="w-full !text-ds-case-muted">
          {subtitle}
        </TextContainerCase>
        {withVisual && <VisualBlock caption={caption}>{visual}</VisualBlock>}
        {/*
          `w-full` matters: the column is `items-start`, so a hero mockup passed
          as children would otherwise shrink to its own content width — 507px
          against the 1281px of every mockup further down the page.
        */}
        {children && <div className="w-full">{children}</div>}
      </div>
    </ThreeColumnBlock>
  );
}
