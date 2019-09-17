import blog from '../../api/blog.js'
export default {
    data() {
        return {
            title: '',
            description: '',
            content: '',
            atIndex: false
        }
    },
    created() {

    },
    methods: {
        onCreate() {
            blog.createBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex })
                .then(res => {  //在创建一个文本时， res是一个表示当前现在的一个blog  的信息
                    this.$message.success(res.msg)
                    this.$router.push({ path: `/detail/${res.data.id}` })
                })
        }
    }
}