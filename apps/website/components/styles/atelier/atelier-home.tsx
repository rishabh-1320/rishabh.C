import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { AtelierChrome } from "./atelier-chrome";
import { AtelierCursor } from "./atelier-cursor";
import { AtelierHero } from "./sections/atelier-hero";
import { AtelierLogoStrip } from "./sections/atelier-logo-strip";
import { AtelierIdeology } from "./sections/atelier-ideology";
import { AtelierWorks } from "./sections/atelier-works";
import { AtelierAiWorkflow } from "./sections/atelier-ai-workflow";
import { AtelierExplorations } from "./sections/atelier-explorations";
import { AtelierAbout } from "./sections/atelier-about";
import { AtelierFooter } from "./sections/atelier-footer";

export function AtelierHome() {
  return (
    <LenisProvider options={{ lerp: 0.06, smoothWheel: true }}>
      <div
        className="theme-atelier"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh", cursor: "none" }}
      >
        <AtelierCursor />
        <AtelierChrome />
        <main>
          <AtelierHero hero={homeContent.hero} />
          <AtelierLogoStrip
            heading={homeContent.logoStrip.heading}
            logos={homeContent.logoStrip.logos}
          />
          <AtelierIdeology
            heading={homeContent.ideologyHeading}
            principles={homeContent.ideologyPrinciples}
          />
          <AtelierWorks heading={homeContent.worksHeading} works={homeContent.works} />
          <AtelierAiWorkflow aiWorkflow={homeContent.aiWorkflow} />
          <AtelierExplorations
            heading={homeContent.aiExplorationsHeading}
            intro={homeContent.aiExplorationsIntro}
            explorations={homeContent.aiExplorations}
          />
          <AtelierAbout about={homeContent.about} />
          <AtelierFooter
            footer={homeContent.footer}
            resumeUrl={homeContent.resumeUrl}
            footerNote={homeContent.footerNote}
          />
        </main>
      </div>
    </LenisProvider>
  );
}
