<template>
  <div class="list">
      <button>
          <span v-show="flag" @click="sheng" >升序</span>
          <span v-show="!flag" @click="jiang">降序</span>
      </button>
      <table class="table">
          <thead>
              <tr>
                  <td>商品名称</td>
                  <td>商品图片</td>
                  <td>商品价格</td>
                  <td>操作</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, index) in list" :key="index">
                  <td>{{item.name}}</td>
                  <td>
                      <img :src="publicPath+'img/'+item.img" alt="">
                  </td>
                  <td>{{item.price}}</td>
                  <td><button @click="add(item)">加入购物车</button></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>

//降序方法
function sortKey(arr,key){
    return arr.sort(function(a,b){
        return a[key]-b[key]
    })
}
//升序方法
function sortKey2(arr,key){
    return arr.sort(function(a,b){
        return b[key]-a[key]
    })
}


import axios from 'axios'
export default {
    data() {
        return {
            list:[],
            flag:true,
            publicPath:process.env.BASE_URL
        }
    },
    mounted() {
        axios.get("/goods.json").then((res)=>{
            window.console.log(res)
            this.list=res.data

            window.console.log(this.list)
        })
    }, 
    methods: {
        add(item){
            var cart=JSON.parse(localStorage.getItem("cart"))||[]
            var index=cart.findIndex((it)=>{
                return item.id==it.id;
            })
            var obj={
                id:item.id,
                name:item.name,
                price:item.price,
                number:1,
                img:item.img
            }
            if(index==-1){
                cart.push(obj)
            }else{
                cart[index].number++
            }
            localStorage.setItem("cart",JSON.stringify(cart))
            this.$router.push("/home/cart")
        },
        sheng(){
            this.flag=false;
            return sortKey(this.list,"price")
        },
        jiang(){
            this.flag=true;
            return sortKey2(this.list,"price")
        },








    },
}
</script>

<style lang="scss">
    .list{
        width: 100%;
        flex: 1;
        img{
            width: 50px;
            height: 50px;
        }
    }
</style>