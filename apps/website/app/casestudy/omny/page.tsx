import type { Metadata } from "next";
import { Section } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CtaFooter } from "@/components/home-ds/site-components/cta-footer";
import { MoreProjects } from "@/components/case-study/more-projects";
import { CaseHero } from "@/components/case-study/template/case-hero";
import { CaseMetrics } from "@/components/case-study/template/case-metrics";
import { CaseChapter } from "@/components/case-study/template/case-chapter";
import { CasePullQuote } from "@/components/case-study/template/case-pull-quote";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { VisualBlock } from "@/components/home-ds/library/case-study-blocks/visual-block";
import { EndOfArticleMarker } from "@/components/home-ds/library/case-study-blocks/end-of-article-marker";
import { omnyCaseStudy } from "@/lib/omny-case-study";
import { homeContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: omnyCaseStudy.metadataTitle,
  description: omnyCaseStudy.metadataDescription,
};

const chapterById = (id: string) => {
  const chapter = omnyCaseStudy.chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Missing chapter: ${id}`);
  return chapter;
};

/**
 * Omny multi-workspace navigation.
 *
 * Every visual is an empty `VisualBlock` well: the work is specified but not
 * built, and no screens have been supplied yet. Captions come from the brief and
 * describe what each slot must eventually hold, so whoever fills them knows what
 * the image has to do. Replace each `<VisualBlock caption=… />` with a real
 * `MockupFrame` (or pass the media as children) as the screens arrive.
 */
export default function OmnyCaseStudyPage() {
  return (
    <>
      <ScrollProgressBar />

      <Section bg="paper" pad="none" id="hero">
        <CaseHero
          tags={[...omnyCaseStudy.hero.tags]}
          title={omnyCaseStudy.hero.title}
          accent={omnyCaseStudy.hero.accent}
          subtitle={omnyCaseStudy.hero.subtitle}
          showVisual
          caption="The Brand Portfolio landing screen — the new default for multi-workspace users."
        />

        {omnyCaseStudy.stats && <CaseMetrics stats={omnyCaseStudy.stats} />}
      </Section>

      <CaseChapter {...chapterById("contradiction")} />

      <ThreeColumnBlock columns={false}>
        <VisualBlock caption="Today: every multi-workspace login defaults into All Accounts, then the user re-selects scope by hand." />
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("concepts")} />

      <ThreeColumnBlock columns={false}>
        <VisualBlock caption="Three directions tested against the same failure mode — only one survives a pipeline that can fail." />
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("suppression")} />

      <ThreeColumnBlock columns={false}>
        <VisualBlock caption="Same problem, three attempts — styling gave way to structure." />
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("button")} />

      <ThreeColumnBlock columns={false}>
        <VisualBlock caption="Requested: a new button above the switcher. Shipped: the existing logo does the same job — nothing added." />
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("how-built")} />

      <ThreeColumnBlock columns={false}>
        <VisualBlock caption="Client-review pass (Figma AI, left) next to the production-ready version rebuilt for handoff (right)." />
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("where-it-stands")} />

      <ThreeColumnBlock columns={false}>
        <VisualBlock caption="The spec handed to engineering, 29 June 2026 — approved, not yet built." />
      </ThreeColumnBlock>

      <CaseChapter {...chapterById("revisit")} />

      {omnyCaseStudy.closingQuote && (
        <ThreeColumnBlock columns>
          <CasePullQuote
            label={omnyCaseStudy.closingQuote.label}
            quote={omnyCaseStudy.closingQuote.quote}
          />
        </ThreeColumnBlock>
      )}

      <ThreeColumnBlock columns={false}>
        <EndOfArticleMarker />
      </ThreeColumnBlock>

      <MoreProjects current="omny" />

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
