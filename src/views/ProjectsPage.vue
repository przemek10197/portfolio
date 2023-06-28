<template>
  <section
    id="projects"
    class="section-page"
  >
    <h1 class="section-page__title">Projekty</h1>

    <p class="section-page__description">
      Doświadczenie projektowe.
      <br />
      Ze względów zachowania poufności nie wszystkie projekty mogą zostać
      ujawnione.
    </p>

    <div class="section-page__content">
      <ds-card
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        :type="DsCardType.LIGHT"
        class="section-page__card"
      >
        <img
          alt="project img"
          :src="project.img"
          class="section-page__card__img"
        />
        <component
          :is="projectButtonComponent(project)"
          class="section-page__card__button"
          :icon="project.link ? 'arrow_forward' : null"
          :to="project.link || null"
        >
          {{ project.name }}
        </component>
      </ds-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import eusWebpage from '@/assets/eus_page.png';
import webpageOutline from '@/assets/webpage-outline.jpg';
import { DsCard, DsLinkButton, DsMainButton } from '@/components';
import { DsCardType } from '@/components/dsCard/DsCard.model';
import { useScrollBehaviour } from '@/utils/scroll.composable';

interface IProject {
  name: string;
  img: string;
  link?: string;
}

const router = useRouter();
useScrollBehaviour(router);

const projects: IProject[] = [
  {
    name: 'e-Urząd Skarbowy',
    img: eusWebpage,
    link: 'https://urzadskarbowy.gov.pl',
  },
  {
    name: 'Projekt wewnętrzny w branży farmaceutycznej',
    img: webpageOutline,
  },
];

const projectButtonComponent = (project: IProject): any => {
  return project.link ? DsLinkButton : DsMainButton;
};
</script>

<style lang="scss" scoped>
@import '@/styles';

$section-height: auto;
$section-card-size: 400px;
$section-card-size-max: 600px;
$section-card-size-mobile: 800px;
$section-card-button-offset: 50px;

.section-page {
  height: $section-height;
  background-color: $color-dark;
  padding-bottom: 20 * $spacing-unit;

  &__title {
    padding-top: 5 * $spacing-unit;
    margin-bottom: 2 * $spacing-unit;
    text-align: center;
    color: $color-white;
    font-size: $font-size-title;

    @include tablet-landscape {
      font-size: $font-size-title-mobile;
    }
  }

  &__description {
    padding: 0 15 * $spacing-unit;
    margin-bottom: 15 * $spacing-unit;
    text-align: center;
    font-size: $font-size-l;

    @include tablet-landscape {
      margin-bottom: 0;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15 * $spacing-unit;
    grid-row-gap: 15 * $spacing-unit;
    margin: 5 * $spacing-unit 15 * $spacing-unit;

    @include tablet-landscape {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 5 * $spacing-unit;
    }

    @include mobile {
      width: auto;
    }
  }

  &__card {
    max-width: $section-card-size-max;
    width: 100%;
    height: $section-card-size;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    justify-self: center;

    @include tablet-landscape {
      width: $section-card-size;
    }

    @include mobile {
      width: 100%;
    }

    &:hover .section-page__card__button {
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
    }

    &:hover .section-page__card__img {
      transform: scale(1.1);
    }

    &__img {
      object-fit: contain;
      transition: transform 0.3s ease;

      @include mobile {
        opacity: 0.8;
      }
    }

    &__button {
      position: absolute;
      bottom: 10%;
      visibility: hidden;
      opacity: 0;
      margin: auto 10 * $spacing-unit;
      transition: all 0.4s ease;
      transform: translateY($section-card-button-offset);
      z-index: $card-overflow-index;

      @include mobile {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
