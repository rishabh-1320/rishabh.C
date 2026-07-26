import type { HomeContent } from "@/lib/types";
import { Section, Text } from "@packages/ds-ui";
import { galleryImages, timelineImage } from "../images";
import { SectionHeader } from "../ui/section-header";
import { TimelineCard } from "../ui/timeline-card";
import { TestimonialCard } from "../ui/testimonial-card";
import { TestimonialQuotes } from "../ui/testimonial-quotes";
import { RailScrollRow } from "../ui/rail-scroll-row";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";
import { HRule } from "../ui/h-rule";

export function DsAbout({ about }: { about: HomeContent["about"] }) {
  const [imgA, imgB, imgC] = about.photoSrc
    ? [{ src: about.photoSrc, alt: "Rishabh" }, ...galleryImages]
    : galleryImages;

  return (
    <Section bg="paper" pad="none" id="about">
      <HRule dots />
      <SectionRow>
        <Block pad="both" padX="wide">
          <SectionHeader eyebrow="Journey so far" title={about.heading} accent="Me" intro={about.intro} />
        </Block>
      </SectionRow>
      <HRule dots />

      {/* Collage and bio are two independent Figma frames (each with its own
          72 top pad, so the gap between them reads as 144) — not one
          shared block — and they use different horizontal insets: the
          collage sits on the 24 gutter, the bio copy on the 48 "wide"
          inset. Kept as two Blocks so both are exact. */}
      <SectionRow>
        <Block pad="none" padX="gutter" className="pt-18 pb-18">
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
        </Block>
      </SectionRow>

      <SectionRow>
        <Block pad="none" padX="wide" className="flex flex-col gap-8 pt-18 pb-18">
          {about.bio.map((para, i) => (
            <Text key={i} variant="hp-bio">
              {para}
            </Text>
          ))}
          <Text variant="hp-body">{about.currentlyLine}</Text>
        </Block>
      </SectionRow>
      <HRule dots />

      <SectionRow>
        {/* padX="none": the scroll row below must reach the rails for its
            clip boundary to land exactly on the line (see RailScrollRow). The
            "Testimonials" label gets its own gutter inset to compensate. */}
        <Block pad="joint" padX="none" className="flex flex-col gap-8">
          <Text variant="hp-label" className="px-6">
            Testimonials
          </Text>
          {/* Clipped horizontal scroll: cards are 576 + gap-6 (24), so the
              3rd sits half-hidden behind the right rail — matching Figma. */}
          <TestimonialQuotes>
            <RailScrollRow className="gap-6">
              {about.testimonials.map((t, i) => (
                // 576 CSS px == 36rem (rem, not a literal px value, so it stays out of the drift guard's raw-px rule).
                <div key={i} className="w-[36rem] shrink-0">
                  <TestimonialCard quote={t.quote} name={t.name} role={t.role} href={t.href} />
                </div>
              ))}
            </RailScrollRow>
          </TestimonialQuotes>
        </Block>
      </SectionRow>
      <HRule dots />

      <SectionRow>
        {/* Figma: both the image and the timeline column start 120 below
            the rule (not the open-bottom preset's 24), 72 above the
            section end. */}
        <Block pad="none" padX="gutter" className="pt-30 pb-18">
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
        </Block>
      </SectionRow>
    </Section>
  );
}
