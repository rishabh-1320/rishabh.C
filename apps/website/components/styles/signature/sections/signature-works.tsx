import Link from "next/link";
import type { WorkCard } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Tag } from "../ui";

const TAG_CYCLE = ["lilac", "peach", "mint", "sky"] as const;

export function SignatureWorks({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active);

  return (
    <Section bg="soft" pad="lg" id="works">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>Selected work</Eyebrow>
          <Text variant="h2">{heading}</Text>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((work, i) => {
            const body = (
              <Card surface="raised" pad="none" radius="rounded-2xl" hover className="h-full overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
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
                    <Text variant="caption" as="span" className="text-[color:var(--accent)]">
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
