import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WorkPhilosophyCard } from "./work-philosophy-card";

const SystemsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const meta = {
  title: "home-ds/library/cards/WorkPhilosophyCard",
  component: WorkPhilosophyCard
} satisfies Meta<typeof WorkPhilosophyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <SystemsIcon />,
    title: "Design systems, not screens.",
    description: "Any thoughtful system beats a hundred clever tricks."
  }
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-4">
      <WorkPhilosophyCard icon={<SystemsIcon />} title="Design systems, not screens." description="Any thoughtful system beats a hundred clever tricks." />
      <WorkPhilosophyCard icon={<SystemsIcon />} title="Design isn't done at handoff." description="It's done at production. The code is the truth." />
      <WorkPhilosophyCard icon={<SystemsIcon />} title="AI accelerates." description="Designers decide. AI for layouts, designers set the work." />
      <WorkPhilosophyCard icon={<SystemsIcon />} title="Function before friendliness." description="In B2B, the user is a professional." />
    </div>
  )
};
