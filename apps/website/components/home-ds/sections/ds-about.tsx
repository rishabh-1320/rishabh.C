import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { galleryImages, timelineImage } from "../images";
import { TitleContainer } from "../library/texts/title-container";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";
import { TimelineCard } from "../site-components/timeline-card";
import { TextContainer } from "../library/texts/text-container";

export function DsAbout({ about }: { about: HomeContent["about"] }) {
  const [imgA, imgB, imgC] = about.photoSrc
    ? [{ src: about.photoSrc, alt: "Rishabh" }, ...galleryImages]
    : galleryImages;

  return (
    <Section bg="paper" pad="none" id="about">
      <ContainerBlock>
        <ContentBlock padTop="title">
          <TitleContainer typeText="Journey so far" heading={about.heading} accent="Me" supportingText={about.intro} />
        </ContentBlock>
      </ContainerBlock>

      {/* Figma runs the bio copy and the collage as one block, copy first —
          you read who he is, then see the workspace. */}
      <ContainerBlock>
        <ContentBlock padTop="both" padBottom="both" className="flex flex-col gap-18">
          <div className="flex flex-col gap-8">
            {about.bio.map((para, i) => (
              <Text key={i} variant="hp-bio">
                {para}
              </Text>
            ))}
            <Text variant="hp-body">{about.currentlyLine}</Text>
          </div>

          {/* 3-col collage: outer columns pair a big image with an offset accent
              square (mirrored top/bottom), the center column is one full-height
              image — traced from the Figma export's exact column geometry. */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgA.src} alt={imgA.alt} className="aspect-[368/276] w-full rounded-ds-card object-cover" />
              <div className="flex justify-end">
                <div className="aspect-square w-1/3 rounded-ds-card bg-ds-surface-sunken" />
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgB.src} alt={imgB.alt} className="aspect-[368/400] w-full rounded-ds-card object-cover" />
            <div className="flex flex-col gap-6">
              <div className="flex justify-start">
                <div className="aspect-square w-1/3 rounded-ds-card bg-ds-surface-sunken" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgC.src} alt={imgC.alt} className="aspect-[368/276] w-full rounded-ds-card object-cover" />
            </div>
          </div>
        </ContentBlock>
      </ContainerBlock>

      {/* Timeline runs the full content width with the image stacked beneath
          it (Figma 1104x592), not beside it. */}
      <ContainerBlock>
        <ContentBlock padTop="none" padBottom="none" className="flex flex-col gap-6 pb-18 pt-30">
          <TextContainer title="Timeline" className="!items-start !text-left" />

          <div className="flex flex-col gap-4">
            <Text variant="hp-year" className="!text-ds-accent">
              now
            </Text>

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

            <Text variant="hp-year">2022</Text>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={timelineImage.src}
            alt={timelineImage.alt}
            className="aspect-[1104/592] w-full rounded-ds-card object-cover"
          />
        </ContentBlock>
      </ContainerBlock>
    </Section>
  );
}
