import { createRouter, createWebHistory } from 'vue-router'
import BobF from '../views/BobF.vue'
import Main from '../views/Main'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/BobF',
    name: 'BobF',
    component: BobF
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router