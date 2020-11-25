import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局配置文件
import $conf from './common/config/config'
import store from './store'
Vue.prototype.$conf = $conf
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Antd)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
