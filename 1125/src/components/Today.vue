<template>
  <div class="today">
      <ul>
          <li v-for="(item, index) in list" :key="index">
              <div>
                  <span>{{item.title}}</span><br>
                  <span>{{item.content}}</span>
              </div>
              <img :src="publicPath+item.img" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list:[],
            publicPath:process.env.BASE_URL
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            axios.get("/data.json")
            .then((res) => {
                window.console.log(res.data)
                this.list=res.data.data
                window.console.log(this.list)
            })
            .catch((error) => {
                window.console.log(error)
            })
        }
    },
}
</script>

<style scoped lang="scss">
.today{
    width: 100%;
    ul{
        width: 100%;
        list-style: none;
        li{
            width: 100%;
            height: 3.3rem;
            border-bottom: 0.01rem solid black;
            div{
                float: left;
                margin-left: 0.4rem;
                margin-top: 0.15rem;
                width: 7.2rem;
                line-height: 0.6rem;
                span:nth-of-type(1){
                    font-size: 0.42rem;
                    line-height: 0.2rem;
                }
                span:nth-of-type(2){
                    font-size: 0.2rem;
                    line-height: 0.1rem;
                }
            }
            img{
                float: right;
                width: 2rem;
                height: 2rem;
                margin: 0.6rem;
            }
        }
    }
}
</style>