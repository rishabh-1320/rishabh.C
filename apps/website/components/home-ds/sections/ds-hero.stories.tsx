import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsHero } from "./ds-hero";

const meta = {
  title: "home-ds/sections/DsHero",
  component: DsHero,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { hero: homeContent.hero }
};
