import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SignIn from '../views/sign-in.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Home',
      redirect: 'signin'
    },
    {
    path: '/signin',
    name: 'signin',
    component: SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
