import { homeContent } from "@/lib/site-content";
import { CtaFooter } from "../home-ds/ui/cta-footer";

/**
 * Reuses the homepage's own CtaFooter verbatim, so the tail of every case
 * study is pixel-identical to the homepage's — one definition, no drift.
 */
export function CaseStudyFooter() {
  const { footer, footerNote, resumeUrl } = homeContent;

  return (
    <CtaFooter
      closingLine={footer.closingLine}
      email={footer.email}
      linkedinUrl={footer.linkedinUrl}
      resumeUrl={resumeUrl}
      footerNote={footerNote}
      location={footer.location}
    />
  );
}
