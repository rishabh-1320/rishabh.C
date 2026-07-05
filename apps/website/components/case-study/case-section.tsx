import type { ReactNode } from "react";
import { Text } from "@packages/ds-ui";
import { GsapReveal } from "@/components/gsap-reveal";

type CaseSectionProps = {
  id: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

/**
 * One article section inside a case study — mapped from the homepage's
 * Inter/cool-palette identity (`hp-heading` + the Inter `content-prose`
 * treatment) instead of the legacy serif h2. Renders the anchor, the heading
 * (fade-up reveal), then the body (also fade-up, delayed so it follows).
 */
export function CaseSection({ id, heading, children, className }: CaseSectionProps) {
  return (
    <section id={id} className={`space-y-5 scroll-mt-28 py-10 md:py-12 ${className ?? ""}`}>
      <GsapReveal preset="fadeUp">
        <Text variant="hp-heading" as="h2">
          {heading}
        </Text>
      </GsapReveal>
      <GsapReveal preset="fadeUp" delay={0.08}>
        <>{children}</>
      </GsapReveal>
    </section>
  );
}
