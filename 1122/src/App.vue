<template>
  <div id="app">
    <Cart></Cart>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    Cart
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
