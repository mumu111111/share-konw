import { mapActions } from 'vuex'
export default {
    data() {
        return {
            username: '',
            password: '',
            userError: false,  //管理提示信息显示与否
            passwordError: false,
            usernameMessage: '',
            passwordMessage: ''
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'login'
        ]),
        onLogin() {
            if (this.username == '') {
                this.username = true
                this.usernameMessage = '用户名不能为空'
            }

            if (this.password == '') {
                this.password = true
                this.passwordMessage = '密码不能为空'
            }

            this.login({ username: this.username, password: this.password })
                .then(() => {
                    this.$router.push({ path: this.$route.query.redirect || '/' })
                })

        },
        clearMessage() {
            if (!this.userError) return
            this.userError = false
            this.passwordError = false

        }

    }
}