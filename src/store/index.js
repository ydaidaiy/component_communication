import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: {
    id: '',
    name: '',
    age: ''
  }
}

const mutations = {
  UPDATE_USER (state, info) {
    state.userInfo = info
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
