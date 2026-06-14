import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { SpatialChrome } from "./spatial-chrome";
import { SpatialHero } from "./sections/spatial-hero";
import { SpatialLogoStrip } from "./sections/spatial-logo-strip";
import { SpatialIdeology } from "./sections/spatial-ideology";
import { SpatialWorks } from "./sections/spatial-works";
import { SpatialAiWorkflow } from "./sections/spatial-ai-workflow";
import { SpatialExplorations } from "./sections/spatial-explorations";
import { SpatialAbout } from "./sections/spatial-about";
import { SpatialFooter } from "./sections/spatial-footer";

export function SpatialHome() {
  return (
    <LenisProvider>
      <div
        className="theme-spatial"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh" }}
      >
        <SpatialChrome />
        <main>
          <SpatialHero hero={homeContent.hero} />
          <SpatialLogoStrip
            heading={homeContent.logoStrip.heading}
            logos={homeContent.logoStrip.logos}
          />
          <SpatialIdeology
            heading={homeContent.ideologyHeading}
            principles={homeContent.ideologyPrinciples}
          />
          <SpatialWorks heading={homeContent.worksHeading} works={homeContent.works} />
          <SpatialAiWorkflow aiWorkflow={homeContent.aiWorkflow} />
          <SpatialExplorations
            heading={homeContent.aiExplorationsHeading}
            intro={homeContent.aiExplorationsIntro}
            explorations={homeContent.aiExplorations}
          />
          <SpatialAbout about={homeContent.about} />
          <SpatialFooter
            footer={homeContent.footer}
            resumeUrl={homeContent.resumeUrl}
            footerNote={homeContent.footerNote}
          />
        </main>
      </div>
    </LenisProvider>
  );
}
