<template>
	<div class="sear">
		<header>
			<i class="el-icon-arrow-left"></i>
			<span>{{$route.query.city}}</span>
			<router-link to="/home"><span>切换城市</span></router-link>
		</header>
		<div class="put">
			<input type="text" placeholder="输入学校、商务楼、地址" /><br>
			<button>提交</button>
		</div>
		<div class="his">
			<div>搜索历史</div>
			<ul>
				<li></li>
			</ul>
		</div>


	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.sear{
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
            margin: 0 0.2rem;font-size:0.3rem;
        }
		i{
			font-size:0.5rem;
		}
		&>span:nth-of-type(1){
			margin-right:-0.6rem;
			font-size:0.42rem;
		}
		a{
			text-decoration: none;
			color:white;
		}
	}
	.put{
		margin-top:0.2rem;
		width:100%;
		height:2.3rem;
		border-top:0.01rem solid #ccc;
		border-bottom:0.01rem solid #ccc;
		input{
			width:87%;margin:0.3rem 0.5rem;height:0.7rem;border-radius:0.08rem;border:0.01rem solid #ccc;text-indent:0.2rem;
		}
		button{width:87%;margin:0 0.5rem 0.2rem;height:0.7rem;background:#409EFF;border:none;color:white;border-radius:0.08rem;}
	}
	.his{
		flex:1;
		div{
			width:100%;height:0.5rem;border-bottom:0.01rem solid #ccc;text-indent:0.2rem;line-height:0.5rem;
		}
		ul{
			

			li{


			}
		}
	}


}

</style>