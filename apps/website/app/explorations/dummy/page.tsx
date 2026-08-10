import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { DummyContent } from "@/components/dummy-content";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { homeContent } from "@/lib/site-content";

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Placeholder skeleton for the "AI Explorations" template — NOT a real
 * project page. All copy below is dummy/lorem-style filler, not tied to
 * any of the actual AI Exploration cards (which stay `active: false` on
 * the homepage until real content exists). Deliberately much lighter than
 * the case-study template: one hero, two short text blocks, one mockup
 * slot, no chapters/checklists/steps/side-cards.
 */
export default function DummyExplorationPage() {
  return (
    <>
      <Section bg="paper" pad="none" id="hero">
        <DummyContent className="pt-16 pb-16">
          <p className="text-sm text-neutral-500">Dummy Tag · Prototype · 2026</p>
          <h1 className="text-3xl font-semibold">Placeholder Exploration Title</h1>
          <p className="mt-3">
            One or two sentences describing what this exploration is and why it exists — placeholder copy, swap
            for the real project's own description.
          </p>
        </DummyContent>
      </Section>

      <DummyContent className="pb-16">
        <p className="font-medium">What it does</p>
        <p className="content-prose">
          Placeholder paragraph describing the core idea of the exploration — what problem it pokes at, and what
          the result actually does when someone uses it. Swap this out for real, specific copy.
        </p>
      </DummyContent>

      <DummyContent className="pb-16">
        <MockupFrame caption="Placeholder mockup — swap for a real screenshot or built component." chrome="none">
          <div className="flex h-64 items-center justify-center bg-ds-surface-mist">
            <p className="text-sm text-neutral-500">[ Mockup placeholder ]</p>
          </div>
        </MockupFrame>
      </DummyContent>

      <DummyContent className="pb-16">
        <p className="font-medium">How it was built</p>
        <p className="content-prose">
          Placeholder paragraph on the build itself — tools used, one real decision worth calling out, how it
          shipped. Same rule as every other page on this site: real facts only, no invented details.
        </p>
      </DummyContent>

      <CtaFooter
        closingLine={homeContent.footer.closingLine}
        email={homeContent.footer.email}
        linkedinUrl={homeContent.footer.linkedinUrl}
        resumeUrl={homeContent.resumeUrl}
        footerNote={homeContent.footerNote}
        location={homeContent.footer.location}
      />
    </>
  );
}
