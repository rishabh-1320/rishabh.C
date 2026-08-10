import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { MethodologyGrid } from "./methodology-grid";

const meta = {
  title: "home-ds/site-components/MethodologyGrid",
  component: MethodologyGrid
} satisfies Meta<typeof MethodologyGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { principles: homeContent.ideologyPrinciples }
};
