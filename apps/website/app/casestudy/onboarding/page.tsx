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
  OnboardingHomeMock,
  OldAdminPanelMock,
  InspirationBoardMock,
  ProgressSystemMock,
  DocUploadStepMock,
  IterationBoardsMock,
  CompletionMock,
} from "@/components/case-study/mockups/onboarding";
import { onboardingCaseStudy } from "@/lib/onboarding-case-study";
import { homeContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: onboardingCaseStudy.metadataTitle,
  description: onboardingCaseStudy.metadataDescription,
};

const chapterById = (id: string) => {
  const chapter = onboardingCaseStudy.chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Missing chapter: ${id}`);
  return chapter;
};

export default function OnboardingCaseStudyPage() {
  return (
    <>
      <ScrollProgressBar />

      <Section bg="paper" pad="none" id="hero">
        <CaseHero
          tags={[...onboardingCaseStudy.hero.tags]}
          title={onboardingCaseStudy.hero.title}
          accent={onboardingCaseStudy.hero.accent}
          subtitle={onboardingCaseStudy.hero.subtitle}
        >
          <MockupFrame caption="The redesigned onboarding home — you always know where you are and what's next." urlLabel="hrms.timelabs.in/onboarding">
            <OnboardingHomeMock />
          </MockupFrame>
        </CaseHero>

        {onboardingCaseStudy.stats && <CaseMetrics stats={onboardingCaseStudy.stats} />}
      </Section>

      <CaseChapter {...chapterById("problem")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The old flow — tables, dense forms, and no sense of progress." tone="legacy" urlLabel="hrms.timelabs.in/onboarding">
          <OldAdminPanelMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("what-i-fixed")} />
      <CaseChapter {...chapterById("discovery")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="References, not research — studying how mature products guide people through setup." chrome="none">
          <InspirationBoardMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("redesign")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The core fix — you always know where you are and what's next." chrome="none">
          <ProgressSystemMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Same capabilities as before — now one clear step at a time." urlLabel="hrms.timelabs.in/onboarding">
          <DocUploadStepMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("process")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Layout, then components, then states — working from the structure inward." chrome="none">
          <IterationBoardsMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("outcome")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Onboarding that candidates actually finish — on their own." chrome="none">
          <CompletionMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <ThreeColumnBlock columns={false}>
        <EndOfArticleMarker />
      </ThreeColumnBlock>

      <MoreProjects current="onboarding" />

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
