import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParallaxJs from 'vue-parallax-js'

Vue.config.productionTip = false
Vue.use(VueParallaxJs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
