import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  OnboardingHomeMock,
  OldAdminPanelMock,
  InspirationBoardMock,
  ProgressSystemMock,
  DocUploadStepMock,
  IterationBoardsMock,
  CompletionMock
} from "./onboarding";

const meta = {
  title: "case-study/mockups/Onboarding"
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Home: Story = { render: () => <OnboardingHomeMock /> };
export const OldAdminPanel: Story = { render: () => <OldAdminPanelMock /> };
export const InspirationBoard: Story = { render: () => <InspirationBoardMock /> };
export const ProgressSystem: Story = { render: () => <ProgressSystemMock /> };
export const DocUploadStep: Story = { render: () => <DocUploadStepMock /> };
export const IterationBoards: Story = { render: () => <IterationBoardsMock /> };
export const Completion: Story = { render: () => <CompletionMock /> };
