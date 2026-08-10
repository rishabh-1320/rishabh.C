import { homeContent } from "@/lib/site-content";
import { NavBar } from "@/components/home-ds/site-components/nav-bar";

const CASE_STUDY_NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" }
];

/**
 * Case-study route layout. Wraps all /casestudy/* pages in `.ds-root` so they
 * render on the canonical design system (background, ink, font, tokens), and
 * uses the homepage's floating-pill NavBar (pointed at home anchors) as the
 * page chrome.
 */
export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ds-root bg-ds-surface-paper">
      <NavBar
        resumeUrl={homeContent.resumeUrl}
        linkedinUrl={homeContent.footer.linkedinUrl}
        links={CASE_STUDY_NAV_LINKS}
      />
      {children}
    </div>
  );
}
