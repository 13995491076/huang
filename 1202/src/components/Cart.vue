<template>
    <div class="cart">
        <button @click="xu()">
            <span v-show="flag" >升序</span>
            <span v-show="!flag" >降序</span>
        </button>
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
                    <td>操作</td>
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
                    <td>
                        <span @click="del(index)">删除</span>
                    </td>
                </tr>
            </tbody>
        </table>
        总价: {{total}}
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
export default {
    data() {
        return {
            flag:this.$store.state.flag,
            seleAll:this.$store.state.seleAll,
            publicPath:process.env.BASE_URL
        }
    },
    methods: {
        xu(){this.flag=!this.flag;
            if(this.flag==false){
				return sortKey(this.list,"price")
			} else {
				return sortKey2(this.list,"price")
			}
        },
        checkall(){
            this.seleAll=!this.seleAll
            for(var i in this.list){
                this.list[i].flag=this.seleAll
            } 
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

                }).catch(()=>{

                })
            }
        },
        jia(i){
            this.list[i].number++ 
        },
        del(i){
            this.$store.commit("del",i)
        }
    },
    computed: {
        total(){ 
            var result=0;
            for(var i in this.list){
                if(this.list[i].flag==true){
                    result+=this.list[i].price*this.list[i].number
                    window.console.log(result)
                }
            }
            return result;
        },
        list(){
            return this.$store.state.cart
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