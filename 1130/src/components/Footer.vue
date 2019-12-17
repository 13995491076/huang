<template>
  <footer>
      <ul>
          <router-link to="/main" tag="li">首页</router-link>
          <router-link to="/cate" tag="li">分类</router-link>
          <router-link to="/cart" tag="li">购物车</router-link>
          <router-link to="/mine" tag="li">个人</router-link>
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
    height: 1rem;
    border-top: 0.01rem solid gray;
    ul{
        width: 100%;
        height: 100%;
        list-style: none;
        li{
            float: left;
            width: 25%;
            height: 100%;
            font-size: 0.2rem;
            line-height:1rem;
            text-align: center;
        }
    }
}
</style>