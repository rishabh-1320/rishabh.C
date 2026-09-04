import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { Reveal } from "./site-components/scroll/reveal";
import { DsNav } from "./sections/ds-nav";
import { DsHero } from "./sections/ds-hero";
import { DsMetrics } from "./sections/ds-metrics";
import { DsWork } from "./sections/ds-work";
import { DsSkill } from "./sections/ds-skill";
import { DsAbout } from "./sections/ds-about";
import { DsCtaFooter } from "./sections/ds-cta-footer";

export function DsHome() {
  return (
    <LenisProvider>
      <div
        // `!bg-ds-hp-page` (important) makes the whole homepage a uniform #FCFCFC,
        // beating the global `.ds-root { background: surface-page }` rule. Sections
        // below are transparent so this base shows through everywhere (nav band,
        // gaps, behind cards) with no seam.
        className="ds-root !bg-ds-hp-page"
        style={{ minHeight: "100vh" }}
      >
        <DsNav />
        <main>
          <DsHero hero={homeContent.hero} />
          <Reveal>
            <DsMetrics stats={homeContent.stats} />
          </Reveal>
          <Reveal>
            <DsWork heading={homeContent.worksHeading} intro={homeContent.worksIntro} works={homeContent.works} />
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
