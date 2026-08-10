import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  MockButton,
  MockBadge,
  MockInput,
  MockLines,
  MockAvatar,
  MockDropdown,
  MockTable,
  MockModalStepper,
  MockProgress,
  MockWindow,
  MockDotPlot,
  MockAreaChart
} from "./ui-kit";

/**
 * The token-styled "fake product" primitives every case-study mockup scene
 * is assembled from — no screenshots, just ds tokens rendered as UI.
 */
const meta = {
  title: "case-study/mockups/UiKit"
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Buttons: Story = {
  render: () => (
    <div className="flex gap-2">
      <MockButton>Primary</MockButton>
      <MockButton variant="secondary">Secondary</MockButton>
      <MockButton variant="ghost">Ghost</MockButton>
    </div>
  )
};

export const Badges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-1.5">
      <MockBadge tone="neutral">Neutral</MockBadge>
      <MockBadge tone="accent">Accent</MockBadge>
      <MockBadge tone="positive">Positive</MockBadge>
      <MockBadge tone="lilac">Lilac</MockBadge>
      <MockBadge tone="mint">Mint</MockBadge>
      <MockBadge tone="sky">Sky</MockBadge>
      <MockBadge tone="peach">Peach</MockBadge>
    </div>
  )
};

export const Inputs: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <MockInput label="Field" placeholder="Placeholder" />
      <MockInput label="Field" value="Filled value" />
      <MockInput label="Field" value="Focused" focused />
    </div>
  )
};

export const Lines: Story = { render: () => <MockLines count={4} /> };
export const Avatar: Story = { render: () => <MockAvatar initials="RC" /> };

export const Dropdown: Story = {
  render: () => <MockDropdown query="persist" items={["Premium", "Persistency rate (13-mo)", "Producer level"]} footerAction="New variable" />
};

export const Table: Story = {
  render: () => (
    <MockTable
      columns={["Producer", "NPN", "Persistency", "Status"]}
      rows={[
        ["A. Okafor", "8841302", "92.4%", <MockBadge tone="positive" key="s">On track</MockBadge>],
        ["M. Reyes", "7720945", "87.1%", <MockBadge tone="positive" key="s">On track</MockBadge>]
      ]}
    />
  )
};

export const ModalStepper: Story = {
  render: () => (
    <MockModalStepper title="Create variable" steps={["Type", "Analytic", "Metrics", "Period"]} active={1}>
      <MockLines count={3} />
    </MockModalStepper>
  )
};

export const Progress: Story = {
  render: () => (
    <MockProgress
      percent={33}
      steps={[
        { label: "Email & mobile verification", status: "done" },
        { label: "Personal information", status: "done" },
        { label: "Document upload", status: "active" },
        { label: "Company policies", status: "todo" }
      ]}
    />
  )
};

export const Window: Story = {
  render: () => (
    <MockWindow title="Producer Performance" activeNav="Producers">
      <MockLines count={3} />
    </MockWindow>
  )
};

export const DotPlot: Story = { render: () => <MockDotPlot /> };
export const AreaChart: Story = { render: () => <MockAreaChart /> };
