import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { galleryImages } from "../images";
import { SectionHeader } from "../ui/section-header";
import { TimelineCard } from "../ui/timeline-card";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

export function DsAbout({ about }: { about: HomeContent["about"] }) {
  const [mainPhoto, ...restPhotos] = about.photoSrc
    ? [{ src: about.photoSrc, alt: "Rishabh" }, ...galleryImages]
    : galleryImages;

  return (
    <Section bg="paper" pad="none" id="about">
      <HRule />
      <SectionRow>
        <Block pad="both">
          <SectionHeader eyebrow="Journey so far" title={about.heading} accent="Me" intro={about.intro} />
        </Block>
      </SectionRow>
      <HRule />

      <SectionRow>
        <Block pad="joint">
          <div className="flex flex-col gap-8">
            {about.bio.map((para, i) => (
              <Text key={i} variant="hp-bio">
                {para}
              </Text>
            ))}
            <Text variant="hp-body">{about.currentlyLine}</Text>
          </div>
        </Block>
      </SectionRow>

      <SectionRow>
        <Block pad="open-bottom">
          <div className="grid gap-8 md:grid-cols-[1fr_540px]">
            <div className="flex flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainPhoto.src}
                alt={mainPhoto.alt}
                className="aspect-[3/4] w-full rounded-ds-card object-cover"
              />
              {restPhotos.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {restPhotos.map((img) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className="aspect-square w-full rounded-ds-card object-cover"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <Text variant="hp-year">2022</Text>
                <div className="h-px flex-1 bg-ds-hairline-faint" />
                <Text variant="hp-year" className="text-ds-accent">
                  now
                </Text>
              </div>

              {about.experiences.map((exp, i) => (
                <TimelineCard
                  key={exp.company}
                  company={exp.company}
                  period={exp.period}
                  current={i === 0}
                  description={exp.description ?? exp.projects?.map((p) => p.name).join(" · ") ?? ""}
                  tags={exp.projects?.map((p) => p.name)}
                />
              ))}

              {about.skills.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-ds-hairline-faint pt-4">
                  {about.skills.map((skill) => (
                    <div key={skill.category} className="flex flex-col gap-1">
                      <Text variant="hp-meta" as="span" className="uppercase">
                        {skill.category}
                      </Text>
                      <Text variant="hp-caption">{skill.items}</Text>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Block>
      </SectionRow>
    </Section>
  );
}
