<template>
  <section
    id="about"
    class="section-page"
  >
    <p class="section-page__header">Przemysław Taźbirek</p>
    <p class="section-page__subheader">Frontend Developer</p>
    <ds-card class="section-page__footer">
      <a
        v-for="(social, index) in socials"
        :key="`social-media-${index}`"
        :href="social.href"
      >
        <img
          :alt="social.alt"
          :src="social.src"
          class="section-page__footer__icon"
        />
      </a>
    </ds-card>
    <img
      alt="Profile picture"
      :src="profilePicture"
      class="section-page__img"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import profilePicture from '@/assets/cv.jpg';
import iconFacebook from '@/assets/icons/facebook.png';
import iconInstagram from '@/assets/icons/instagram.png';
import iconLinkedin from '@/assets/icons/linkedin.png';
import iconGithub from '@/assets/icons/github.png';
import { DsCard } from '@/components';
import { useScrollBehaviour } from '@/utils/scroll.composable';
import { SocialMediaIconsConfiguration } from '@/models/icons.model';

const router = useRouter();
useScrollBehaviour(router);

const socials = computed((): SocialMediaIconsConfiguration[] => {
  return [
    {
      href: '/',
      src: iconGithub,
      alt: 'Github logo',
    },
    {
      href: '/',
      src: iconLinkedin,
      alt: 'Linkedin logo',
    },
    {
      href: '/',
      src: iconFacebook,
      alt: 'Facebook logo',
    },
    {
      href: '/',
      src: iconInstagram,
      alt: 'Instagram logo',
    },
  ];
});
</script>

<style lang="scss" scoped>
@import '@/styles';

$section-height: 500px;
$img-size: 360px;
$img-size-tablet: 300px;
$img-size-mobile: 200px;
$section-offset: 100px;
$section-vertical-offset: 60px;
$footer-icon-size: 35px;

.section-page {
  height: $section-height;
  background-color: $color-dark;
  color: $color-white;
  position: relative;

  @include tablet-landscape {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }

  &__header {
    margin-top: 0;
    margin-left: $section-offset;
    padding-top: 2 * $section-vertical-offset;
    font-size: $font-size-title;
    font-weight: $font-weight-bold;

    @include tablet-landscape {
      padding-top: 3 * $section-offset;
      text-align: center;
      margin-left: 0;
      font-size: $font-size-title-mobile;
    }
  }

  &__subheader {
    margin-left: $section-offset + 4 * $spacing-unit;
    font-size: $font-size-subtitle;

    @include tablet-landscape {
      text-align: center;
      margin-left: 0;
      font-size: $font-size-subtitle-mobile;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: $section-offset;
    width: $img-size;
    height: $img-size;
    border-radius: $img-size;
    object-fit: cover;
    object-position: 0 20%;
    box-shadow: $shadow-light;

    @include tablet-landscape {
      width: $img-size-mobile;
      height: $img-size-mobile;
      top: 10 * $spacing-unit;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__footer {
    position: absolute;
    bottom: 2 * $section-vertical-offset;
    left: $section-offset;
    display: flex;
    align-items: center;
    gap: 10 * $spacing-unit;
    opacity: 0.9;
    padding: $spacing-unit 5 * $spacing-unit;
    border-radius: $border-radius;
    box-shadow: $shadow-light;

    @include tablet-landscape {
      bottom: -2px;
      left: 0;
      width: 100%;
      padding: 0;
      margin: 0;
      gap: 2 * $spacing-unit;
      height: 15 * $spacing-unit;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      justify-content: space-around;
    }

    &__icon {
      width: $footer-icon-size;
      transition: all 0.2s ease;

      &:hover {
        transform: rotate(6deg);
      }
    }
  }
}
</style>
