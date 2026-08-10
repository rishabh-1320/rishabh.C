import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import type { CaseStudyPullQuote } from "@/lib/case-study-types";

/** Renders a `CaseStudyPullQuote` — optional label (Caption) above the quote (Quote). */
export function CasePullQuote({ label, quote }: CaseStudyPullQuote) {
  return (
    <div className="flex flex-col items-start gap-2">
      {label && <TextContainerCase type="Caption">{label}</TextContainerCase>}
      <TextContainerCase type="Quote">{quote}</TextContainerCase>
    </div>
  );
}
