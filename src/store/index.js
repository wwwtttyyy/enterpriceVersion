import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
// 所有文件在此引入 相当于vuex的入口
export default new Vuex.Store({
  modules: {
    user
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
