<template>
  <div class="search">
      <!-- 头部-搜索 -->
      <header>
          <router-link to="/search"><input type="text"  v-model="txt"></router-link>
          <!-- 添加到历史记录并进入列表页 -->
          <router-link to="/list"><span @click="add">搜索</span></router-link>
      </header>
      <!-- 历史记录 -->
      <div><span> 历史记录</span><span @click="delall">删除</span></div>
      <div v-for=" (item,index) in list" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:JSON.parse(localStorage.getItem("list1"))||[],
      txt:""


  }},
  methods:{


    //搜索，添加历史记录
    add(){
      this.list.push(this.txt)
      localStorage.setItem("list1",JSON.stringify(this.list))

    },
    //删除历史记录
    delall(){
        this.list=[];
        localStorage.setItem("list1",JSON.stringify(this.list))
}

  }

}
</script>

<style lang="scss">
.search{width:100%;height:100%;
        header{
            width:100%;height:50px;background:red;
            input{margin:10px 15px;width:80%;height:30px;border-radius:5px;text-indent:20px;}
        } 
        div{width:100%;height:30px;
           span:nth-of-type(1){float:left;}
           span:nth-of-type(2){float:right;}
        }


}
</style>