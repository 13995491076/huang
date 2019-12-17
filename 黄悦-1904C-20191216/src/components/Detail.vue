<template>
  <div class="hy_detail">
      <span>{{this.hy_list.name}}</span>
      <span>{{this.hy_list.free}}</span>
      <span>{{this.hy_list.time}}</span>
  </div>
</template>

<script>
export default {
data() {
  return {
    hy_id:"",
    hy_publicPath:process.env.BASE_URL,
    hy_list: this.$store.state.hy_kelist,
    hy_delist:[]
  }
},
mounted(){
  //获取数据
  this.hy_id=this.$route.query.id;
  window.console.log(this.hy_id)
  for(var i in this.hy_list){
    if(this.hy_list[i].id==this.hy_id){
      this.hy_delist=this.hy_list[i]
    }
  }
}
}
</script>

<style lang="scss">
.hy_detail{
  width:100%;
  height:100%;
  font-size:0.3rem;
}
</style>