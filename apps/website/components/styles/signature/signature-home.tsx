import { homeContent } from "@/lib/site-content";
import { LenisProvider } from "@/lib/lenis-provider";
import { SignatureNav } from "./sections/signature-nav";
import { SignatureHero } from "./sections/signature-hero";
import { SignatureExperience } from "./sections/signature-experience";
import { SignatureWorks } from "./sections/signature-works";
import { SignatureIdeology } from "./sections/signature-ideology";
import { SignatureAiWorkflow } from "./sections/signature-ai-workflow";
import { SignatureExplorations } from "./sections/signature-explorations";
import { SignatureAbout } from "./sections/signature-about";
import { SignatureFooter } from "./sections/signature-footer";

export function SignatureHome() {
  return (
    <LenisProvider>
      <div
        className="theme-signature"
        data-hide-site-header
        data-hide-status-bar
        style={{ minHeight: "100vh" }}
      >
        <SignatureNav />
        <main>
          <SignatureHero hero={homeContent.hero} resumeUrl={homeContent.footer.linkedinUrl} />
          <SignatureExperience about={homeContent.about} />
          <SignatureWorks heading={homeContent.worksHeading} works={homeContent.works} />
          <SignatureIdeology
            heading={homeContent.ideologyHeading}
            principles={homeContent.ideologyPrinciples}
          />
          <SignatureAiWorkflow aiWorkflow={homeContent.aiWorkflow} />
          <SignatureExplorations
            heading={homeContent.aiExplorationsHeading}
            intro={homeContent.aiExplorationsIntro}
            explorations={homeContent.aiExplorations}
          />
          <SignatureAbout about={homeContent.about} />
          <SignatureFooter
            footer={homeContent.footer}
            resumeUrl={homeContent.resumeUrl}
            footerNote={homeContent.footerNote}
          />
        </main>
      </div>
    </LenisProvider>
  );
}
