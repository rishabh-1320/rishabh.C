import type { Metadata } from "next";
import { Section, Text } from "@packages/ds-ui";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { CaseStudyFooter } from "@/components/case-study/case-study-footer";
import { CaseStudyCard } from "@/components/home-ds/ui/case-study-card";
import { workImages, fallbackImage } from "@/components/home-ds/images";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseMetrics } from "@/components/case-study/case-metrics";
import { CaseChapter } from "@/components/case-study/case-chapter";
import { NumberedRow } from "@/components/case-study/numbered-row";
import { PullQuote } from "@/components/case-study/pull-quote";
import { MockupFrame } from "@/components/case-study/mockup-frame";
import { FullWidth } from "@/components/case-study/full-width";
import {
  ChestnutHeroMock,
  BonsaiStorybookMock,
  PaymentTypeaheadMock,
  CreateVariableSteps12Mock,
  ConfigureMetricsMock,
  LivePreviewMock,
} from "@/components/case-study/mockups/chestnut";
import { SectionHeader } from "@/components/home-ds/ui/section-header";
import { chestnutCaseStudy } from "@/lib/chestnut-case-study";

export const metadata: Metadata = {
  title: chestnutCaseStudy.metadataTitle,
  description: chestnutCaseStudy.metadataDescription,
};

const chapterById = (id: string) => {
  const chapter = chestnutCaseStudy.chapters.find((c) => c.id === id);
  if (!chapter) throw new Error(`Missing chapter: ${id}`);
  return chapter;
};

// "More Projects" — Chestnut-only, so the shared CaseStudyNav (still used by
// the other 3 case studies, which keep the old ledger-line template) never
// changes. Same cards, just laid out full-width with no rails.
const MORE_PROJECTS = [
  {
    id: "dashboard",
    workId: "work-hrms",
    title: "HR Analytics Dashboard",
    subtitle: "Attendance & workforce insights for enterprise",
    tags: ["Data", "Enterprise"],
    href: "/casestudy/dashboard"
  },
  {
    id: "onboarding",
    workId: "work-onboarding",
    title: "HRMS Candidate Onboarding",
    subtitle: "From admin-panel nobody used to self-service flow",
    tags: ["UX", "Enterprise"],
    href: "/casestudy/onboarding"
  },
  {
    id: "design-system",
    workId: "work-design-system",
    title: "Arksaber Design System",
    subtitle: "Whitelabel design system, Figma to code",
    tags: ["Design System", "Code"],
    href: "/casestudy/design-system"
  }
] as const;

export default function ChestnutCaseStudyPage() {
  return (
    <>
      <ScrollProgressBar />

      <Section bg="paper" pad="none" id="hero">
        <FullWidth className="pt-16 pb-6">
          <CaseHero
            tags={chestnutCaseStudy.hero.tags}
            title={chestnutCaseStudy.hero.title}
            accent={chestnutCaseStudy.hero.accent}
            subtitle={chestnutCaseStudy.hero.subtitle}
            mockup={
              <MockupFrame caption="The redesigned product and the design system that standardizes it." urlLabel="app.chestnut.com">
                <ChestnutHeroMock />
              </MockupFrame>
            }
          />
        </FullWidth>

        <FullWidth className="py-16">
          <CaseMetrics stats={chestnutCaseStudy.stats} />
        </FullWidth>
      </Section>

      {/* ─── PART 1 ─── */}

      <CaseChapter {...chapterById("what-chestnut-is")} />
      <CaseChapter {...chapterById("problem")} />
      <CaseChapter {...chapterById("audit")} />
      <CaseChapter {...chapterById("unified-system")} />
      <CaseChapter {...chapterById("shipping-in-code")} />

      <FullWidth className="!px-0 pb-16">
        <MockupFrame caption="Bonsai — Chestnut's design system, running in Storybook." chrome="none">
          <BonsaiStorybookMock />
        </MockupFrame>
      </FullWidth>

      {/* ─── PART 2 DIVIDER ─── */}
      <FullWidth className="py-16">
        <SectionHeader
          eyebrow="Part 02"
          title="Creating a complex variable — without leaving your work"
          accent="without leaving your work"
        />
      </FullWidth>

      <FullWidth className="!px-0 py-16">
        <MockupFrame caption="The whole feature starts here — a 'New variable' option living inside the search the admin is already using." urlLabel="app.chestnut.com">
          <PaymentTypeaheadMock />
        </MockupFrame>
      </FullWidth>

      <CaseChapter {...chapterById("setup")} />
      <CaseChapter {...chapterById("dead-end")} />
      <CaseChapter {...chapterById("flow")} />

      <FullWidth className="!px-0 pb-9">
        <MockupFrame caption="Behind the door: a guided flow, not a blank form." chrome="none">
          <CreateVariableSteps12Mock />
        </MockupFrame>
      </FullWidth>

      {/* Body text (not an image), so it follows the same 3-col reading grid
          as every CaseChapter instead of running full-bleed. */}
      <FullWidth className="pb-9">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr]">
          <div className="flex max-w-[680px] flex-col gap-9 md:col-start-2">
            <Text variant="hp-card-title-sm">A guided flow through a genuinely hard task</Text>
            <NumberedRow n={1} title="Variable type" description="Custom, Expression, or Analytic." />
            <NumberedRow
              n={2}
              title="Analytic type"
              description={'Summation, Growth, or Persistency — each with a one-line, plain-English example ("13th-month policy retention rate"). Translating dense actuarial concepts into language a person can actually choose between.'}
            />
            <NumberedRow
              n={3}
              title="Configure metrics"
              description="For a persistency variable: name it, choose how persistency is measured, and the type of date it keys off. Every option carries a description, so the admin isn't guessing at meaning."
            />
            <NumberedRow
              n={4}
              title="Period & filters"
              description="Set the baseline period, the persistency window, and optional filters — line of business, product, policy status, producer level."
            />
          </div>
        </div>
      </FullWidth>

      <FullWidth className="!px-0 pb-16">
        <MockupFrame caption="Every choice explained in plain language — actuarial concepts made selectable." chrome="none">
          <ConfigureMetricsMock />
        </MockupFrame>
      </FullWidth>

      <CaseChapter {...chapterById("preview")} />

      <FullWidth className="!px-0 pb-16">
        <MockupFrame caption="A live preview of real numbers — so a high-stakes decision is confirmed, not guessed." chrome="none">
          <LivePreviewMock />
        </MockupFrame>
      </FullWidth>

      <CaseChapter {...chapterById("part2-outcome")} />

      <FullWidth className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr]">
          <div className="max-w-[680px] md:col-start-2">
            <PullQuote label="Takeaway" quote="Make the easy thing easy, and the careful thing safe." />
          </div>
        </div>
      </FullWidth>

      {/* ─── MORE PROJECTS ─── */}
      <FullWidth className="py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Text variant="hp-eyebrow-loose">More</Text>
            <Text variant="hp-heading" as="p">
              Projects
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MORE_PROJECTS.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              variant="standard"
              image={workImages[cs.workId] ?? fallbackImage}
              alt={cs.title}
              tags={[...cs.tags]}
              title={cs.title}
              description={cs.subtitle}
              href={cs.href}
            />
          ))}
        </div>
      </FullWidth>

      <CaseStudyFooter />
    </>
  );
}
