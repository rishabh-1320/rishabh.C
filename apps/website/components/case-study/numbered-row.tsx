/**
 * A single "1 / Inventory & Audit / Cataloging every..." execution-strategy
 * row — simpler than the older `NumberedStep` (no card, no ring, no
 * connecting rail): just a 40px accent circle with a bold number, 24px gap
 * to an 8px-stacked title/description pair. Traced from the Figma export.
 */
export function NumberedRow({ n, title, description }: { n: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-6">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ds-accent">
        <span className="font-ds-inter text-base font-normal leading-[1.4] text-white">{n}</span>
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <p className="font-ds-inter text-[15px] font-normal leading-[1.4] text-ds-heading">{title}</p>
        <p className="font-ds-inter text-[15px] font-normal leading-[1.4] text-ds-body-muted">{description}</p>
      </div>
    </div>
  );
}
