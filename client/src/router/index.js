import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/addproduct',
    name: 'AddProductView',
    component: () => import('../components/AddProductComp.vue'),
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/card',
    name: 'CardView',
    component: () => import('../views/CardView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
