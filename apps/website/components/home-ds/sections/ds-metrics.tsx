import type { HomeContent } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { LogoStrip } from "../site-components/logo-strip";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";
import { MetricCardDiv } from "../library/cards/metric-card-div";
import { TextContainer } from "../library/texts/text-container";

export function DsMetrics({
  logoStrip,
  stats
}: {
  logoStrip: HomeContent["logoStrip"];
  stats: HomeContent["stats"];
}) {
  return (
    <Section bg="paper" pad="none" id="metrics" className="bg-gradient-to-b from-ds-surface-mist to-ds-hp-page">
      <ContainerBlock>
        <ContentBlock className="flex flex-col gap-6">
          {/* Figma places a real text-container here (centered heading), separate
              from the logo row — not fused into LogoStrip's own left-aligned label. */}
          <TextContainer title={logoStrip.heading} />
          <LogoStrip logos={logoStrip.logos} size="sm" align="left" />
        </ContentBlock>
      </ContainerBlock>

      <ContainerBlock>
        <ContentBlock padTop="none" padBottom="none" padX={false}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <MetricCardDiv key={stat.label} value={stat.value} label={stat.label} variant="divider" />
            ))}
          </div>
        </ContentBlock>
      </ContainerBlock>
    </Section>
  );
}
