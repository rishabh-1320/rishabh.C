import { Text } from "@packages/ds-ui";
import { CaseStudyCard } from "./case-study-card";
import { workImages, fallbackImage } from "../home-ds/images";
import { ContainerBlock } from "../home-ds/library/blocks/container-block";

const CASE_STUDIES = [
  {
    id: "chestnut",
    workId: "work-chestnut",
    title: "Standardizing Chestnut",
    subtitle: "Insurance SaaS · Design system in code",
    tags: ["Product", "Design System"],
    href: "/casestudy/chestnut"
  },
  {
    id: "dashboard",
    workId: "work-hrms",
    title: "HR Analytics Dashboard",
    subtitle: "Attendance & workforce insights for enterprise",
    tags: ["Data", "Enterprise"],
    href: "/casestudy/dashboard"
  },
  {
    id: "onboarding",
    workId: "work-onboarding",
    title: "HRMS Candidate Onboarding",
    subtitle: "From admin-panel nobody used to self-service flow",
    tags: ["UX", "Enterprise"],
    href: "/casestudy/onboarding"
  },
  {
    id: "design-system",
    workId: "work-design-system",
    title: "Arksaber Design System",
    subtitle: "Whitelabel design system, Figma to code",
    tags: ["Design System", "Code"],
    href: "/casestudy/design-system"
  }
] as const;

/**
 * "More Projects" — the closing grid on every case study, all 4 sharing
 * this one definition (previously hand-duplicated inline on Chestnut,
 * specifically to avoid touching the other 3 pages' old template; now that
 * all 4 share the same template, there's no reason for four copies of the
 * same list + grid). Always the other 3 case studies, in CASE_STUDIES order.
 */
export function MoreProjects({ current }: { current: string }) {
  const others = CASE_STUDIES.filter((cs) => cs.id !== current);

  return (
    <ContainerBlock className="py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Text variant="hp-eyebrow-loose">More</Text>
          <Text variant="hp-heading" as="p">
            Projects
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {others.map((cs) => (
          <CaseStudyCard
            key={cs.id}
            variant="standard"
            image={workImages[cs.workId] ?? fallbackImage}
            alt={cs.title}
            tags={[...cs.tags]}
            title={cs.title}
            description={cs.subtitle}
            href={cs.href}
          />
        ))}
      </div>
    </ContainerBlock>
  );
}
