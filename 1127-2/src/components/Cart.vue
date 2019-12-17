<template>
  <div class="cart">
      <table class="table">
          <thead>
              <tr>
                  <td>
                      <input type="checkbox" v-model="seleAll" @click="checkall()">全选/反选
                  </td>
                  <td>商品名称</td>
                  <td>商品图片</td>
                  <td>商品价格</td>
                  <td>商品数量</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, index) in list" :key="index">
                  <td><input type="checkbox" v-model="item.flag" @change="ch()" @click="checkone(index)"></td>
                  <td>{{item.name}}</td>
                  <td><img :src="publicPath+'img/'+item.img" alt=""></td>
                  <td>{{item.price}}</td>
                  <td>
                      <button @click="jian(index)">-</button>
                      {{item.number}}
                      <button @click="jia(index)">+</button>
                  </td>
              </tr>
          </tbody>
      </table>
      总价: {{total}}
      <!-- <el-popconfirm confirmButtonText='确认' cancelButtonText='取消' icon="el-icon-info" iconColor="red" title="确定删除吗？"> -->

  </div>
</template>

<script>
function sortKey(arr,key){
    return arr.sort(function(a,b){
        return a[key]-b[key]
    })
}
export default {
    data() {
        return {
            list:JSON.parse(localStorage.getItem("cart"))||[],
            seleAll:false,
            publicPath:process.env.BASE_URL
        }
    },
    methods: {
        checkall(){
            this.seleAll=!this.seleAll
            for(var i in this.list){
                this.list[i].flag=this.seleAll
            }
            localStorage.setItem("cart",JSON.stringify(this.list))
        },
        checkone(i){
            this.list[i].flag=!this.list[i].flag;
            for(var j in this.list){
                if(this.list[j].flag==false){
                    this.seleAll=false;
                    break
                }
            }
            if(j==this.list.length-1){
                this.seleAll=true
            }
            localStorage.setItem("cart",JSON.stringify(this.list))
        },
        ch(){
            var chtrue=this.list.filter((item)=>{
                return item.flag==true
            })
            if(chtrue.length===this.list.length){
                this.seleAll=true
            }else{
                this.seleAll=false
            }
            localStorage.setItem("cart",JSON.stringify(this.list))
        },
        jian(i){
            if(this.list[i].number>0){
                this.list[i].number--
            }else{
                this.$confirm('商品数量已为0,是否删除该商品?','提示',{
                    confirmButtonText:'确认',
                    cancelButtonText:'取消',
                }).then(()=>{
                    this.list.splice(i,1)
                    localStorage.setItem("cart",JSON.stringify(this.list))
                }).catch(()=>{

                })
            }
            localStorage.setItem("cart",JSON.stringify(this.list))
        },
        jia(i){
            this.list[i].number++
            localStorage.setItem("cart",JSON.stringify(this.list))
        }
    },
    computed: {
        total(){
            var result=0;
            for(var i in this.list){
                if(this.list[i].flag==true){
                    result+=this.list[i].price*this.list[i].number
                }
            }
            return result;
        },
 
        list1(){
            return sortKey(this.list,"price")
        }
    },

}
</script>

<style lang="scss">
    .cart{
        width: 100%;
        flex: 1;
    }
</style>