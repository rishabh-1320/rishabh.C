import { Text } from "@packages/ds-ui";
import { SectionRow } from "./section-row";
import { Block } from "./block";

// Exported so the navbar's LinkedIn button reuses the exact same glyph (same
// icon rendered in two places on the page must never drift apart).
export const LinkedinIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 7.5H4.01M4 9V17M10 17V12.5C10 11 11 10 12.5 10C14 10 15 11 15 12.5V17M10 9V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Splits the tagline into quiet-connector / bright-emphasis spans (matching the
 * hero + the Figma CTA). Only used when `emphasize` phrases are passed; case
 * studies pass none and get the plain white line via the caller below.
 */
function EmphasizedTagline({ text, emphasize }: { text: string; emphasize: string[] }) {
  let rest = text;
  const parts: { text: string; strong: boolean }[] = [];
  for (const phrase of emphasize) {
    const idx = rest.toLowerCase().indexOf(phrase.toLowerCase());
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: rest.slice(0, idx), strong: false });
    parts.push({ text: rest.slice(idx, idx + phrase.length), strong: true });
    rest = rest.slice(idx + phrase.length);
  }
  if (rest) parts.push({ text: rest, strong: false });
  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className={p.strong ? "text-ds-on-ink-warm" : "text-ds-nav-muted"}>
          {p.text}
        </span>
      ))}
    </>
  );
}

/**
 * The closing CTA (dark, brand mark + tagline, matching the Hero's eyebrow/
 * name/headline treatment) + the site footer bar — always paired at the tail
 * of the page, one component so the dark-surface chrome can't drift between
 * the two halves. Figma's CTA ships with no contact buttons at all; a single
 * LinkedIn button is kept here by explicit request so the page still offers
 * one way to reach out.
 */
export function CtaFooter({
  closingLine,
  linkedinUrl,
  footerNote,
  location,
  emphasize
}: {
  closingLine: string;
  email: string;
  linkedinUrl: string;
  resumeUrl: string;
  footerNote: string;
  location: string;
  emphasize?: string[];
}) {
  return (
    <footer className="bg-ds-surface-ink ds-inverted">
      <div className="border-b border-ds-hairline-dark py-[86px]">
        <SectionRow>
        <Block width="wide" border="none" pad="none">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col items-center gap-3">
              <Text variant="hp-eyebrow-loose" className="uppercase text-ds-accent">
                Product Designer
              </Text>
              <Text variant="hp-brand" className="text-ds-on-ink-warm">
                Rishabh<span className="text-ds-accent">.</span>
              </Text>
              <Text variant="hp-headline" as="p" className="mt-3 max-w-[800px] text-white">
                {emphasize && emphasize.length > 0 ? (
                  <EmphasizedTagline text={closingLine} emphasize={emphasize} />
                ) : (
                  closingLine
                )}
              </Text>
            </div>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-ds-card border border-ds-surface-veil bg-ds-surface-veil px-8 py-4 font-ds-inter text-[16px] font-semibold text-white"
            >
              {LinkedinIcon}
              LinkedIn
            </a>
          </div>
        </Block>
        </SectionRow>
      </div>

      <div className="py-12">
        <SectionRow>
        <Block width="wide" border="none" pad="none">
          <div className="flex flex-col items-start justify-between gap-3 text-left md:flex-row md:items-center">
            <p className="font-ds-inter text-[20px] font-light">
              <span className="text-ds-on-ink-warm">Portfolio website</span>
              <span className="text-ds-accent">.</span>
            </p>
            <div className="flex flex-col gap-1 font-ds-inter text-[16px] font-light text-ds-on-ink-faint sm:flex-row sm:items-center sm:gap-2">
              <span>{footerNote}</span>
              <span>{location}</span>
            </div>
          </div>
        </Block>
        </SectionRow>
      </div>
    </footer>
  );
}
