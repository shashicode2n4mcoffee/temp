import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'http://localhost:8080',
})

instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('====ERRROR====', error)
    return Promise.reject(error)
  }
)

export default instance
