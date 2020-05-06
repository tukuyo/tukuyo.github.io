import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParallaxJs from 'vue-parallax-js'
import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('v-fa', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueParallaxJs)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
