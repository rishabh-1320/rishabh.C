import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/case-study/template/case-study-template";

/**
 * A rendered reference of the case-study template (Figma node 573:8093) — every
 * section variation, in order, with placeholder copy. It exists so the template
 * can be reviewed in a browser against the Figma frame.
 *
 * Not real content: excluded from the sitemap and disallowed in robots.ts.
 */
export const metadata: Metadata = {
  title: "Case study template — reference",
  robots: { index: false, follow: false }
};

export default function CaseStudyTemplatePage() {
  return <CaseStudyTemplate />;
}
