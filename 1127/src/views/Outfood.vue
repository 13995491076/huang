<template>
    <div class="outfood">
        <div class="cell" v-for="(item,index) in list" :key="index">
            <router-link :to="'/detail/'+item.id">
                <div class="left">
                    <img :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">
                    <button>品牌</button>
                    <span>{{item.name}}</span>
                    <span>评分{{item.rating}} 月售{{item.recent_order_num}}单</span>
                    <span>￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
                </div>
                <div class="right">
                    <span>保 准 票</span><br><button>准时达</button>
                    <button style="color:#57A9FF">{{item.delivery_mode.text}}</button><br>
                    <span>{{item.distance}}/</span><br>
                    <span>{{item.order_lead_time}}</span>
                </div>
            </router-link>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((res)=>{
            window.console.log(res.data)
            this.list=res.data
            window.console.log(this.list[0])
        })
        .catch((error)=>{
            window.console.log(error)
        })
    },
}
</script>

<style lang="scss">
.outfood{
    width: 100%;
    height: 16rem;
    overflow: scroll;
    a{
        text-decoration: none;
        color: black;
    }
    .cell{
        width: 100%;
        height: 3.3rem;
        .left{
            width: 68%;
            height: 80%;
            float: left;margin-top:0.4rem;
            img{
                float: left;
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.4rem 0 0.4rem;
            }
            button{
                float: left;
                width: 1rem;
                height: 0.5rem;
                font-size: 0.25rem;
                background: orange;
                border: none;
            }
            span{
                float: left;
                font-size: 0.3rem;
                max-width: 5rem;
            }
            span:nth-of-type(1){
                max-width:3rem;
            }
        }
        .right{
            width: 30%;
            height: 80%;margin-right:0.2rem;
            float: right;line-height:0.7rem;margin-top:0.4rem;
            button{
                float: right;
                min-width: 1rem;
                height: 0.5rem;
                font-size: 0.25rem;
                background: orange;
                border: none;
            }
            span{
                float: right;
                font-size: 0.3rem;
                line-height:0.1rem;
            }
        }
    }
}
</style>