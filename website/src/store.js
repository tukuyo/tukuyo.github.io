import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: "ja"
  },
  mutations: {
    changeLocale(state) {
      if(state.lang == "en") {
        state.lang = "ja";
      } else {
        state.lang == "en";
      }
    }
  },
  actions: {
    chLocale(context) {
      context.commit('changeLocale')
    }
  }
})
