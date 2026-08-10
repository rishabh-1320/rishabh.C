import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CaseStudyCard } from "./case-study-card";
import { workImages } from "../../images";

const meta = {
  title: "home-ds/library/cards/CaseStudyCard",
  component: CaseStudyCard
} satisfies Meta<typeof CaseStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
