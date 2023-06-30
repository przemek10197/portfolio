import type { Meta, StoryObj } from '@storybook/vue3';

import DsTimeline from './DsTimeline.vue';

const timelineSteps = [
  {
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    title: 'Title 3',
    description: 'Description 3',
  },
];

const meta = {
  title: 'UI-Elements/DsTimeline',
  component: DsTimeline,
  tags: ['autodocs'],
} satisfies Meta<typeof DsTimeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TimelineDefault: Story = {
  args: {
    steps: timelineSteps,
  },
};

export const TimelineEnded: Story = {
  args: {
    steps: timelineSteps,
    isTimelineEnded: true,
  },
};
