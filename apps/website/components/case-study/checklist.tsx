/**
 * The "Core Inconsistencies Found:" style checklist — a bordered block with
 * an accent-filled checkmark circle per row. Traced from the Figma export:
 * bordered block p-6, 20px accent circle (radius-10, bold 11px white ✓),
 * 15px black title / 15px #666 rows, 12px row gap, 16px title→rows gap.
 */
export function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4 rounded-ds-card border border-ds-hairline p-6">
      <p className="font-ds-inter text-[15px] text-ds-heading">{title}</p>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ds-accent">
              <span className="font-ds-inter text-[11px] font-bold text-white">✓</span>
            </span>
            <p className="font-ds-inter text-[15px] text-ds-body-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
