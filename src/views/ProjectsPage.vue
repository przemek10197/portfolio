<template>
  <section
    id="projects"
    class="section-page"
  >
    <h1>Projects</h1>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useScrollBehaviour } from '@/utils/scroll.composable';

const router = useRouter();
useScrollBehaviour(router);
</script>

<style lang="scss" scoped></style>
