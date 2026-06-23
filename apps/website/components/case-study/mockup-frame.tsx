import type { ReactNode } from "react";
import { GsapReveal } from "@/components/gsap-reveal";

type MockupFrameProps = {
  children: ReactNode;
  caption?: string;
  /** "browser" adds traffic-light dots + a faux address bar; "none" is a plain panel. */
  chrome?: "browser" | "none";
  /** "legacy" renders a muted, desaturated surface — used for "before" / old-product scenes. */
  tone?: "default" | "legacy";
  /** Faux address-bar label, only shown with chrome="browser". */
  urlLabel?: string;
  className?: string;
  /** Override padding/layout of the inner content region. */
  bodyClassName?: string;
};

/**
 * Consistent visual chrome for the code-rendered case-study mockups. Replaces
 * <CaseFigurePlaceholder>: a framed surface (optionally with browser chrome),
 * the mockup as children, and a caption below — wrapped in the same scaleUp
 * reveal the image-based <CaseFigure> uses, so new figures feel native.
 */
export function MockupFrame({
  children,
  caption,
  chrome = "browser",
  tone = "default",
  urlLabel,
  className,
  bodyClassName,
}: MockupFrameProps) {
  const isLegacy = tone === "legacy";

  return (
    <GsapReveal preset="scaleUp">
      <figure className="my-8">
        <div
          className={`overflow-hidden rounded-ds-2xl border shadow-ds-card ${
            isLegacy
              ? "border-ds-border bg-ds-surface-sunken"
              : "border-ds-border-strong bg-ds-surface-raised"
          } ${className ?? ""}`}
        >
          {chrome === "browser" && (
            <div className="flex items-center gap-3 border-b border-ds-border bg-ds-surface-sunken px-4 py-2.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-ds-pill bg-ds-border-strong" />
                <span className="h-2.5 w-2.5 rounded-ds-pill bg-ds-border-strong" />
                <span className="h-2.5 w-2.5 rounded-ds-pill bg-ds-border-strong" />
              </div>
              <div className="flex min-w-0 flex-1 items-center rounded-ds-pill border border-ds-border bg-ds-surface-raised px-3 py-1">
                <span className="truncate font-ds-sans text-ds-caption text-ds-ink-muted">
                  {urlLabel ?? "app.chestnut.com"}
                </span>
              </div>
            </div>
          )}

          <div className={bodyClassName ?? "p-4 md:p-6"}>{children}</div>
        </div>

        {caption && (
          <figcaption className="mt-3 text-center font-ds-sans text-ds-caption italic text-ds-ink-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    </GsapReveal>
  );
}
