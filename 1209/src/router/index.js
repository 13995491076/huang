import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/Home'
import Cate from '../components/Cate'
import Cart from '../components/Cart'
import Mine from '../components/Mine'

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            name:"home",
            component:Home
        },
        {
            path:"/cate",
            name:"cate",
            component:Cate
        },
        {
            path:"/cart",
            name:"cart",
            component:Cart
        },
        {
            path:"/mine",
            name:"mine",
            component:Mine
        }
    ]
})