import type { ReactNode } from "react";
import { Text } from "@packages/ds-ui";
import { AccentText } from "../home-ds/accent-text";
import { MinimalBadge } from "../home-ds/ui/minimal-badge";
import { InfoBlock } from "./info-block";

type HeroCardProps = {
  title: string;
  /** Substring of `title` to paint accent — same mechanism as the homepage's AccentText. */
  accent?: string;
  /** Existing category tags (reused from case-study-nav's data, not new copy). */
  tags?: string[];
  /** Snapshot paragraphs / lead copy. Pass JSX so callers can render inline <strong>, <em>, etc. */
  children: ReactNode;
  /** Bottom info grid — 3 cells of role/company/timeline-style metadata. */
  meta: Array<{ title: string; value: string }>;
  /** Optional content rendered below the meta grid (typically a MockupFrame). */
  footer?: ReactNode;
};

/**
 * The banner that opens every case study — mapped from the homepage identity:
 * centered tags + Inter title with an accent phrase, matching the shared
 * reference's centered hero. The real snapshot copy (2–3 paragraphs) stays
 * left-aligned inside a narrow centered column rather than force-fit into one
 * fabricated centered lede — smart mapping, not a blind copy of the reference.
 */
export function HeroCard({ title, accent, tags, children, meta, footer }: HeroCardProps) {
  return (
    <div className="flex flex-col items-center pt-6 text-center md:pt-10">
      {tags && tags.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <MinimalBadge key={tag}>{tag}</MinimalBadge>
          ))}
        </div>
      )}

      <Text variant="hp-title" as="h1" className="max-w-3xl">
        {accent ? <AccentText text={title} accent={accent} /> : title}
      </Text>

      <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left">{children}</div>

      <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-8 border-t border-ds-hairline pt-8 text-left sm:grid-cols-3">
        {meta.map((cell) => (
          <InfoBlock key={cell.title} title={cell.title} value={cell.value} />
        ))}
      </div>

      {footer && <div className="mt-12 w-full">{footer}</div>}
    </div>
  );
}
