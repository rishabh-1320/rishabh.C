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
  /** Featured/standard only — Figma's numeric metric row ("2,000+ employees tracked live"). */
  metric?: string;
  metricLabel?: string;
  href?: string;
  className?: string;
};

/**
 * The one case-study card definition for the whole homepage — Work's featured
 * + standard cards and Projects' compact cards all render through this single
 * component so radius/border/padding/type can never drift between them.
 * Chrome is identical across variants (rounded-ds-card, hairline border,
 * clipped corners); only the image orientation and bottom-row content differ.
 */
export function CaseStudyCard({
  variant,
  image,
  alt,
  tags,
  title,
  description,
  metric,
  metricLabel,
  href,
  className
}: CaseStudyCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  const body = (
    <div
      className={cn(
        "group flex overflow-hidden rounded-ds-card border border-ds-hairline bg-ds-surface-paper",
        isFeatured ? "flex-col md:flex-row" : "flex-col",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full object-cover transition-transform duration-[var(--ds-dur-slow)] ease-[var(--ds-ease-out-expo)] group-hover:scale-[1.03]",
          isFeatured ? "aspect-square md:h-auto md:w-1/2" : isCompact ? "aspect-[7/5]" : "aspect-[16/11]"
        )}
      />

      <div
        className={cn(
          "flex flex-1 flex-col gap-6 p-8",
          isFeatured ? "justify-between" : isCompact ? "justify-start" : "justify-between"
        )}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <MinimalBadge key={tag}>{tag}</MinimalBadge>
            ))}
          </div>
          <Text variant="hp-card-title">{title}</Text>
          {isCompact && (
            <div className="flex items-center gap-4">
              <Text variant="hp-body" className="flex-1">
                {description}
              </Text>
              <ArrowCircleButton />
            </div>
          )}
        </div>

        {!isCompact && (
          <>
            <Text variant="hp-body">{description}</Text>
            <div className="flex items-center justify-between">
              {metric ? (
                <div className="flex items-baseline gap-3">
                  <Text variant="hp-eyebrow" as="span" className="text-[24px] normal-case tracking-[-0.025em] text-ds-tag-muted">
                    {metric}
                  </Text>
                  <Text variant="hp-body" as="span" className="w-[7.5rem]">
                    {metricLabel}
                  </Text>
                </div>
              ) : (
                <span />
              )}
              <ArrowCircleButton />
            </div>
          </>
        )}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {body}
    </Link>
  ) : (
    body
  );
}
