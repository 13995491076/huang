<template>
    <div class="home">
        <header>
            <span>ele.me</span>
            <p><span>登录</span>|<span>注册</span></p>
        </header>
        <section>
            <div>
                <span>当前定位城市:</span>
                <span>定位不准确,请在城市列表中选择</span>
            </div>
            <div>
                <span><router-link :to="'/search?city='+nowcity">{{nowcity}}</router-link></span>
                <router-link to="/search"><i class="el-icon-arrow-right"></i></router-link>
            </div>
            <div class="hot">
                <span>热门城市</span>
                <ul>
                    <li v-for="(item,index) in hotlist" :key="index"><router-link :to="'/search?city='+item.name">{{item.name}}</router-link></li>
                </ul>
            </div>
            <div class="list">
                <div v-for="(item,index) in keylist" :key="index">
                    <span>{{item}}<span v-if="item=='A'">(按字母排序)</span></span>
                    <ul>
                        <li v-for="(i,aindex) in alllist" :key="aindex" v-show="i.abbr==item"><router-link :to="'/search?city='+i.name"><span>{{i.name}}</span></router-link></li>
                    </ul>
                </div>
            </div>
            <div>
                <ul>

                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {nowcity:"",
            hotlist:[],
            alllist:[],
            keylist:[]
        }
    },
    mounted(){
        //获取当前城市
        this.$axios.get("http://elm.cangdu.org/v1/cities?type=guess").then((res)=>{
             
            this.nowcity=res.data.name
        })
        //获取热门城市
        this.$axios.get("http://elm.cangdu.org/v1/cities?type=hot").then((res)=>{
             
            this.hotlist=res.data
        })
        //获取全部城市
        this.$axios.get("http://elm.cangdu.org/v1/cities?type=group").then((res)=>{ 
            window.console.log(res.data)
            for(var i in res.data){
                this.keylist.push(i)
                this.keylist=this.keylist.sort()
                var obj=res.data[i] 
                for(var j in res.data[i]){ 
                    this.alllist.push(obj[j])
                    obj[j].abbr=obj[j].abbr.charAt(0)
                }  
            }
            window.console.log(this.keylist)
            window.console.log(this.alllist)
        })
        
    }
}
</script>

<style lang="scss">
.home{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    header{
        width:100%;
        height:1rem;
        background:#409EFF;
        color:white;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span{
            margin: 0 0.2rem;
        }
    }
    section{
        width: 100%;
        flex: 1;overflow:scroll;
        
        &>div:nth-of-type(1){height: 0.9rem;
            width: 100%;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            span{
                margin: 0 0.2rem;
            }
            &>span:nth-of-type(1){
                font-size: 0.26rem;
            }
            &>span:nth-of-type(2){
                font-size: 0.23rem;
            }
        }
        &>div:nth-of-type(2){height: 0.9rem;
            width: 100%;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            span,i{
                margin: 0 0.2rem;a{text-decoration: none;color:#409EFF;}
            }
            &>span:nth-of-type(1){
                font-size: 0.4rem;
                color: #409EFF;
            }
            i{
                font-size: 0.4rem;
            }
        }
        &>div.hot{
            width:100%;height:2.5rem;
            span{
                margin: 0 0.2rem;
                font-size: 0.26rem;line-height:0.6rem;
            }
            ul{
                width:100%;
                height:1.8rem;
                li{
                    width:25%;
                    height:50%;
                    text-align:center;
                    float:left;
                    color:#409EFF;
                    border:0.01rem solid #ccc;
                    line-height:0.9rem;a{text-decoration: none;color:#409EFF;}
                }
            }
        }
        .list{
            width:100%;
            flex:1;
            div{
                width:100%;
                margin-bottom:0.2rem;
                &>span{
                    width:100%;
                    display:inline-block;
                    width:100%;
                    height:0.7rem;line-height:0.7rem;text-indent:0.2rem;
                }
                ul{
                    width:100%;
        
                    li{
                        width:25%;
                        height:0.9rem;
                        text-align:center;
                        float:left;
                        color:#409EFF;
                        border:0.01rem solid #ccc;
                        line-height:0.9rem;
                        span{
                            width:100%;
                            display:block;
                            height:100%;
                            overflow:hidden;
                            white-space:nowrap;
                            text-overflow:ellipsis;  
                        }a{text-decoration: none;
          color: black;}
                    }
                }
            } 
        } 
    }
}
</style>