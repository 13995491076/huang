<template>
  <footer>
      <ul>
          <li>
              <router-link to="/home/main">
                  <img :src="publicPath+'img/home.png'" alt=""><br>
                    首页
              </router-link>
          </li>
          <li>
              <router-link to="/home/ke">
                  <img :src="publicPath+'img/course.png'" alt=""><br>
                    课程
              </router-link>
          </li>
          <li>
              <router-link to="/home/yue">
                  <img :src="publicPath+'img/study.png'" alt=""><br>
                    约课记录
              </router-link>
          </li>
          <li>
              <router-link to="/home/lian">
                  <img :src="publicPath+'img/edit.png'" alt=""><br>
                    练习
              </router-link>
          </li>
          <li>
              <router-link to="/home/mine">
                  <img :src="publicPath+'img/my.png'" alt=""><br>
                    我的
              </router-link>
          </li>
      </ul>
  </footer>
</template>

<script>
export default {
data() {
    return {
        publicPath:process.env.BASE_URL
    }
},
}
</script>

<style lang="scss">
footer{
    width: 100%;
    height:1.6rem;
    ul{
        list-style: none;
        width:100%;
        height:100%;
        li{
            width:20%;
            height:100%;
            float: left;
            text-align: center;
            a{
                display:block;
                width:100%;
                height:100%;
                font-size: 0.34rem;
                text-decoration: none;
                color: black;
                img{
                    height: 30%;
                    margin-top: 0.3rem;
                }
            }
        }
    }
}
</style>