import axios from 'axios'
import store from '@/store'

const request = axios.create({
  timeout: 5000,
  baseURL: 'http://toutiao.itheima.net'
})
// 请求拦截器
// config 是每一次请求的配置对象
request.interceptors.request.use(
  function (config) {
    // 每一次发请求都会执行
    // config ：本次请求的配置对象
    // config 里面有一个属性：headers
    // 登陆了，所有的请求都会加上Authorization
    const {
      getters: { isLogin },
      state: { tokenObj }
    } = store
    if (isLogin) {
      config.headers.Authorization = `Bearer ${tokenObj.token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
