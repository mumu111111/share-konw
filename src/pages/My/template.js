import blog from '../../api/blog.js'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0,
            userId: '', //接受路由参数
            month: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        }
    },
    computed: {
        ...mapGetters(['user'])
    },

    created() { //开始没有路径导向这个页面 所以不能再路由获取userid  用vuex获取
        this.userId = this.user.id
        this.page = parseInt(this.$route.query.page) || 1  //万一当前page不是1 呢
        blog.getBlogsByUserId(this.userId, { page: this.page })
            .then(res => {
                this.blogs = res.data
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
                    this.$router.push({ path: '/my', query: { page: newPage } })
                })
        },
        async onDelete(blogId) {
            await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            await blog.deleteBlog({ blogId });
            this.$message.success('删除成功!');
            this.blogs = this.blogs.filter((blog) => blog.id != blogId);
        }
    }
}