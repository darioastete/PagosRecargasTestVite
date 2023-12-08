import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
   {
     path: '/',
     component: ()=> import ('../views/RechargesView.vue')
   },
   {
     path: '/recharges-payments',
     component: () => import('../views/RechargesPayments.vue') 
   },
  // {
  //   path: '/404',
  //   component: () => import('../views/NotFoundPage.vue')
  // }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;
