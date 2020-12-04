import router from './router'
// import store from './store'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'
router.beforeEach((to, from, next) => {
  const token = storage.get(ACCESS_TOKEN) // 获取本地存储的登陆信息
  if (to.name === 'login') {
    // 判断是否进入的login页
    if (token) {
      // 判断是否登陆
      next({ name: 'a' }) // 已登录，跳转首页（a页面）
    } else {
      next() // 没登录，继续进入login页
    }
  } else {
    // 如果进入的非login页
    if (token) {
      // 同样判断是否登陆
      next() // 已登录，正常进入
    } else {
      next({ name: 'login' }) // 没登录，跳转到login页
    }
  }
})
