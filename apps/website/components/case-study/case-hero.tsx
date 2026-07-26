import type { ReactNode } from "react";
import { AccentText } from "../home-ds/accent-text";

/**
 * Case-study hero — left-aligned, matching the Figma case-study template
 * (not the old centered HeroCard). Traced values: tag row 11px/600/accent/
 * uppercase/tracking-0.1em with 3px dot separators, title 64px/400/#181818
 * with an accent trailing phrase, subtitle 18px/300/nav-muted/leading-1.6.
 */
export function CaseHero({
  tags,
  title,
  accent,
  subtitle,
  mockup
}: {
  tags: string[];
  title: string;
  accent?: string;
  subtitle: string;
  mockup?: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-4">
        {tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-4">
            {i > 0 && <span className="size-[3px] rounded-full bg-ds-accent" aria-hidden="true" />}
            <span className="font-ds-inter text-[11px] font-semibold uppercase tracking-[0.1em] text-ds-accent">
              {tag}
            </span>
          </span>
        ))}
      </div>

      <h1 className="mt-6 font-ds-inter text-[40px] font-normal leading-[1.05] tracking-[-0.025em] text-ds-heading md:text-[64px]">
        {accent ? <AccentText text={title} accent={accent} /> : title}
      </h1>

      <p className="mt-6 max-w-3xl font-ds-inter text-[18px] font-light leading-[1.6] tracking-[-0.015em] text-ds-nav-muted">
        {subtitle}
      </p>

      {mockup && <div className="mt-12">{mockup}</div>}
    </div>
  );
}
