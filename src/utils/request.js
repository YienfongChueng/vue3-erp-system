import axios from 'axios'
import {getToken} from '@/utils/auth.js'
const request = axios.create({
    baseURL: 'http://106.75.241.100:3103',
    timeout:1000
})
request.interceptors.request.use(config => {
    config.headers.token = getToken()
    return config
})

request.interceptors.response.use(response => {
    return response

},error => {
    Promise.reject(error)
})


export default request