import Vue from 'vue'
import VueRouter from 'vue-router'
//一级路由
import Home from '../components/Home.vue'
import Look from '../components/Look.vue'
import List from '../components/List.vue'
import Vip from '../components/Vip.vue'
import My from '../components/My.vue'

//二级路由
import Today from '../components/Today.vue'
import Food from '../components/Food.vue'
import Growth from '../components/Growth.vue'

Vue.use(VueRouter)

const routes = [
    {
		path: '/',
		redirect:"/home"
    },
    {
		path:"/home",
		name:"home",
		component:Home,
		children:[
			{
				path:"/home",
				redirect:"/home/today"
			},
			{
				path:"/home/today",
				name:"today",
				component:Today
			},
			{
				path:"/home/food",
				name:"food",
				component:Food
			},
			{
				path:"/home/growth",
				name:"growth",
				component:Growth
			}
		]
    },
    {
		path:"/look",
		name:"look",
		component:Look
    },
    {
		path:"/list",
		name:"list",
		component:List
    },
    {
		path:"/vip",
		name:"vip",
		component:Vip
    },
    {
		path:"/my",
		name:"my",
		component:My
    }
]

const router = new VueRouter({
    mode:"history",
    routes
})

export default router
