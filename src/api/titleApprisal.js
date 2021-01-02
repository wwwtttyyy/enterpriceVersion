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
function setsubmitReview (body) {
  return request({
    url: '/unit/submitReview',
    method: 'post',
    data: body,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
const getsubmitReview = (params) => {
  return get('/unit/getsubmitReview?' + qs.stringify(params))
}
function updatesubmitReview (body) {
  return request({
    url: '/unit/updatesubmitReview',
    method: 'put',
    data: body,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}

function updatedeclarestate (params) {
  return request({
    url: '/unit/appraisal/updatedeclarestate?' + qs.stringify(params),
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token
    }
  })
}
export {
  setBasicInfo,
  getDeclare,
  updatedeclarestate,
  setsubmitReview,
  getsubmitReview,
  updatesubmitReview
}
