import { SectionHeader } from "../home-ds/ui/section-header";
import { CaseStudyCard } from "../home-ds/ui/case-study-card";
import { SectionRow } from "../home-ds/ui/section-row";
import { Block } from "../home-ds/ui/block";
import { HRule } from "../home-ds/ui/h-rule";
import { workImages, fallbackImage } from "../home-ds/images";

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
 * "More Projects" — reuses the homepage's own SectionHeader + CaseStudyCard
 * so this closes out the ledger the same way the homepage's Projects section
 * does: same 1200 rail-bounded column as every other section on the page
 * (not the narrower reading-column width the old CaseShell used).
 */
export function CaseStudyNav({ current }: { current: string }) {
  const others = CASE_STUDIES.filter((cs) => cs.id !== current).slice(0, 3);

  return (
    <>
      <HRule dots />
      <SectionRow>
        <Block pad="both" padX="wide">
          <SectionHeader eyebrow="More" title="Projects" accent="Projects" />
        </Block>
      </SectionRow>
      <HRule dots />

      <SectionRow>
        <Block pad="open-bottom">
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
        </Block>
      </SectionRow>
    </>
  );
}
