import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import storage from 'store'
// 引入全局配置文件
import $conf from './common/config/config'
import store from './store'
Vue.prototype.$conf = $conf
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Antd)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const token = storage.get(ACCESS_TOKEN) // 获取本地存储的登陆信息
  // console.log(to.path)
  if (token) {
    if (to.path === '/login') {
      next()
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取info
          // console.log(res)
          next()
        }).catch(err => {
          console.log(err)
        })
      } else {
        next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    next('/login')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
