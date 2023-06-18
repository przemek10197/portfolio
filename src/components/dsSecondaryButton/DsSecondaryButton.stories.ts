import type { Meta, StoryObj } from '@storybook/vue3';

import DsSecondaryButton from './DsSecondaryButton.vue';

const meta = {
  title: 'Buttons/DsSecondaryButton',
  component: DsSecondaryButton,
  tags: ['autodocs'],
} satisfies Meta<typeof DsSecondaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecondaryButtonCustom: Story = {
  args: {
    default: 'Button',
  },
};

export const SecondaryButtonWithIcon: Story = {
  args: {
    default: 'Button',
    icon: 'arrow_forward',
  },
};
