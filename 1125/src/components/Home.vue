<template>
  <div class="home">
       <ul>
           <router-link to="/home/today"><li>今日</li></router-link>
           <router-link to="/home/food"><li>饮食</li></router-link>
           <router-link to="/home/growth"><li>发育</li></router-link>
       </ul>
       <router-view></router-view>
  </div>
</template>

<script>
 
export default {
    
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    ul{
        width: 100%;
        height: 1.41rem;
        list-style: none;
        li{
            float: left;
            width: 1rem;
            height: 1.39rem;
            margin: 0 1.29rem;
            font-size: 0.25rem;
            line-height: 1.39rem;
        }
    }
}
</style>