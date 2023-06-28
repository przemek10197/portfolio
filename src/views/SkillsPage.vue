<template>
  <section
    id="skills"
    class="section-page"
  >
    <h1 class="section-page__title">Umiejętności</h1>
    <div class="section-page__content">
      <ds-card
        v-for="(skill, index) in skills"
        :key="`skill-${index}`"
        :type="DsCardType.LIGHT"
        :is-shadow-visible="true"
        class="card"
      >
        <p class="card__description">{{ skill.name }}</p>
        <div>
          <ds-icon
            v-for="(star, starIndex) in skill.fluency"
            :key="`${skill.name}-star-${starIndex}`"
            icon="star"
            :size="DsIconSize.S"
          />
        </div>
      </ds-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { DsCard, DsIcon } from '@/components';
import { DsCardType } from '@/components/dsCard/DsCard.model';
import { DsIconSize } from '@/components/dsIcon/DsIcon.model';
import { useScrollBehaviour } from '@/utils/scroll.composable';

enum SkillFluency {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

interface ISkill {
  name: string;
  fluency: SkillFluency;
}

const router = useRouter();
useScrollBehaviour(router);

const skills: ISkill[] = [
  {
    name: 'JavaScript',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'TypeScript',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'HTML 5',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'CSS',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'Vue.js',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'React.js',
    fluency: SkillFluency.LOW,
  },
  {
    name: 'SASS',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'Git',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'Storybook',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'WCAG',
    fluency: SkillFluency.HIGH,
  },
  {
    name: 'Webpack',
    fluency: SkillFluency.MEDIUM,
  },
  {
    name: 'Vite',
    fluency: SkillFluency.MEDIUM,
  },
  {
    name: 'Lodash',
    fluency: SkillFluency.MEDIUM,
  },
  {
    name: 'Figma',
    fluency: SkillFluency.LOW,
  },
  {
    name: 'Next.js',
    fluency: SkillFluency.MEDIUM,
  },
  {
    name: 'Pinia',
    fluency: SkillFluency.MEDIUM,
  },
];
</script>

<style lang="scss" scoped>
@import '@/styles';

.section-page {
  background-color: $color-white;

  &__title {
    font-size: $font-size-title;
    text-align: center;
  }

  &__content {
    margin: 0 5 * $spacing-unit;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3 * $spacing-unit;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      margin: 0 3 * $spacing-unit;
    }
  }
}

.card {
  width: auto;
  text-align: center;
  padding: 5 * $spacing-unit 0;
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(6deg);
  }

  &__description {
    margin-top: 0;
    margin-bottom: 2 * $spacing-unit;
  }
}
</style>
