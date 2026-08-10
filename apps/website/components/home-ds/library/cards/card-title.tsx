import Link from "next/link";
import { Text, cn } from "@packages/ds-ui";
import { MinimalBadge } from "../misc/minimal-badge";
import { ArrowCircleButton } from "../misc/arrow-circle-button";

export type CardTitlePadding = "casestudy" | "project";

// casestudy: p-48, project: p-16 — the only structural difference between
// Figma's Type=Casestudy and Type=Project card-title variants; everything
// else (badges, title, description, metric row, CTA) is identical.
const PADDING: Record<CardTitlePadding, string> = {
  casestudy: "p-12",
  project: "p-4"
};

export function CardTitle({
  tags,
  title,
  description,
  metric,
  metricLabel,
  padding = "casestudy",
  href,
  className
}: {
  tags: string[];
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  padding?: CardTitlePadding;
  href?: string;
  className?: string;
}) {
  const content = (
    <div className={cn("flex h-full flex-col justify-center gap-[78px]", PADDING[padding], className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <MinimalBadge key={tag} tone="bare">
              {tag}
            </MinimalBadge>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Text variant="hp-card-title">{title}</Text>
          <Text variant="hp-body">{description}</Text>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {metric && (
          <div className="flex items-center gap-3">
            <Text variant="hp-card-title" className="!text-ds-hp-muted">
              {metric}
            </Text>
            <Text variant="hp-label" className="max-w-[120px] normal-case">
              {metricLabel}
            </Text>
          </div>
        )}
        <ArrowCircleButton className={metric ? undefined : "ml-auto"} />
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full cursor-pointer">
      {content}
    </Link>
  ) : (
    content
  );
}
