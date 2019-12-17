<template>
  <button @click="add">加入购物车</button>
</template>

<script>
export default {
    props:["obj"],
    methods:{
        add(){
            var cart=this.$store.state.cart
            var index=cart.findIndex((it)=>{
                return this.obj.id==it.id;
            })
            var arr={
                id:this.obj.id,
                name:this.obj.name,
                price:this.obj.price,
                number:1,
                img:this.obj.img,
                flag:this.obj.flag
            }
            if(index==-1){
                this.$store.commit("addcart",arr)
            }else{
                this.$store.commit("addnum",index)
            }
        },
    }
}
</script>

<style>

</style>