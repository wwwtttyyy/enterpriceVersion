// import axios from 'axios'
import request from '@/api/request'
// import qs from 'qs'

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

export {
  setBasicInfo
}
