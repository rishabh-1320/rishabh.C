import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { DummyContent, DummyChapter } from "@/components/dummy-content";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { MoreProjects } from "@/components/case-study/more-projects";
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
        <DummyContent className="pt-16 pb-16">
          <p className="text-sm text-neutral-500">{onboardingCaseStudy.hero.tags.join(" · ")}</p>
          <h1 className="text-3xl font-semibold">{onboardingCaseStudy.hero.title}</h1>
          <p className="mt-3">{onboardingCaseStudy.hero.subtitle}</p>
          <div className="mt-6">
            <MockupFrame caption="The redesigned onboarding home — you always know where you are and what's next." urlLabel="hrms.timelabs.in/onboarding">
              <OnboardingHomeMock />
            </MockupFrame>
          </div>
        </DummyContent>

        {onboardingCaseStudy.stats && (
          <DummyContent className="py-16">
            {onboardingCaseStudy.stats.map((stat, i) => (
              <p key={i}>
                <strong>{stat.value}</strong> — {stat.label}
              </p>
            ))}
          </DummyContent>
        )}
      </Section>

      {DummyChapter(chapterById("problem"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="The old flow — tables, dense forms, and no sense of progress." tone="legacy" urlLabel="hrms.timelabs.in/onboarding">
          <OldAdminPanelMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("what-i-fixed"))}
      {DummyChapter(chapterById("discovery"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="References, not research — studying how mature products guide people through setup." chrome="none">
          <InspirationBoardMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("redesign"))}

      <DummyContent className="pb-9">
        <MockupFrame caption="The core fix — you always know where you are and what's next." chrome="none">
          <ProgressSystemMock />
        </MockupFrame>
      </DummyContent>

      <DummyContent className="pb-16">
        <MockupFrame caption="Same capabilities as before — now one clear step at a time." urlLabel="hrms.timelabs.in/onboarding">
          <DocUploadStepMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("process"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="Layout, then components, then states — working from the structure inward." chrome="none">
          <IterationBoardsMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("outcome"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="Onboarding that candidates actually finish — on their own." chrome="none">
          <CompletionMock />
        </MockupFrame>
      </DummyContent>

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
