import { SectionHeader } from "../../site-components/section-header";

/**
 * Figma "title-container" — eyebrow + heading(+accent word) + optional
 * right-hand supporting line. This is a thin, Figma-named wrapper over
 * SectionHeader rather than a re-implementation: SectionHeader's layout
 * already matches (12px eyebrow/heading gap, ~400px intro column against a
 * 1104px content-block — Figma's own `flex-1 + pl-150` technique on a 1104
 * row nets ~402px, SectionHeader's fixed max-w-[392px] is the same target).
 * Keeping one definition avoids two components drifting apart.
 */
export function TitleContainer({
  typeText,
  heading,
  accent,
  supportingText,
  className
}: {
  typeText: string;
  heading: string;
  accent: string;
  supportingText?: string;
  className?: string;
}) {
  return <SectionHeader eyebrow={typeText} title={heading} accent={accent} intro={supportingText} className={className} />;
}
