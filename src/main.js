import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import './assets/main.css'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL || "http://localhost:5001";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
