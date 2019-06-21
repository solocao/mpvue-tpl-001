import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import config from '../config'

const fly = new Fly()
const host = config.api.host

// 添加请求request拦截器
fly.interceptors.request.use((request) => {
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data// 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失败'
    }
  }
)

fly.config.baseURL = host

export default fly

// 通用的get请求
export const get = (params) => {
  const headers = {}

  return fly.get(`${host}${params.url}`, qs.stringify(params.payload), { headers })
}

// 通用的post请求
export const post = (params) => {
  const headers = {}

  return fly.post(`${host}${params.url}`, params.payload, { headers })
}
