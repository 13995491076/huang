<template>
    <section>
        <label for="title">ToDoList</label>
        <input type="text" placeholder="添加ToDo" v-model="title" @keyup.enter="add()" />
    </section>
</template>

<script>
export default {
    props:['list'],
    data() {
        return {
            title:""
        }
    },
    methods: {
        add(){
            var obj={
                title:this.title,
                flag:false,
                show:false
            }
            this.list.push(obj)
            localStorage.setItem("todo",JSON.stringify(this.list))
            this.title=""
        }
    },
}
</script>

<style>

</style>