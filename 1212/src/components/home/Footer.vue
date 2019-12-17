<template>
  <footer>
      <ul>
          <li><router-link to="/index/home">淘宝</router-link></li>
          <li><router-link to="/index/student">学生党</router-link></li>
          <li><router-link to="/index/news">消息</router-link></li>
          <li><router-link to="/index/cart">购物车</router-link></li>
          <li><router-link to="/index/mine">我的收藏</router-link></li>
      </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer{
    width:100%;
    height:1.5rem;
    display:flex;background:#eeeae1;
    flex-direction:row;
    ul{
        width:100%;
        height:100%;
        li{
            width:20%;height:100%;float:left;text-align:center;line-height:1.5rem;
            a{
                text-decoration:none;font-size:0.34rem;
            }
        }
    }
}
</style>