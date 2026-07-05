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
  /** Faux address-bar label, only shown with chrome="browser". */
  urlLabel?: string;
  className?: string;
  /** Override padding/layout of the inner content region. */
  bodyClassName?: string;
};

/**
 * Consistent visual chrome for the code-rendered case-study mockups — mapped
 * from the homepage's card language: hairline border, no shadow, cool mist
 * chrome bar instead of the legacy warm sunken surface. Uses `radius-shell`
 * (16px) rather than the homepage card's 8px since these are large framed
 * panels, not content cards.
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
          className={`overflow-hidden rounded-ds-shell border border-ds-hairline ${
            isLegacy ? "bg-ds-surface-mist" : "bg-ds-surface-paper"
          } ${className ?? ""}`}
        >
          {chrome === "browser" && (
            <div className="flex items-center gap-3 border-b border-ds-hairline bg-ds-surface-mist px-4 py-2.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-ds-pill bg-ds-hairline" />
                <span className="h-2.5 w-2.5 rounded-ds-pill bg-ds-hairline" />
                <span className="h-2.5 w-2.5 rounded-ds-pill bg-ds-hairline" />
              </div>
              <div className="flex min-w-0 flex-1 items-center rounded-ds-pill border border-ds-hairline bg-ds-surface-paper px-3 py-1">
                <Text variant="hp-caption" as="span" className="truncate">
                  {urlLabel ?? "app.chestnut.com"}
                </Text>
              </div>
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
