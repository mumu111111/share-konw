import blog from '../../api/blog.js'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

export default {
    data() {
        return {
            title: '',
            user: {},
            createdAt: '',
            blogId: 1,
            rawContent: ''
        }
    },
    created() {
        marked.setOptions({ //配置
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            escaped: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function (code, lang) {
                return hljs.highlightAuto(code).value;
            }
        });

        this.blogId = this.$route.params.blogId  //获取id  再通过id获取该id的文章
        blog.getDetail({ blogId: this.blogId })
            .then(res => {
                this.title = res.data.title
                this.rawContent = res.data.content
                this.user = res.data.user
                this.createdAt = res.data.createdAt
            })


    },
    computed: {// 内容变动才会执行
        markdown() { //markdown转换成html
            return marked(this.rawContent)
        }
    }
}