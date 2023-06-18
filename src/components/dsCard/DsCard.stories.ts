import type { Meta, StoryObj } from '@storybook/vue3';

import DsCard from './DsCard.vue';
import { DsCardType } from './DsCard.model';

const meta = {
  title: 'UI-Elements/DsCard',
  component: DsCard,
  tags: ['autodocs'],
} satisfies Meta<typeof DsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardModeLight: Story = {
  args: {
    type: DsCardType.LIGHT,
    default: 'Card content',
  },
};

export const CardModeDark: Story = {
  args: {
    type: DsCardType.DARK,
    default: 'Card content',
  },
};

export const CardWithShadow: Story = {
  args: {
    type: DsCardType.LIGHT,
    isShadowVisible: true,
    default: 'Card content',
  },
};

export const CardWithDefaultColor: Story = {
  args: {
    default: 'Card content',
    defaultBackgroundColor: '#17594A',
    defaultTextColor: '#FFFFFF',
  },
};
