<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <td>
                    <input type="checkbox" v-model="seleAll" @click="checkall(seleAll)"/>
                    全选
                </td>
                <td>商品</td>
                <td>价格</td>
                <td>数量</td>
                <td>操作</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in good" :key="index">
                <td><input type="checkbox" v-model="item.flag" @change="ch()"/></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td><Count :list="good" :k="index"></Count></td>
                <td><Del :list="good" :k="index"></Del></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">总价：{{total}}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import Bus from '../bus/bus'
import Count from './Count'
import Del from './Del'
export default {
    components:{
        Count,
        Del
    },
    data() {
        return {
            good:JSON.parse(localStorage.getItem("goods"))||[],
            seleAll:false,
        }
    },
    methods: {
        checkall(){
            this.seleAll=!this.seleAll
            for(var i in this.good){
                this.good[i].flag=this.seleAll
            }
            localStorage.setItem("goods",JSON.stringify(this.good))
        },
        ch(){
            var chtrue=this.good.filter(function(item){
                return item.flag==true
            })
            if(chtrue.length==this.good.length){
                this.seleAll=true
            }else{
                this.seleAll=false
            }
        }
    },
    computed: {
        total(){
            var result=0;
            for(var i in this.good){
                if(this.good[i].flag==true){
                    result+=this.good[i].price*this.good[i].count
                }
            }
            return result;
        },
    },
    created() {
        Bus.$on("todo",(res)=>{
            this.good=res
        })
    },
    watch: {
         
    },
}
</script>

<style scoped>
    table{
        text-align: center;
    }
</style>