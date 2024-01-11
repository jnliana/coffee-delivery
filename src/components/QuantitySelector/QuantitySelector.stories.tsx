import { Meta, StoryObj } from '@storybook/react';
import { QuantitySelector } from './QuantitySelector';

const meta = {
  title: 'Design System/Quantity Selector',
  component: QuantitySelector,
  tags: ['autodocs'],
} satisfies Meta<typeof QuantitySelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quantity: 0,
    handleClickDecrement: () => undefined,
    handleClickIncrement: () => undefined,
    disabledDecrement: false,
    disabledIncrement: false,
  },
};

export const DisabledButtons: Story = {
  args: {
    quantity: 0,
    handleClickDecrement: () => undefined,
    handleClickIncrement: () => undefined,
    disabledDecrement: true,
    disabledIncrement: true,
  },
};
