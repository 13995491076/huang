<template>
  <div class="home">
      <!-- 动画 -->
      <img :src="publicPath+'index.gif'" alt="">
      <!-- 进入列表页 -->
      <router-link to="/list">
          <button>点击进入</button>
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath:process.env.BASE_URL
        }
    },
}
</script>

<style lang="scss">
.home{
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    button{
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height:25px;
        font-size: 14px;
        background: gray;
        color: white;
        border: none;
    }
}
</style>