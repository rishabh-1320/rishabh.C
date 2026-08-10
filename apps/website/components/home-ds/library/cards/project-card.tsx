import { cn } from "@packages/ds-ui";
import { CardTitle } from "./card-title";

/**
 * Figma "project-card" — image on top, CardTitle below (padding="project" —
 * the 16px variant). Used by the homepage Projects section's static 3-card
 * grid.
 */
export function ProjectCard({
  image,
  alt,
  tags,
  title,
  description,
  href,
  className
}: {
  image: string;
  alt: string;
  tags: string[];
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col overflow-clip rounded-ds-card", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} loading="lazy" className="aspect-[486/314] w-full rounded-ds-lg object-cover" />
      <CardTitle tags={tags} title={title} description={description} padding="project" href={href} />
    </div>
  );
}
