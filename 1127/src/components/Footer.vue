<template>
  <footer>
      <ul>
          <router-link to="/home/outfood" tag="li">
            <i class="el-icon-eleme"></i><br>
            外卖
          </router-link>
          <router-link to="/home/search" tag="li"><i class="el-icon-discover"></i><br>搜索</router-link>
          <router-link to="/home/notebook" tag="li"><i class="el-icon-tickets"></i><br>订单</router-link>
          <router-link to="/home/my" tag="li"><i class="el-icon-user"></i><br>我的</router-link>
      </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    footer{
        width: 100%;
        height: 1.3rem;
        border-top: 0.02rem solid black;
        bottom: 0;
        ul{
            width: 100%;
            height: 100%;
            list-style: none;
            li{
                width: 25%;
                height: 100%;
                float: left;
                text-align:center;
                font-size: 0.3rem;
                i{font-size:0.5rem}
            }
            &>.router-link-active{
                color: rgb(52, 153, 255)
            }
        }
    }
</style>