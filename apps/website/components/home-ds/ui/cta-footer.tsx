import { Text } from "@packages/ds-ui";
import { AccentText } from "../accent-text";
import { SectionRow } from "./section-row";
import { Block } from "./block";

type ContactLink = { href: string; label: string; icon: React.ReactNode; primary?: boolean };

const MailIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M2 5.5L10 11L18 5.5M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedinIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 7.5H4.01M4 9V17M10 17V12.5C10 11 11 10 12.5 10C14 10 15 11 15 12.5V17M10 9V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FileIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6 2H12L16 6V17C16 17.55 15.55 18 15 18H6C5.45 18 5 17.55 5 17V3C5 2.45 5.45 2 6 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * The closing CTA (dark, handwritten-accent headline) + the site footer bar —
 * always paired at the tail of the page, one component so the dark-surface
 * chrome (borders, contact buttons) can't drift between the two halves.
 */
export function CtaFooter({
  closingLine,
  email,
  linkedinUrl,
  resumeUrl,
  footerNote,
  location
}: {
  closingLine: string;
  email: string;
  linkedinUrl: string;
  resumeUrl: string;
  footerNote: string;
  location: string;
}) {
  const links: ContactLink[] = [
    { href: `mailto:${email}`, label: email, icon: MailIcon, primary: true },
    { href: linkedinUrl, label: "LinkedIn", icon: LinkedinIcon },
    { href: resumeUrl, label: "Résumé", icon: FileIcon }
  ];

  return (
    <footer className="bg-ds-surface-ink ds-inverted">
      <div className="border-b border-ds-hairline-dark py-[86px]">
        <SectionRow>
        <Block width="wide" border="none" pad="none">
          <div className="flex flex-col items-center gap-16 text-center">
            <div className="flex flex-col items-center gap-6">
              <Text variant="script" className="text-white">
                <AccentText text="Got something complex to design?" accent="complex" />
              </Text>
              <Text variant="hp-headline" as="p" className="!text-[24px] text-white">
                {closingLine}
              </Text>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={
                    link.primary
                      ? "flex items-center gap-3 rounded-ds-card bg-ds-accent px-8 py-4 font-ds-inter text-[16px] font-semibold text-white"
                      : "flex items-center gap-3 rounded-ds-card border border-ds-surface-veil bg-ds-surface-veil px-8 py-4 font-ds-inter text-[16px] font-semibold text-white"
                  }
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Block>
        </SectionRow>
      </div>

      <div className="py-12">
        <SectionRow>
        <Block width="wide" border="none" pad="none">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="font-ds-inter text-[20px] font-light">
              <span className="text-ds-on-ink-warm">Portfolio website</span>
              <span className="text-ds-accent">.</span>
            </p>
            <div className="flex items-center gap-2 font-ds-inter text-[16px] font-light text-ds-on-ink-faint">
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
