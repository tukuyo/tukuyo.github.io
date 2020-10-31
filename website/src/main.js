import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParallaxJs from 'vue-parallax-js'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('v-fa', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueParallaxJs)

Vue.use(VueI18n)
import { data } from '@/lib/lang/index.js'
const i18n = new VueI18n({
  locale: 'en', // デフォルト言語設定
  fallbackLocale: 'ja', // 選択中の言語に対応する文字列が存在しない場合はこの言語の文字列を使用する
  messages: data
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
