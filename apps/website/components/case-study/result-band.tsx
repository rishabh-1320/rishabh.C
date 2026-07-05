import { Text } from "@packages/ds-ui";
import { AnimatedCounter } from "../home-ds/scroll/animated-counter";

type ResultStat = { value: string; label: string };

/**
 * Dark "result" card, sized to the article reading column (none of the 4 case
 * studies have a results section at a true page-level boundary, so this
 * doesn't need to bleed past the TOC sidebar or the viewport). Stats reuse
 * the homepage's Inter + AnimatedCounter treatment rather than the shared
 * reference's serif numerals — kept homepage-true. `hp-title`'s default
 * color doesn't participate in the `.ds-inverted` token flip (it's a
 * 2026-refresh-only role), so the value color is set explicitly to accent.
 */
export function ResultBand({ stats }: { stats: ResultStat[] }) {
  return (
    <div className="rounded-ds-shell bg-ds-surface-ink px-6 py-12 ds-inverted md:px-10 md:py-16">
      <div className="grid grid-cols-1 divide-y divide-ds-hairline-on-ink sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 px-6 py-6 text-center sm:py-0">
            <Text variant="hp-title" as="span" className="leading-none !text-ds-accent">
              <AnimatedCounter value={stat.value} />
            </Text>
            <Text variant="hp-eyebrow" as="span">
              {stat.label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
