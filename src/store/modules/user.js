import storage from 'store'
import { login, getInfo } from '@/api/login'
import { ACCESS_TOKEN, USER_NAME, USER_PASSWORD, USER_ENTITYNAME } from '@/store/mutation-types'
import store from '@/store'
const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {},
    unitName: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_UNITNAME: (state, unitName) => {
      state.unitName = unitName
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response
          sessionStorage.setItem('token', result.data[0].token)
          storage.set(ACCESS_TOKEN, result.data[0].token, 7 * 24 * 60 * 60 * 1000)
          const info = result.data[0].result[0]
          storage.set(USER_NAME, info.account)
          storage.set(USER_PASSWORD, info.password)
          storage.set(USER_ENTITYNAME, info.unitName)
          sessionStorage.setItem('role', info.role)
          sessionStorage.setItem('unitName', info.unitName)
          commit('SET_ROLES', info.role)
          commit('SET_TOKEN', result.token) // 保存token
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      const data = {
        entityName: storage.get(USER_ENTITYNAME),
        password: storage.get(USER_PASSWORD),
        account: storage.get(USER_NAME)
      }
      console.log(data)
      return new Promise((resolve, reject) => {
        getInfo(data).then(response => {
          const result = response.data
          console.log(result)
          if (result.role) {
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_INFO', {})
      storage.remove(ACCESS_TOKEN)
      sessionStorage.setItem('token', '')
      store.dispatch('reset')
    }

  }
}

export default user
