import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Pages/HomePage.vue'
import BookingPage from '../Pages/BookingPage.vue'
import RatingPage from '../Pages/RatingPage.vue'
import ContactPage from '../Pages/ContactPage.vue'
import LoginPage from '../Pages/LoginPage.vue'
import AboutUsPage from '../Pages/AboutUsPage.vue'
import CustomerDashboard from '../Pages/CustomerDashboard.vue'
import DriverDashboard from '../Pages/DriverDashboard.vue'
import OperatorDashboard from '../Pages/OperatorDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/BookingPage',
    name: 'Booking',
    component: BookingPage
  },
  {
    path: '/RatingPage',
    name: 'Rating',
    component: RatingPage
  },
  {
    path: '/ContactPage',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/LoginPage',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/AboutUsPage',
    name: 'AboutUs',
    component: AboutUsPage
  },
  {
    path: '/CustomerDashboard',
    name: 'CustomerDashboard',
    component: CustomerDashboard
  },
  {
    path: '/DriverDashboard',
    name: 'DriverDashboard',
    component: DriverDashboard
  },
  {
    path: '/OperatorDashboard',
    name: 'OperatorDashboard',
    component: OperatorDashboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
