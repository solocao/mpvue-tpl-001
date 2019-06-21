// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
// 引入store modules
import number from './number'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { },
  getters: { },
  mutations: { },
  actions: { },
  modules: {
    number
  }
})

export default store
