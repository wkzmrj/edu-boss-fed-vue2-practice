import request from '@/utils/request'

export const getAdList = () => {
  return request({
    method: 'GET',
    url: '/boss/ad/getAdList'
  })
}
// 添加广告接口
export const saveOrUpdateAd = data => {
  return request({
    method: 'POST',
    url: '/boss/ad/saveOrUpdate',
    data
  })
}
// 所有广告位和对应广告接口
export const getAllAds = () => {
  return request({
    method: 'GET',
    url: '/boss/ad/getAllAds'
  })
}
