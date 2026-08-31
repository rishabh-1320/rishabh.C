import { CaseStudyCard } from "./case-study-card";
import { workImages, fallbackImage } from "../home-ds/images";
import { ThreeColumnBlock } from "../home-ds/library/case-study-blocks/three-column-block";
import { TextContainerCase } from "../home-ds/library/texts/text-container-case";

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
  },
  {
    id: "omny",
    workId: "work-omny",
    title: "Omny Multi-Workspace Navigation",
    subtitle: "Designing away a costly default without deleting it",
    tags: ["UX", "B2B SaaS"],
    href: "/casestudy/omny"
  }
] as const;

/**
 * "More Projects" — the closing grid on every case study, all 4 sharing
 * this one definition (previously hand-duplicated inline on Chestnut,
 * specifically to avoid touching the other 3 pages' old template; now that
 * all 4 share the same template, there's no reason for four copies of the
 * same list + grid). Always the other 3 case studies, in CASE_STUDIES order.
 *
 * Styled to the assembled template's closing block (node 573:9059): a single
 * `Section H1` heading over the card grid, full-bleed in a content-block rather
 * than the homepage's 120px-rail ContainerBlock.
 *
 * Capped at three. With five case studies "all the others" is four, which wraps
 * to an orphan card on a second row in a 3-up grid — so the grid stays 3-up and
 * takes the first three in CASE_STUDIES order.
 */
export function MoreProjects({ current }: { current: string }) {
  const others = CASE_STUDIES.filter((cs) => cs.id !== current).slice(0, 3);

  return (
    <ThreeColumnBlock columns={false}>
      <div className="flex w-full flex-col items-start gap-12">
        <TextContainerCase type="Section H1" className="w-full">
          Next projects, more projects
        </TextContainerCase>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
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
      </div>
    </ThreeColumnBlock>
  );
}
