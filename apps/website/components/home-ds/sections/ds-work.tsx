import Link from "next/link";
import type { WorkCard } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Tag } from "@packages/ds-ui";
import type { TagColor } from "@packages/ds-ui";
import { workImages, fallbackImage } from "../images";

const TAG_CYCLE: TagColor[] = ["lilac", "peach", "mint", "sky"];

export function DsWork({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active);

  return (
    <Section bg="sunken" pad="lg" id="work">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>Selected work</Eyebrow>
          <Text variant="h2">{heading}</Text>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((work, i) => {
            const body = (
              <Card surface="raised" pad="none" radius="rounded-ds-2xl" hover className="h-full overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden bg-ds-surface-sunken">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={workImages[work.id] ?? fallbackImage}
                    alt={work.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[var(--ds-dur-slow)] ease-[var(--ds-ease-out-expo)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.slice(0, 3).map((t, ti) => (
                      <Tag key={t} color={TAG_CYCLE[(i + ti) % TAG_CYCLE.length]}>
                        {t}
                      </Tag>
                    ))}
                  </div>
                  <Text variant="h3">{work.title}</Text>
                  <Text variant="body-sm">{work.description}</Text>
                  <div className="mt-2 flex items-center justify-between">
                    <Text variant="caption" as="span">
                      {work.company || "Personal"} · {work.year || "—"}
                    </Text>
                    <Text variant="caption" as="span" className="text-ds-accent">
                      {work.ctaLabel} →
                    </Text>
                  </div>
                </div>
              </Card>
            );

            return work.href ? (
              <Link key={work.id} href={work.href} className="group block">
                {body}
              </Link>
            ) : (
              <div key={work.id} className="group block">
                {body}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
