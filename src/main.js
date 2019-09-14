
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import {store} from './store'

Vue.config.productionTip = false


Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})













