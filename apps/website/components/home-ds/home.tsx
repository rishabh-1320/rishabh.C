import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { DsNav } from "./sections/ds-nav";
import { DsHero } from "./sections/ds-hero";
import { DsExperience } from "./sections/ds-experience";
import { DsWork } from "./sections/ds-work";
import { DsIdeology } from "./sections/ds-ideology";
import { DsAbout } from "./sections/ds-about";
import { DsAiWorkflow } from "./sections/ds-ai-workflow";
import { DsExplorations } from "./sections/ds-explorations";
import { DsJourney } from "./sections/ds-journey";
import { DsFooter } from "./sections/ds-footer";

export function DsHome() {
  return (
    <LenisProvider>
      <div
        className="ds-root bg-ds-surface-page"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh" }}
      >
        <DsNav />
        <main>
          <DsHero hero={homeContent.hero} />
          <DsExperience about={homeContent.about} />
          <DsWork heading={homeContent.worksHeading} works={homeContent.works} />
          <DsIdeology
            heading={homeContent.ideologyHeading}
            principles={homeContent.ideologyPrinciples}
          />
          <DsAbout about={homeContent.about} />
          <DsAiWorkflow aiWorkflow={homeContent.aiWorkflow} />
          <DsExplorations
            heading={homeContent.aiExplorationsHeading}
            intro={homeContent.aiExplorationsIntro}
            explorations={homeContent.aiExplorations}
          />
          <DsJourney about={homeContent.about} />
          <DsFooter
            footer={homeContent.footer}
            resumeUrl={homeContent.resumeUrl}
            footerNote={homeContent.footerNote}
          />
        </main>
      </div>
    </LenisProvider>
  );
}
