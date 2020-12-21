// import { Layout } from 'ant-design-vue'

// import HelloWorld from '@/components/HelloWorld'
let asyncRouter = [
  {
    path: '/',
    name: 'layout',
    meta: { role: ['unit', 'worker'], title: 'home' },
    redirect: {name: 'index'},
    component: 'main/index',
    children: [
      {
        path: '/organization/index',
        name: 'index',
        component: 'organization/index',
        meta: { role: ['unit'], title: '组织机构' },
        redirect: '/organization/unitInfo',
        children: [
          {
            // path: ''
            meta: { role: ['unit'], title: '单位信息' },
            component: 'organization/unitInfo/index'
          },
          {
            // path: ''
            meta: { role: ['unit'], title: '分公司信息' },
            component: 'organization/branchInfo/index'
          },
          {
            // path: ''
            meta: { role: ['unit'], title: '签章管理' },
            component: 'organization/signManage/index'
          },
          {
            // path: ''
            meta: { role: ['unit'], title: '工作账号' },
            component: 'organization/workAccount/index'
          },
          {
            // path: ''
            meta: { role: ['unit'], title: '改名记录' },
            component: 'organization/nameRecord/index'
          },
          {
            // path: ''
            meta: { role: ['unit'], title: '签章修改日志' },
            component: 'organization/signChangeRecord/index'
          }
        ]
      },
      {
        path: '/opDescribe/index',
        component: 'opDescribe/index',
        meta: { role: ['unit'], title: '操作说明' }
      },
      {
        path: '/titleAppraisal/index',
        component: 'titleAppraisal/index',
        name: 'index',
        meta: { role: ['worker'], title: '职称评审' },
        redirect: 'titleAppraisal/todo/titleAppraisal',
        children: [
          {
            // path: ''
            meta: { role: ['worker'], title: '职称认定' },
            component: 'titleAppraisal/todo/titleIdentified'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '职称评审' },
            component: 'titleAppraisal/todo/titleAppraisal'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '重新确认' },
            component: 'titleAppraisal/todo/confirm'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '遗失补办' },
            component: 'titleAppraisal/todo/lostFor'
          }
        ]
      },
      {
        path: '/unitApproval/index',
        component: 'unitApproval/index',
        name: 'index',
        meta: { role: ['worker'], title: '' },
        redirect: 'unitApproval/user/basicInfo',
        children: [
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/basicInfo'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/education'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/mainExperience'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/talentMaterials'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/academic'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/performanceResult'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/performanceReward'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/performancePatent'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/qualification'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/researchMaterial'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/otherMaterial'
          },
          {
            meta: { role: ['worker'], title: '' },
            component: 'unitApproval/user/jobSummary'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '主管单位意见' },
            component: 'unitApproval/unit/mainUnit'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '基层单位考核推荐意见' },
            component: 'unitApproval/unit/basicUnit'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '任职期满任职期考核结果' },
            component: 'unitApproval/unit/score'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '公示情况' },
            component: 'unitApproval/unit/public'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '单位审议小组审议推荐意见' },
            component: 'unitApproval/unit/reviewTeam'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '专家鉴定意见' },
            component: 'unitApproval/unit/expertOpinion'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '答辩情况' },
            component: 'unitApproval/unit/defense'
          },
          {
            // path: ''
            meta: { role: ['worker'], title: '审核报送' },
            component: 'unitApproval/unit/submit'
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
