import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardTitle } from "./card-title";

const meta = {
  title: "home-ds/library/cards/CardTitle",
  component: CardTitle,
  argTypes: {
    padding: { control: "select", options: ["casestudy", "project"] }
  }
} satisfies Meta<typeof CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CasestudyWithMetric: Story = {
  args: {
    tags: ["Product", "Design System"],
    title: "Standardizing Chestnut, a producer performance platform for insurance",
    description: "Standardized fragmented patterns, owned the design system, and shipped new features.",
    metric: "30–40%",
    metricLabel: "fewer UX inconsistencies",
    padding: "casestudy"
  }
};

export const ProjectNoMetric: Story = {
  args: {
    tags: ["AI", "Enterprise"],
    title: "AI Audit Tool",
    description: "A working internal tool that surfaces anomalies in dense compliance datasets.",
    padding: "project"
  }
};
