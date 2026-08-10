import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ParityProofMock,
  TokenTaxonomyMock,
  TokenTableMock,
  BrandCompareMock,
  InputAnatomyMock,
  FigmaToCodePipelineMock,
  ArksaberStorybookMock
} from "./design-system";

const meta = {
  title: "case-study/mockups/DesignSystem"
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ParityProof: Story = { render: () => <ParityProofMock /> };
export const TokenTaxonomy: Story = { render: () => <TokenTaxonomyMock /> };
export const TokenTable: Story = { render: () => <TokenTableMock /> };
export const BrandCompare: Story = { render: () => <BrandCompareMock /> };
export const InputAnatomy: Story = { render: () => <InputAnatomyMock /> };
export const FigmaToCodePipeline: Story = { render: () => <FigmaToCodePipelineMock /> };
export const ArksaberStorybook: Story = { render: () => <ArksaberStorybookMock /> };
