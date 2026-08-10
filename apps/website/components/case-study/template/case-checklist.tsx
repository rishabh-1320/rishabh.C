import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import type { CaseStudyChecklist } from "@/lib/case-study-types";

/**
 * Renders a `CaseStudyChecklist` — H4 title + bulleted Body Small items.
 * No dedicated Figma component for the bullet list itself (it's plain
 * bulleted text in the reference), so this is a light composition of
 * TextContainerCase rather than a new library primitive.
 */
export function CaseChecklist({ title, items }: CaseStudyChecklist) {
  return (
    <div className="flex flex-col items-start gap-4">
      <TextContainerCase type="H4">{title}</TextContainerCase>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-[11px] size-1 shrink-0 rounded-full bg-ds-heading" />
            <TextContainerCase type="Body Small">{item}</TextContainerCase>
          </li>
        ))}
      </ul>
    </div>
  );
}
