import { MetricCardDiv } from "@/components/home-ds/library/cards/metric-card-div";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import type { CaseStudyStat } from "@/lib/case-study-types";

/**
 * Figma case-study metrics band — the assembled template's `metric-card-container`
 * (node 573:8724): equal-width `metric-card-div`s with a right hairline on every
 * card **except the last**, so no rule hangs off the row's trailing edge.
 *
 * That's exactly `MetricCardDiv`'s `divider` variant (48/48/48/72 padding, right
 * border) for all but the last and `panel` (same padding, no border) for the
 * last — with `flex-1 min-w-px` added to the divider ones, which the variant
 * itself doesn't set. Same full-bleed structure as CaseHero.
 */
export function CaseMetrics({ stats }: { stats: CaseStudyStat[] }) {
  return (
    <ThreeColumnBlock columns={false}>
      <div className="flex flex-col items-stretch md:flex-row md:items-center">
        {stats.map((stat, i) => {
          const isLast = i === stats.length - 1;
          return (
            <MetricCardDiv
              key={stat.label}
              value={stat.value}
              label={stat.label}
              variant={isLast ? "panel" : "divider"}
              className={isLast ? undefined : "min-w-px md:flex-1"}
            />
          );
        })}
      </div>
    </ThreeColumnBlock>
  );
}
