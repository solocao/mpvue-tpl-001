/**
 * number store
 */

const state = {
  count: 2
}

const getters = {
  countComputed (state) {
    return `count getters ${state.count}`
  }
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

const actions = {
  increment ({ commit }) {
    commit('increment')
  },
  decrement ({ commit }) {
    commit('decrement')
  }
}

// 导出默认，带有命名空间
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
