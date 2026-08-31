import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { MoreProjects } from "@/components/case-study/more-projects";
import {
  ChestnutHeroMock,
  BonsaiStorybookMock,
  PaymentTypeaheadMock,
  CreateVariableSteps12Mock,
  ConfigureMetricsMock,
  LivePreviewMock,
} from "@/components/case-study/mockups/chestnut";
import { CaseHero } from "@/components/case-study/template/case-hero";
import { CaseMetrics } from "@/components/case-study/template/case-metrics";
import { CaseChapter } from "@/components/case-study/template/case-chapter";
import { CasePullQuote } from "@/components/case-study/template/case-pull-quote";
import { CaseStandaloneSteps } from "@/components/case-study/template/case-standalone-steps";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { EndOfArticleMarker } from "@/components/home-ds/library/case-study-blocks/end-of-article-marker";
import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import { chestnutCaseStudy } from "@/lib/chestnut-case-study";
import { homeContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: chestnutCaseStudy.metadataTitle,
  description: chestnutCaseStudy.metadataDescription,
};

const chapterById = (id: string) => {
  const chapter = chestnutCaseStudy.chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Missing chapter: ${id}`);
  return chapter;
};

export default function ChestnutCaseStudyPage() {
  return (
    <>
      <ScrollProgressBar />

      <Section bg="paper" pad="none" id="hero">
        <CaseHero
          tags={chestnutCaseStudy.hero.tags}
          title={chestnutCaseStudy.hero.title}
          accent={chestnutCaseStudy.hero.accent}
          subtitle={chestnutCaseStudy.hero.subtitle}
        >
          <MockupFrame caption="The redesigned product and the design system that standardizes it." urlLabel="app.chestnut.com">
            <ChestnutHeroMock />
          </MockupFrame>
        </CaseHero>

        {chestnutCaseStudy.stats && <CaseMetrics stats={chestnutCaseStudy.stats} />}
      </Section>

      {/* ─── PART 1 ─── */}

      <CaseChapter {...chapterById("what-chestnut-is")} />
      <CaseChapter {...chapterById("problem")} />
      <CaseChapter {...chapterById("audit")} />
      <CaseChapter {...chapterById("unified-system")} />
      <CaseChapter {...chapterById("shipping-in-code")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Bonsai — Chestnut's design system, running in Storybook." chrome="none">
          <BonsaiStorybookMock />
        </MockupFrame>
      </ThreeColumnBlock>

      {/* ─── PART 2 DIVIDER ─── */}
      <ThreeColumnBlock columns>
        <div className="flex flex-col items-start gap-6">
          <TextContainerCase type="Caption">Part 02</TextContainerCase>
          <TextContainerCase type="H1">
            Creating a complex variable — <span className="text-ds-accent">without leaving your work</span>
          </TextContainerCase>
        </div>
      </ThreeColumnBlock>

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The whole feature starts here — a 'New variable' option living inside the search the admin is already using." urlLabel="app.chestnut.com">
          <PaymentTypeaheadMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("setup")} />
      <CaseChapter {...chapterById("dead-end")} />
      <CaseChapter {...chapterById("flow")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Behind the door: a guided flow, not a blank form." chrome="none">
          <CreateVariableSteps12Mock />
        </MockupFrame>
      </ThreeColumnBlock>

      {chestnutCaseStudy.standaloneSteps && <CaseStandaloneSteps {...chestnutCaseStudy.standaloneSteps} />}

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="Every choice explained in plain language — actuarial concepts made selectable." chrome="none">
          <ConfigureMetricsMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("preview")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="A live preview of real numbers — so a high-stakes decision is confirmed, not guessed." chrome="none">
          <LivePreviewMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("part2-outcome")} />

      {chestnutCaseStudy.closingQuote && (
        <ThreeColumnBlock columns>
          <CasePullQuote label={chestnutCaseStudy.closingQuote.label} quote={chestnutCaseStudy.closingQuote.quote} />
        </ThreeColumnBlock>
      )}

      <ThreeColumnBlock columns={false}>
        <EndOfArticleMarker />
      </ThreeColumnBlock>

      <MoreProjects current="chestnut" />

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
