import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/template',
      component: () => import('@/template/index.vue'),
    },
    {
      path: '/llm',
      component: () => import('@/presentations/llm/index.vue'),
    },
    {
      path: '/ai-tools',
      component: () => import('@/presentations/ai-tools/index.vue'),
    },
  ],
})

export default router
