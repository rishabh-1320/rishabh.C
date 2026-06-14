import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Divider } from "@packages/ds-ui";

export function DsJourney({ about }: { about: HomeContent["about"] }) {
  return (
    <Section bg="sunken" pad="lg" id="journey">
      <Container width="prose">
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>Timeline</Eyebrow>
          <Text variant="h2">Journey so far</Text>
        </div>

        <div className="flex flex-col gap-10">
          {about.experiences.map((exp) => (
            <div key={exp.company} className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4">
                <Text variant="h3" as="h3">
                  {exp.company}
                </Text>
                <Text variant="caption" as="span" className="whitespace-nowrap">
                  {exp.period}
                </Text>
              </div>

              {exp.description && <Text variant="body">{exp.description}</Text>}

              {exp.projects && (
                <div className="flex flex-col gap-4 border-l border-ds-border pl-5">
                  {exp.projects.map((proj) => (
                    <div key={proj.name} className="flex flex-col gap-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <Text variant="body" as="span" className="text-ds-ink">
                          {proj.name}
                        </Text>
                        <Text variant="caption" as="span" className="whitespace-nowrap">
                          {proj.period}
                        </Text>
                      </div>
                      <Text variant="body-sm">{proj.description}</Text>
                    </div>
                  ))}
                </div>
              )}

              <Divider className="mt-2" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
