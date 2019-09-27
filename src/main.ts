import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

// Plugins installieren
Vue.use(axios)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
