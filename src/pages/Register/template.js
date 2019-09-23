import { mapActions } from 'vuex'
export default {
    data() {
        return {
            username: '',
            password: '',
            usernameError: false,  //管理提示信息显示与否
            passwordError: false,
            usernameMessage: '',
            passwordMessage: ''
        }
    },
    created() {

    },
    methods: {
        ...mapActions([//引入vuex中的方法，建立起联系 ，与state数据相关操作直接修改state
            'register'
        ]),
        onRegister() { //点击注册按钮
            if (this.username == '') {
                this.username = true
                this.usernameMessage = '用户名不能为空'
            }

            if (this.password == '') {
                this.password = true
                this.passwordMessage = '密码不能为空'
            }

            this.register({ username: this.username, password: this.password })
                .then(() => {
                    this.$router.push({ path: '/' }) //注册流程结束后，跳转到首页， 当然首页肯定就会根据当前的login情况 去确定显示哪个header
                })

        },
        clearMessage() { //一修改，提示信息消失
            this.userError = false
            this.passwordError = false

        }

    }
}