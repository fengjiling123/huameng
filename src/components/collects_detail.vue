<template>
	<div>
		<div class="content">
			<div v-if='collects_detail' class="top">
				<div class="protop clear">			
					<i class='iconfont icon-fanhui3' @click='goback()'></i>
					<span>{{collects_detail.id}}、{{collects_detail.title}}</span>			
				</div>
				<div class="meta">
					由<span @click='account(collects_detail.account.id)'>{{collects_detail.account.nickname}}</span>
					发布于{{createTime}}	<br>
					浏览数：{{collects_detail.pageView}}	
				</div>
				<div class="tag">
					
					<span v-for='data in tag'>
						{{data}}
					</span>
				</div>
				<div class="pricerange">
					<div>
						{{collects_detail.costMin}}~{{collects_detail.costMax}}
					</div>
					<div>
						{{deadline}}
					</div>
				</div>
				<div class="yax">
					<div>
						已投：{{collects_detail.number}}件
					</div>
					<div>
						反馈：{{collects_detail.replyDay}}天内
					</div>

				</div>
				<div class="welfare">
					{{collects_detail.welfare}}
				</div>
				<div class="collects_detail_description" v-html='collects_detail.description'>
					
				</div>
				<div class="plase">
					 * 请在电脑段上传设计 
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
import {Indicator} from 'mint-ui'
import router from '@/router'
export default {

  name: 'collects_detail',

  data () {
    return {

    }
  },
  mounted(){
  	Indicator.open("加载中")
  	console.log(this.$route.params.id)
  	this.$store.dispatch('collects_detail',`/api/collects/${this.$route.params.id}`)
  },
  computed:{
  	collects_detail(){
  		return this.$store.state.collects_detail
  	},

  	createTime(){
  		Date.prototype.toLocaleString=function(){
  			return this.getFullYear()+'-'+(this.getMonth()+1)+'-'+this.getDate()+" "+this.getHours()+':'+this.getMinutes()+":"+this.getSeconds()
  		 }
  		var createTime=new Date(this.collects_detail.createTime)
  		return createTime.toLocaleString()
  		
  	},
  	deadline(){
		Date.prototype.toLocaleString=function(){
			return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()
		}
		var deadline=new Date(this.collects_detail.deadline)
		return deadline.toLocaleString()

  				                                   
  	},
  	tag(){
  		
  		return this.collects_detail.tag.split(',')
  			
  	
  		
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
<style lang="scss">
	.collects_detail_description{
	    color: #444;
	    font-size: 14px;
	    p{
	    	margin:15px 0;
	    }
		img{
			width:100%
		}
	}
</style>
<style lang="scss" scoped>
	.left{
		float:left;
	}
	.right{
		float:right
	}
	.clear:after{
		content:'';
		display:block;
		height:0;
		visibility:hidden;
		clear:both
	}
	.top{
		padding:15px;
		
		.protop{
			font-size: 18px;
		    padding-bottom: 10px;
		    border-bottom: 1px solid #ddd;
		    color: #444;
		    i{
				font-size: 30px
			}
		}
		.meta{
			font-size: 14px;
		    line-height: 20px;
		    margin-top: 15px;
		    color: #999;
		    span{
		    	color:#39f
		    }
		}
		.tag{
			margin-top:5px;

			span{
				
				padding: 1px 5px;
				margin:5px 5px 2px 0;
				border: 1px solid skyblue;
				color: skyblue;
				
			    font-size: 10px;
			    font-weight: 700;
			    line-height: 14px;
			    text-align: center;	
		        vertical-align: middle;
			}
		}
		.pricerange{
			display:flex;
			padding: 10px;
			box-sizing:border-box;
		  	padding: 10px;
		  	margin-top: 10px;
		    margin-bottom: 10px;
		    background-color: #444;
		    color: #fff;	
			div{
				width:50%;
				text-align: center;
			}
			>div:last-child{
				border-left:1px solid #fff
			}
		}
		.yax{
			display:flex;
			div{
				width:50%;
				text-align:center;
				color:#999;
				font-size: 14px
			}
		}
	}
	.welfare{
		background: #f2fae3;
	    color: #659f13;
	    padding:10px;
	    font-size: 14px;

	}
	.plase{
		padding:10px;
	    color: #e28327!important;
	    font-size: 14px
	}
</style>