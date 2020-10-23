import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/AuthPage.vue'
import authGuard from './authGuard'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/analytic',
    name: 'Analytic',
    beforeEnter : authGuard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyticPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
