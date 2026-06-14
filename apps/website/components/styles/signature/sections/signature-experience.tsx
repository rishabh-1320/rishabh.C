import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Row, IconBadge, TextLink } from "../ui";

export function SignatureExperience({ about }: { about: HomeContent["about"] }) {
  return (
    <Section bg="page" pad="md" id="experience">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Eyebrow dot>Experience</Eyebrow>
            <Text variant="h2">Where I&apos;ve been building</Text>
          </div>
          <TextLink href="#works">View all →</TextLink>
        </div>

        <div className="flex flex-col">
          {about.experiences.map((exp, i) => (
            <Row
              key={exp.company}
              first={i === 0}
              lead={
                <>
                  <IconBadge>{exp.company.charAt(0)}</IconBadge>
                  <div className="flex min-w-0 flex-col">
                    <Text variant="h4" as="span">
                      {exp.company}
                    </Text>
                    <Text variant="body-sm" as="span" className="truncate">
                      {exp.description ??
                        exp.projects?.map((p) => p.name).join(" · ") ??
                        ""}
                    </Text>
                  </div>
                </>
              }
              trail={
                <Text variant="caption" as="span" className="whitespace-nowrap">
                  {exp.period}
                </Text>
              }
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
