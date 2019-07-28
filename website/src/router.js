import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () => import(/* webpackChunkName: "links" */ './views/Acquaintances.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "notfound" */ './views/Notfound.vue')

    }
  ]
})
