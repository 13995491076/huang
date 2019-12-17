<template>
  <ul>
      <router-link to="/home" >
          <li>首页</li>
      </router-link>
      <router-link to="/look">
        <li>发现</li>
      </router-link>
      <router-link to="/list">
          <li>记录</li>
      </router-link>
      <router-link to="/vip">
          <li>会员</li>
      </router-link>
      <router-link to="/my">
          <li>我的</li>
      </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    ul{
        width: 100%;
        height: 1.3rem;
        list-style: none;
        border-top: 0.01rem solid black;
        li{
            float: left;
            width: 20%;
            height: 100%;
            font-size: 0.22rem;
            line-height: 1.3rem;
            text-align: center;
        }
    }
</style>