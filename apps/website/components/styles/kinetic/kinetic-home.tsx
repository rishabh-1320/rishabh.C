import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { KineticHero } from "./sections/kinetic-hero";
import { KineticLogoStrip } from "./sections/kinetic-logo-strip";
import { KineticIdeology } from "./sections/kinetic-ideology";
import { KineticWorks } from "./sections/kinetic-works";
import { KineticAiWorkflow } from "./sections/kinetic-ai-workflow";
import { KineticExplorations } from "./sections/kinetic-explorations";
import { KineticAbout } from "./sections/kinetic-about";
import { KineticFooter } from "./sections/kinetic-footer";
import { KineticChrome } from "./kinetic-chrome";

export function KineticHome() {
  return (
    <LenisProvider>
      <div
        className="theme-kinetic"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh" }}
      >
        <KineticChrome />
        <main>
          <KineticHero hero={homeContent.hero} />
          <KineticLogoStrip
            heading={homeContent.logoStrip.heading}
            logos={homeContent.logoStrip.logos}
          />
          <KineticIdeology
            heading={homeContent.ideologyHeading}
            principles={homeContent.ideologyPrinciples}
          />
          <KineticWorks heading={homeContent.worksHeading} works={homeContent.works} />
          <KineticAiWorkflow aiWorkflow={homeContent.aiWorkflow} />
          <KineticExplorations
            heading={homeContent.aiExplorationsHeading}
            intro={homeContent.aiExplorationsIntro}
            explorations={homeContent.aiExplorations}
          />
          <KineticAbout about={homeContent.about} />
          <KineticFooter
            footer={homeContent.footer}
            resumeUrl={homeContent.resumeUrl}
            footerNote={homeContent.footerNote}
          />
        </main>
      </div>
    </LenisProvider>
  );
}
