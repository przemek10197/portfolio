<template>
  <section
    id="hobbies"
    class="section-page"
  >
    <h1>Hobbies</h1>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useScrollBehaviour } from '@/utils/scroll.composable';

const router = useRouter();
useScrollBehaviour(router);
</script>

<style lang="scss" scoped></style>
