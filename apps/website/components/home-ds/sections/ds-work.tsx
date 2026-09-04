import type { WorkCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { workImages, fallbackImage } from "../images";
import { TitleContainer } from "../library/texts/title-container";
import { CaseStudyCard } from "../library/cards/case-study-card";
import { ProjectCard } from "../library/cards/project-card";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";

/**
 * Figma's Section-work is two tiers, not a stack of identical rows: one
 * featured full-width `case-study-card` (image 665 left / text 439 right),
 * then a "case study blocks" frame of `project-card`s two across (540 wide,
 * 24 gap, image on top).
 *
 * Figma draws exactly two cards in that lower grid; we render every remaining
 * active case study there instead of truncating to two, so the grid simply
 * runs to a second row rather than silently dropping real work.
 */
export function DsWork({ heading, intro, works }: { heading: string; intro: string; works: WorkCard[] }) {
  const active = works.filter((w) => w.active);
  const [featured, ...rest] = active;

  return (
    <Section bg="paper" pad="none" id="work">
      <ContainerBlock>
        <ContentBlock padTop="title">
          <TitleContainer typeText="Selected work" heading={heading} accent="case studies" supportingText={intro} />
        </ContentBlock>
      </ContainerBlock>

      {featured && (
        <ContainerBlock>
          <ContentBlock>
            <CaseStudyCard
              image={workImages[featured.id] ?? fallbackImage}
              alt={featured.title}
              tags={featured.tags}
              title={featured.title}
              description={featured.description}
              metric={featured.metric}
              metricLabel={featured.metricLabel}
              href={featured.href}
            />
          </ContentBlock>
        </ContainerBlock>
      )}

      {rest.length > 0 && (
        <ContainerBlock>
          <ContentBlock>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {rest.map((work) => (
                <ProjectCard
                  key={work.id}
                  image={workImages[work.id] ?? fallbackImage}
                  alt={work.title}
                  tags={work.tags}
                  title={work.title}
                  description={work.description}
                  metric={work.metric}
                  metricLabel={work.metricLabel}
                  href={work.href}
                />
              ))}
            </div>
          </ContentBlock>
        </ContainerBlock>
      )}
    </Section>
  );
}
