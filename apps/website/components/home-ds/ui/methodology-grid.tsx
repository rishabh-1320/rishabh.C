import type { IdeologyPrinciple } from "@/lib/types";

/**
 * The 4-column "brick wall" of mostly-empty 168px slots with one populated
 * principle card per column, staggered diagonally — exact layout traced from
 * the Figma export (each column's populated-card index + the half-height 102px
 * cap that creates the stagger). Not a general-purpose grid; this shape only
 * exists here, so the per-column data lives inline rather than as tokens.
 */
const COLUMNS: { heights: number[]; cardIndex: number }[] = [
  { heights: [102, 168, 168, 168, 168], cardIndex: 1 },
  { heights: [168, 102, 168, 168, 168], cardIndex: 2 },
  { heights: [168, 168, 168, 102, 168], cardIndex: 2 },
  { heights: [168, 168, 168, 168, 102], cardIndex: 3 }
];

function PrincipleCard({ principle }: { principle: IdeologyPrinciple }) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 rounded-ds-card p-4">
      <p className="font-ds-inter text-[24px] font-medium leading-[1.1] tracking-[-0.025em] text-[#333333]">
        {principle.title}
      </p>
      <p className="font-ds-inter text-[15px] font-normal leading-[1.1] tracking-[-0.025em] text-[#999999]">
        {principle.description}
      </p>
    </div>
  );
}

export function MethodologyGrid({ principles }: { principles: IdeologyPrinciple[] }) {
  return (
    <div className="grid grid-cols-2 divide-x divide-ds-hairline md:grid-cols-4">
      {COLUMNS.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2.5">
          {col.heights.map((height, boxIndex) => (
            <div key={boxIndex} style={{ height }} className="w-full">
              {boxIndex === col.cardIndex && principles[colIndex] && (
                <PrincipleCard principle={principles[colIndex]} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
