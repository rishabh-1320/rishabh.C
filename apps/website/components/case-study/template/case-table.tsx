import { TextContainerCase } from "@/components/home-ds/library/texts/text-container-case";
import type { CaseStudyTable } from "@/lib/case-study-types";

/**
 * A comparison table inside a chapter — options against criteria, or
 * alternatives against a verdict.
 *
 * Built only from library primitives, per the template's rule: type comes from
 * `TextContainerCase` (header cells `Eyebrow`, body cells `Prose`), rules from
 * `ds-hairline`. No new visual values.
 *
 * The `w-full overflow-x-auto` wrapper is load-bearing, not decoration. A
 * shrink-to-fit wrapper grows to the table's min-content width, and a table
 * with long strings then pushes the whole page into horizontal scroll — that
 * exact bug shipped in two mockups in this repo. `w-full` pins the wrapper to
 * the column so the table scrolls inside itself instead.
 */
export function CaseTable({ title, headers, rows }: CaseStudyTable) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      {title && <TextContainerCase type="Eyebrow">{title}</TextContainerCase>}

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-ds-hairline">
              {headers.map((h) => (
                <th key={h} scope="col" className="px-4 py-3 align-bottom">
                  {/* Empty corner cells are common in a criteria matrix. */}
                  {h && (
                    <TextContainerCase type="Eyebrow" as="span" className="!text-ds-hp-muted">
                      {h}
                    </TextContainerCase>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className="border-b border-ds-hairline last:border-b-0">
                {row.map((cell, c) => (
                  <td key={c} className="px-4 py-4 align-top">
                    <TextContainerCase type="Prose" as="span">
                      {cell}
                    </TextContainerCase>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
