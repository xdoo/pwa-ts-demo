import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import { AxiosPlugin } from './plugins/axios';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import axios, { AxiosStatic } from 'axios';

Vue.config.productionTip = false;

// Plugins installieren
Vue.use(AxiosPlugin);
declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic;
  }
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
