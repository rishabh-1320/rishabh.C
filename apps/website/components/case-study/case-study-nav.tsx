import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@packages/ds-ui";
import { homeContent } from "@/lib/site-content";

const CASE_STUDIES = [
  {
    id: "chestnut",
    workId: "work-chestnut",
    title: "Standardizing Chestnut",
    subtitle: "Insurance SaaS · Design system in code",
    year: "2025–2026",
    tags: ["Product", "Design System"],
    href: "/casestudy/chestnut",
  },
  {
    id: "dashboard",
    workId: "work-hrms",
    title: "HR Analytics Dashboard",
    subtitle: "Attendance & workforce insights for enterprise",
    year: "2023–2024",
    tags: ["Data", "Enterprise"],
    href: "/casestudy/dashboard",
  },
  {
    id: "onboarding",
    workId: "work-onboarding",
    title: "HRMS Candidate Onboarding",
    subtitle: "From admin-panel nobody used to self-service flow",
    year: "2024–2025",
    tags: ["UX", "Enterprise"],
    href: "/casestudy/onboarding",
  },
  {
    id: "design-system",
    workId: "work-design-system",
    title: "Arksaber Design System",
    subtitle: "Whitelabel design system, Figma to code",
    year: "",
    tags: ["Design System", "Code"],
    href: "/casestudy/design-system",
  },
] as const;

export function CaseStudyNav({ current }: { current: string }) {
  const others = CASE_STUDIES.filter((cs) => cs.id !== current);

  return (
    <Section bg="sunken" pad="md" className="border-t border-ds-border">
      <Container>
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <Eyebrow>More case studies</Eyebrow>
          <span className="font-ds-sans text-ds-caption font-medium text-ds-ink-muted">Swipe →</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {others.map((cs) => {
            const workCard = homeContent.works.find((w) => w.id === cs.workId);
            const image = workCard?.image;

            return (
              <Link
                key={cs.id}
                href={cs.href}
                className="group w-80 flex-none snap-start overflow-hidden rounded-ds-lg border border-ds-border bg-ds-surface-raised transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ds-ink hover:shadow-ds-card-hover"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-ds-surface-sunken">
                  {image && (
                    <Image
                      src={image}
                      alt={cs.title}
                      fill
                      sizes="288px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-ds-sans text-ds-body font-semibold leading-snug text-ds-ink">
                      {cs.title}
                    </h3>
                    <span className="mt-0.5 flex-none text-ds-ink-muted transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-ds-ink">
                      →
                    </span>
                  </div>
                  <p className="mt-1 font-ds-sans text-ds-body-sm leading-relaxed text-ds-ink-soft">{cs.subtitle}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-ds-pill border border-ds-border bg-ds-surface-sunken px-2 py-0.5 font-ds-sans text-ds-caption font-medium text-ds-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {cs.year && <p className="font-ds-sans text-ds-caption text-ds-ink-muted">{cs.year}</p>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
