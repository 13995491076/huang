<template>
  <div class="list">
      <!-- 头部搜索 -->
      <header>
          <!-- 进入搜索页 -->
          <router-link to="/search"><input type="text" value="搜索"></router-link>
      </header>
        <div>
            <ul>
               <li>推荐</li>
               <li>热点</li>
               <li>科技</li>
               <li>时政</li>
               <li>体育</li>
               <li>财经</li>
               <li>娱乐</li>
            </ul>
        </div>



  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .list{width:100%;height:100%;
        header{
            width:100%;height:50px;background:red;
            input{margin:10px 15px;width:80%;height:30px;border-radius:5px;text-indent:20px;}
        }
        div{
            width:100%;
            height:40px;
            ul{
                width:100%;height:100%;list-style:none;
                li{
                    float:left;width:14%;
                    text-align: center;
                }
            }
        }

}

</style>