import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { MoreProjects } from "@/components/case-study/more-projects";
import { CaseHero } from "@/components/case-study/template/case-hero";
import { CaseMetrics } from "@/components/case-study/template/case-metrics";
import { CaseChapter } from "@/components/case-study/template/case-chapter";
import { CasePullQuote } from "@/components/case-study/template/case-pull-quote";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { EndOfArticleMarker } from "@/components/home-ds/library/case-study-blocks/end-of-article-marker";
import { ExistingDashboardMock, FinalDashboardMock } from "@/components/case-study/mockups/dashboard";
import { dashboardCaseStudy } from "@/lib/hrms-dashboard-case-study";
import { homeContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: dashboardCaseStudy.metadataTitle,
  description: dashboardCaseStudy.metadataDescription,
};

const chapterById = (id: string) => {
  const chapter = dashboardCaseStudy.chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Missing chapter: ${id}`);
  return chapter;
};

export default function HrmsDashboardPage() {
  return (
    <>
      <ScrollProgressBar />

      <Section bg="paper" pad="none" id="hero">
        {/*
          The only case study with no dedicated hero mockup — `showVisual` renders
          the Visual Block's empty "Image / Video" well as a standing reminder that
          one is still needed. Its two mocks both land mid-article on purpose.
        */}
        <CaseHero
          tags={[...dashboardCaseStudy.hero.tags]}
          title={dashboardCaseStudy.hero.title}
          accent={dashboardCaseStudy.hero.accent}
          subtitle={dashboardCaseStudy.hero.subtitle}
          showVisual
        />

        {dashboardCaseStudy.stats && <CaseMetrics stats={dashboardCaseStudy.stats} />}
      </Section>

      <CaseChapter {...chapterById("problem")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The old admin dashboard — a wall of numbers, no clear path to a decision." tone="legacy" urlLabel="hrms.timelabs.in/admin">
          <ExistingDashboardMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("stakeholders")} />
      <CaseChapter {...chapterById("kpis")} />
      <CaseChapter {...chapterById("charts")} />

      <ThreeColumnBlock columns={false}>
        <MockupFrame caption="The decisions that shaped the dashboard — each chart chosen for what it reveals, not what's familiar." urlLabel="hrms.timelabs.in/dashboard">
          <FinalDashboardMock />
        </MockupFrame>
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("engineering")} />
      <CaseChapter {...chapterById("qa-bug")} />
      <CaseChapter {...chapterById("outcome")} />
      <CaseChapter {...chapterById("reflection")} />

      {dashboardCaseStudy.closingQuote && (
        <ThreeColumnBlock columns>
          <CasePullQuote
            label={dashboardCaseStudy.closingQuote.label}
            quote={dashboardCaseStudy.closingQuote.quote}
          />
        </ThreeColumnBlock>
      )}

      <ThreeColumnBlock columns={false}>
        <EndOfArticleMarker />
      </ThreeColumnBlock>

      <MoreProjects current="dashboard" />

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
