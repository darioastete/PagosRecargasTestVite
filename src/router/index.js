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

router.beforeEach((to, from) => {
  let title = to.meta?.title ?? 'Default Title';
  document.title = `${title} - Culqi`
})

export default router;
