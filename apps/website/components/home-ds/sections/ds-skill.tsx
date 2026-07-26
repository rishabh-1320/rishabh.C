import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { SectionHeader } from "../ui/section-header";
import { MethodologyGrid } from "../ui/methodology-grid";
import { Marquee } from "../ui/marquee";
import { AiToolTile } from "../ui/ai-tool-tile";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

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
      <HRule dots />
      <SectionRow>
        <Block pad="both" padX="wide">
          <SectionHeader eyebrow="Process & principles" title={heading} accent="systems" intro={intro} />
        </Block>
      </SectionRow>
      <HRule dots />

      <SectionRow>
        <Block pad="none" padX="none">
          <MethodologyGrid principles={principles} />
        </Block>
      </SectionRow>
      <HRule dots />

      {/* Empty rail-bounded spacer, matching the Figma gap before the AI-workflow content. */}
      <SectionRow>
        <Block pad="none" padX="wide" className="h-35" />
      </SectionRow>
      <HRule dots />

      <SectionRow>
        {/* Left-aligned title + support, then a marquee row — no
            stripe/vertical-line treatment. The per-tool descriptions/closing
            line from the copy deck aren't in this design, so intentionally
            not rendered. The marquee stays inside this same rail-bounded
            Block (not full-bleed) so it never extends past where the
            heading/support text above it stops. */}
        <Block pad="none" padX="wide" className="flex flex-col gap-18 py-18">
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
        </Block>
      </SectionRow>
    </Section>
  );
}
