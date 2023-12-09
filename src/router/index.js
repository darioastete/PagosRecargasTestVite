import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
   {
     path: '/',
     component: ()=> import ('../views/RechargesView.vue'),
     meta: { transition: 'slide-left', title: 'Recargas y pagos' },
   },
   {
     path: '/recharges-payments',
     component: () => import('../views/RechargesPayments.vue'),
     meta: { transition: 'slide-right', title: 'Recargas' },
   },
  {
    path: '/404',
    component: () => import('../views/NotFoundPage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;
