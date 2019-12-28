import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$apiUrl = 'https://api.itschris.dev/api/v1';
function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (Math.floor(seconds / 31536000) >= 1) {
    return `${Math.floor(seconds / 31536000)} years ago`;
  }
  if (Math.floor(seconds / 2592000) >= 1) {
    return `${Math.floor(seconds / 2592000)} months ago`;
  }
  if (Math.floor(seconds / 86400) >= 1) {
    return `${Math.floor(seconds / 86400)} days ago`;
  }
  if (Math.floor(seconds / 3600) >= 1) {
    return `${Math.floor(seconds / 3600)} hours ago`;
  }
  if (Math.floor(seconds / 60) >= 1) {
    return `${Math.floor(seconds / 60)} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}

Vue.prototype.$timeAgo = timeSince;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
