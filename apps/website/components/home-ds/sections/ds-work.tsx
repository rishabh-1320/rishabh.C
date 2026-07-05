import type { WorkCard } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { workImages, fallbackImage } from "../images";
import { SectionHeader } from "../ui/section-header";
import { CaseStudyCard } from "../ui/case-study-card";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

function metricParts(metric?: string) {
  if (!metric) return { value: undefined, label: undefined };
  const match = metric.match(/^(\S+)\s+(.*)$/);
  return match ? { value: match[1], label: match[2] } : { value: metric, label: undefined };
}

export function DsWork({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active);
  const [hero, ...rest] = featured;

  return (
    <Section bg="paper" pad="none" id="work">
      <HRule />
      <SectionRow>
        <Block pad="both">
          <SectionHeader eyebrow="Selected work" title={heading} accent="end to end" />
        </Block>
      </SectionRow>
      <HRule />

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
              {...metricParts(hero.metric)}
              href={hero.href}
            />
          </Block>
        </SectionRow>
      )}

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
                {...metricParts(work.metric)}
                href={work.href}
              />
            ))}
          </div>
        </Block>
      </SectionRow>
    </Section>
  );
}
