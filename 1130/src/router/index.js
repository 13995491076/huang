import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//一级路由
import Main from '../components/Main.vue'
import Cate from '../components/Cate.vue'
import Cart from '../components/Cart.vue'
import Mine from '../components/Mine.vue'

const routes=[
    {
        path:"/main",
        name:"main",
        component :Main
    },
    {
        path:"/cate",
        name:"cate",
        component :Cate
    },
    {
        path:"/cart",
        name:"cart",
        component :Cart
    },
    {
        path:"/mine",
        name:"mine",
        component :Mine
    }
]

const router=new Router({
    routes,
    mode:"history"
})

export default router;