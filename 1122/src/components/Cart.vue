<template>
    <div class="cart">
		<Add :list="good"></Add>
		<List></List>
    </div>
</template>

<script>
import Add from './Add'
import List from './List'
export default {
    name: 'Cart',
    components:{
		Add,
		List
    },
    data() {
		return {
			good:JSON.parse(localStorage.getItem("goods"))||[],
		}
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
