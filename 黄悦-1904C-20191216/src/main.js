import Vue from 'vue'
import App from './App.vue'
import '../public/rem'
import router from './router/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.min.css'

import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
