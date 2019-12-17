import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//一级路由
import Cart from '../components/Cart.vue'
import List from '../components/List.vue'
const routes=[
    {
        path:"/",
        redirect:"/list"
    },
    {
        path:"/list",
        name:"list",
        component:List
    },
    {
        path:"/cart",
        name:"cart",
        component:Cart
    }
]
const router= new Router({
    routes,
    mode:"history"
})
export default router;