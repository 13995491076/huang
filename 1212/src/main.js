import Vue from 'vue'
import App from './App.vue'
import '../public/rem.js'
import store from './store/index'
import router from './router/index'

import axios from 'axios'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
