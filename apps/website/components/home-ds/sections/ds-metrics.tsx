import type { HomeContent } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { LogoStrip } from "../ui/logo-strip";
import { MetricStat } from "../ui/metric-stat";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

export function DsMetrics({
  logoStrip,
  stats
}: {
  logoStrip: HomeContent["logoStrip"];
  stats: HomeContent["stats"];
}) {
  return (
    <Section bg="paper" pad="none" id="metrics" className="bg-gradient-to-b from-ds-surface-mist to-ds-hp-page">
      <SectionRow>
        <Block pad="open-top" padX="wide">
          <LogoStrip heading={logoStrip.heading} logos={logoStrip.logos} size="sm" align="left" />
        </Block>
      </SectionRow>

      <HRule dots />

      <SectionRow>
        {/* Stats: Figma sits them 140 below the rule, 72 above the section end. */}
        <Block pad="none" padX="wide" className="pt-35 pb-18">
          <div className="flex flex-wrap justify-between gap-y-10">
            {stats.map((stat) => (
              <MetricStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Block>
      </SectionRow>
    </Section>
  );
}
