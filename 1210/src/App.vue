<template>
  <div id="app">
     <router-view></router-view> 
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
	*{margin:0;padding:0;box-sizing:border-box;list-style:none;font-size:0.3rem;}
	html,body,#app{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
