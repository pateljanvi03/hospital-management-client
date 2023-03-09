import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './assets/main.css';
import VModal from 'vue-js-modal/dist/index.nocss.js';
import 'vue-js-modal/dist/styles.css';

Vue.use(VModal);

import { ValidationProvider, ValidationObserver  } from 'vee-validate/dist/vee-validate.full.esm';

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL || "http://localhost:5001";

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
