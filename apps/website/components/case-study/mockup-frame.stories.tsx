import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MockupFrame } from "./mockup-frame";
import { MockButton, MockBadge, MockLines } from "./mockups/ui-kit";

const meta = {
  title: "case-study/MockupFrame",
  component: MockupFrame,
  argTypes: {
    chrome: { control: "select", options: ["browser", "none"] },
    tone: { control: "select", options: ["default", "legacy"] }
  }
} satisfies Meta<typeof MockupFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div className="flex flex-col gap-3">
    <div className="flex gap-2">
      <MockButton>Primary</MockButton>
      <MockBadge tone="positive">Live</MockBadge>
    </div>
    <MockLines count={3} />
  </div>
);

export const BrowserChrome: Story = {
  args: { chrome: "browser", tone: "default", urlLabel: "app.chestnut.io/producers", caption: "Producer performance dashboard", children: <SampleContent /> }
};

export const NoChrome: Story = {
  args: { chrome: "none", tone: "default", children: <SampleContent /> }
};

export const LegacyTone: Story = {
  args: { chrome: "browser", tone: "legacy", caption: "The old admin panel", children: <SampleContent /> }
};
