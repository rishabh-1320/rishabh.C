import type { AIExplorationCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { explorationImages, fallbackImage } from "../images";
import { SectionHeader } from "../ui/section-header";
import { CaseStudyCard } from "../ui/case-study-card";
import { RailScrollRow } from "../ui/rail-scroll-row";
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
      <HRule dots />
      <SectionRow>
        <Block pad="both" padX="wide">
          <SectionHeader eyebrow="On the side" title={heading} accent="explorations" intro={intro} />
        </Block>
      </SectionRow>
      <HRule dots />

      <SectionRow>
        {/* Clipped horizontal scroll: cards are 420 + gap-12 (48), so the
            3rd is cut in half at the right rail and the 4th sits fully
            hidden behind it — matching the Figma export exactly. */}
        <Block pad="open-bottom" padX="none">
          <RailScrollRow className="gap-12">
            {explorations.map((exp) => (
              // 420 CSS px == 26.25rem (rem, not a literal px value, so it stays out of the drift guard's raw-px rule).
              <div key={exp.id} className="w-[26.25rem] shrink-0">
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
          </RailScrollRow>
        </Block>
      </SectionRow>
    </Section>
  );
}
