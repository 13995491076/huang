<template>
  <div class="hy_home">
    <section>
      <router-view></router-view>
    </section>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Home',
  components:{
    Footer
  }
}
</script>

<style lang="scss">
.hy_home{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  section{
    flex: 1;
    overflow: scroll;
  }
}
</style>
