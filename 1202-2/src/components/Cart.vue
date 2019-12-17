<template>
  <div class="cart">
      <h4>Vuex购物车</h4>
      <h5>商品信息</h5>
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in this.$store.state.cart" :key="index">
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td><span v-show="item.flag">{{item.count}}</span></td>
                  <td>
                      <button class="btn btn-sm btn-primary" @click="addcart(index)" v-show="!item.flag ">加入购物车</button>
                      <button class="btn btn-sm btn-primary" @click="jia(index)" v-show="item.flag">+</button>
                      <button class="btn btn-sm btn-warning" @click="jian(index)" v-show="item.flag">-</button>
                  </td>
              </tr>
          </tbody>
      </table>
      <h5>购物车信息</h5>
      <table class="table ">
          <thead>
              <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>总价</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in this.$store.state.cart" :key="index" v-show="item.flag">
                
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.count}}</td>
                    <td>{{item.price*item.count}}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" @click="jia(index)">+</button>
                        <button class="btn btn-sm btn-warning" @click="jian(index)">-</button>
                        <button class="btn btn-sm btn-danger" @click="del(index)">x</button>
                    </td>
                
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="1">总数：{{zcount}} </td>
                  <td colspan="1"> 总价：{{total}} </td>
                  <td colspan="3"> </td>
                  <td><button class="btn btn-sm btn-danger" @click="clear">清空购物车</button></td>
              </tr>
          </tfoot>
      </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[],
            cart:[]
        }
    },
    mounted(){
        axios.get("/data.json").then((res)=>{ 
            res.data.productsData.forEach(element => {
                element.flag=false 
            });
            this.$store.commit("getData",res.data.productsData)
        })
    },
    methods: {
        addcart(i) {
            this.$store.commit("addCart",i)
        },
        jia(i){this.$store.commit("addNum",i)},
        jian(i){
            this.$store.commit("cutNum",i)
        },
        del(i){this.$store.commit("del",i)},
        clear(){
            this.$store.commit("clear")
        }
    },
    computed:{
        zcount(){
            return this.$store.getters.zcount
        },
        total(){
            return this.$store.getters.total
        },
    },
}
</script>

<style lang="scss">
.cart{
    width: 50%;
    height: 100%;
    margin: 0 auto;
}
</style>