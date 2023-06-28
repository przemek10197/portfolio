<template>
  <div
    :class="['card', { 'card--with-shadow': isShadowVisible }]"
    :style="{ backgroundColor: cardBackgroundColor, color: cardTextColor }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { DsCardProps, DsCardType } from '@/components/dsCard/DsCard.model';

const props = withDefaults(defineProps<DsCardProps>(), {
  isShadowVisible: false,
  type: DsCardType.DARK,
});

const dsCardThemes = {
  [DsCardType.DARK]: {
    backgroundColor: '#25344F',
    color: '#FFFFFF',
  },
  [DsCardType.LIGHT]: {
    backgroundColor: '#FFFFFF',
    color: '#52627A',
  },
};

const cardBackgroundColor = computed((): string => {
  return (
    props.defaultBackgroundColor || dsCardThemes[props.type].backgroundColor
  );
});

const cardTextColor = computed((): string => {
  return props.defaultTextColor || dsCardThemes[props.type].color;
});
</script>

<style lang="scss" scoped>
@import '@/styles';

.card {
  padding: 8 * $spacing-unit;
  width: fit-content;
  border-radius: $border-radius;
  font-family: $font-family-default;

  &--with-shadow {
    box-shadow: $shadow-default;
  }
}
</style>
