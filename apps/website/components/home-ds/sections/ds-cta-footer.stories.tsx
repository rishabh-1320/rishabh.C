import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { DsCtaFooter } from "./ds-cta-footer";

const meta = {
  title: "home-ds/sections/DsCtaFooter",
  component: DsCtaFooter,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsCtaFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footer: homeContent.footer,
    resumeUrl: homeContent.resumeUrl,
    footerNote: homeContent.footerNote
  }
};
