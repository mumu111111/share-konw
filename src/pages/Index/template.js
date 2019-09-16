import blog from '../../api/blog' //返回对象，可调用对象的任意方法

export default {
    data() { //页面要用到的数据
        return {
            blogs: [],
            loading: false,
            total: 0,  // page组件需要total page数据
            page: 1
        }
    },
    created() { //一切换到这个页面做什么呢(初始化数据（赋值） 请求数据操作、  获取路由url信息 )
        this.loading = true
        this.page = parseInt((this.$route.query.page) || 1)
        blog.getIndexBlogs({ page: this.page })  //获取当前页的数据显示
            .then(res => {
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.loading = false //获取完成后可以直接结束loading

            })


    },
    methods: { // 用户操作事件
        onchangePage(newPage) {
            blog.getIndexBlogs({ page: newPage })
                .then(res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    this.$router.push({ path: '/', query: { page: newPage } })

                })
        }
    }
}
