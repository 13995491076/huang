<template>
  <button @click="del()" class="btn btn-danger">删除</button>
</template>

<script>
export default {
    props:[
        "k","list"
    ],
    methods: {
        del(){
            this.list.splice(this.k,1)
            localStorage.setItem("goods",JSON.stringify(this.list))
        }
    },
}
</script>

<style>

</style>