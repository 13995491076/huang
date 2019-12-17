<template>
  <div id="app">
    <ul>
      <router-link to="/list" tag="li">列表</router-link>
      <router-link to="/cart" tag="li">购物车</router-link>
    </ul>
    <div class="view">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="scss">
#app{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    ul{
        width: 600px;
        height: 50px;
        list-style: none;
        margin: 20px auto;
        li{
            float: left;
            height: 100%;
            width: 50%;
            text-align: center;
            line-height: 50px;
        }
        &>.router-link-active{
            background: orange;
        }
    }
}
</style>
