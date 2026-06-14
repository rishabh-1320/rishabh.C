/**
 * Case-study route layout. Wraps all /casestudy/* pages in `.ds-root` so they
 * render on the canonical design system (background, ink, font, tokens). The
 * global SiteHeader/StatusBar (root layout) stay visible above this subtree.
 */
export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <div className="ds-root">{children}</div>;
}
