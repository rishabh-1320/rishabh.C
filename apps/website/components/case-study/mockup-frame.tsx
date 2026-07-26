import type { ReactNode } from "react";
import { Text } from "@packages/ds-ui";
import { GsapReveal } from "@/components/gsap-reveal";

type MockupFrameProps = {
  children: ReactNode;
  caption?: string;
  /** "browser" adds traffic-light dots + a faux address bar; "none" is a plain panel. */
  chrome?: "browser" | "none";
  /** "legacy" renders a muted surface — used for "before" / old-product scenes. */
  tone?: "default" | "legacy";
  /** Faux address-bar label — only rendered with chrome="browser" AND when provided (no default, so a product's URL is never wrong). */
  urlLabel?: string;
  className?: string;
  /** Override padding/layout of the inner content region. */
  bodyClassName?: string;
};

/**
 * Consistent visual chrome for the code-rendered case-study mockups — traced
 * from the Figma case-study template's "window" frame: 12px radius, hairline
 * border, a 32px chrome bar (near-invisible black-2% tint) with three 8px
 * traffic-light dots, warm-cream body behind the screenshot.
 *
 * Capped at 1400px, centered: these mocks are hand-built React/CSS "fake
 * screenshots" (not real photos), so unlike a real image they can't be
 * cropped to a fixed aspect-ratio with object-fit — their internal
 * grid/flex layout would just reflow/distort at arbitrary widths instead.
 * A width cap keeps their proportions sane even inside a full-bleed section,
 * without risking clipped content.
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
      <figure className="mx-auto my-8 max-w-[1400px]">
        <div
          className={`overflow-hidden rounded-ds-mockup border border-ds-hairline ${
            isLegacy ? "bg-ds-surface-mist" : "bg-ds-mockup-bg"
          } ${className ?? ""}`}
        >
          {chrome === "browser" && (
            <div className="flex h-8 items-center gap-2 bg-ds-mockup-bar px-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="size-2 rounded-full bg-ds-hairline" />
                <span className="size-2 rounded-full bg-ds-hairline" />
                <span className="size-2 rounded-full bg-ds-hairline" />
              </div>
              {urlLabel && (
                <div className="flex min-w-0 flex-1 items-center rounded-ds-pill border border-ds-hairline bg-ds-surface-paper px-3 py-1">
                  <Text variant="hp-caption" as="span" className="truncate">
                    {urlLabel}
                  </Text>
                </div>
              )}
            </div>
          )}

          <div className={bodyClassName ?? "p-4 md:p-6"}>{children}</div>
        </div>

        {caption && (
          <Text variant="hp-caption" as="figcaption" className="mt-3 text-center italic">
            {caption}
          </Text>
        )}
      </figure>
    </GsapReveal>
  );
}
