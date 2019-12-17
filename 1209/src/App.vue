<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Footer,
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;font-size: 0.3rem;
}
html,body,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section{
  width: 100%;
  flex: 1;
  overflow: hidden;
}
</style>
