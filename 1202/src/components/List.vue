<template>
  <div class="list">
      <button @click="xu()">
          <span v-show="flag" >升序</span>
          <span v-show="!flag" >降序</span>
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
                  <td><Add :obj="item"></Add></td>
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
import Add from './Add.vue'
export default {
    data() {
        return {
            list:[],
            flag:this.$store.state.flag,
            publicPath:process.env.BASE_URL
        }
    },
	components:{Add},
    mounted() {
        axios.get("/goods.json").then((res)=>{ 
            this.list=res.data 
        })
    }, 
    methods: { 
        xu(){this.flag=!this.flag;
            if(this.flag==false){
				return sortKey(this.list,"price")
			} else {
				return sortKey2(this.list,"price")
			}
        } 
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