// import axios from 'axios'

import request from '@/api/request'
// import qs from 'qs'
// const baseUrl = 'http://localhost:7001'
// const token = storage.get(ACCESS_TOKEN)
const token = sessionStorage.getItem('token')

const getUserInfo = (data) => {
  console.log(data)
  return request({
    url: '/unit/organization/getUserInfo?certificateNum=' + data,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
const getWorker = (unitName) => {
  return request({
    url: '/unit/organization/getWorker?unitName=' + unitName,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
const addWorker = (body) => {
  return request({
    url: '/unit/organization/addWorker',
    method: 'post',
    data: body,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
const modifyWorker = (body) => {
  return request({
    url: '/unit/organization/modifyWorker',
    method: 'put',
    data: body,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
export {
  getUserInfo,
  addWorker,
  getWorker,
  modifyWorker
}
