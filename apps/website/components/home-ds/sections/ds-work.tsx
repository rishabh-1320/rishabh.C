import type { WorkCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { workImages, fallbackImage } from "../images";
import { TitleContainer } from "../library/texts/title-container";
import { CaseStudyCard } from "../library/cards/case-study-card";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";

/**
 * Figma's Section-work stacks identical full-width case-study-card rows (not a
 * "featured + 2-col grid" mix) — the first active works, in data order.
 *
 * Capped at four. Figma draws three, but a fourth case study existed and was
 * silently invisible here for months; the cap is the only thing deciding what
 * the homepage shows, so raising it is a content decision, not a layout one.
 */
export function DsWork({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active).slice(0, 4);

  return (
    <Section bg="paper" pad="none" id="work">
      <ContainerBlock>
        <ContentBlock padTop="title">
          <TitleContainer typeText="Selected work" heading={heading} accent="end to end" />
        </ContentBlock>
      </ContainerBlock>

      {featured.map((work) => (
        <ContainerBlock key={work.id}>
          <ContentBlock>
            <CaseStudyCard
              image={workImages[work.id] ?? fallbackImage}
              alt={work.title}
              tags={work.tags}
              title={work.title}
              description={work.description}
              metric={work.metric}
              metricLabel={work.metricLabel}
              href={work.href}
            />
          </ContentBlock>
        </ContainerBlock>
      ))}
    </Section>
  );
}
