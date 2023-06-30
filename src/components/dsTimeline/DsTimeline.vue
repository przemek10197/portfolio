<template>
  <div class="timeline">
    <div
      v-for="(timelineStep, index) in steps"
      :key="`timeline-step-${index}`"
      class="timeline__element"
    >
      <div class="timeline__step">
        <ds-icon icon="radio_button_checked" />
        <div>
          <p class="timeline__step__title">{{ timelineStep.title }}</p>
          <p
            v-if="timelineStep.description"
            class="timeline__step__description"
          >
            {{ timelineStep.description }}
          </p>
        </div>
      </div>
      <div
        v-if="!(isTimelineEnded && index === steps.length - 1)"
        :class="[
          'timeline__line',
          {
            'timeline__line--short':
              index === steps.length - 1 && !isTimelineEnded,
          },
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DsIcon from '../dsIcon/DsIcon.vue';
import { DsTimelineProps } from './DsTimeline.model';

withDefaults(defineProps<DsTimelineProps>(), {
  isTimelineEnded: false,
});
</script>

<style lang="scss" scoped>
@import '@/styles';

.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  font-family: $font-family-default;

  &__element {
    width: 100%;
  }

  &__step {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6 * $spacing-unit;
    width: 100%;

    &__title {
      margin: 0;
      font-weight: $font-weight-bold;
      margin-bottom: 2 * $spacing-unit;
    }

    &__description {
      margin: 0;
    }
  }

  &__line {
    width: 1px;
    height: 20 * $spacing-unit;
    margin-left: 11px;
    background: $color-text-dark;

    &--short {
      height: 10 * $spacing-unit;
    }
  }
}
</style>
