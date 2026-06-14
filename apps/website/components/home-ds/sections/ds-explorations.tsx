import type { AIExplorationCard } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Tag } from "@packages/ds-ui";
import type { TagColor } from "@packages/ds-ui";
import { explorationImages, fallbackImage } from "../images";

const STATUS_COLOR: Record<AIExplorationCard["status"], TagColor> = {
  Live: "mint",
  Prototype: "lilac",
  Archived: "outline"
};

export function DsExplorations({
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
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>On the side</Eyebrow>
          <Text variant="h2">{heading}</Text>
          <Text variant="lead" className="max-w-ds-prose">
            {intro}
          </Text>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {explorations.map((exp) => (
            <Card key={exp.id} surface="raised" pad="none" radius="rounded-ds-xl" hover className="flex flex-col overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-ds-surface-sunken">
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
                  <Text variant="caption" as="span">
                    {exp.year}
                  </Text>
                </div>
                <Text variant="h3">{exp.title}</Text>
                <Text variant="body-sm" className="flex-1">
                  {exp.description}
                </Text>
                <Text variant="caption" as="span">
                  Built with {exp.builtWith.join(", ")}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
