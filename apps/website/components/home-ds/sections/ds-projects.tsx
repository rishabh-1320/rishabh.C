import type { AIExplorationCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { explorationImages, fallbackImage } from "../images";
import { SectionHeader } from "../ui/section-header";
import { CaseStudyCard } from "../ui/case-study-card";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

export function DsProjects({
  heading,
  intro,
  explorations
}: {
  heading: string;
  intro: string;
  explorations: AIExplorationCard[];
}) {
  return (
    <Section bg="paper" pad="none" id="explorations">
      <HRule />
      <SectionRow>
        <Block pad="both">
          <SectionHeader eyebrow="On the side" title={heading} accent="explorations" intro={intro} />
        </Block>
      </SectionRow>
      <HRule />

      <SectionRow>
        <Block pad="open-bottom" className="overflow-x-auto">
          <div className="flex w-max gap-6 md:w-full md:grid md:grid-cols-3">
            {explorations.map((exp) => (
              <div key={exp.id} className="w-[26rem] md:w-auto">
                <CaseStudyCard
                  variant="compact"
                  image={explorationImages[exp.id] ?? fallbackImage}
                  alt={exp.title}
                  tags={exp.tags.slice(0, 2)}
                  title={exp.title}
                  description={exp.description}
                  href={exp.href}
                />
              </div>
            ))}
          </div>
        </Block>
      </SectionRow>
    </Section>
  );
}
