import type { AIExplorationCard } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow, Card, Tag } from "../ui";
import type { TagColor } from "../ui";
import { explorationImages, fallbackImage } from "../images";

const STATUS_COLOR: Record<AIExplorationCard["status"], TagColor> = {
  Live: "green",
  Prototype: "purple",
  Archived: "outline"
};

export function Vs3Explorations({
  heading,
  intro,
  explorations
}: {
  heading: string;
  intro: string;
  explorations: AIExplorationCard[];
}) {
  return (
    <Section bg="page" pad="lg" id="explorations">
      <Container>
        <Stack gap="lg" className="mb-12 max-w-vs3-prose">
          <Eyebrow>Built for teams that can&apos;t compromise</Eyebrow>
          <Text variant="h1">{heading}</Text>
          <Text variant="lead">{intro}</Text>
        </Stack>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {explorations.map((exp) => (
            <Card key={exp.id} surface="raised" pad="none" radius="rounded-vs3-xl" hover className="flex flex-col overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-vs3-surface-sunken">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={explorationImages[exp.id] ?? fallbackImage}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <Tag color={STATUS_COLOR[exp.status]}>{exp.status}</Tag>
                  <Text variant="caption" as="span" className="font-vs3-mono">
                    {exp.year}
                  </Text>
                </div>
                <Text variant="h3">{exp.title}</Text>
                <Text variant="body-sm" className="flex-1">
                  {exp.description}
                </Text>
                <Text variant="caption" as="span" className="font-vs3-mono">
                  {exp.builtWith.join(" · ")}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
