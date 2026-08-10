import type { AIExplorationCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { explorationImages, fallbackImage } from "../images";
import { TitleContainer } from "../library/texts/title-container";
import { ProjectCard } from "../library/cards/project-card";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";

/**
 * Figma's Section-projects is a static 3-card grid (project-card: image top,
 * content below), not a horizontal scroll rail — first 3 explorations.
 */
export function DsProjects({
  heading,
  intro,
  explorations
}: {
  heading: string;
  intro: string;
  explorations: AIExplorationCard[];
}) {
  const featured = explorations.slice(0, 3);

  return (
    <Section bg="paper" pad="none" id="explorations">
      <ContainerBlock>
        <ContentBlock padTop="title">
          <TitleContainer typeText="On the side" heading={heading} accent="explorations" supportingText={intro} />
        </ContentBlock>
      </ContainerBlock>

      <ContainerBlock>
        <ContentBlock>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((exp) => (
              <ProjectCard
                key={exp.id}
                image={explorationImages[exp.id] ?? fallbackImage}
                alt={exp.title}
                tags={exp.tags.slice(0, 2)}
                title={exp.title}
                description={exp.description}
                href={exp.href}
              />
            ))}
          </div>
        </ContentBlock>
      </ContainerBlock>
    </Section>
  );
}
