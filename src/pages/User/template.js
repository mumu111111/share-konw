import blog from '../../api/blog.js'

export default {
    data() {
        return {
            blogs: [],
            user: {},
            createdAt: '',
            page: 1,
            total: ''
        }
    },
    created() {
        this.userId = this.$route.params.userId
        blog.getBlogsByUserId({ userId: this.userId })
            .then(res => {
                this.blogs = res.data.blogs
                this.user = res.data.user
                this.createdAt = res.createdAt
                this.page = res.page
                this.total = res.total

            })

    },
    methods: {

    }
}