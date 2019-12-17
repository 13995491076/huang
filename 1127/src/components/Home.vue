<template>
    <div class="home">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: 'app',
    components: {
        Header,Footer
    }
}
</script>

<style lang="scss">
.home{
    width: 100%;
    height: 100%;
}
</style>