import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsWork } from "./ds-work";

const meta = {
  title: "home-ds/sections/DsWork",
  component: DsWork,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsWork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { heading: homeContent.worksHeading, intro: homeContent.worksIntro, works: homeContent.works }
};
