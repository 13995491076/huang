<template>
	<div id="app">
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from './views/Header'
import Footer from './views/Footer'
	export default{
		components:{
		Header,
		Footer
		}
	}
</script>
<style lang="scss">

</style>
