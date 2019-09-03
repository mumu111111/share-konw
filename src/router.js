import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./pages/Index/template.vue')
    },
    {
      path: '/my',
      component: () => import('./pages/My/template.vue')
    },
    {
      path: '/user/:userId',
      component: () => import('./pages/User/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('./pages/Detail/template.vue')
    },
    {
      path: '/login',
      component: () => import('./pages/Login/template.vue')
    },
    {
      path: '/register',
      component: () => import('./pages/Register/template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('./pages/Edit/template.vue')
    },
    {
      path: '/create',
      component: () => import('./pages/Create/template.vue')
    }
  ]
})
