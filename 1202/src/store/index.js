import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
    //数据
    state:{
        cart:JSON.parse(localStorage.getItem('cart'))||[],
        seleAll:false,
        flag:true,

    },
    //方法
    mutations:{
        addcart(state,obj){
            state.cart.push(obj)
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        addnum(state,key){
            state.cart[key].number++
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        del(state,key){
            state.cart.splice(key,1)
            localStorage.setItem("cart",JSON.stringify(state.cart))
        },
    },
    //异步操作
    actions:{
        
    }
})
export default store