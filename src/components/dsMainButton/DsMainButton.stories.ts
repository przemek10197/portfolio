import type { Meta, StoryObj } from '@storybook/vue3';

import DsMainButton from './DsMainButton.vue';

const meta = {
  title: 'Buttons/DsMainButton',
  component: DsMainButton,
  tags: ['autodocs'],
} satisfies Meta<typeof DsMainButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainButtonCustom: Story = {
  args: {
    default: 'Button',
  },
};

export const MainButtonWithIcon: Story = {
  args: {
    default: 'Button With Icon',
    icon: 'arrow_forward',
  },
};
