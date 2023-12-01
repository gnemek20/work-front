import Vue from 'vue'
import App from './App.vue'
import router from './router'

import functions from '@/scripts/functions.js'
Vue.use(functions)

import basic from '@/styles/basic.scss'
import color from '@/styles/color.scss'
Vue.use(basic)
Vue.use(color)

import VueSession from 'vue-session'
const sessionOptions = {
  persist: true
}
Vue.use(VueSession, sessionOptions);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
