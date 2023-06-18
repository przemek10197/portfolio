<template>
  <button
    class="secondary-button"
    @click="emit('click', $event)"
  >
    <span><slot /></span>
    <ds-icon
      v-if="icon"
      :icon="icon"
      color="#FFFFFF"
      :size="DsIconSize.XS"
      class="secondary-button__icon"
    />
  </button>
</template>

<script setup lang="ts">
import { DsIconSize } from '../dsIcon/DsIcon.model';
import DsIcon from '../dsIcon/DsIcon.vue';
import {
  DsSecondaryButtonProps,
  DsSecondaryButtonEmits,
} from './DsSecondaryButton.model';

defineProps<DsSecondaryButtonProps>();

const emit = defineEmits<DsSecondaryButtonEmits>();
</script>

<style lang="scss" scoped>
@import '@/styles';

.secondary-button {
  background-color: $color-dark;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  padding: 4 * $spacing-unit 8 * $spacing-unit;
  font-family: $font-family-default;
  color: $color-white;
  font-weight: $font-weight-bold;
  font-size: $font-size-m;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: $spacing-unit;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &__icon {
    margin-left: 6px;
    margin-right: -2px;
    transition: all 0.2s ease;
  }

  &:hover {
    border: 1px solid #d2ecff;

    .secondary-button__icon {
      transform: translateX(2px);
    }
  }
}
</style>
