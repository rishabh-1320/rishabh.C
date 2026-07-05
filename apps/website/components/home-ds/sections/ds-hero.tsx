import type { HeroContent } from "@/lib/types";
import { Section } from "@packages/ds-ui";
import { Parallax } from "../scroll/parallax";
import { HeroTitle } from "../ui/hero-title";
import { SectionRow } from "../ui/section-row";
import { Block } from "../ui/block";

export function DsHero({ hero }: { hero: HeroContent }) {
  return (
    <Section bg="paper" pad="none" id="hero">
      <SectionRow>
        <Block border="none" pad="open-top">
          <Parallax speed={0.25}>
            <HeroTitle
              name="Rishabh"
              eyebrow={hero.eyebrow}
              headline={hero.h1}
              emphasize={["B2B enterprise tools", "clarity"]}
            />
          </Parallax>
        </Block>
      </SectionRow>

      <div className="bg-gradient-to-b from-white to-ds-surface-mist">
        <SectionRow>
          <Block border="none" pad="open-bottom">
            <Parallax speed={0.1}>
              <div className="overflow-hidden rounded-ds-chrome shadow-ds-card-hover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.image}
                  alt="B2B enterprise analytics dashboard designed by Rishabh"
                  className="block w-full"
                />
              </div>
            </Parallax>
          </Block>
        </SectionRow>
      </div>
    </Section>
  );
}
