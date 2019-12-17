<template>
  <section>
      <Header></Header>
      <section>
          <router-view></router-view>
      </section>
      <Footer></Footer> 
  </section>
</template>

<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
export default {
    components:{
        Header,
        Footer
    }
}
</script>

<style scoped lang="scss">
section{
    width: 100%;
    flex: 1;
    section{
        height: 16.2rem;
        width: 100%;
    }
}
</style>