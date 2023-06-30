<template>
  <section
    id="experience"
    class="section-page"
  >
    <h1 class="section-page__title">Doświadczenie</h1>
    <ds-timeline
      :is-timeline-ended="true"
      :steps="experienceTimelineItems"
      class="section-page__timeline"
    />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { DsTimeline } from '@/components';
import { useScrollBehaviour } from '@/utils/scroll.composable';

const router = useRouter();
useScrollBehaviour(router);

const experienceTimelineItems = [
  {
    title: 'Billennium S.A. - Intern Frontend Developer (Vue.js / React.js)',
    description: '2019.06 - 2019.09',
  },
  {
    title: 'Billennium S.A. - E-learing Developer',
    description: '2020.01 - 2021.05',
  },
  {
    title: 'Billennium S.A. - Frontend Developer (Vue.js)',
    description: '2021.06 - obecnie',
  },
];
</script>

<style lang="scss" scoped>
@import '@/styles';

.section-page {
  @include mobile {
    margin: 0 40px;
  }

  &__title {
    text-align: center;
    font-size: $font-size-title;
    margin-bottom: 10 * $spacing-unit;

    @include tablet-landscape {
      font-size: $font-size-title-mobile;
    }
  }

  &__timeline {
    margin: 0 auto;
  }
}
</style>
