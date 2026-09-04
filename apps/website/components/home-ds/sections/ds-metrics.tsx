import type { HomeContent } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";
import { MetricCardDiv } from "../library/cards/metric-card-div";

export function DsMetrics({ stats }: { stats: HomeContent["stats"] }) {
  return (
    <Section bg="paper" pad="none" id="metrics">
      {/* Figma's first social-proof band is a bare container-block — no
          content-block inside it, so no side rails and no dot-connect marks.
          It carries the whole gradient on its own, resolving to the page
          colour about four-fifths of the way down, so the stats below sit on
          clean page background rather than inside a wash. Figma's light stop
          is pure white; using `hp-page` instead keeps the fade seamless
          against the sections around it. */}
      <ContainerBlock className="bg-gradient-to-b from-ds-surface-mist from-0% to-ds-hp-page to-[80.769%]">
        <div className="h-25" />
      </ContainerBlock>

      {/* Rails on the sides only — Figma draws no rule under the stats row. */}
      <ContainerBlock>
        <ContentBlock bottomBorder={false} padTop="none" padBottom="none" padX={false}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <MetricCardDiv key={stat.label} value={stat.value} label={stat.label} variant="panel" />
            ))}
          </div>
        </ContentBlock>
      </ContainerBlock>
    </Section>
  );
}
