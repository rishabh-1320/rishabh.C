import type { IdeologyPrinciple } from "@/lib/types";
import { Text } from "@packages/ds-ui";

/**
 * 4 equal columns, icon-topped — matches Homepage 6's methodology grid
 * (Figma: 24x24 icon at top, title+description below, hairline dividers
 * between columns). Replaces the earlier diagonal "brick wall" stagger.
 */
const ICONS: Record<NonNullable<IdeologyPrinciple["icon"]>, JSX.Element> = {
  systems: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  production: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5L3 12l5 7" />
      <path d="M16 5l5 7-5 7" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M7.5 7.5l2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2" />
    </svg>
  ),
  function: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
    </svg>
  )
};

function PrincipleCard({ principle }: { principle: IdeologyPrinciple }) {
  return (
    <div className="flex h-full flex-col gap-[86px] px-6 pb-18 pt-12">
      <div className="text-ds-heading">{principle.icon && ICONS[principle.icon]}</div>
      <div className="flex flex-col gap-4">
        <Text variant="hp-card-title-sm">{principle.title}</Text>
        <Text variant="hp-body">{principle.description}</Text>
      </div>
    </div>
  );
}

export function MethodologyGrid({ principles }: { principles: IdeologyPrinciple[] }) {
  return (
    <div className="grid grid-cols-2 divide-x divide-ds-hairline md:grid-cols-4">
      {principles.map((principle) => (
        <PrincipleCard key={principle.id} principle={principle} />
      ))}
    </div>
  );
}
