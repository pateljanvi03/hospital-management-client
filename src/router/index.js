import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DoctorsView from '../views/DoctorsView.vue';
import DepartmentsView from '../views/DepartmentsView.vue';
import HospitalsView from '../views/HospitalsView.vue';
import PatientsView from '../views/PatientsView.vue';
import PatiensAppointmentsView from '../views/PatiensAppointmentsView.vue';
import UsersView from '../views/UsersView';
import axios from 'axios';

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
    component: DepartmentsView
  },
  {
    path: '/hospitals',
    name: 'hospitals',
    component: HospitalsView
  },
  {
    path: '/patients',
    name: 'patients',
    component: PatientsView
  },
  {
    path: '/patientAppointment',
    name: 'patientAppointment',
    component: PatiensAppointmentsView
  },
  {
    path: '/user',
    name: 'user',
    component: UsersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((req, res, next) => {
  if(!localStorage.getItem("authToken")) {
    if(req.path === "/login") {
      return next();
    }
    return next({name: "login"});

  }
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("authToken");
  next();
})
export default router;
