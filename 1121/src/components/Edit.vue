<template>
  <input type="text" v-show="list[k].show" v-model="list[k].title" @blur="save">
</template>

<script>
export default {
    props:["k","list"],
    data() {
        return {
            title:this.tit
        }
    },
    methods: {
        save(){
            this.$emit("toblur")
        }
    },
}
</script>

<style>

</style>