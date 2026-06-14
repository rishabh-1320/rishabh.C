import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { Vs3Nav } from "./sections/vs3-nav";
import { Vs3Hero } from "./sections/vs3-hero";
import { Vs3Capability } from "./sections/vs3-capability";
import { Vs3Workflow } from "./sections/vs3-workflow";
import { Vs3Metrics } from "./sections/vs3-metrics";
import { Vs3Work } from "./sections/vs3-work";
import { Vs3Social } from "./sections/vs3-social";
import { Vs3Explorations } from "./sections/vs3-explorations";
import { Vs3Footer } from "./sections/vs3-footer";

export function Vs3Home() {
  return (
    <LenisProvider>
      <div
        className="vs3-root bg-vs3-surface-page"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh" }}
      >
        <Vs3Nav />
        <main>
          <Vs3Hero hero={homeContent.hero} linkedinUrl={homeContent.footer.linkedinUrl} />
          <Vs3Capability
            heading={homeContent.ideologyHeading}
            principles={homeContent.ideologyPrinciples}
          />
          <Vs3Workflow aiWorkflow={homeContent.aiWorkflow} />
          <Vs3Metrics metrics={homeContent.hero.metrics} />
          <Vs3Work heading={homeContent.worksHeading} works={homeContent.works} />
          <Vs3Social logoStrip={homeContent.logoStrip} about={homeContent.about} />
          <Vs3Explorations
            heading={homeContent.aiExplorationsHeading}
            intro={homeContent.aiExplorationsIntro}
            explorations={homeContent.aiExplorations}
          />
          <Vs3Footer
            footer={homeContent.footer}
            resumeUrl={homeContent.resumeUrl}
            footerNote={homeContent.footerNote}
          />
        </main>
      </div>
    </LenisProvider>
  );
}
