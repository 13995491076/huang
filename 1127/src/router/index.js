import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//一级路由
import Home from '../components/Home.vue'
import Deatil from '../components/Detail.vue'

//二级路由
import Outfood from '../views/Outfood.vue'
import Search from '../views/Search.vue'
import Notebook from '../views/Notebook.vue'
import My from '../views/My.vue'
const routes = [
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
                redirect:"/home/outfood"
            },
            {
                path:"/home/outfood",
                name:"outfood",
                component:Outfood
            },
            {
                path:"/home/search",
                name:"search",
                component:Search
            }
            ,
            {
                path:"/home/notebook",
                name:"notebook",
                component:Notebook
            }
            ,
            {
                path:"/home/my",
                name:"my",
                component:My
            }
        ]
    },
    {
        path:"/detail/:id",
        name:"detail",
        component:Deatil
    }
]

const router = new Router({
mode:"history",
routes
})

export default router
