import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NumberedRow } from "./numbered-row";

const meta = {
  title: "case-study/NumberedRow",
  component: NumberedRow
} satisfies Meta<typeof NumberedRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    n: 1,
    title: "Inventory & Audit",
    description: "Cataloging every single button, dropdown, and input field across the entire stack."
  }
};

export const List: Story = {
  render: () => (
    <div className="flex flex-col gap-9">
      <NumberedRow n={1} title="Inventory & Audit" description="Cataloging every single button, dropdown, and input field across the entire stack." />
      <NumberedRow n={2} title="Defining the Core" description="Setting up a 4pt grid system, a semantic color palette, and foundational typography." />
      <NumberedRow n={3} title="Building the Tokens" description="Moving from hardcoded values to style tokens that work across React and Sass." />
    </div>
  )
};
