import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { DummyContent, DummyChapter } from "@/components/dummy-content";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { MoreProjects } from "@/components/case-study/more-projects";
import {
  ParityProofMock,
  TokenTaxonomyMock,
  TokenTableMock,
  BrandCompareMock,
  InputAnatomyMock,
  FigmaToCodePipelineMock,
  ArksaberStorybookMock,
} from "@/components/case-study/mockups/design-system";
import { arksaberCaseStudy } from "@/lib/arksaber-case-study";
import { homeContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: arksaberCaseStudy.metadataTitle,
  description: arksaberCaseStudy.metadataDescription,
};

const chapterById = (id: string) => {
  const chapter = arksaberCaseStudy.chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Missing chapter: ${id}`);
  return chapter;
};

export default function DesignSystemCaseStudyPage() {
  return (
    <>
      <ScrollProgressBar />

      <Section bg="paper" pad="none" id="hero">
        <DummyContent className="pt-16 pb-16">
          <p className="text-sm text-neutral-500">{arksaberCaseStudy.hero.tags.join(" · ")}</p>
          <h1 className="text-3xl font-semibold">{arksaberCaseStudy.hero.title}</h1>
          <p className="mt-3">{arksaberCaseStudy.hero.subtitle}</p>
          <div className="mt-6">
            <MockupFrame caption="Same component, designed in Figma and rendered from code — under two brands." chrome="none">
              <ParityProofMock />
            </MockupFrame>
          </div>
        </DummyContent>

        {arksaberCaseStudy.stats && (
          <DummyContent className="py-16">
            {arksaberCaseStudy.stats.map((stat, i) => (
              <p key={i}>
                <strong>{stat.value}</strong> — {stat.label}
              </p>
            ))}
          </DummyContent>
        )}
      </Section>

      {DummyChapter(chapterById("why"))}
      {DummyChapter(chapterById("tokens"))}

      <DummyContent className="pb-9">
        <MockupFrame caption="Every value has a name, and the name says exactly where it's used." chrome="none">
          <TokenTaxonomyMock />
        </MockupFrame>
      </DummyContent>

      <DummyContent className="pb-16">
        <MockupFrame caption="The tokens that get re-skinned per brand." chrome="none">
          <TokenTableMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("whitelabel"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="One system, two brands — only the token values change." chrome="none">
          <BrandCompareMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("components"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="Every state, accounted for — designed once, coded once." chrome="none">
          <InputAnatomyMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("figma-to-code"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="How the design became the code." chrome="none">
          <FigmaToCodePipelineMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("ai-workflow"))}
      {DummyChapter(chapterById("outcome"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="The system, running." chrome="none">
          <ArksaberStorybookMock />
        </MockupFrame>
      </DummyContent>

      <MoreProjects current="design-system" />

      <CtaFooter
        closingLine={homeContent.footer.closingLine}
        email={homeContent.footer.email}
        linkedinUrl={homeContent.footer.linkedinUrl}
        resumeUrl={homeContent.resumeUrl}
        footerNote={homeContent.footerNote}
        location={homeContent.footer.location}
      />
    </>
  );
}
