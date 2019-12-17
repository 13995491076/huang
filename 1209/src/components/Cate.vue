<template>
  <div class="cate">
      <div class="search"><i></i><input type="search" placeholder="搜索商品"></div>
      <section>
        <ul class="left">
          <li><router-link to="/cate">所有分类</router-link></li>
          <li v-for="(item,index) in list" v-show="item.pid==0" :key="index"><router-link :to="'/cate?id='+item.id">{{item.name}}</router-link></li>
        </ul>
        <div class="right">
          <nav>轮播</nav>
          <div>
            <ul>
              <li v-for="(item,index) in list" :key="index" v-show="item.pid==id">
                <img :src="item.icon" alt=""><br>
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
      </section>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],id:''
    }
  },
  mounted(){
    this.$axios.get("https://api.it120.cc/small4/shop/goods/category/all").then((res)=>{
      this.list=res.data.data
      window.console.log(this.list)
    })
  },
  watch:{
    $route:function(){
      this.id=this.$route.query.id
    }
  }
}
</script>

<style lang="scss">
.cate{
  width: 100%;
  height: 100%;
  .search{
    width: 100%;
    height: 0.8rem;
    border-bottom: 0.01em solid #ccc;
    i{
      width: 0.5rem;
      height: 0.5rem;
    }
    input{
      width: 70%;
      height: 0.5rem;
      margin: 0.15rem 0 0 1rem;
      border: none;
    }
  }
  section{
    width: 100%;
    height: 100%;display:flex;
    &>ul{
      float: left;
      height: 100%;
      width: 1.5rem;
      border-right: 0.01rem solid #ccc;
      margin-top: 0.2rem;
      li{
        width: 100%;
        height: 0.8rem;
        text-align: center;
        line-height: 0.8rem;
        margin: 0.1rem 0;
        a{
          text-decoration: none;
          color: black;
          &.router-link-exact-active{
            display: inline-block;
            width: 100%;
            height: 100%;
            border-left:0.05rem solid red;
            color: red;
          }
        }
      }
    }
    .right{
      float:left;
      flex:1;
      nav{
        width:95%;
        height:1.8rem;
        background:#ccc;
        margin:0.3rem auto;
        border-radius:0.1rem;
      }
      div{
        width: 100%;
        ul{
          width: 100%;
          li{
            float: left;
            width: 33%;
            height: 2rem;
            text-align: center;
            font-size: 0.24rem;
            img{
              height: 70%;
            }
          }
        }
      }
  
 
    }
  }
  
  
  
}
</style>