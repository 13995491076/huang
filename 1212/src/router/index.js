import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router)

//引入组件
//一级导航
import Index from '../components/Index'

//二级导航
import Home from '../components/home/Home'
import Student from '../components/home/Student'
import News from '../components/home/News'
import Cart from '../components/home/Cart'
import Mine from '../components/home/Mine'
export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/index"
        },
        {
            path:"/index",
            name:"index",
            component:Index,
            children:[
                {
                    path:"/index",
                    redirect:"/index/home"
                },
                {
                    path:"/index/home",
                    name:"home",
                    component:Home
                },
                {
                    path:"/index/student",
                    name:"student",
                    component:Student
                },
                {
                    path:"/index/news",
                    name:"news",
                    component:News
                },
                {
                    path:"/index/cart",
                    name:"cart",
                    component:Cart
                },
                {
                    path:"/index/mine",
                    name:"mine",
                    component:Mine
                }
            ]
        }
    ]
})