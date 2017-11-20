<template>
	<div class="content">
		<div v-if='projectsdetail' class="top">
			<div class="protop clear">			
				<i class='iconfont icon-fanhui3' @click='goback()'></i>
				<span>{{projectsdetail.id}}、{{projectsdetail.title}}</span>			
			</div>
			<div class="meta">
				由<span @click='account(projectsdetail.account.id)'>{{projectsdetail.account.nickname}}</span>
				发布于{{createTime}}	<br>
				浏览：{{projectsdetail.pageView}}	
			</div>
			<div class="tag">
				<span class='type'>{{type}}</span>
				<span v-for='data in tag'>
					{{data}}
				</span>
			</div>
			<div class="pricerange">
				<div>
					{{projectsdetail.costMin}}~{{projectsdetail.costMax}}
				</div>
				<div>
					{{deadline}}
				</div>
			</div>
			<div class="yax">
			应征			<div>
			：{{projectsdetail.signupCount}}人
				</div>
				<div>
					需求：{{number}}
				</div>
			</div>
		</div>
		<div class="bot">
			<template v-if='projectsdetail'>
				<div class="route">			
					<router-link :to='"/project/"+projectsdetail.id+"/detail"' activeClass='active' tag='a'>约稿详情</router-link>
					<router-link :to='"/project/"+projectsdetail.id+"/artists"' activeClass='active' tag='a'>应征画师</router-link>
					<router-link :to='"/project/"+projectsdetail.id+"/signup"' activeClass='active' tag='a'>我的应征</router-link>
				</div>
			</template>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import router from '@/router'
import {Indicator} from 'mint-ui'

export default {

  name: 'projectsdetail',

  data () {
    return {

    }
  },
  mounted(){
  	console.log(this.$route.params)
  	Indicator.open('加载中...')
  	
  	this.$store.dispatch('projectsdetail',`/api/projects/${this.$route.params.id}`)
  },
  computed:{
  	projectsdetail(){
  		return this.$store.state.projectsdetail
  	},
  	createTime(){
  		Date.prototype.toLocaleString=function(){
  			return this.getFullYear()+'-'+(this.getMonth()+1)+'-'+this.getDate()+" "+this.getHours()+':'+this.getMinutes()+":"+this.getSeconds()
  		 }
  		var createTime=new Date(this.projectsdetail.createTime)
  		return createTime.toLocaleString()
  		
  	},
  	deadline(){
		Date.prototype.toLocaleString=function(){
			return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()
		}
		var deadline=new Date(this.projectsdetail.deadline)
		return deadline.toLocaleString()

  				                                   
  	},
  	tag(){
  		
  		return this.projectsdetail.tag.split(',')
  			
  	
  		
  	},
  	number(){
  		if(this.projectsdetail.number==0){
			return '不限'
		}else{
			return this.projectsdetail.number+'张'
		}
  	},
  	type(){
  		if(this.projectsdetail.type==0){
  			return '商业稿'
  		}else if(this.projectsdetail.type==1){
  			return '同人稿'
  		}else{
  			return '私人稿'
  		}

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
	.bot{
		.route{
			background:#fff;
			display:flex;
			a{
				display:block;
				width:33.3%;
				padding:8px 12px;
				color:#c7c7c7;
				font-size: 14px;
				text-align: center;
				text-decoration: none;
				box-sizing:border-box;
			}
			.active{
				border-bottom:1px solid #07d;
			    color: #07d;

			}
		}
	}
</style>