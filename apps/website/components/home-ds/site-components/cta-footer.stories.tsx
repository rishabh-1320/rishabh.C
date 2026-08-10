import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { CtaFooter } from "./cta-footer";

const meta = {
  title: "home-ds/site-components/CtaFooter",
  component: CtaFooter
} satisfies Meta<typeof CtaFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    closingLine: homeContent.hero.h1,
    emphasize: ["B2B enterprise tools", "clarity"],
    email: homeContent.footer.email,
    linkedinUrl: homeContent.footer.linkedinUrl,
    resumeUrl: homeContent.resumeUrl,
    footerNote: homeContent.footerNote,
    location: homeContent.footer.location
  }
};
