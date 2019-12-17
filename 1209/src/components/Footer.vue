<template>
  <footer>
      <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/cate">分类</router-link></li>
          <li><router-link to="/cart">购物车</router-link></li>
          <li><router-link to="/mine">个人</router-link></li>
      </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
footer{
    width: 100%;
    height: 1rem;
    border-top: 0.01rem solid #ccc;
    ul{
        width: 100%;
        height:1rem;
        display:flex;
        li{
            flex:1;
            text-align: center;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                text-decoration: none;
                line-height: 1rem;
                font-size: 0.3rem;
                color: #ccc;
                &.router-link-active{
                    color: red;
                }
            }
        }
    }
}
</style>