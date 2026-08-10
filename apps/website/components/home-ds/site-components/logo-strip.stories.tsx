import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { LogoStrip } from "./logo-strip";

const meta = {
  title: "home-ds/site-components/LogoStrip",
  component: LogoStrip,
  argTypes: {
    size: { control: "select", options: ["sm", "lg"] },
    align: { control: "select", options: ["left", "center"] }
  }
} satisfies Meta<typeof LogoStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftSmall: Story = {
  args: { heading: homeContent.logoStrip.heading, logos: homeContent.logoStrip.logos, size: "sm", align: "left" }
};

export const CenterLarge: Story = {
  args: { heading: homeContent.logoStrip.heading, logos: homeContent.logoStrip.logos, size: "lg", align: "center" }
};

export const NoLogoSrcFallback: Story = {
  args: {
    logos: [{ name: "Acme" }, { name: "Globex" }, { name: "Initech" }],
    size: "lg",
    align: "center"
  }
};
