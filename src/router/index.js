import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
// 登录页面
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/manager/home"
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    children:[{
      path: 'home',
      component: Home,
    },{
      path: 'order',
      component: Order,
    },{
      path: 'user',
      component: User,
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
