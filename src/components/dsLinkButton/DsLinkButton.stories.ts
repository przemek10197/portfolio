import type { Meta, StoryObj } from '@storybook/vue3';

import DsLinkButton from './DsLinkButton.vue';

const meta = {
  title: 'Buttons/DsLinkButton',
  component: DsLinkButton,
  tags: ['autodocs'],
} satisfies Meta<typeof DsLinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkButtonCustom: Story = {
  args: {
    default: 'Button',
    to: '/',
  },
};

export const LinkButtonWithIcon: Story = {
  args: {
    default: 'Button With Icon',
    icon: 'arrow_forward',
    to: '/',
  },
};
