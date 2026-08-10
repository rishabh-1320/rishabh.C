import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ExistingDashboardMock, FinalDashboardMock } from "./dashboard";

const meta = {
  title: "case-study/mockups/Dashboard"
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ExistingBefore: Story = { render: () => <ExistingDashboardMock /> };
export const FinalAnnotated: Story = { render: () => <FinalDashboardMock /> };
