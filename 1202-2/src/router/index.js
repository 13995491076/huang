import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Cart from '../components/Cart'
const routes=[
    {
        path:"/",
        name:"",
        component:Cart
    }
]
const router=new Router({
    routes,
    mode:"history"
})
export default router;