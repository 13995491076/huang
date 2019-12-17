<template>
    <div class="custom">
        <Search></Search>
    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    props: {
        msg: String
    },
    components:{
        Search
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
