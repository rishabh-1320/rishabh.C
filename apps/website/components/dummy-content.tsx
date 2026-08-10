import type { ReactNode } from "react";
import type { CaseStudyChapter } from "@/lib/case-study-types";

/**
 * Generic placeholder container — the single replacement for every
 * component removed per COMPONENTS-REMOVAL.md. Deliberately dumb: no
 * grid/layout logic, no variants, no design-system styling. Each call
 * site passes its own real content (text, images, whatever) as children;
 * this just gives it a visible, readable box until a real component is
 * built from the Figma reference.
 */
export function DummyContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[1800px] border border-dashed border-neutral-300 p-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}

/**
 * Dumps one CaseStudyChapter's real fields (heading, pull-quote, paragraphs,
 * checklist, steps, side-cards) as plain stacked text inside DummyContent —
 * every case-study page had this exact same shape to render, so this is
 * shared rather than repeated 4 times. No field is dropped, only the
 * previous CaseChapter/PullQuote/Checklist/NumberedRow/ExplainerCard
 * styling is gone.
 */
export function DummyChapter(chapter: CaseStudyChapter) {
  return (
    <DummyContent key={chapter.id} className="mt-6 flex flex-col gap-3">
      <p className="text-xs uppercase tracking-wide text-neutral-500">{chapter.heading.eyebrow}</p>
      <h2 className="text-xl font-semibold">{chapter.heading.title}</h2>

      {chapter.pullQuote && (
        <p className="italic">
          {chapter.pullQuote.label ? `${chapter.pullQuote.label}: ` : ""}
          {chapter.pullQuote.quote}
        </p>
      )}

      {chapter.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {chapter.checklist && (
        <div>
          <p className="font-medium">{chapter.checklist.title}</p>
          <ul className="list-disc pl-5">
            {chapter.checklist.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {chapter.steps && (
        <ol className="list-decimal pl-5">
          {chapter.steps.map((step, i) => (
            <li key={i}>
              <strong>{step.title}</strong>: {step.description}
            </li>
          ))}
        </ol>
      )}

      {chapter.sideCards?.map((card, i) => (
        <p key={i}>
          {card.label ? `${card.label}: ` : ""}
          {card.text}
        </p>
      ))}
    </DummyContent>
  );
}
