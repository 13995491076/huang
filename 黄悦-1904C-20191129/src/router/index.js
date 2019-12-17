import Vue  from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Search from '../components/Search.vue'

const routes=[
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/list",
        name:"list",
        component:List
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