<template>
  <a
    class="link-button"
    :href="to"
    target="_blank"
  >
    <span><slot /></span>
    <ds-icon
      v-if="icon"
      :icon="icon"
      color="#FFFFFF"
      :size="DsIconSize.XS"
      class="link-button__icon"
    />
  </a>
</template>

<script setup lang="ts">
import { DsIconSize } from '../dsIcon/DsIcon.model';
import DsIcon from '../dsIcon/DsIcon.vue';
import { DsLinkButtonProps } from './DsLinkButton.model';

defineProps<DsLinkButtonProps>();
</script>

<style lang="scss" scoped>
@import '@/styles';

.link-button {
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
  width: fit-content;
  text-decoration: none;
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

    .link-button__icon {
      transform: translateX(2px);
    }
  }
}
</style>
