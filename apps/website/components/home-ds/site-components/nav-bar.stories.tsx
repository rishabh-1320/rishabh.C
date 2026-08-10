import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { NavBar } from "./nav-bar";

const meta = {
  title: "home-ds/site-components/NavBar",
  component: NavBar,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    resumeUrl: homeContent.resumeUrl,
    linkedinUrl: homeContent.footer.linkedinUrl
  }
};
