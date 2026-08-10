import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TitleContainer } from "./title-container";

const meta = {
  title: "home-ds/library/texts/TitleContainer",
  component: TitleContainer
} satisfies Meta<typeof TitleContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    typeText: "Selected work",
    heading: "Case studies, end to end",
    accent: "end to end"
  }
};

export const WithSupportingText: Story = {
  args: {
    typeText: "Process & principles",
    heading: "Thinking in systems",
    accent: "systems",
    supportingText: "Four convictions that shape how I work, from first sketch to production code."
  }
};
