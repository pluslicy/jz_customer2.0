import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
// 登录页面
import Login from '../views/Login'
import { getToken } from '../utils/auth'
import { Toast } from 'vant'
import store from '../store'


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
    // beforeEnter: (to, from, next) => {
    //   let token = getToken();
    //   if(token){
    //     // 查询info
    //     store.dispatch('user/info',token)
    //     .then(()=>{
    //       next();
    //     })
    //   } else {
    //     Toast("token失效1")
    //     // 跳转到登录
    //     next({path:'/login'})
    //   }
    // },
    children:[{
      path: 'home',
      component: Home,
    },{
      path: 'order',
      component: Order,
    },{
      path: 'user',
      component: User,
    },{
      path: 'address',
      component: ()=>import('../views/manager/address/Index') 
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
