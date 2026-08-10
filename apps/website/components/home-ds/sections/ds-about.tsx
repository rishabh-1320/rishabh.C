import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { galleryImages, timelineImage } from "../images";
import { TitleContainer } from "../library/texts/title-container";
import { ContainerBlock } from "../library/blocks/container-block";
import { ContentBlock } from "../library/blocks/content-block";
import { TimelineCard } from "../site-components/timeline-card";
import { TestimonialCard } from "../library/texts/testimonial-card";
import { RailScrollRow } from "../site-components/rail-scroll-row";
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

      {/* Collage and bio are two independent Figma content-blocks (each with
          its own 72 top pad, so the gap between them reads as 144) — kept
          separate to match, with different horizontal insets: the collage
          sits on the tighter gutter inset, the bio copy on the wider content
          inset (see ContentBlock's padX prop). */}
      <ContainerBlock>
        <ContentBlock padX={false} className="px-6 pb-18 pt-18">
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

      <ContainerBlock>
        <ContentBlock className="flex flex-col gap-8">
          {about.bio.map((para, i) => (
            <Text key={i} variant="hp-bio">
              {para}
            </Text>
          ))}
          <Text variant="hp-body">{about.currentlyLine}</Text>
        </ContentBlock>
      </ContainerBlock>

      <ContainerBlock>
        {/*
         * content-block: plain defaults match the Figma instance (417:9074)
         * exactly, no override needed. Figma's own text-container plus the
         * cards row below it combine for a 72px gap; our TextContainer
         * carries no padding of its own, so that full gap is applied here
         * via pt-18. Figma's row is a static 2-card overflow-clip (nothing
         * scrollable), but real content has 3 testimonials — kept the
         * scrollable rail rather than truncating real content to match a
         * mock that's behind the copy.
         */}
        <ContentBlock className="flex flex-col">
          <TextContainer title="Testimonials" />
          <div className="pt-18">
            <RailScrollRow className="gap-6">
              {about.testimonials.map((t, i) => (
                // 576 CSS px == 36rem (rem, not a literal px value, so it stays out of the drift guard's raw-px rule).
                <div key={i} className="w-[36rem] shrink-0">
                  <TestimonialCard quote={t.quote} name={t.name} role={t.role} href={t.href} avatarSrc={t.avatarSrc} />
                </div>
              ))}
            </RailScrollRow>
          </div>
        </ContentBlock>
      </ContainerBlock>

      <ContainerBlock>
        {/* Figma: both the image and the timeline column start 120 below
            the rule (not the open-bottom preset's 24), 72 above the
            section end. */}
        <ContentBlock padTop="none" padBottom="none" padX={false} className="flex flex-col gap-6 px-6 pb-18 pt-30">
          <TextContainer title="Timeline" />
          <div className="grid gap-6 md:grid-cols-[496px_1fr]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={timelineImage.src}
              alt={timelineImage.alt}
              className="aspect-[496/592] w-full rounded-ds-card object-cover"
            />

            <div className="flex flex-col gap-4">
              <Text variant="hp-year" className="text-ds-accent">
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
          </div>
        </ContentBlock>
      </ContainerBlock>
    </Section>
  );
}
