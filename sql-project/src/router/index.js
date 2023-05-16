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
      name: 'Cooks',
      component: () => import('../views/CooksView.vue')
    },
    {
      path: '/GardenersView',
      name: 'Gardeners',
      component: () => import('../views/GardenersView.vue')
    },
    {
      path: '/HousekeepersView',
      name: 'Housekeepers',
      component: () => import('../views/HousekeepersView.vue')
    },
    {
      path: '/loginView',
      name: 'Login',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/SignUpView',
      name: 'SignUp',
      component: () => import('../views/SignUpView.vue')
    },
  ]
})

export default router
