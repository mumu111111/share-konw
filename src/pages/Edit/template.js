import blog from '../../api/blog'
export default {
    data() {
        return {
            title: '',
            description: '',
            content: '',
            atIndex: false,
            blogId: ''
        }
    },
    created() {
        this.blogId = this.$route.params.blogId  //对router配置中的url设定
        blog.getDetail({ blogId: this.blogId })
            .then(res => {
                this.title = res.data.title
                this.description = res.data.description
                this.content = res.data.content
                this.atIndex = res.data.atIndex
            })
    },
    methods: {
        onEdit() { //更新修改内容  
            blog.updateBlog({ blogId: this.blogId }, { title: this.title, description: this.description, content: this.content, atIndex: this.atIndex })
                .then(res => {
                    this.$message.success(res.msg)
                    this.$router.push({ path: `/detail/${this.blogId}` })
                })
        }
    }
}