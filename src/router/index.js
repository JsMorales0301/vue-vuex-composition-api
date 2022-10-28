import { createRouter, createWebHashHistory } from 'vue-router'
import characterRouter from '@/modules/characters/router/index'

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/characters',
    ...characterRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
