<template>
  <div>
    <h3>navbar</h3>
    <about-page />
    <skills-page />
    <projects-page />
    <experience-page />
    <hobbies-page />
    <!-- <contact-page /> -->
  </div>
</template>

<script lang="ts" setup>
import AboutPage from '@/views/AboutPage.vue';
import SkillsPage from '@/views/SkillsPage.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';
import ExperiencePage from '@/views/ExperiencePage.vue';
import HobbiesPage from '@/views/HobbiesPage.vue';
// import ContactPage from '@/views/ContactPage.vue';
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
