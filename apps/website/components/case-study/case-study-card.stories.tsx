import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CaseStudyCard } from "./case-study-card";
import { workImages, explorationImages } from "../home-ds/images";

/**
 * Legacy component — still used by the case-study pages' "More Projects" grid
 * (components/case-study/more-projects.tsx). Distinct from and unrelated to
 * home-ds/blocks/CaseStudyCard, which is the homepage-only rebuild.
 */
const meta = {
  title: "case-study/CaseStudyCard (legacy)",
  component: CaseStudyCard,
  argTypes: {
    variant: { control: "select", options: ["featured", "standard", "compact"] }
  }
} satisfies Meta<typeof CaseStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Featured: Story = {
  args: {
    variant: "featured",
    image: workImages["work-chestnut"],
    alt: "Standardizing Chestnut",
    tags: ["Product", "B2B", "Design System"],
    title: "Standardizing Chestnut, a producer performance platform for insurance",
    description: "Standardized fragmented patterns, owned the design system, and shipped new features.",
    metric: "30–40%",
    metricLabel: "fewer UX inconsistencies",
    href: "#"
  }
};

export const Standard: Story = {
  args: {
    variant: "standard",
    image: workImages["work-hrms"],
    alt: "HR analytics dashboard",
    tags: ["Dashboard", "Analytics", "Enterprise"],
    title: "An HR analytics dashboard for an HRMS industry leader",
    description: "Translated vast workforce datasets into a clear, real-time dashboard.",
    metric: "2,000+",
    metricLabel: "employees tracked live",
    href: "#"
  }
};

export const Compact: Story = {
  args: {
    variant: "compact",
    image: explorationImages["ai-audit-tool"],
    alt: "AI Audit Tool",
    tags: ["AI", "Enterprise"],
    title: "AI Audit Tool",
    description: "A working internal tool that surfaces anomalies in dense compliance datasets.",
    href: "#"
  }
};
