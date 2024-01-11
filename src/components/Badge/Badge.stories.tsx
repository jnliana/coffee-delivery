import { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeClass } from '.';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    namingClass: {
      control: {
        type: 'select',
        options: [BadgeClass.light, BadgeClass.primary, BadgeClass.secondary],
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Traditional',
  },
};
export const Primary: Story = {
  args: {
    label: 'Traditional',
    namingClass: BadgeClass.primary,
  },
};
export const Secondary: Story = {
  args: {
    label: 'Traditional',
    namingClass: BadgeClass.secondary,
  },
};
export const Light: Story = {
  args: {
    label: 'Traditional',
    namingClass: BadgeClass.light,
  },
};
