import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BadgeGroup } from "./badge-group";

const meta = {
  title: "home-ds/library/misc/BadgeGroup",
  component: BadgeGroup
} satisfies Meta<typeof BadgeGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The Figma default (node 569:7897) — three chips. */
export const Default: Story = { args: { items: ["Title", "Title", "Title"] } };

export const Realistic: Story = { args: { items: ["Figma", "Tokens", "Handoff"] } };

/** Renders nothing rather than an empty flex row. */
export const Empty: Story = { args: { items: [] } };
