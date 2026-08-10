import { Text, cn } from "@packages/ds-ui";
import { AccentText } from "./accent-text";

/**
 * The eyebrow + title(+accent word) + optional right-hand intro row that opens
 * every homepage section (Work, Skill, Projects, About+Journey). Pure content
 * — no border/padding of its own. It's always placed as the item inside a
 * `Block`, which owns the hairlines and the vertical rhythm; that's what
 * keeps every section's header aligned to the same column edges.
 */
export function SectionHeader({
  eyebrow,
  title,
  accent,
  intro,
  className
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between md:gap-10", className)}>
      <div className="flex flex-1 flex-col gap-3">
        <Text variant="hp-label">{eyebrow}</Text>
        <Text variant="hp-section-title">
          <AccentText text={title} accent={accent} />
        </Text>
      </div>
      {intro && (
        <Text variant="hp-label" className="w-full max-w-[392px] shrink-0">
          {intro}
        </Text>
      )}
    </div>
  );
}
