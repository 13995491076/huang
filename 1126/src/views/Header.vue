<template>
	<div class='navbar'>
		<div class='navbar-inner'>
			<div class='container'>
				<a class='brand' href='/'>
					<img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
				</a>
				<form id='search_form' class='navbar-search' action="/search">
					<input type='text' id='q' name='q' class='search-query span3' value=''/>
				</form>
				<ul class='nav pull-right'>
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to='/getstart'>新手入门</router-link></li>
					<li><router-link to='/api'>API</router-link></li>
					<li><router-link to="/about" >关于</router-link></li>
					<li><router-link to='/signup'>注册</router-link></li>
					<li><router-link to='/signin'>登录</router-link></li>
				</ul>
				<a class="btn btn-navbar" id="responsive-sidebar-trigger">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
   
</style>