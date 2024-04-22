import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://calm-mountain-10484-296975bbfc99.herokuapp.com/', // 根据你的实际情况设置 baseURL
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，可以在请求头中添加身份验证信息
    const token = localStorage.getItem('x-auth-token')
    config.headers['x-auth-token'] = token
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response.status === 401) {
      // 如果是 401，跳转到登录页面
      window.location.href = '/login' // 假设登录页面的路径为 '/login'
    }
    return Promise.reject(error)
  }
)

export default instance
