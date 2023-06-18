<template>
  <div>
    <h1>Portfolio</h1>
    <ds-icon />
  </div>
</template>

<script lang="ts" setup>
import DsIcon from '@/components/dsIcon/DsIcon.vue';
</script>

<style lang="scss" scoped>
@import '@/styles';

html {
  * {
    font-family: $font-family-default;
    color: $color-text-dark;
  }
}

body {
  font-family: $font-family-default;
}
</style>
