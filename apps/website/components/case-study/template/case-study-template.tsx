import { CaseHero } from "./case-hero";
import { CaseMetrics } from "./case-metrics";
import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { SideText } from "@/components/home-ds/library/case-study-blocks/side-text";
import { TextBlock } from "@/components/home-ds/library/case-study-blocks/text-block";
import { VisualBlock } from "@/components/home-ds/library/case-study-blocks/visual-block";
import { VisualPair } from "@/components/home-ds/library/case-study-blocks/visual-pair";
import { EndOfArticleMarker } from "@/components/home-ds/library/case-study-blocks/end-of-article-marker";
import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import { MoreProjects } from "../more-projects";

/**
 * The assembled case-study template — Figma "Case Study Template", node
 * 573:8093, rendered block for block in its own order with its own placeholder
 * copy.
 *
 * This is the reference composition: it demonstrates every section variation the
 * template offers, so a new case study is assembled by picking blocks from here
 * rather than inventing layout. It is rendered by both the Storybook story and
 * the /casestudy/template route, so the two cannot drift.
 *
 * Site chrome (NavBar, CtaFooter) is deliberately not included — it's supplied
 * by app/casestudy/layout.tsx on the real routes.
 */

const BODY =
  "At Figma, we use our own tools to design Figma itself. This case study explores how our design team built a unified system across five product lines — from FigJam to Dev Mode — while maintaining the speed and flexibility that defines how we work. What started as a handful of shared components evolved into a comprehensive design language that now powers every pixel of the Figma ecosystem.";

const SHORT_BODY =
  "Reflecting on the journey, here are the most impactful lessons from building a unified design system across multiple products.";

const CAPTION = "Lorem ipsum the caption of the image will come here";

export function CaseStudyTemplate() {
  return (
    <>
      {/* 2 — Hero (573:8651) */}
      <CaseHero
        tags={["Title", "Title", "Title"]}
        title="The heading and case study title"
        accent="case study title"
        subtitle="The heading and case study title"
        showVisual
        caption={CAPTION}
      />

      {/* 3 — Metrics row, 4-up (573:8697) */}
      <CaseMetrics
        stats={[
          // Flat placeholder values: MetricCardDiv counts up on scroll, so a
          // reference page screenshotted without scrolling would otherwise show
          // "0" / "0k+" and read as broken.
          { value: "100", label: "Unique Products Shipped" },
          { value: "100", label: "Industry Domains" },
          { value: "100", label: "Users reached" },
          { value: "100", label: "Designing B2B Saas" }
        ]}
      />

      {/* 4 — Sub-introduction, content column only (573:8737) */}
      <ThreeColumnBlock>
        <TextContainerCase type="Section H2">
          text wil come here, a sub introduction or something needs to come here and things can be
          explained
        </TextContainerCase>
      </ThreeColumnBlock>

      {/* 5 — Left eyebrow+title, body in the content column (573:8837) */}
      <ThreeColumnBlock left={<SideText eyebrow="Key Learnings" title="What We Learned" />}>
        <TextContainerCase type="Prose">{BODY}</TextContainerCase>
      </ThreeColumnBlock>

      {/* 6 — Body with a full side-text in the right margin (573:8779) */}
      <ThreeColumnBlock
        right={
          <SideText eyebrow="Key Learnings" title="What We Learned" showVisual body={SHORT_BODY} />
        }
      >
        <TextContainerCase type="Prose">{BODY}</TextContainerCase>
      </ThreeColumnBlock>

      {/* 7 — A visual inside the reading column (573:8911) */}
      <ThreeColumnBlock>
        <VisualBlock caption={CAPTION} />
      </ThreeColumnBlock>

      {/* 8 — Titles in both margins (573:8870) */}
      <ThreeColumnBlock
        left={<SideText title="What We Learned" />}
        right={<SideText title="Who Am I Learned" body={BODY} />}
      >
        <TextContainerCase type="Prose">{BODY}</TextContainerCase>
      </ThreeColumnBlock>

      {/* 9 — Full-bleed visual (573:8938) */}
      <ThreeColumnBlock columns={false}>
        <VisualBlock caption={CAPTION} />
      </ThreeColumnBlock>

      {/* 10 — Full-bleed pull quote (573:9146) */}
      <ThreeColumnBlock columns={false}>
        <TextBlock
          quote={
            '"The best design systems aren\'t the most comprehensive ones — they\'re the ones people actually want to use."'
          }
          name="User Name"
          designation="Designation"
        />
      </ThreeColumnBlock>

      {/* 11 — Left title+visual+body, right eyebrow+body (573:9182) */}
      <ThreeColumnBlock
        left={<SideText title="What We Learned" showVisual body={SHORT_BODY} />}
        right={<SideText eyebrow="Key Learnings" body={BODY} />}
      >
        <TextContainerCase type="Prose">{BODY}</TextContainerCase>
      </ThreeColumnBlock>

      {/* 12 — Two visuals side by side (578:21762) */}
      <ThreeColumnBlock columns={false}>
        <VisualPair leftCaption={CAPTION} rightCaption={CAPTION} />
      </ThreeColumnBlock>

      {/* 13 — All three columns filled, visual in the middle (573:9222) */}
      <ThreeColumnBlock
        left={<SideText eyebrow="Key Learnings" body={SHORT_BODY} />}
        right={<SideText title="What We Learned" body={SHORT_BODY} />}
      >
        <VisualBlock caption={CAPTION} />
      </ThreeColumnBlock>

      {/* 14 — End-of-article marker (573:9314) */}
      <ThreeColumnBlock columns={false}>
        <EndOfArticleMarker />
      </ThreeColumnBlock>

      {/* 15 — Closing project grid (573:9059). `current` must name a real case
          study — MoreProjects renders "all but current", so an unmatched id
          would show all four rather than the other three. */}
      <MoreProjects current="chestnut" />
    </>
  );
}
