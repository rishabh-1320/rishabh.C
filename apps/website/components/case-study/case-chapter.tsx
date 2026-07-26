import type { CaseStudyChapter } from "@/lib/case-study-types";
import { CaseHeading } from "./case-heading";
import { Checklist } from "./checklist";
import { NumberedRow } from "./numbered-row";
import { PullQuote } from "./pull-quote";
import { ExplainerCard } from "./explainer-card";
import { FullWidth } from "./full-width";

/**
 * One case-study chapter, laid out as a 3-column reading grid spanning the
 * true full viewport width (no rails, no 1200 cap — see FullWidth):
 *   - Left track: always empty — a deliberate margin, not reading width.
 *   - Middle track: the chapter's own content (heading, pull-quote,
 *     paragraphs, checklist/steps) — the ONLY column that holds body copy.
 *   - Right track: optional small ExplainerCards paired with this chapter.
 *     Not sticky/pinned — a normal grid cell, so it scrolls in the document
 *     flow together with its chapter instead of staying fixed in view.
 * Collapses to a single stacked column on mobile (content, then cards).
 */
export function CaseChapter({ id, heading, pullQuote, paragraphs, checklist, steps, sideCards }: CaseStudyChapter) {
  return (
    <div id={id} className="scroll-mt-28">
      <FullWidth className="py-16">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_3fr_1fr]">
          {/* max-w caps reading-line-length for comfort even when the 3fr
              track itself is much wider on large screens — the track still
              gives the row breathing room, text just doesn't stretch to fill it. */}
          <div className="flex max-w-[680px] flex-col gap-8 md:col-start-2">
            {pullQuote && <PullQuote label={pullQuote.label} quote={pullQuote.quote} />}

            <CaseHeading eyebrow={heading.eyebrow} title={heading.title} />

            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="content-prose">
                  {p}
                </p>
              ))}
            </div>

            {checklist && <Checklist title={checklist.title} items={checklist.items} />}

            {steps && (
              <div className="flex flex-col gap-9">
                {steps.map((step, i) => (
                  <NumberedRow key={step.title} n={i + 1} title={step.title} description={step.description} />
                ))}
              </div>
            )}
          </div>

          {sideCards && sideCards.length > 0 && (
            <div className="flex flex-col gap-4 md:col-start-3">
              {sideCards.map((card, i) => (
                <ExplainerCard key={i} label={card.label} text={card.text} />
              ))}
            </div>
          )}
        </div>
      </FullWidth>
    </div>
  );
}
