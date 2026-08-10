import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeader } from "./section-header";

const meta = {
  title: "home-ds/site-components/SectionHeader",
  component: SectionHeader
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { eyebrow: "Selected work", title: "Case studies, end to end", accent: "end to end" }
};

export const WithIntro: Story = {
  args: {
    eyebrow: "Process & principles",
    title: "Thinking in systems",
    accent: "systems",
    intro: "Four convictions that shape how I work, from first sketch to production code."
  }
};
