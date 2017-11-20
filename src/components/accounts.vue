<template>
	<div v-if='this.account'>
		<div class="account-banner">
			<div class="the-img">
				<img :src="account.account.avatarUrl" alt="">			
				<template v-if='account.artist'>
					<img src="http://odun6jycz.bkt.clouddn.com/recommend_red.png" alt="" v-if='account.artist.recommend' class="recommend">					
				</template>
				
			</div>
			
			<p class="nickname">
				{{account.account.nickname}}
				
				<i v-if='account.account.gender' class='gender iconfont icon-iconfontnan nan' ></i>
				<i v-else class='gender iconfont icon-nv nv'></i>
			</p>
			<p>
				<span class='follow'>关注：{{account.account.followCount}}</span>
				<span class='fan'>粉丝：{{account.account.fanCount}}</span>
			</p>
			<p>
				{{account.account.intro}}
			</p>
			<div class="btn">
				<a class="guanzhu">
					<i class='iconfont icon-jiahao1'></i>关注
				</a>
				<a class="sixin">私信</a>
				<a class="qq">Q Q</a>
			</div>
		</div>
		<div class="the-route">
			<router-link :to='"/accounts/"+account.account.id+"/works"' activeClass='active' tag='a'>画作</router-link>
			<router-link :to='"/accounts/"+account.account.id+"/designs"' activeClass='active' tag='a'>设计</router-link>
			<router-link :to='"/accounts/"+account.account.id+"/projects"' activeClass='active' tag='a'>约稿</router-link>
			<router-link :to='"/accounts/"+account.account.id+"/events"' activeClass='active' tag='a'>活动</router-link>

		</div>
		<div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
export default {
  data () {
    return {
    	
    }
  },
  mounted(){
  	console.log(this.$route.params.id)
  	//http://m.huamoe.com/api/accounts/31284
  	this.$store.dispatch("account",`/api/accounts/${this.$route.params.id}`)
  	
  },
  
  computed:{
  	account(){
  		return this.$store.state.account
  	}
  }
}
</script>

<style lang="scss" scoped>
	.account-banner{
		padding:20px;
		text-align: center;
		background-color: #444;
		color: #fff;
		.the-img{
			width:50px;
			margin:0 auto;
			position:relative;
			img:nth-child(1){
				width:100%;
				border-radius: 50%;
				border: 1px solid rgba(41,37,41,.23);
			}
			.recommend{
				width:20px;
				position:absolute;
				left:40px;
				top:0
			}
		}
		p{
			color:#fff;
			font-size: 14px;
			margin-top: 5px;
		}
		.nickname{
			color:#fff;
			font-size: 14px;
			margin-top: 5px;
			i{
				font-size: 16px
			}
			i.nan{
				color:#07d
			}
			i.nv{
				color:#f66
			}
		}
		.btn{
			margin-top:15px;
			a{
			    margin: 0;
			    border: none;
			    overflow: visible;
			    font: inherit;
			    color: #444;
			    text-transform: none;
			    display: inline-block;
			    box-sizing: border-box;
			    padding: 0 12px;
			    background: #eee;
			    vertical-align: middle;
			    line-height: 30px;
			    min-height: 30px;
			   font-size: 14px;
			    text-decoration: none;
			    text-align: center;
				
			}
			.guanzhu{
				background-color: #f0ad4e;
			    color: #fff;
			    i{
			    	font-weight: bold;
			    	padding-right: 3px
			    }
			}
		}
	}
	.the-route{
		display:flex;
		
		background:#fff;
		a{
			display:block;
			width:25%;
			line-height: 20px;
			text-align:center;
			color:#c7c7c7;
			text-decoration: none;
			padding:8px 0;
			font-size: 14px
		}
		.active{
			border-bottom:1px solid #07d;
			box-sizing:border-box;
			 color: #07d;
		}
	}
</style>