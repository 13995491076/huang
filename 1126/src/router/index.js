import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import All from '../views/All.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"home",
    component:Home,
    children:[
      {
        path:"/",
        name:"all",
        component:All
      }
    ]
  },
  {
    path:"/detail/:id",
    name:"detail",
    component:Detail
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
