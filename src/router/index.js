import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DoctorsView from '../views/DoctorsView.vue';
import DepartmentView from '../views/DepartmentView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorsView,
  },
  {
    path: '/departments',
    name: 'departments',
    component: DepartmentView
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
