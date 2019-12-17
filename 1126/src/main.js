import Vue from 'vue'
import App from './App.vue'
import '../public/reset.css'
import router from './router'

import axios from 'axios'
Vue.prototype.$axios=axios;

import moment from 'moment'
Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 