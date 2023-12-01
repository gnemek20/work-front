import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const checkAuth = (sign) => (to, from, next) => {
  const VueSession = require('vue-session');
  const session = JSON.parse(window.localStorage.getItem(VueSession.key)) || {};
  const auth = session['id'] == undefined ? false : true;

  if (sign === auth) next();
  else next({path: '/signin', query: {beforePageLocation: to.path.replace(/\//g, '')}});
}

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('@/views/Landing.vue')
  },
  {
    path: '/signin',
    component: () => import('@/views/sign/In.vue')
  },
  {
    path: '/member',
    component: () => import('@/views/state/Member.vue'),
    beforeEnter: checkAuth(true)
  },
  {
    path: '/product',
    component: () => import('@/views/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
