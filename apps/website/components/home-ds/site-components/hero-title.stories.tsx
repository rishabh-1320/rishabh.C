import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { HeroTitle } from "./hero-title";

const meta = {
  title: "home-ds/site-components/HeroTitle",
  component: HeroTitle
} satisfies Meta<typeof HeroTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Rishabh",
    eyebrow: homeContent.hero.eyebrow,
    headline: homeContent.hero.h1,
    emphasize: ["B2B enterprise tools", "clarity"]
  }
};
