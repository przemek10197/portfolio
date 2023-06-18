<template>
  <span
    :class="['material-icons', 'icon']"
    :style="{ color: color, fontSize: `${size}px` }"
    >{{ icon }}</span
  >
</template>

<script setup lang="ts">
import { DsIconProps, DsIconSize } from './DsIcon.model';

withDefaults(defineProps<DsIconProps>(), {
  color: '#23A6F0',
  size: DsIconSize.M,
});
</script>

<style lang="scss" scoped>
.icon {
  cursor: default;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>
