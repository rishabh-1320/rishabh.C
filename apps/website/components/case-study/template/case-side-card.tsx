import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import type { CaseStudySideCard } from "@/lib/case-study-types";

/** One `CaseStudySideCard`, meant to sit inside a `RightColumn`/`LeftColumn`. */
export function CaseSideCard({ label, text }: CaseStudySideCard) {
  return (
    <div className="flex flex-col items-start gap-2">
      {label && <TextContainerCase type="Caption">{label}</TextContainerCase>}
      <TextContainerCase type="Body Small">{text}</TextContainerCase>
    </div>
  );
}
