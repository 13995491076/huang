<template>
  <div id="app">
    <Custom></Custom>
  </div>
</template>

<script>
import Custom from './components/Custom'
export default {
  name: 'app',
  components: {
    Custom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
