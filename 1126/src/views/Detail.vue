<template>
  <div class="detail">
      <h2>{{obj.title}}</h2>
      <section v-html="obj.content"></section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            obj:{}
        }
    },
    mounted() {
        var id=this.$route.params.id
        axios.get("https://cnodejs.org/api/v1/topic/"+id)
        .then((res)=>{
            window.console.log(res)
            this.obj=res.data.data 
        })
        .catch((error) => {
            window.console.log(error)
        })
    },

}
</script>

<style>

</style>