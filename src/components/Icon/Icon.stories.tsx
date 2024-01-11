import { StoryObj, Meta } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Design System/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'bank',
          'bill',
          'box',
          'cart',
          'card',
          'clock',
          'coffee',
          'locationOutline',
          'location',
          'minus',
          'money',
          'plus',
          'trash',
        ],
      },
    },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'money',
    size: 30,
    'aria-hidden': false,
  },
};
