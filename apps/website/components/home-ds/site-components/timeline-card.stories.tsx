import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TimelineCard } from "./timeline-card";

const meta = {
  title: "home-ds/site-components/TimelineCard",
  component: TimelineCard
} satisfies Meta<typeof TimelineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Current: Story = {
  args: {
    company: "Tcules",
    period: "2025 – present",
    current: true,
    description: "Designing across three products at once — modernizing legacy enterprise software while standing up new tools.",
    tags: ["Omny", "Signal", "Cricmac", "Chestnut"]
  }
};

export const Past: Story = {
  args: {
    company: "Cynosure Technologies (Timelabs)",
    period: "2023 – 2025",
    description: "Designed Travel Management, HR Analytics, and Candidate Onboarding. Built a component library for the HRMS product."
  }
};
