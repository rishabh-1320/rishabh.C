import type { ReactNode } from "react";
import { MinimalBadge } from "@/components/home-ds/library/misc/minimal-badge";
import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";

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
 * Figma case-study hero (node 480:4296) — tags row (accent-bare badges),
 * two-tone Title, Subtitle. No ContainerBlock wrapper: the real instance
 * sits full-bleed at 1440px with only its own 48px padding, not nested
 * inside the homepage's 120px-rail ContainerBlock.
 */
export function CaseHero({
  tags,
  title,
  accent,
  subtitle,
  children
}: {
  tags: string[];
  title: string;
  accent: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <ThreeColumnBlock columns={false}>
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-start gap-6">
          {tags.map((tag) => (
            <MinimalBadge key={tag} tone="accent-bare">
              {tag}
            </MinimalBadge>
          ))}
        </div>
        <TextContainerCase type="Title">
          <EmphasizedTitle text={title} accent={accent} />
        </TextContainerCase>
        <TextContainerCase type="Subtitle">{subtitle}</TextContainerCase>
        {children}
      </div>
    </ThreeColumnBlock>
  );
}
