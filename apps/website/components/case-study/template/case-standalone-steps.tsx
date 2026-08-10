import { ThreeColumnBlock } from "@/components/home-ds/library/case-study-blocks/three-column-block";
import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import { NumberedRow } from "@/components/case-study/numbered-row";
import type { CaseStudyStandaloneSteps } from "@/lib/case-study-types";

/** A `CaseStudyStandaloneSteps` block — a step-list positioned mid-narrative, outside any chapter. */
export function CaseStandaloneSteps({ title, steps }: CaseStudyStandaloneSteps) {
  return (
    <ThreeColumnBlock columns>
      <div className="flex flex-col items-start gap-6">
        <TextContainerCase type="H4">{title}</TextContainerCase>
        <div className="flex w-full flex-col gap-6">
          {steps.map((step, i) => (
            <NumberedRow key={i} n={i + 1} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </ThreeColumnBlock>
  );
}
