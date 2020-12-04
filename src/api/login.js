import axios from 'axios'
import storage from 'store'
// eslint-disable-next-line no-unused-vars
import request from '@/api/request'
import qs from 'qs'
import { ACCESS_TOKEN } from '@/store/mutation-types'
const baseUrl = 'http://localhost:7001'
const token = storage.get(ACCESS_TOKEN)
const login = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/login',
      method: 'post',
      data: data,
      headers: {
        'content-Type': 'application/json'
      }
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((res) => {
        reject(res)
      })
  })
}
const register = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/login/register',
      method: 'post',
      data: data,
      headers: {
        'content-Type': 'application/json'
      }
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((res) => {
        reject(res)
      })
  })
}

const getInfo = (data) => {
  return request({
    url: '/login/getInfo?' + qs.stringify(data),
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}

// const getInfo = (data) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       url: baseUrl + '/login/getInfo?' + qs.stringify(data),
//       method: 'get',
//       headers: {
//         'content-Type': 'application/json',
//         Authorization: 'Bearer ' + token
//       }
//     })
//       .then((res) => {
//         resolve(res.data)
//       })
//       .catch((res) => {
//         reject(res)
//       })
//   })
// }

export {
  login,
  register,
  getInfo
}
