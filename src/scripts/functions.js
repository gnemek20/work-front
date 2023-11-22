import router from '@/router/index.js';

export default {
  install(Vue) {
    Vue.prototype.$reload = functions.reload;
    Vue.prototype.$push = functions.push;
    Vue.prototype.$query = functions.query;
  }
}

export const functions = {
  reload: () => {
    return router.go();
  },
  push: (location) => {
    return router.push(location).catch(() => {});
  },
  query: (location, query) => {
    return router.push({path: location, query: query}).catch(() => {});
  }
}