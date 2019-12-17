<template>
  <a @click="clear">clear</a>
</template>

<script>
export default {
    props:["list"],
    data() {
        return {
            //list:JSON.parse(localStorage.getItem("todo"))||[],
        }
    },
    methods: {
        clear(){
            this.list.splice(0,this.list.length);
            localStorage.setItem("todo",JSON.stringify(this.list))
        }
    },
}
</script>

<style>

</style>