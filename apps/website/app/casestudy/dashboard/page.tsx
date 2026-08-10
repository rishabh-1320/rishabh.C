import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { DummyContent, DummyChapter } from "@/components/dummy-content";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { MoreProjects } from "@/components/case-study/more-projects";
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
        <DummyContent className="pt-16 pb-16">
          <p className="text-sm text-neutral-500">{dashboardCaseStudy.hero.tags.join(" · ")}</p>
          <h1 className="text-3xl font-semibold">{dashboardCaseStudy.hero.title}</h1>
          <p className="mt-3">{dashboardCaseStudy.hero.subtitle}</p>
        </DummyContent>

        {dashboardCaseStudy.stats && (
          <DummyContent className="py-16">
            {dashboardCaseStudy.stats.map((stat, i) => (
              <p key={i}>
                <strong>{stat.value}</strong> — {stat.label}
              </p>
            ))}
          </DummyContent>
        )}
      </Section>

      {DummyChapter(chapterById("problem"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="The old admin dashboard — a wall of numbers, no clear path to a decision." tone="legacy" urlLabel="hrms.timelabs.in/admin">
          <ExistingDashboardMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("stakeholders"))}
      {DummyChapter(chapterById("kpis"))}
      {DummyChapter(chapterById("charts"))}

      <DummyContent className="pb-16">
        <MockupFrame caption="The decisions that shaped the dashboard — each chart chosen for what it reveals, not what's familiar." urlLabel="hrms.timelabs.in/dashboard">
          <FinalDashboardMock />
        </MockupFrame>
      </DummyContent>

      {DummyChapter(chapterById("engineering"))}
      {DummyChapter(chapterById("qa-bug"))}
      {DummyChapter(chapterById("outcome"))}
      {DummyChapter(chapterById("reflection"))}

      {dashboardCaseStudy.closingQuote && (
        <DummyContent className="pb-16">
          <p className="italic">
            {dashboardCaseStudy.closingQuote.label ? `${dashboardCaseStudy.closingQuote.label}: ` : ""}
            {dashboardCaseStudy.closingQuote.quote}
          </p>
        </DummyContent>
      )}

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
