import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { Reveal } from "./scroll/reveal";
import { DsNav } from "./sections/ds-nav";
import { DsHero } from "./sections/ds-hero";
import { DsMetrics } from "./sections/ds-metrics";
import { DsWork } from "./sections/ds-work";
import { DsSkill } from "./sections/ds-skill";
import { DsProjects } from "./sections/ds-projects";
import { DsAbout } from "./sections/ds-about";
import { DsCtaFooter } from "./sections/ds-cta-footer";

export function DsHome() {
  return (
    <LenisProvider>
      <div
        className="ds-root bg-ds-surface-paper"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh" }}
      >
        <DsNav />
        <main>
          <DsHero hero={homeContent.hero} />
          <Reveal>
            <DsMetrics logoStrip={homeContent.logoStrip} stats={homeContent.stats} />
          </Reveal>
          <Reveal>
            <DsWork heading={homeContent.worksHeading} works={homeContent.works} />
          </Reveal>
          <Reveal>
            <DsSkill
              heading={homeContent.ideologyHeading}
              intro={homeContent.ideologyIntro}
              principles={homeContent.ideologyPrinciples}
              aiWorkflow={homeContent.aiWorkflow}
            />
          </Reveal>
          <Reveal>
            <DsProjects
              heading={homeContent.aiExplorationsHeading}
              intro={homeContent.aiExplorationsIntro}
              explorations={homeContent.aiExplorations}
            />
          </Reveal>
          <Reveal>
            <DsAbout about={homeContent.about} />
          </Reveal>
        </main>
        <DsCtaFooter
          footer={homeContent.footer}
          resumeUrl={homeContent.resumeUrl}
          footerNote={homeContent.footerNote}
        />
      </div>
    </LenisProvider>
  );
}
