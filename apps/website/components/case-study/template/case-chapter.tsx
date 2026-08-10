import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import { NumberedRow } from "@/components/case-study/numbered-row";
import { CasePullQuote } from "./case-pull-quote";
import { CaseChecklist } from "./case-checklist";
import { CaseSideCard } from "./case-side-card";
import type { CaseStudyChapter } from "@/lib/case-study-types";

/**
 * Renders one `CaseStudyChapter` — eyebrow (Caption) + title (H1), optional
 * pull-quote, paragraphs (Body), optional checklist or steps, optional
 * side cards in the right reading column. Always 3-column (matches the real
 * Figma instance, 480:4417: `LeftColumn`/`RightColumn` are present even when
 * empty) — text content never drops to the single full-width slot, only
 * `sideCards` presence changes whether `RightColumn` has anything in it.
 */
export function CaseChapter({ heading, pullQuote, paragraphs, checklist, steps, sideCards }: CaseStudyChapter) {
  const hasSideCards = Boolean(sideCards && sideCards.length > 0);

  const content = (
    <div className="flex flex-col items-start gap-6">
      <TextContainerCase type="Caption">{heading.eyebrow}</TextContainerCase>
      <TextContainerCase type="H1">{heading.title}</TextContainerCase>
      {pullQuote && <CasePullQuote label={pullQuote.label} quote={pullQuote.quote} />}
      {paragraphs.map((p, i) => (
        <TextContainerCase key={i} type="Body">
          {p}
        </TextContainerCase>
      ))}
      {checklist && <CaseChecklist title={checklist.title} items={checklist.items} />}
      {steps && (
        <div className="flex w-full flex-col gap-6">
          {steps.map((step, i) => (
            <NumberedRow key={i} n={i + 1} title={step.title} description={step.description} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <ThreeColumnBlock
      columns
      right={
        hasSideCards ? (
          <div className="flex flex-col gap-6">
            {sideCards!.map((card, i) => (
              <CaseSideCard key={i} label={card.label} text={card.text} />
            ))}
          </div>
        ) : undefined
      }
    >
      {content}
    </ThreeColumnBlock>
  );
}
