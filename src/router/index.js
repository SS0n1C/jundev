import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JavaScript from '../views/JavaScript.vue'

const routes = [
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'JavaScript',
    component: () => import('../views/JavaScript.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
