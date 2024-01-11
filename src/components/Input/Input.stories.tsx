import { StoryObj, Meta } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Direccion',
  },
};
