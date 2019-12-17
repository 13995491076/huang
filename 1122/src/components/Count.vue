<template>
    <section>
        <button @click="jian()">-</button>
        <input type="text" v-model="list[k].count">
        <button @click="jia">+</button>
    </section>
</template>

<script>
export default {
    props:["list","k"],
    data() {
        return {
            good:JSON.parse(localStorage.getItem("goods"))||[],
        }
    },
    methods: {
        jian(){
            if(this.list[this.k].count>0){
                this.list[this.k].count--
            }
            localStorage.setItem("goods",JSON.stringify(this.list))
        },
        jia(){
            this.list[this.k].count++
            localStorage.setItem("goods",JSON.stringify(this.list))
        }
    },
}
</script>

<style scoped>
    input[type=text]{
        width: 50px;
        text-align: center;
    }
    button{
        width: 30px;
    }
</style>