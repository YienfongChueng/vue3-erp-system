import request from '@/utils/request.js'

export const apiLogin = (params) => {
    return request({
        method:'post',
        url: '/itlove/login',
        data: params
    })
}

export const apiGetResources = () => {
    return request({
        method: 'get',
        url: '/getResources'
    })
}