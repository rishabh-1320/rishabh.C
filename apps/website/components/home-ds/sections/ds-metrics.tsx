import type { HomeContent } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { LogoStrip } from "../ui/logo-strip";
import { MetricStat } from "../ui/metric-stat";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";

export function DsMetrics({
  logoStrip,
  stats
}: {
  logoStrip: HomeContent["logoStrip"];
  stats: HomeContent["stats"];
}) {
  return (
    <Section bg="paper" pad="none" id="metrics" className="bg-gradient-to-b from-ds-surface-mist to-white">
      <SectionRow>
        <Block pad="open-top">
          <LogoStrip heading={logoStrip.heading} items={logoStrip.logos.map((l) => l.name)} size="sm" />
        </Block>
      </SectionRow>
      <SectionRow>
        <Block pad="open-bottom">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {stats.map((stat) => (
              <MetricStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Block>
      </SectionRow>
    </Section>
  );
}
