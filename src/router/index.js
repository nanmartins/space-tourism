// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/destination/:name',
        name: 'Destination',
        component: () => import('@/views/Destination.vue'),
      },
      {
        path: '/crew/:name',
        name: 'Crew',
        component: () => import('@/views/Crew.vue')
      },
      {
        path: '/technology/:name',
        name: 'Technology',
        component: () => import('@/views/Technology.vue')
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
