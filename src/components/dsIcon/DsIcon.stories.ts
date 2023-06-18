import type { Meta, StoryObj } from '@storybook/vue3';

import DsIcon from './DsIcon.vue';
import { DsIconSize } from './DsIcon.model';

const meta = {
  title: 'UI-Elements/DsIcon',
  component: DsIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof DsIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlueHomeIcon: Story = {
  args: {
    icon: 'home',
  },
};

export const BlackCloseIcon: Story = {
  args: {
    icon: 'close',
    color: '#000000',
  },
};

export const SmallSearchIcon: Story = {
  args: {
    icon: 'search',
    size: DsIconSize.XS,
  },
};
