import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsProjects } from "./ds-projects";

const meta = {
  title: "home-ds/sections/DsProjects",
  component: DsProjects,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: homeContent.aiExplorationsHeading,
    intro: homeContent.aiExplorationsIntro,
    explorations: homeContent.aiExplorations
  }
};
