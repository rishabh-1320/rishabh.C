import type { HomeContent } from "@/lib/types";
import { homeContent } from "@/lib/site-content";
import { CtaFooter } from "../ui/cta-footer";

export function DsCtaFooter({
  footer,
  resumeUrl,
  footerNote
}: {
  footer: HomeContent["footer"];
  resumeUrl: string;
  footerNote: string;
}) {
  return (
    <CtaFooter
      // Figma's CTA repeats the hero tagline (two-tone), not the old closing line.
      closingLine={homeContent.hero.h1}
      emphasize={["B2B enterprise tools", "clarity"]}
      email={footer.email}
      linkedinUrl={footer.linkedinUrl}
      resumeUrl={resumeUrl}
      footerNote={footerNote}
      location={footer.location}
    />
  );
}
