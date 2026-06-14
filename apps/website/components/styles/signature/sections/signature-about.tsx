import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Stack } from "../ui";

export function SignatureAbout({ about }: { about: HomeContent["about"] }) {
  return (
    <Section bg="soft" pad="lg" id="about">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Stack gap="lg">
            <Eyebrow dot>{about.heading}</Eyebrow>
            {about.bio.map((para, i) => (
              <Text key={i} variant={i === 0 ? "h3" : "body"} className="max-w-prose">
                {para}
              </Text>
            ))}
            <Card surface="cream" pad="md" radius="rounded-xl">
              <Text variant="body-sm">{about.currentlyLine}</Text>
            </Card>
          </Stack>

          <Stack gap="md">
            {about.skills.map((skill) => (
              <div key={skill.category} className="flex flex-col gap-1">
                <Text variant="caption" as="span" className="text-[color:var(--accent)]">
                  {skill.category}
                </Text>
                <Text variant="body-sm">{skill.items}</Text>
              </div>
            ))}
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
