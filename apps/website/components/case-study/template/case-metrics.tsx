import { MetricCardDiv } from "@/components/home-ds/library/cards/metric-card-div";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import type { CaseStudyStat } from "@/lib/case-study-types";

/**
 * Figma case-study metrics band (node 480:4071) — a row of `metric-card-div`
 * in its `panel` variant (equal-width, padded, no dividers). Same no-
 * ContainerBlock full-bleed structure as CaseHero.
 */
export function CaseMetrics({ stats }: { stats: CaseStudyStat[] }) {
  return (
    <ThreeColumnBlock columns={false}>
      <div className="flex items-center">
        {stats.map((stat) => (
          <MetricCardDiv key={stat.label} value={stat.value} label={stat.label} variant="panel" />
        ))}
      </div>
    </ThreeColumnBlock>
  );
}
