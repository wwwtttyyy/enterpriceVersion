// import axios from 'axios'
import request from '@/api/request'
import qs from 'qs'

// const baseUrl = 'http://localhost:7001'
const token = sessionStorage.getItem('token')

const setBasicInfo = (data) => {
  return request({
    url: '/user/setBasicInfo',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
function get (api) {
  return request({
    url: api,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
const getDeclare = (params) => {
  return get('/unit/appraisal/getdeclare?' + qs.stringify(params))
}
export {
  setBasicInfo,
  getDeclare
}
