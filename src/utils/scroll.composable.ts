import { onMounted, onUnmounted } from 'vue';
import type { Router } from 'vue-router';

export function useScrollBehaviour(router: Router) {
  const handleScroll = (): void => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    for (const section of sections) {
      const sectionId = section.getAttribute('id');
      const sectionOffset = section.offsetTop;

      if (scrollY >= sectionOffset && scrollY < sectionOffset + windowHeight) {
        router.replace(`#${sectionId}`);
        break;
      }
    }
  };

  const handleHashChange = (): void => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('hashchange', handleHashChange);
  });
}
