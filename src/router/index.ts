import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/#about',
      name: 'About',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/#skills',
      name: 'Skills',
      component: () => import('../views/SkillsPage.vue'),
    },
    {
      path: '/#projects',
      name: 'Projects',
      component: () => import('../views/ProjectsPage.vue'),
    },
    {
      path: '/#experience',
      name: 'Experience',
      component: () => import('../views/ExperiencePage.vue'),
    },
    {
      path: '/#hobbies',
      name: 'Hobbies',
      component: () => import('../views/HobbiesPage.vue'),
    },
    {
      path: '/#contact',
      name: 'Contact',
      component: () => import('../views/ContactPage.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
