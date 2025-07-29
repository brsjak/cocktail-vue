import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cocktails',
      component: () => import('../features/cocktails/views/CocktailsView.vue'),
    },
  ],
})

export default router
