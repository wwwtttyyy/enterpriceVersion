// import axios from 'axios'
// import storage from 'store'
// eslint-disable-next-line no-unused-vars
import request from '@/api/request'
import qs from 'qs'
const token = sessionStorage.getItem('token')
const getBasicInfo = (params) => {
  return request({
    url: '/user/getBasicInfo?' + qs.stringify(params),
    method: 'get',
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
const getEduInfo = (params) => {
  return get('/user/getEduInfo?' + qs.stringify(params))
}
const getMainExpInfo = (params) => {
  return get('/user/getMainExpInfo?' + qs.stringify(params))
}
const getAcademicInfo = (params) => {
  return get('/user/getAcademicInfo?' + qs.stringify(params))
}
const getPerforResultInfo = (params) => {
  return get('/user/getPerforResultInfo?' + qs.stringify(params))
}
const getPerforRewardInfo = (params) => {
  return get('/user/getPerforRewardInfo?' + qs.stringify(params))
}
const getPerforPatentInfo = (params) => {
  return get('/user/getPerforPatentInfo?' + qs.stringify(params))
}
const getQualificateInfo = (params) => {
  return get('/user/getQualificateInfo?' + qs.stringify(params))
}
const getResearchMaterialInfo = (params) => {
  return get('/user/getResearchMaterialInfo?' + qs.stringify(params))
}
const getTalentMaterialInfo = (params) => {
  return get('/user/getTalentMaterialInfo?' + qs.stringify(params))
}
const getOtherMaterialInfo = (params) => {
  return get('/user/getOtherMaterialInfo?' + qs.stringify(params))
}
const getSummaryInfo = (params) => {
  return get('/user/getSummaryInfo?' + qs.stringify(params))
}
export {
  getEduInfo,
  getMainExpInfo,
  getBasicInfo,
  getAcademicInfo,
  getPerforResultInfo,
  getPerforRewardInfo,
  getPerforPatentInfo,
  getQualificateInfo,
  getResearchMaterialInfo,
  getTalentMaterialInfo,
  getOtherMaterialInfo,
  getSummaryInfo
}
