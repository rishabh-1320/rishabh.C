import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { TitleContainer } from "../library/texts/title-container";
import { MethodologyGrid } from "../site-components/methodology-grid";
import { Marquee } from "../site-components/marquee";
import { AiToolTile } from "../library/ai-tools/ai-tool-tile";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";

export function DsSkill({
  heading,
  intro,
  principles,
  aiWorkflow
}: {
  heading: string;
  intro: string;
  principles: HomeContent["ideologyPrinciples"];
  aiWorkflow: HomeContent["aiWorkflow"];
}) {
  return (
    <Section bg="paper" pad="none" id="skill">
      <ContainerBlock>
        <ContentBlock padTop="title">
          <TitleContainer typeText="Process & principles" heading={heading} accent="systems" supportingText={intro} />
        </ContentBlock>
      </ContainerBlock>

      <ContainerBlock>
        <ContentBlock padTop="none" padBottom="none" padX={false}>
          <MethodologyGrid principles={principles} />
        </ContentBlock>
      </ContainerBlock>

      {/* Empty rail-bounded spacer, matching the Figma gap before the AI-workflow content. */}
      <ContainerBlock>
        <ContentBlock padTop="none" padBottom="none">
          <div className="h-35" />
        </ContentBlock>
      </ContainerBlock>

      <ContainerBlock>
        {/* Left-aligned title + support, then a marquee row — the per-tool
            descriptions/closing line from the copy deck aren't in this
            design, so intentionally not rendered. Kept left-aligned rather
            than TextContainer's centered layout per the agreed scope for
            this section (unchanged from the prior pass). */}
        <ContentBlock className="flex flex-col gap-18">
          <div className="flex flex-col gap-2">
            <Text variant="hp-headline" className="!text-ds-heading">
              {aiWorkflow.heading}
            </Text>
            <Text variant="hp-body">{aiWorkflow.intro}</Text>
          </div>

          <Marquee>
            {aiWorkflow.tools.map((tool) =>
              tool.icon ? <AiToolTile key={tool.name} name={tool.name} icon={tool.icon} /> : null
            )}
          </Marquee>
        </ContentBlock>
      </ContainerBlock>
    </Section>
  );
}
