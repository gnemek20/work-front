import Vue from 'vue'
import App from './App.vue'
import router from './router'

import functions from '@/scripts/functions.js'
Vue.use(functions)

import basic from '@/styles/basic.scss'
Vue.use(basic)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
