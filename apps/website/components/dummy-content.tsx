import type { ReactNode } from "react";

/**
 * Generic placeholder container — a visible, readable box for content whose
 * real component doesn't exist yet. Deliberately dumb: no grid/layout logic,
 * no variants, no design-system styling.
 *
 * Its companion `DummyChapter` is gone: all four case studies now render through
 * `components/case-study/template/*`. The only remaining caller is
 * `app/explorations/dummy/page.tsx`, the noindex skeleton for the AI Explorations
 * template — a different, lighter template that hasn't been built yet. Delete
 * this file once that page is real.
 */
export function DummyContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[1800px] border border-dashed border-neutral-300 p-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}
