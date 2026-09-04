import { cn } from "@packages/ds-ui";
import { CardTitle } from "./card-title";

/**
 * Figma "project-card" — image on top, CardTitle below (padding="project" —
 * the 16px variant). Used by the Work section's 2-up "case study blocks"
 * grid, where each card carries the same metric + CTA row as the featured
 * case-study-card above it.
 */
export function ProjectCard({
  image,
  alt,
  tags,
  title,
  description,
  metric,
  metricLabel,
  href,
  className
}: {
  image: string;
  alt: string;
  tags: string[];
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col overflow-clip rounded-ds-card", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} loading="lazy" className="aspect-[540/300] w-full rounded-ds-lg object-cover" />
      <div className="flex-1">
        <CardTitle
          tags={tags}
          title={title}
          description={description}
          metric={metric}
          metricLabel={metricLabel}
          padding="project"
          href={href}
        />
      </div>
    </div>
  );
}
