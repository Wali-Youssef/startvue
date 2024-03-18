import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import projet1 from '@/components/projet1.vue'
import projet2 from '@/components/projet2.vue'
import projet3 from '@/components/projet3.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    // Add a new route here
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },

    {
      path: '/projet1',
      name: 'projet1',
      component: projet1
    },
    {
      path: '/projet2',
      name: 'projet2',
      component: projet2
    },
    {
      path: '/projet3',
      name: 'projet3',
      component: projet3
    }
  ]
})
router.afterEach(() => {
  // Faire défiler vers le haut de la page après chaque changement de route
  window.scrollTo({ top: 0, behavior: 'instant' }); // Utilisation de 'instant' pour un défilement instantané
});
export default router
