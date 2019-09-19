import blog from '../../api/blog.js'

export default {
    data() {
        return {
            blogs: [],
            user: {},
            // createdAt: '',
            page: 1,
            total: 0,
            userId: '', //接受路由参数
            month: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']


        }
    },
    created() {
        this.userId = this.$route.params.userId
        this.page = parseInt(this.$route.query.page) || 1  //万一当前page不是1 呢
        blog.getBlogsByUserId(this.userId, { page: this.page })
            .then(res => {
                this.blogs = res.data
                // this.user = res.data.user
                // this.createdAt = res.createdAt
                this.page = res.page
                this.total = res.total
                res.data.length > 0 ? this.user = res.data[0].user : ''


            })

    },
    methods: {
        onchangePage(newPage) {
            blog.getBlogsByUserId(this.userId, { page: newPage })
                .then(res => {  //页面切换 影响显示内容 
                    this.blogs = res.data
                    this.page = res.page
                    this.total = res.total
                    res.data.length > 0 ? this.user = res.data[0].user : ''
                    this.$router.push({ path: `/user/${this.userid}`, query: { page: newPage } })
                })
        }
    }
}