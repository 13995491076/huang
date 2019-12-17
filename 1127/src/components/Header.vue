<template>
  <header>
      <span>搜索</span>
      <span>哈尔滨站</span>
      <span>登录/注册</span>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    header{
        width: 100%;
        height: 1.2rem;
        border-bottom:0.02rem solid black;
        background: rgb(52, 153, 255);
        color: white;
        top: 0;
        span:nth-of-type(1){
            float: left;
            font-size:0.4rem;
            margin:0.3rem 0 0 0.3rem;
        }
        span:nth-of-type(2){
            float: left;
            font-size:0.55rem;
            margin: 0.2rem 0 0 3rem;
        }
        span:nth-of-type(3){
            float: right;
            font-size:0.4rem;
            margin:0.3rem 0.3rem 0 0;
        }
    }
</style>