import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsSkill } from "./ds-skill";

const meta = {
  title: "home-ds/sections/DsSkill",
  component: DsSkill,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: homeContent.ideologyHeading,
    intro: homeContent.ideologyIntro,
    principles: homeContent.ideologyPrinciples,
    aiWorkflow: homeContent.aiWorkflow
  }
};
