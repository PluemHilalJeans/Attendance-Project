import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/loginPage.vue'
import preCheck from '../views/preCheck.vue'
import addUser from '../views/addUser.vue'
import faceCheck from '../views/faceCheck.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/preCheck',
    name: 'preCheck',
    component: preCheck
  },
  {
    path: '/addUser',
    name: 'addUser',
    component: addUser
  },
  {
    path: '/faceCheck',
    name: 'faceCheck',
    component: faceCheck,
  },
]

const router = new VueRouter({
  routes
})

export default router
