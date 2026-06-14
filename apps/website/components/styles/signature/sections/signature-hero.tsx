import type { HeroContent } from "@/lib/types";
import {
  Section,
  Container,
  Stack,
  Text,
  Tag,
  Button,
  ButtonLink,
  PhotoCard
} from "../ui";

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=800&fit=crop&q=80";

export function SignatureHero({
  hero,
  resumeUrl
}: {
  hero: HeroContent;
  resumeUrl: string;
}) {
  return (
    <Section bg="page" pad="lg" className="pt-28 md:pt-32">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="flex justify-center md:justify-start">
            <PhotoCard
              src={HERO_PHOTO}
              alt="Portrait of Rishabh"
              caption="Yeah, you can move it"
            />
          </div>

          <Stack gap="lg">
            <div className="flex flex-wrap gap-2">
              <Tag color="lilac">Product / UX Designer</Tag>
              <Tag color="outline">AI Builder</Tag>
            </div>

            <Text variant="display">
              <span aria-hidden="true">👋</span>{" "}
              <span className="text-accent">Hi</span>, I&apos;m Rishabh
            </Text>

            <Text variant="lead" className="max-w-prose">
              {hero.subLine}
            </Text>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="#works" variant="primary">
                Case Studies
              </ButtonLink>
              <ButtonLink href={resumeUrl} variant="secondary">
                Connect on LinkedIn
              </ButtonLink>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
