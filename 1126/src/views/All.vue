<template>
    <section>
        <div class="cell" v-for="(item, index) in list" :key="index">
            <router-link :to="'/user'+item.author.loginname" class="user_avatar pull-left">
                <img :src="item.author.avatar_url" alt="" :title="item.author.loginname">
            </router-link>
            <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
                <span class="count_seperator">
                    /
                </span>
                <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
            </span>
            <router-link :to="'/detail/'+item.id" class="last_time pull-right">
                <img class="user_small_avatar" :src="item.author.avatar_url" alt="">
                <span>{{timec[index]}}</span>
            </router-link>
            <div class="topic_title_wrapper">
                <span class="put_top"></span>
                <router-link :to="'/detail/'+item.id" class="topic_title" title="">{{item.title}}</router-link>
            </div>
        </div>
    </section>
</template>

<script>import axios from 'axios'
export default {
    data() {
        return {
            list:[

            ]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            axios.get("https://cnodejs.org/api/v1/topics")
            .then((res) => {
                this.list=res.data.data
                //window.console.log(this.list)
                 
            })
            .catch((error) => {
                window.console.log(error)
            })
        }
    },
    computed: {
        timec(){
            var str=[]
            for(var i in this.list){
                var n=this.$moment(this.list[i].last_reply_at).fromNow()
                let arr=n.split(' ')

                if(arr[0]=='a'||arr[0]=="an"){
                    arr[0]='1'
                } 

                if(arr[1]=="day"||arr[1]=="days"){
                    arr[1]="天"
                }else if(arr[1]=="hour"||arr[1]=="hours"){
                    arr[1]="小时"
                }else if(arr[1]=="minutes"||arr[1]=="minute"){
                    arr[1]="分钟"
                }
                arr[2]="前"; 
                str.push(arr.join(""));
            }
            window.console.log(str)
            return str
        }
    },
}
</script>

<style>

</style>