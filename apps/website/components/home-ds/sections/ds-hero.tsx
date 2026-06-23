import type { HeroContent } from "@/lib/types";
import { Section, Container, Stack, Text, ButtonLink, PhotoCard } from "@packages/ds-ui";
import { heroPhoto } from "../images";

export function DsHero({ hero }: { hero: HeroContent }) {
  return (
    <Section bg="page" pad="lg" className="pt-28 md:pt-32">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <Stack gap="lg">
            <Text variant="display" className="md:text-[clamp(3.5rem,7vw,6rem)]">
              Rishabh
            </Text>

            <Text variant="lead" className="max-w-ds-prose">
              {hero.subLine}
            </Text>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="#work" variant="primary">
                Case Studies
              </ButtonLink>
            </div>
          </Stack>

          <div className="flex justify-center md:justify-end">
            <PhotoCard src={heroPhoto} alt="Portrait of Rishabh" caption="Yeah, you can move it" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
