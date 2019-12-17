<template>
  <header>
      <span>头像</span>
      <input type="text" placeholder="知识 妙招 食谱">
      <span>信息</span>
  </header>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 1.15rem;
    background: #56ceab;
    span{
        font-size: 0.2rem;
        float: left;
        margin: 0.32rem 0.32rem 0;
        color: white;
    }
    span:nth-of-type(2){
        float: right;
        margin-left: 0;
    }
    input{
        float: left;
        text-align: center;
        background: #49b093;
        width: 8rem;
        height: 0.75rem;
        border: none;
        margin: 0.2rem 0 0;
        border-radius: 0.1rem;
        color: white;
    }
} 
</style>