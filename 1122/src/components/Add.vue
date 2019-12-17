<template>
  <div class="form-horizontal">
        <div class="form-group row">
            <label class="col-sm-2 control-label">商品名</label>
            <div class="col-sm-10">
                <input type="text" v-model="name" class="form-control">
            </div>
            
        </div>
        <div class="form-group row">
            <label class="col-sm-2 control-label">商品价格</label>
            <div class="col-sm-10">
                <input type="text" v-model="price" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 control-label">商品数量</label>
            <div class="col-sm-10">
                <input type="text" v-model="count" class="form-control">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label"></label>
            <button class="btn btn-primary" @click="add">添加</button>
        </div>
  </div>
</template>

<script>
import Bus from '../bus/bus'
export default {
    props:["list"],
    data() {
        return {
            name:"",
            price:"",
            count:""
        }
    },
    methods: {
        add(){
            var arr=JSON.parse(localStorage.getItem("goods"))||[];
            if(this.name==""||this.price==""||this.count==""){
                return false
            }
            var obj={
                "name":this.name,
                "price":this.price,
                "count":this.count,
                "flag":false
            }
            arr.push(obj)
            localStorage.setItem("goods",JSON.stringify(arr))
            this.name=this.price=this.count=""
            Bus.$emit("todo",arr)
        }
    },
}
</script>

<style>
label{  
    text-align: center;
}
</style>