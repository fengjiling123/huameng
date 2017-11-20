<template>
	<div>
		<div class="content" v-if='workdetail'>
			<div class="top">
				<div class="title clear">
					<div class="left">
						<i class='iconfont icon-fanhui3' @click='goback()'></i>
						<span>{{workdetail.title}}</span>
						
						
					</div>
					<div class="right">
						<i class='iconfont icon-zan'></i>
						<span>{{workdetail.zanCount}}</span>
					</div>				
				</div>
				<div class="mate">
					<p>
						<span class='type'>[{{workdetail.type}}]</span>
						<span>共{{workdetail.images.length}}P</span>
						<span>发布于{{workdetail.createTime}}</span><br>
						<span>
							发布者：
							<a @click='account(workdetail.accountId)' class="nickname">
							{{workdetail.nickname}}
							</a>
						</span><br>
						<span>浏览数：{{workdetail.pageView}}</span>
					</p>
				</div>
				<div class="oat">
					<span v-if='workdetail.original' class='original'>{{workdetail.original}}</span>
					<span class='tag' v-for='tagdata in workdetail.tag'>
						{{tagdata}}
					</span>
				</div>
				<div class="user" v-if='workdetail.role'>
					<i class='iconfont icon-user'></i>
					<span v-for='role in workdetail.role'>
						{{role}}
					</span>

				</div>
			</div>
			<div class="bot">
				<div class="des">
					{{workdetail.description}}
				</div>
				<div v-for='images in workdetail.images' class="images">
					<img :src="images" alt="">
				</div>
				
			</div>
			
		</div>
		<div class="comment clear">
			<div>
				
				<textarea name="" placeholder="在这里写评论" rows="2"></textarea>
			</div>
			
			
			<button type="">发表评论</button>
		</div>
		<!-- <div class="allcomment">
			所有
		</div> -->
		<div class="nomore">
			无更多评论
		</div>
	</div>
</template>

<script>
import router from '@/router'
import {Indicator} from 'mint-ui'

export default {

  name: 'workdetail',

  data () {
    return {

    }
  },
  mounted(){
  	scrollTo(0,0)
  	Indicator.open()
  	console.log(this.$route.params.id)
  	this.$store.dispatch('workdetail',`api/works/${this.$route.params.id}`)
  },
  computed:{
  	workdetail(){
  		return this.$store.state.workdetail
  	}
  },
  methods:{
  	account(id){
  		console.log(id)
  		router.push(`/accounts/${id}`)
  	},
  	goback(){
  		window.history.go(-1)
  	}
  }
}
</script>

<style lang="scss" scoped>
	.left{
		float: left
	}
	.right{
		float:right
	}
	.clear:after{
		content:'';
		height:0;
		display:block;
		visibility: hidden;
		clear:both
	}
	.content{
		padding:15px
	}
	.comment{
		padding:0 15px 15px
	}
	.nomore{
		padding:10px 0;
		text-align: center;
		color: #666;
	    font-size: 14px;
	    
	}
	.allcomment{
		padding:0 15px 15px
	}
	img{
		width:100%;
		display:block;
		margin-bottom:10px
	}


	.title{
		.left{
			vertical-align:center;
			color:#444;
			font-size: 18px;
			i{
				font-size: 30px;
				margin-right: 5px
			}
			span{
				vertical-align:center
			}

		}
		.right{
			color:#444;
			font-size: 12px
		}
	}
	.mate{
		margin-top: 15px;
		color:#999;
		font-size: 14px;
		.type,.nickname{
			color:#07D
		}
	}
	.oat,.user{
		margin-top: 15px;

	}
	
	.user{
		color:#999;
		font-size: 14px;
	}
	.oat{
		font-size: 12px;
		font-weight: bold;
		height:18px;
		overflow:hidden;
		.original{
			    border: 1px solid #da314b;
			     padding: 1px 5px;
   				 color: #da314b;
		}
		.tag{
			margin-right: 5px;
		    margin-bottom: 10px;
		    padding: 1px 5px;
		    background-color: transparent;
		    border: 1px solid skyblue;
		    color: skyblue;
		}

	}
	.top{
		padding-bottom: 10px;
	    border-bottom: 1px solid #ddd;
	    color: #444;
	    margin-bottom: 15px;
	}
	textarea{
		resize: none;
		width:100%;
		box-sizing:border-box;
		height:1rem;
	    padding: 4px 6px;
	    border: 1px solid #ddd;
	    background: #fff;
	    color: #444;
	}
	button{
		min-height: 40px;
	    padding: 0 15px;
	    line-height: 40px;
	    font-size: 16px;
	    background-color: #00a8e6;
	 	color: #fff;
	 	float:right;
	 	outline: none;
	 	border:none

	}
	.des{
		margin:15px 0;
		color:#444;
		font-size: 14px
	}
</style>