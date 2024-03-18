import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import projet1 from '@/components/projet1.vue'
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
    }
  ]
})

export default router
