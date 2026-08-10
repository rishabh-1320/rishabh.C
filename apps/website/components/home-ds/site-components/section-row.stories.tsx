import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionRow } from "./section-row";

const meta = {
  title: "home-ds/site-components/SectionRow",
  component: SectionRow
} satisfies Meta<typeof SectionRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="w-full max-w-ds-hp bg-ds-surface-sunken p-6 text-ds-ink">Centered content column</div>
  }
};
