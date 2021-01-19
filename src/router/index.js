import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lexicos',
    name: 'Lexicos',
    component: () => import('../views/Lexicos.vue')
  },
  {
    path: '/act2',
    name: 'Act2',
    component: () => import('../views/ActDos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
