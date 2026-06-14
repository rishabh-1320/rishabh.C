import type { HeroContent } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow, ButtonLink } from "../ui";
import { GraphVisual } from "../webgl/graph-visual";

export function Vs3Hero({ hero, linkedinUrl }: { hero: HeroContent; linkedinUrl: string }) {
  return (
    <Section bg="page" pad="lg" className="pt-28 md:pt-36">
      <Container>
        <Stack gap="lg" className="items-center text-center">
          <Eyebrow>Product · UX · Design Engineering</Eyebrow>
          <Text variant="display" className="max-w-[16ch]">
            Design intelligence for the{" "}
            <span className="text-vs3-accent">complex B2B</span> era.
          </Text>
          <Text variant="lead" className="max-w-vs3-prose">
            {hero.subLine}
          </Text>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <ButtonLink href="#work" variant="primary">
              See case studies
            </ButtonLink>
            <ButtonLink href={linkedinUrl} variant="secondary">
              Connect on LinkedIn
            </ButtonLink>
          </div>
        </Stack>

        {/* Wide WebGL graph visual — the workweave signature */}
        <div className="mt-14">
          <GraphVisual frame="hero" />
        </div>
      </Container>
    </Section>
  );
}
