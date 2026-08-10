import type { IdeologyPrinciple } from "@/lib/types";
import { WorkPhilosophyCard } from "../library/cards/work-philosophy-card";

/**
 * 4 equal columns, icon-topped — matches Homepage 6's methodology grid
 * (Figma: 28px icon at top, title+description below). Each card supplies its
 * own right hairline (Figma's `Work-philosophy-card` border-r) rather than
 * the grid using `divide-x`, so the 4th card's border lands exactly on the
 * wrapping ContentBlock's own edge instead of being suppressed.
 */
const ICONS: Record<NonNullable<IdeologyPrinciple["icon"]>, JSX.Element> = {
  systems: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  production: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5L3 12l5 7" />
      <path d="M16 5l5 7-5 7" />
    </svg>
  ),
  ai: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M7.5 7.5l2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2" />
    </svg>
  ),
  function: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
    </svg>
  )
};

export function MethodologyGrid({ principles }: { principles: IdeologyPrinciple[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {principles.map((principle) => (
        <WorkPhilosophyCard
          key={principle.id}
          icon={principle.icon && ICONS[principle.icon]}
          title={principle.title}
          description={principle.description}
        />
      ))}
    </div>
  );
}
