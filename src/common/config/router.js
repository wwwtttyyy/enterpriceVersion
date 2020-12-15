// import { Layout } from 'ant-design-vue'

// import HelloWorld from '@/components/HelloWorld'
let asyncRouter = [
  {
    path: '/',
    name: 'layout',
    meta: { role: ['admin'], title: 'home' },
    redirect: '/organization/index',
    component: 'main/index',
    children: [
      {
        path: '/organization/index',
        component: 'organization/index',
        meta: { role: ['admin'], title: '组织机构' },
        redirect: '/organization/unitInfo',
        children: [
          {
            // path: ''
            meta: { role: ['admin'], title: '单位信息' },
            component: 'organization/unitInfo/index'
          },
          {
            // path: ''
            meta: { role: ['admin'], title: '分公司信息' },
            component: 'organization/branchInfo/index'
          },
          {
            // path: ''
            meta: { role: ['admin'], title: '签章管理' },
            component: 'organization/signManage/index'
          },
          {
            // path: ''
            meta: { role: ['admin'], title: '工作账号' },
            component: 'organization/workAccount/index'
          },
          {
            // path: ''
            meta: { role: ['admin'], title: '改名记录' },
            component: 'organization/nameRecord/index'
          },
          {
            // path: ''
            meta: { role: ['admin'], title: '签章修改日志' },
            component: 'organization/signChangeRecord/index'
          }
        ]
      },
      {
        path: '/opDescribe/index',
        component: 'opDescribe/index',
        meta: { role: ['admin'], title: '操作说明' }
      },
      {
        path: '/organization/index',
        component: 'organization/index',
        meta: { role: ['worker'], title: 'wok' }
      }
    ]
  }
  // {
  //   path: '*', redirect: '/404', hidden: true
  // }
]
/**
 * 基础路由
 * @type { *[] }
 */
let constantRouter = [
  {
    path: '/login',
    name: 'login',
    component: 'login/index'
  },
  {
    component: 'login/register'
  }
  // { path: '*', redirect: '/login' }
]
let getRoute = function (routes) {
  // 生成路由详细信息
  // console.log('pp')
  createRoute(routes)
  return routes
}
// 自动生成路由
function createRoute(array) {
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
export const constantRouterMap = getRoute(constantRouter)
export const asyncRouterMap = getRoute(asyncRouter)
