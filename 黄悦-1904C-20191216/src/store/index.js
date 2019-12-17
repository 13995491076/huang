import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(axios)
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        hy_kelist:JSON.parse(localStorage.getItem("hy_kelist"))||[]
    },
    getters:{

    },
    mutations:{

    },
    actions:{

    }

})