<template>
  <div class="hy_main">
      <div class="hy_cell" v-for="(item,index) in hy_list" :key="index">
          <router-link :to="'/detail?id='+item.id">
          <span>{{item.name}}</span><br>
          <span>{{item.time}}</span><br>
          <div class="hy_center">
              <img :src="hy_publicPath+'img/'+item.src" alt="">
              <span>{{item.tea}}</span>
              <img :src="hy_publicPath+'img/'+item.src2" alt="">
              <span>{{item.tea2}}</span>
              <img :src="hy_publicPath+'img/'+item.src3" alt="">
              <span>{{item.tea3}}</span>
          </div>
          <hr>
          <span>{{item.people}}人已报名</span>
          <span>{{item.free}}</span>
        </router-link>
          
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            hy_publicPath:process.env.BASE_URL,
            hy_list: this.$store.state.hy_kelist
        }
    },
mounted(){
    //获取数据并存储到vuex
    this.$axios.get("/kecheng.json").then((res)=>{
        window.console.log(res.data)
        localStorage.setItem("hy_kelist",JSON.stringify(res.data))
    })
}
}
</script>

<style lang="scss">
a{
  color:black;
}
.hy_main{
    a{
    color:black;
    }
    width:100%;
    height:100%;
    font-size: 0.3rem;
    overflow: scroll;
    .hy_cell{
        width:92%;
        height:3.8rem;
        margin: 0.15rem 0.3rem;
        span{
            float: left;
        }
        span:nth-last-of-type(1){
            float:right;
        }
        .hy_center{
            width:100%;
            height:0.4rem;
            img{
                float: left;
                width:0.3rem;
                height:0.3rem;

            }
            span{
                float:left;
                font-size:0.3rem;
                margin-right:0.2rem;
            }
        }
    }
}
</style>