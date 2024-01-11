import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';
import { NamingClass } from './Button.types';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    classOption: {
      control: {
        type: 'select',
        options: [
          NamingClass.primary,
          NamingClass.secondary,
          NamingClass.lightPrimary,
          NamingClass.lightSecondary,
          NamingClass.default,
        ],
      },
    },
    colorIcon: { control: 'color' },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    classOption: NamingClass.primary,
    label: 'Label',
  },
};
export const Secondary: Story = {
  args: {
    classOption: NamingClass.secondary,
    label: 'Label',
  },
};

export const LightPrimary: Story = {
  args: {
    classOption: NamingClass.lightPrimary,
    label: 'Label',
  },
};

export const LightSecondary: Story = {
  args: {
    label: 'Label',
    classOption: NamingClass.lightSecondary,
  },
};

export const Default: Story = {
  args: {
    label: 'Label',
  },
};
