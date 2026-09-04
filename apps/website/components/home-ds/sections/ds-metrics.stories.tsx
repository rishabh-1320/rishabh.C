import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsMetrics } from "./ds-metrics";

const meta = {
  title: "home-ds/sections/DsMetrics",
  component: DsMetrics,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsMetrics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { stats: homeContent.stats }
};
