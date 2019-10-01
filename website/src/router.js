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
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    },
    {
      path: '/NewYear',
      name: 'NYD',
      component: () => import(/* webpackChunkName: "NYD" */ './views/NewYear.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "notfound" */ './views/Notfound.vue')

    }
  ]
})
