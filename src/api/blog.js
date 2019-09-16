import request from '../helper/request.js'

//所有接口
//每个操作对应不同接口 
const URLLIST = {
    GET_LIST: '/blog',
    GET_DETAIL: '/blog/:blogId',
    CREATE: '/blog',
    UPDATE: '/blog/:blogId',
    DELETE: '/blog/:blogId'
}//有些接口需要传参 ，指定具体的blog

export default {

    getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(url, 'GET', {})
    },

    createBlog({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(url, 'GET', {})
    },
    updateBlog({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(url, 'GET', {})
    },
    deleteBlog({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(url, 'GET', {})
    },
    getIndexBlogs({ page = 1 } = { page: 1 }) {
        return this.getBlogs({ page, atIndex: true })
    },
    getBlogsByUserId({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(url, 'GET', {})
    },
    getDetail() {
        return request(url, 'PATCH', {})
    }



}

//根据需求 设计接口和 不同功能块