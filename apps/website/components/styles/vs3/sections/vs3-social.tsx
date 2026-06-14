import type { HomeContent } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow, StatCallout, LogoWall } from "../ui";

export function Vs3Social({
  logoStrip,
  about
}: {
  logoStrip: HomeContent["logoStrip"];
  about: HomeContent["about"];
}) {
  return (
    <Section bg="ink" pad="lg" id="social">
      <Container>
        <Stack gap="lg" className="mb-12 max-w-vs3-prose">
          <Eyebrow>{logoStrip.heading}</Eyebrow>
          <Text variant="h1">Products shipped across regulated, multi-role B2B.</Text>
        </Stack>

        <LogoWall names={logoStrip.logos.map((l) => l.name)} />

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCallout value="5" label="domains designed for" />
          <StatCallout value="1" label="design system owned" />
          <StatCallout value="3" label="companies, in parallel" />
          <StatCallout value="100,000+" label="daily users reached" />
        </div>

        <Text variant="body" className="mt-10 max-w-vs3-prose">
          {about.currentlyLine}
        </Text>
      </Container>
    </Section>
  );
}
