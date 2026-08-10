import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ChestnutHeroMock,
  BonsaiStorybookMock,
  PaymentTypeaheadMock,
  CreateVariableSteps12Mock,
  ConfigureMetricsMock,
  LivePreviewMock
} from "./chestnut";

const meta = {
  title: "case-study/mockups/Chestnut"
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Hero: Story = { render: () => <ChestnutHeroMock /> };
export const BonsaiStorybook: Story = { render: () => <BonsaiStorybookMock /> };
export const PaymentTypeahead: Story = { render: () => <PaymentTypeaheadMock /> };
export const CreateVariableSteps: Story = { render: () => <CreateVariableSteps12Mock /> };
export const ConfigureMetrics: Story = { render: () => <ConfigureMetricsMock /> };
export const LivePreview: Story = { render: () => <LivePreviewMock /> };
