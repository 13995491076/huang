import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        cart:[]
    },
    getters:{
        zcount(state){
            var result=0;
            for(var i in state.cart){
                if(state.cart[i].flag!=false){
                    result+=state.cart[i].count
                }
            }
            return result
        },
        total(state){
            var result=0;
            for(var i in state.cart){
                if(state.cart[i].flag!=false){
                    result+=state.cart[i].count*state.cart[i].price
                }
            }
            return result
        },
    },
    mutations:{
        getData(state,arr){
            state.cart=arr 
        },
        addCart(state,key){ 
            state.cart[key].flag=true
        },
        addNum(state,key){
            state.cart[key].count++
        },
        cutNum(state,key){
            if(state.cart[key].count>1){
                state.cart[key].count--
            }
            else{
                state.cart[key].flag=false
            } 
        },
        del(state,key){
            state.cart[key].flag=false
        },
        clear(state){
            state.cart.forEach((e)=>{
                e.flag=false
            })
        }
    },
    actions:{

    }
})
export default store;