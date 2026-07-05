import { homeContent } from "@/lib/site-content";
import { NavBar } from "@/components/home-ds/ui/nav-bar";

const CASE_STUDY_NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" }
];

/**
 * Case-study route layout. Wraps all /casestudy/* pages in `.ds-root` so they
 * render on the canonical design system (background, ink, font, tokens), and
 * swaps in the homepage's floating-pill NavBar (pointed at home anchors) in
 * place of the global SiteHeader/StatusBar — matching `home.tsx`'s own
 * `data-hide-site-header`/`data-hide-status-bar` opt-out.
 */
export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ds-root bg-ds-surface-paper" data-hide-site-header data-hide-status-bar>
      <NavBar resumeUrl={homeContent.resumeUrl} links={CASE_STUDY_NAV_LINKS} />
      {children}
    </div>
  );
}
