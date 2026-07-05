import type { HomeContent } from "@/lib/types";
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
      closingLine={footer.closingLine}
      email={footer.email}
      linkedinUrl={footer.linkedinUrl}
      resumeUrl={resumeUrl}
      footerNote={footerNote}
      location={footer.location}
    />
  );
}
