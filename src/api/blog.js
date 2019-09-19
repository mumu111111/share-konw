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
    //获取数据--基本款 涵盖所有包括各种状态的blogs
    getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(URLLIST.GET_LIST, 'GET', { page, userId, atIndex })
    },

    createBlog({ title = '', content = '', description = '', atIndex = false } = { title: '', content: '', description: '', atIndex: false }) {
        return request(URLLIST.CREATE, 'POST', { title, content, description, atIndex })
    },
    updataBlog({ blogId }, { title, content, description, atIndex }) {
        return request(URLLIST.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
    },
    deleteBlog({ blogId }) {
        return request(URLLIST.DELETE.replace(':blogId', blogId), 'DELETE');
    },
    //获取blogs -- 首页中 显示的blogs
    getIndexBlogs({ page = 1 } = { page: 1 }) {
        return this.getBlogs({ page, atIndex: true })  //为TRUE 为只获取显示在首页设置的
    },
    //获取blogs -- 查找userid的
    getBlogsByUserId({ page = 1, userId, atIndex } = { page: 1 }) {
        return this.getBlogs({ page, atIndex, userId })
    },
    getDetail({ blogId }) {
        return request(URLLIST.GET_DETAIL.replace(':blogId', blogId));
    }



}

//根据需求 设计接口和 不同功能块