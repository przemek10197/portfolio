<template>
  <button
    class="main-button"
    @click="emit('click', $event)"
  >
    <span><slot /></span>
    <ds-icon
      v-if="icon"
      :icon="icon"
      color="#FFFFFF"
      :size="DsIconSize.XS"
      class="main-button__icon"
    />
  </button>
</template>

<script setup lang="ts">
import { DsIconSize } from '../dsIcon/DsIcon.model';
import DsIcon from '../dsIcon/DsIcon.vue';
import { DsMainButtonProps, DsMainButtonEmits } from './DsMainButton.model';

defineProps<DsMainButtonProps>();

const emit = defineEmits<DsMainButtonEmits>();
</script>

<style lang="scss" scoped>
@import '@/styles';

.main-button {
  background-color: $color-main;
  border: none;
  border-radius: $border-radius;
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

  * {
    cursor: pointer;
  }

  &__icon {
    margin-left: 6px;
    margin-right: -2px;
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: $color-main-dark;

    .main-button__icon {
      transform: translateX(2px);
    }
  }
}
</style>
