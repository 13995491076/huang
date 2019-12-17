import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//一级路由
import Home from '../components/Home.vue'

//二级路由
import List from '../components/List.vue'
import Cart from '../components/Cart.vue'
const routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:Home,
        children:[
            {
                path:"/home",
                redirect:"/home/list"
            },
            {
                path:"/home/list",
                name:"list",
                component:List
            },
            {
                path:"/home/cart",
                name:"cart",
                component:Cart
            }
        ]
    }
]

const router=new Router({
    mode:"history",
    routes
})

export default router