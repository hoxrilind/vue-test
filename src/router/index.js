import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateUser from '../components/CreateUser'

Vue.use(VueRouter)

const routes = [
  {
  path: '/create/user',
  component: CreateUser,
  name: 'create_user'
}]


const router = new VueRouter({
  routes
})

export default router
