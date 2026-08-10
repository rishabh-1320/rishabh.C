import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MoreProjects } from "./more-projects";

const meta = {
  title: "case-study/MoreProjects",
  component: MoreProjects,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof MoreProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExcludingChestnut: Story = {
  args: { current: "chestnut" }
};
