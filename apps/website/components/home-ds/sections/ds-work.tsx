import type { WorkCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { workImages, fallbackImage } from "../images";
import { SectionHeader } from "../ui/section-header";
import { CaseStudyCard } from "../ui/case-study-card";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

export function DsWork({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active);
  const [hero, ...rest] = featured;

  return (
    <Section bg="paper" pad="none" id="work">
      <HRule dots />
      <SectionRow>
        <Block pad="both" padX="wide">
          <SectionHeader eyebrow="Selected work" title={heading} accent="end to end" />
        </Block>
      </SectionRow>
      <HRule dots />

      {hero && (
        <SectionRow>
          <Block pad="joint">
            <CaseStudyCard
              variant="featured"
              image={workImages[hero.id] ?? fallbackImage}
              alt={hero.title}
              tags={hero.tags}
              title={hero.title}
              description={hero.description}
              href={hero.href}
              metric={hero.metric}
              metricLabel={hero.metricLabel}
            />
          </Block>
        </SectionRow>
      )}

      <HRule dots />

      <SectionRow>
        <Block pad="open-bottom">
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((work) => (
              <CaseStudyCard
                key={work.id}
                variant="standard"
                image={workImages[work.id] ?? fallbackImage}
                alt={work.title}
                tags={work.tags}
                title={work.title}
                description={work.description}
                href={work.href}
                metric={work.metric}
                metricLabel={work.metricLabel}
              />
            ))}
          </div>
        </Block>
      </SectionRow>
    </Section>
  );
}
