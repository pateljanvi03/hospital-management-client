import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DoctorsView from '../views/DoctorsView.vue';
import DepartmentsView from '../views/DepartmentsView.vue';
import HospitalsView from '../views/HospitalsView.vue';
import PatientsView from '../views/PatientsView.vue';
import PatiensAppointmentsView from '../views/PatiensAppointmentsView.vue';
//import { component } from 'vue/types/umd';

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
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
