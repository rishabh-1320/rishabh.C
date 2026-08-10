import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsAbout } from "./ds-about";

const meta = {
  title: "home-ds/sections/DsAbout",
  component: DsAbout,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { about: homeContent.about }
};
