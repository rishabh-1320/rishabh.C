import { Text } from "@packages/ds-ui";

/**
 * The eyebrow + 32px title pair that opens every subsection of a case study
 * (Context, Audit, Process, Execution, Soul, …) — one definition traced from
 * the Figma export (14px/#A5A19C uppercase eyebrow, 32px/#181818 title,
 * 12px gap) so it can't drift between sections. `hp-card-title-lg` already
 * carries the exact 32px/400/-0.025em role from the homepage card titles.
 */
export function CaseHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <Text variant="hp-label">{eyebrow}</Text>
      <Text variant="hp-card-title-lg">{title}</Text>
    </div>
  );
}
