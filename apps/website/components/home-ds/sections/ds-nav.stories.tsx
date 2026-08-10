import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DsNav } from "./ds-nav";

const meta = {
  title: "home-ds/sections/DsNav",
  component: DsNav,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof DsNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
