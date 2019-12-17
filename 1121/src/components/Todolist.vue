<template>
  <div class="todolist">
    <header>
		<Add :list="list"></Add>
    </header>
    <section>
		<h2>正在进行 <span>{{list.length-finished}}</span></h2>
		<ol>
			<li v-for="(item,index) in list" :key="index" v-show="!item.flag" >
				<input type="checkbox" v-model="item.flag" @change="save()">
				<span v-show="!item.show" @click="up(index)">{{item.title}}</span>
				<Edit :list="list" :k="index" @toblur="save"></Edit>
				<Del :list="list" :k="index"></Del>
			</li>
		</ol>
		<h2>已经完成 <span>{{finished}}</span></h2>
		<ul>
			<li v-for="(item,index) in list" :key="index" v-show="item.flag">
				<input type="checkbox" v-model="item.flag"  @change="save()">
				<span v-show="!item.show" @click="up(index)">{{item.title}}</span>
				<Edit :list="list" :k="index" @toblur="save"></Edit>
				<Del></Del>
			</li>
		</ul>
    </section>
    <footer>
      Copyright &copy; 2014 todolist.cn <Clear :list="list"></Clear>
    </footer>
  </div>
</template>

<script>
import Add from './Add.vue'
import Edit from './Edit'
import Del from './Del.vue'
import Clear from './Clear.vue'
export default {
    name: 'Todolist',
    props: {

    },
    data() {
		return {
			list:JSON.parse(localStorage.getItem("todo"))||[],
			title:"",
		}
    },
    components:{
		Add,
		Edit,
		Clear,
		Del
	},
	methods: {
		save(){
			for(var i in this.list){
				this.list[i].show=false
			}
			localStorage.setItem("todo",JSON.stringify(this.list))
		},
		up(i){
			for(var n in this.list){
				this.list[n].show=false
			}
			this.list[i].show=true
		}
	},
	computed: {
		finished(){
			var s=0;
			for (var i in this.list){
				if(this.list[i].flag==true){
					s++
				}
				
			}
			return s
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
