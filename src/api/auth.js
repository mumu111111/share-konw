import request from '../helper/request.js'
const URLLIST = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    LOGINFO: '/auth'
}

export default {
    //注册
    // register({ username, password }) {
    //     return request(URLLIST.REGISTER, 'POST', { username, password })
    // },
    register({ username, password }) {
        return request(URLLIST.REGISTER, 'POST', { username, password });
    },
    //登录
    login({ username, password }) {
        return request(URLLIST.LOGIN, 'POST', { username, password })
    },
    //登出
    logout() {
        return request(URLLIST.LOGOUT)
    },
    loginfo() {
        return request(URLLIST.LOGINFO)
    }


}