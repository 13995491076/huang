<template>
    <div class="index">
        <section><router-view></router-view></section>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './home/Footer'
    export default {
        name:"index",
        components:{
            Footer
        }
    }
</script>

<style scoped lang="scss">
.index{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    section{
        flex:1;
    }
}
</style>