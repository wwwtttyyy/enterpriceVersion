import { asyncRouterMap } from '@/common/config/router'
const permission = {
  state: {
    addRouters: [],
    currentMenu: []
  },
  mutations: {
    SET_ASYNCROUTE: (state, asyncRoute) => {
      state.addRouters = asyncRoute
    },
    SET_CURRENTMENU: (state, menu) => {
      state.currentMenu = menu
    }
  },

  actions: {
    permission({commit}, role) {
      let routeArr = deepCopy(asyncRouterMap)
      const result = filterAsyncRoute(routeArr, role)
      // 生成主菜单
      const menu = createMenu(result)
      // console.log(menu)
      commit('SET_ASYNCROUTE', result)
      commit('SET_CURRENTMENU', menu)
    }
  }
}

function createMenu(route) {
  let temp = route[0].children
  console.log(temp)
  let list = temp.map(item => {
    const obj = {
      title: item.meta.title,
      path: item.path
    }
    return obj
  })
  return list
}

function filterAsyncRoute(routerMap, role) {
  const accessRouter = routerMap.filter(route => {
    if (route.meta.role.indexOf(role.role) >= 0) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRoute(route.children, role)
      }
      return true
    }
    return false
  })
  return accessRouter
}

// 数组的深拷贝
function deepCopy(arr) {
  return arr.map(arr => {
    arr = Object.assign({}, arr)
    return arr
  })
}

export default permission
