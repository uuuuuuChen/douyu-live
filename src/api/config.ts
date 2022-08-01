import axios from "axios"

export const baseURL = 'http://localhost:3030'

const axiosInstance = axios.create({
    baseURL
})

// 响应时拦截
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误')
    }
)

export { axiosInstance }