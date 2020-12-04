// import { Layout } from 'ant-design-vue'

// import HelloWorld from '@/components/HelloWorld'
let routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/organization/index',
    component: 'main/index',
    children: [
      {
        path: '/organization/index',
        component: 'organization/index',
        redirect: '/organization/unitInfo',
        children: [
          {
            // path: ''
            component: 'organization/unitInfo/index'
          },
          {
            // path: ''
            component: 'organization/branchInfo/index'
          },
          {
            // path: ''
            component: 'organization/workAccount/index'
          }
        ]
      }
    ]
  }

]
/**
 * 基础路由
 * @type { *[] }
 */
let constant = [
  {
    path: '/login',
    name: 'login',
    component: 'login/index'
  },
  {
    component: 'login/register'
  },
  { path: '*', redirect: '/login' }
]
let getRoute = function () {
  // 生成路由详细信息
  console.log('pp')
  createRoute(routes)
  return routes
}
// 自动生成路由
function createRoute(array) {
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (!array[i].component) {
      return
    }
    // 去除index结尾
    let val = getstr(array[i].component)
    // 生成name值 shop/goods => shop_goods
    array[i].name = array[i].name || val.replace(/\//g, '_') // 如果存在 则使用，如果不存在 则自动生成
    // 生成path
    array[i].path = array[i].path || `/${val}`
    // 生成component
    let componentFun = import(`../../views/${array[i].component}.vue`)
    array[i].component = () => componentFun
    if (array[i].children && array[i].children.length > 0) {
      createRoute(array[i].children)
    }
  }
}
function getstr(str) {
  let index = str.lastIndexOf('/')
  let val = str.substring(index + 1, str.length)
  if (val === 'index') {
    return str.substring(index, -1)
  }
  return str
}
// export default getRoute()
export const constantRouterMap = getRoute(constant)
