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
      component: Home,
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      meta: { title: "Privacy & Policy| tukuyo's Web Site", desc: 'ディスクリプションを記述' },
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    },
    {
      path: '*',
      name: '404',
      meta: { title: '404 Not Found', desc: 'URLを確認してください' },
      component: () => import(/* webpackChunkName: "notfound" */ './views/Notfound.vue')

    }
  ]
})
