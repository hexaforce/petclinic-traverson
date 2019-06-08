import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/totalproperty1',
      name: 'total1',
      component: () => import('./views/TotalProperty1.vue')
    },
    {
      path: '/totalproperty2',
      name: 'total2',
      component: () => import('./views/TotalProperty2.vue')
    },
    {
      path: '/instantpurchase',
      name: 'buy',
      component: () => import('./views/InstantPurchase.vue')
    },
    {
      path: '/helpconfig',
      name: 'setting',
      component: () => import('./views/HelpConfig.vue')
    }
  ]
})
