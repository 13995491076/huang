<template>
  <div class="detail">
    <h2>{{obj.name}}</h2>
    <span>{{obj.address}}</span>
    <span>{{obj.category}}</span>
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
        axios.get("https://elm.cangdu.org/shopping/restaurant/"+id).then((res)=>{
            window.console.log(res.data)
            this.obj=res.data
            window.console.log(this.obj)
        })
        .catch((error)=>{
            window.console.log(error)
        })
    },
}
</script>

<style>
.detail{
    font-size: 0.2rem;

}
</style>