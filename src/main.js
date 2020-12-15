import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { ACCESS_TOKEN } from '@/store/mutation-types'
// import storage from 'store'
// 引入全局配置文件
import $conf from './common/config/config'
import store from './store'
Vue.prototype.$conf = $conf
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Antd)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  // const token = storage.get(ACCESS_TOKEN) // 获取本地存储的登陆信息
  // console.log(token)
  // console.log(token2)
  if (token) {
    if (to.path === '/login') {
      next()
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取info
          const role = res.data.role
          store.dispatch('permission', { role }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            console.log(store.getters.addRouters[0].children)
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
          // next()
        }).catch(err => {
          console.log(err)
        })
      } else {
        next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (to.path === '/login' || to.path === '/login/register') { // 如果是登录页面的话，直接next()
      next()
    } else { // 否则 跳转到登录页面
      console.log('else')
      next({
        path: '/login'
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
