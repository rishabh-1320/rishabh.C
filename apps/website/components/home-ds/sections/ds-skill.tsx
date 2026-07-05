import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { SectionHeader } from "../ui/section-header";
import { MethodologyGrid } from "../ui/methodology-grid";
import { LogoStrip } from "../ui/logo-strip";
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
      <HRule />
      <SectionRow>
        <Block pad="both">
          <SectionHeader eyebrow="Process & principles" title={heading} accent="systems" intro={intro} />
        </Block>
      </SectionRow>
      <HRule />

      <SectionRow>
        <Block pad="joint">
          <MethodologyGrid principles={principles} />
        </Block>
      </SectionRow>

      <SectionRow>
        <Block pad="open-bottom">
          <LogoStrip
            heading={aiWorkflow.heading === "AI in my workflow" ? "AI tools that I use" : aiWorkflow.heading}
            items={aiWorkflow.tools.map((t) => t.name)}
            size="lg"
          />

          {/* Preserve each tool's description (Figma shows only the logo row) as a
              compact list below it, so no content is lost in the visual refresh. */}
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {aiWorkflow.tools.map((tool) => (
              <div key={tool.name} className="flex flex-col gap-1">
                <Text variant="hp-subtitle">{tool.name}</Text>
                <Text variant="hp-body">{tool.description}</Text>
              </div>
            ))}
          </div>
          <Text variant="hp-body" className="mx-auto mt-8 max-w-2xl text-center italic">
            {aiWorkflow.closingLine}
          </Text>
        </Block>
      </SectionRow>
    </Section>
  );
}
