import Link from "next/link";
import { Text, cn } from "@packages/ds-ui";
import { MinimalBadge } from "./minimal-badge";
import { ArrowCircleButton } from "./arrow-circle-button";

export type CaseStudyCardVariant = "featured" | "standard" | "compact";

export type CaseStudyCardProps = {
  variant: CaseStudyCardVariant;
  image: string;
  alt: string;
  tags: string[];
  title: string;
  description: string;
  href?: string;
  className?: string;
  metric?: string;
  metricLabel?: string;
};

/**
 * The one case-study card definition for the whole homepage — Work's featured
 * + standard cards and Projects' compact cards all render through this single
 * component so radius/type/padding can never drift between them. Traced from
 * the Figma export: cards are BORDERLESS (rounded-8 image + padded content on
 * the page surface), content padding is px-48 py-32, and the featured/standard
 * body uses a 72/36/16 gap rhythm (text→metric / title-block→desc / badges→
 * title). Only image aspect + whether a metric row shows differ per variant.
 */
export function CaseStudyCard({
  variant,
  image,
  alt,
  tags,
  title,
  description,
  href,
  className,
  metric,
  metricLabel
}: CaseStudyCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  const body = (
    <div className={cn("flex flex-col", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full rounded-ds-card object-cover",
          isFeatured ? "aspect-[1152/556]" : isCompact ? "aspect-[7/5]" : "aspect-[16/9]"
        )}
      />

      {isCompact ? (
        <div className="flex flex-col gap-4 px-12 py-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <MinimalBadge key={tag} tone="bare">
                {tag}
              </MinimalBadge>
            ))}
          </div>
          <Text variant="hp-card-title">{title}</Text>
          <div className="flex items-center gap-4">
            <Text variant="hp-body" className="flex-1">
              {description}
            </Text>
            <ArrowCircleButton />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-18 px-12 py-8">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <MinimalBadge key={tag} tone="bare">
                    {tag}
                  </MinimalBadge>
                ))}
              </div>
              <Text variant="hp-card-title-lg">{title}</Text>
            </div>
            <Text variant="hp-body">{description}</Text>
          </div>

          <div className="flex items-end justify-between">
            {metric && (
              <div className="flex items-center gap-3">
                <Text variant="hp-card-title" className="!text-ds-hp-muted">
                  {metric}
                </Text>
                <Text variant="hp-body" className="max-w-[120px]">
                  {metricLabel}
                </Text>
              </div>
            )}
            <ArrowCircleButton className={metric ? undefined : "ml-auto"} />
          </div>
        </div>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="block cursor-pointer">
      {body}
    </Link>
  ) : (
    body
  );
}
