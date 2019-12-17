import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//一级导航
import Home from '../components/Home'
import Detail from '../components/Detail'

//二级导航
import Main from '../components/home/Index'
import Ke from '../components/home/Ke'
import Yue from '../components/home/Yue'
import Lian from '../components/home/Lian'
import Mine from '../components/home/Mine'
export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            name:"Home",
            component:Home,
            children:[
                {
                    path:"/home",
                    redirect:"/home/main",
                },
                {
                    path:"/home/main",
                    name:"main",
                    component:Main
                },
                {
                    path:"/home/ke",
                    name:"ke",
                    component:Ke
                },
                {
                    path:"/home/Yue",
                    name:"yue",
                    component:Yue
                },
                {
                    path:"/home/lian",
                    name:"lian",
                    component:Lian
                },
                {
                    path:"/home/mine",
                    name:"mine",
                    component:Mine
                }
            ]
        },
        {
            path:"/home/detail",
            name:"detail",
            component:Detail
        },
    ]
})