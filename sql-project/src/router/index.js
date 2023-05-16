import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/CooksView',
      name: 'CooksView',
      component: () => import('../views/CooksView.vue')
    },
    {
      path: '/GardenersView',
      name: 'GardenersView',
      component: () => import('../views/GardenersView.vue')
    },
    {
      path: '/HousekeepersView',
      name: 'HousekeepersView',
      component: () => import('../views/HousekeepersView.vue')
    },
    {
      path: '/loginView',
      name: 'loginView',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/SignUpView',
      name: 'SignUpView',
      component: () => import('../views/SignUpView.vue')
    },
  ]
})

export default router
