import auth from './../api/auth'  //使用操作用户的方法

const state = {
    user: null,
    isLogin: false
}//管理用户信息和用户登录状态

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },
    setLogin(state, payload) {
        state.user = payload.isLogin
    }
}

const actions = {
    login({ commit }, { username, password }) {
        return auth.login({ username, password })
            .then(res => {
                commit('setUser', { user: res.data })
                commit('setLogin', { isLogin: true })
            })
    },
    async checkLogin({ commit, state }) {
        if (state.isLogin) return true
        let res = await auth.loginfo()
        commit('setLogin', { isLogin: res.isLogin })
        if (!state.isLogin) return false
        commit('setUser', { user: res.data })
        return true
    }




}

export default {
    state,
    getters,
    mutations,
    actions
}