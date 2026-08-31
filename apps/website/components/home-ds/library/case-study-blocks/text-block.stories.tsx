import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextBlock } from "./text-block";

const QUOTE =
  "\"The best design systems aren't the most comprehensive ones — they're the ones people actually want to use.\"";

const meta = {
  title: "home-ds/library/case-study-blocks/TextBlock",
  component: TextBlock,
  decorators: [
    (Story) => (
      <div style={{ width: 903 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma default (node 573:8083) — side border on, attribution on. */
export const Default: Story = {
  args: { quote: QUOTE, name: "User Name", designation: "Designation" }
};

/** Figma `username={false}` — quote only. */
export const QuoteOnly: Story = { args: { quote: QUOTE } };

/** Figma `sideBorder={false}`. */
export const NoSideBorder: Story = {
  args: { quote: QUOTE, name: "User Name", designation: "Designation", sideBorder: false }
};

export const NoDesignation: Story = { args: { quote: QUOTE, name: "Priya Nair" } };
