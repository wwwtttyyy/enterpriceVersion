import axios from 'axios'
// import storage from 'store'
// eslint-disable-next-line no-unused-vars
import request from '@/api/request'
import qs from 'qs'
// import { ACCESS_TOKEN } from '@/store/mutation-types'
const baseUrl = 'http://localhost:7001'
// const token = storage.get(ACCESS_TOKEN)
const token = sessionStorage.getItem('token')

const login = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/unitLogin',
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
      url: baseUrl + '/unitLogin/register',
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
    url: '/unitLogin/getInfo?' + qs.stringify(data),
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}

const setLoginAccount = (body) => {
  return request({
    url: '/setLoginAccount',
    method: 'post',
    data: body,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      // Authorization: 'Bearer ' + token
    }
  })
}
const delLoginAccount = (key) => {
  return request({
    url: '/delLoginAccount?account=' + key,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}

export {
  login,
  register,
  getInfo,
  setLoginAccount,
  delLoginAccount
}
