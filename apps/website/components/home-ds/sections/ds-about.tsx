import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Stack, Gallery } from "@packages/ds-ui";
import { galleryImages } from "../images";

export function DsAbout({ about }: { about: HomeContent["about"] }) {
  return (
    <Section bg="page" pad="lg" id="about">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>B2B Product Designer</Eyebrow>
          <Text variant="h2">Hey! Here&apos;s the short version.</Text>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <Stack gap="lg">
            {about.bio.map((para, i) => (
              <Text key={i} variant={i === 0 ? "h3" : "body"} className="max-w-ds-prose">
                {para}
              </Text>
            ))}
            <Card surface="cream" pad="md" radius="rounded-ds-lg">
              <Text variant="body-sm">{about.currentlyLine}</Text>
            </Card>
          </Stack>

          <Stack gap="lg">
            <Gallery images={galleryImages} />
            <Stack gap="md">
              {about.skills.map((skill) => (
                <div key={skill.category} className="flex flex-col gap-1">
                  <Text variant="caption" as="span" className="text-ds-accent">
                    {skill.category}
                  </Text>
                  <Text variant="body-sm">{skill.items}</Text>
                </div>
              ))}
            </Stack>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
