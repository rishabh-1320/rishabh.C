import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { MoreProjects } from "@/components/case-study/more-projects";
import { CaseHero } from "@/components/case-study/template/case-hero";
import { CaseMetrics } from "@/components/case-study/template/case-metrics";
import { CaseChapter } from "@/components/case-study/template/case-chapter";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { EndOfArticleMarker } from "@/components/home-ds/library/case-study-blocks/end-of-article-marker";
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
        <CaseHero
          tags={[...arksaberCaseStudy.hero.tags]}
          title={arksaberCaseStudy.hero.title}
          accent={arksaberCaseStudy.hero.accent}
          subtitle={arksaberCaseStudy.hero.subtitle}
        >
          <MockupFrame caption="Same component, designed in Figma and rendered from code — under two brands." chrome="none">
            <ParityProofMock />
          </MockupFrame>
        </CaseHero>

        {arksaberCaseStudy.stats && <CaseMetrics stats={arksaberCaseStudy.stats} />}
      </Section>

      <CaseChapter {...chapterById("why")} />
      <CaseChapter {...chapterById("tokens")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Every value has a name, and the name says exactly where it's used." chrome="none">
          <TokenTaxonomyMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The tokens that get re-skinned per brand." chrome="none">
          <TokenTableMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("whitelabel")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="One system, two brands — only the token values change." chrome="none">
          <BrandCompareMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("components")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Every state, accounted for — designed once, coded once." chrome="none">
          <InputAnatomyMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("figma-to-code")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="How the design became the code." chrome="none">
          <FigmaToCodePipelineMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("ai-workflow")} />
      <CaseChapter {...chapterById("outcome")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The system, running." chrome="none">
          <ArksaberStorybookMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <ThreeColumnBlock columns={false}>
        <EndOfArticleMarker />
      </ThreeColumnBlock>

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
