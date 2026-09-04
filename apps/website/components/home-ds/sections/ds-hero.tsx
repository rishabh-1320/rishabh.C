import type { HeroContent } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { HeroTitle } from "../site-components/hero-title";
import { StripePanel } from "../site-components/stripe-panel";
import { SectionRow } from "../site-components/section-row";
import { Block } from "../site-components/block";

// Static hero: no scroll-parallax on the title/dashboard, so the hero scrolls
// away normally instead of lagging behind and being covered by the next
// section. Every other section keeps its own scroll effects (Reveal, etc.).
export function DsHero({ hero }: { hero: HeroContent }) {
  return (
    <Section bg="paper" pad="none" id="hero" className="bg-ds-hero">
      <SectionRow>
        <Block border="none" pad="open-top">
          <HeroTitle
            name="Rishabh"
            eyebrow={hero.eyebrow}
            headline={hero.h1}
            emphasize={["B2B enterprise tools", "clarity"]}
          />
        </Block>
      </SectionRow>

      {/* The wash itself is the section's own `bg-ds-hero` gradient, which
          spans the full hero height (Figma's stops are percentages of the
          whole section, not of this lower panel). StripePanel here adds only
          the faint vertical pinstripes behind the dashboard image.

          `crossFade` carries those stripes past the hero's bottom edge and
          fades them out across the boundary — most of the ramp above the
          seam, the faint tail over the section below — so the two sections
          read as one continuous surface instead of meeting at a hard cut. */}
      <StripePanel crossFade>
        <SectionRow>
          <Block border="none" pad="open-bottom">
            <div className="overflow-hidden rounded-ds-chrome shadow-ds-card-hover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.image}
                alt="B2B enterprise analytics dashboard designed by Rishabh"
                className="block w-full"
              />
            </div>
          </Block>
        </SectionRow>
      </StripePanel>
    </Section>
  );
}
