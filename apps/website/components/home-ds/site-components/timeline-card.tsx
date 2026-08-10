import { Text } from "@packages/ds-ui";
import { MinimalBadge } from "../library/misc/minimal-badge";

/** One company card in the About+Journey timeline — Tcules/Timelabs/Sports For All. */
export function TimelineCard({
  company,
  period,
  description,
  current = false,
  tags
}: {
  company: string;
  period: string;
  description: string;
  current?: boolean;
  tags?: string[];
}) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-ds-card border border-ds-hairline-faint bg-ds-surface-paper px-8 py-6">
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Text variant="hp-card-title">{company}</Text>
          {current && <MinimalBadge tone="filled">Current</MinimalBadge>}
        </div>
        <Text variant="hp-meta" as="span" className="whitespace-nowrap uppercase !text-ds-hp-muted">
          {period}
        </Text>
      </div>
      <Text variant="hp-body" className="w-full">{description}</Text>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <MinimalBadge key={tag} tone="outline">
              {tag}
            </MinimalBadge>
          ))}
        </div>
      )}
    </div>
  );
}
