<template>
  <a @click="del()">-</a>
</template>

<script>
export default {
    props:["list","k"],
    data() {
        return {
            //list:JSON.parse(localStorage.getItem("todo"))||[],
        }
    },
    methods: {
        del(){
            this.list.splice(this.k,1)
            localStorage.setItem("todo",JSON.stringify(this.list))
        }
    },
}
</script>

<style>

</style>