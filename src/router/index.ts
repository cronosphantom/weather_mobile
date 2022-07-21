import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Layout from '../views/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'history-result',
        component: () => import('@/views/HistoryResult.vue')
      },
      {
        path: 'avg-result',
        component: () => import('@/views/AvgResult.vue')
      },
      {
        path: 'search-history',
        component: () => import('@/views/SearchHistory.vue')
      },
      {
        path: 'karma-buy-start',
        component: () => import('@/views/KarmaBuyStart.vue')
      },
      {
        path: 'karma-buy',
        component: () => import('@/views/KarmaBuy.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
