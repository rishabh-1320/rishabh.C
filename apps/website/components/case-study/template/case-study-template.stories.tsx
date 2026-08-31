import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CaseStudyTemplate } from "./case-study-template";

const meta = {
  title: "case-study/template/CaseStudyTemplate",
  component: CaseStudyTemplate,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof CaseStudyTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The whole Figma "Case Study Template" frame (node 573:8093), block for block.
 * Same composition the /casestudy/template route renders.
 */
export const FullTemplate: Story = {};
