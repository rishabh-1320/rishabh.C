import { cn } from "@packages/ds-ui";
import { CardTitle } from "./card-title";

/**
 * Figma "case-study-card" for the homepage Work section — image left,
 * CardTitle right, nested radii (outer shell 8px/overflow-clip, image itself
 * 24px). Homepage-only: the case-study *pages'* "More Projects" grid uses the
 * separate, unrelated `../ui/case-study-card.tsx` (out of scope this pass —
 * do not merge these two).
 */
export function CaseStudyCard({
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
    <div className={cn("flex items-stretch overflow-clip rounded-ds-card", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* 665 / 1104 of the content column in Figma — the image takes 60%, not half. */}
      <img src={image} alt={alt} loading="lazy" className="aspect-[665/476] w-[60%] rounded-ds-lg object-cover" />
      <div className="w-[40%]">
        <CardTitle tags={tags} title={title} description={description} metric={metric} metricLabel={metricLabel} padding="casestudy" href={href} />
      </div>
    </div>
  );
}
