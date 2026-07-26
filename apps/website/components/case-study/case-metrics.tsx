import { MetricStat } from "../home-ds/ui/metric-stat";

/**
 * The case-study stats band — same visual language as the homepage's
 * DsMetrics row (48px number / 14px uppercase muted label), just 3 stats
 * instead of 4, spread edge-to-edge like the homepage.
 */
export function CaseMetrics({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {stats.map((stat) => (
        <MetricStat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
