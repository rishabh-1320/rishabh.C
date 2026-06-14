import type { HeroContent } from "@/lib/types";
import { Section, Container, Stack, Text, Tag, ButtonLink, PhotoCard } from "@packages/ds-ui";
import { heroPhoto } from "../images";

export function DsHero({
  hero,
  linkedinUrl
}: {
  hero: HeroContent;
  linkedinUrl: string;
}) {
  return (
    <Section bg="page" pad="lg" className="pt-28 md:pt-32">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="flex justify-center md:justify-start">
            <PhotoCard src={heroPhoto} alt="Portrait of Rishabh" caption="Yeah, you can move it" />
          </div>

          <Stack gap="lg">
            <div className="flex flex-wrap gap-2">
              <Tag color="lilac">Product / UX Designer</Tag>
              <Tag color="outline">AI Builder</Tag>
            </div>

            <Text variant="display">
              <span aria-hidden="true">👋</span>{" "}
              <span className="text-ds-accent">Hi</span>, I&apos;m Rishabh
            </Text>

            <Text variant="lead" className="max-w-ds-prose">
              {hero.subLine}
            </Text>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="#work" variant="primary">
                Case Studies
              </ButtonLink>
              <ButtonLink href={linkedinUrl} variant="secondary">
                Connect on LinkedIn
              </ButtonLink>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
