import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/Home'
import Search from '../components/Search'
const routes=[
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
        path:"/search",
        name:"search",
        component:Search
    }
]

const router=new Router({
    mode:"history",
    routes
})
export default router;