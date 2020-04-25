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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/father1',
    name: 'father1',
    component: () => import(/* webpackChunkName: "about" */ '../views/父传子/father.vue')
  },
  {
    path: '/father2',
    name: 'father2',
    component: () => import(/* webpackChunkName: "about" */ '../views/子传父/father.vue')
  },
  {
    path: '/father3',
    name: 'father3',
    component: () => import(/* webpackChunkName: "about" */ '../views/父子双向绑定/father.vue')
  },
  {
    path: '/father4',
    name: 'father4',
    component: () => import(/* webpackChunkName: "about" */ '../views/兄弟_跨组件/c.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
