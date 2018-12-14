import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://192.168.1.199:7001', // api的base_url
    timeout: 10000 // 请求超时时间
})

// request拦截器 添加请求头
// service.interceptors.request.use(config => {
//     config.headers['X-abn-session-token'] = "sssssssssss" // 让每个请求携带自定义token
//     return config
// }, error => {
//     // Do something with request error
//     console.error(error) // for debug
//     Promise.reject(error)
// })

axios.interceptors.response.use((data) => {
    // 数据统一校验处理
    return data
  }, (err) => {
     // 数据异常统一处理 例如
    if (err.response.status === 504 || err.response.status === 404) {
      alert('服务器被吃了')
    } else if (err.response.status === 403) {
      alert('权限不足,请联系管理员')
    } else {
      alert('未知错误')
    }
    return Promise.resolve(err)
  })

  export default service