
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import util from './helper/util.js'


Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(util)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})













