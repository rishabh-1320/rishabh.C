import { Text } from "@packages/ds-ui";
import { homeContent } from "@/lib/site-content";
import { CaseShell } from "./case-shell";
import { CaseStudyCard } from "../home-ds/ui/case-study-card";
import { HRule } from "../home-ds/ui/h-rule";

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

/**
 * "More case studies" — reuses the homepage's own `CaseStudyCard` (compact
 * variant) so this teaser row is pixel-identical to the Projects row on the
 * homepage, instead of hand-rolled card markup that could drift from it.
 */
export function CaseStudyNav({ current }: { current: string }) {
  const others = CASE_STUDIES.filter((cs) => cs.id !== current);

  return (
    <div className="bg-ds-surface-paper py-16 md:py-18">
      <HRule className="mb-16 md:mb-18" />
      <CaseShell>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Text variant="hp-eyebrow-loose">More</Text>
            <Text variant="hp-heading" as="p">
              Case studies
            </Text>
          </div>
          <Text variant="hp-eyebrow" as="span">
            Swipe →
          </Text>
        </div>

        <div className="overflow-x-auto pb-2 scrollbar-none">
          <div className="flex w-max gap-6 snap-x snap-mandatory md:w-full md:grid md:grid-cols-3">
            {others.map((cs) => {
              const workCard = homeContent.works.find((w) => w.id === cs.workId);
              const image = workCard?.image;
              if (!image) return null;

              return (
                <div key={cs.id} className="w-[26rem] flex-none snap-start md:w-auto">
                  <CaseStudyCard
                    variant="compact"
                    image={image}
                    alt={cs.title}
                    tags={[...cs.tags]}
                    title={cs.title}
                    description={cs.subtitle}
                    href={cs.href}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </CaseShell>
    </div>
  );
}
