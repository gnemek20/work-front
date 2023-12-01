import axios from 'axios';
import router from '@/router/index.js';

const address = 'http://localhost:3000';

export default {
  install(Vue) {
    Vue.prototype.$reload = functions.reload;
    Vue.prototype.$push = functions.push;
    Vue.prototype.$query = functions.query;
    Vue.prototype.$get = functions.get;
    Vue.prototype.$post = functions.post;
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
  },
  get: (location) => {
    return axios.get(`${address}${location}`);
  },
  post: (location, form) => {
    return axios.post(`${address}${location}`, form);
  }
}