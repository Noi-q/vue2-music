import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 播放器
import Player from '../views/Player'

import Home from '../views/Home/index';
import Layout from "../views/Layout";

const routes = [
  {
    // name:'Layout',
    path: '/',
    component:Layout,
    children:[
      {
        name:'Home',
        path:'/',
        component:Home
      },
      {
        name:'Topic',
        path:'/topic',
        component:()=> import('../views/Topic.vue')
      },
      {
        name:'Mine',
        path:'/mine',
        component:()=> import('../views/Mine.vue'),
      },
      {
        name:'Search',
        path:'/search',
        component:()=> import('../views/Search.vue')
      },
      {
        name:'Player',
        path:'/player/:songid',
        component:Player
      },
    ]
  }
]

const router = new VueRouter({
  mode:'hash',
  base:process.env.BASE_URL,
  routes,
  linkActiveClass:'active',
})

export default router