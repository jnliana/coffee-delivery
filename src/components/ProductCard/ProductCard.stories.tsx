import { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Design System/Product Card',
  component: ProductCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '6em' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
