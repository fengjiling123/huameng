<template>
	<div>
		<div class="content-padded">
			<div v-for='data,index in collectsdata' :key='data.id' @click='collects_detail(data.id)'>
				<h3>{{data.id}}、{{data.title}}</h3>
				<p class="tag">
					<span>{{type[index]}}</span>
					
					<span v-for='tagdata in tag[index]'>
						{{tagdata}}
					</span>
					
				</p>

				<div class="cost-box">
					<span>{{data.costMin}} ~ {{data.costMax}}元</span>
					<span>{{deadline[index]}}</span>
				</div>
				<div class="nowrap clear box">
					<div class="left nowrap">
						<i class='iconfont icon-user'></i>
						{{data.account.nickname}}
						
					</div>
					<div class="left nowrap">
						已投：
						{{data.number}}件
						
					</div>
					<div class="left nowrap">
						反馈：
						{{data.replyDay}}天内
						
					</div>
				</div>
				<div class="fuli">
					福利：
					<span>{{data.welfare}}</span>
				</div>
			</div>
		</div>
		<div class="nomore">
			没有更多数据了
		</div>
		
	</div>
</template>

<script>
import router from '@/router'
import {Indicator} from 'mint-ui'
import {mapGetters} from 'vuex'

export default {

  name: 'collects',

  data () {
    return {
    	
    }
  },
  mounted(){
  	// Indicator.open("加载中...")
  	this.$store.dispatch('collects','/api/collects?page=1&perPage=10&doing=0')
  },
  methods:{
  	collects_detail(id){
  		//console.log(id)
  		router.push(`/collect/${id}`)
  	}
  },
  computed:{
  	...mapGetters(['collectsdata','collectspage','collectstotalpage']),
  	  	deadline(){
  			Date.prototype.toLocaleString=function(){
  				return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()
  			}
  			var deadlinearr=[]
  			for(var i=0;i<this.collectsdata.length;i++){
  				var deadline=new Date(this.collectsdata[i].deadline)
  				deadlinearr.push(deadline.toLocaleString())
  			}		
  			return deadlinearr

  	  				                                   
  	  	},
  	  	tag(){
  	  		var tagarr=[]
  	  		var temparr=[]
  	  		for(var i=0;i<this.collectsdata.length;i++){
  	  			if(this.collectsdata[i].tag.indexOf(",")!=-1){
  	  				
  	  				tagarr.push(this.collectsdata[i].tag.split(','))
  	  			}else{
  	  				tagarr.push([])
  	  			}
  	  			
  	  		}
  	  		
  	  		

  			return tagarr
  	  		
  	  		
  	  	},
  	  	type(){
  	  		var typearr=[]
  			for(var i=0;i<this.collectsdata.length;i++){
  				if(this.collectsdata[i].type==0){
  					typearr.push('商业稿')
  				}else if(this.collectsdata[i].type==2){
  					typearr.push('私人稿')
  				}else {
  					typearr.push('同人稿')
  				}
  				
  			}	
  			return typearr
  	  	}
  }

}
</script>

<style lang="scss" scoped>
	.nomore{
		margin:15px 0;
		text-align: center;
		color:#444;
		font-size: 14px
	}
	.fuli{
		color: #659f13!important;
		font-size: 14px;
		span{
			
    		color: #999;
		}
	}
	.tag{
		height:22px;
		overflow:hidden
	}
	.left{
		float:left
	}
	.right{
		float:right
	}
	.clear:after{
		content:'';
		display:block;
		height:0;
		visibility: hidden;
		clear:both
	}
	.nowrap{
		width:100%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.projects{
		padding:10px 6px;
		background:#fff;
		margin-top:10px;
		
		div{
			border-left: 5px solid #e66988;
		}
		h3{
			padding-left:6px;
		    font-weight: normal;
		    margin-bottom: 0;
		    color:#444;
		    a{
		    	font-size:16px;
		    	color:#929292;
		    	text-decoration: none
		    }
		}
	}

	.content-padded{
		padding-top: 10px;
		>div{
			background:#fff;
			margin-bottom: 10px;
			padding:15px;
			h3{
				font-weight: normal;
				margin-bottom: 10px;
				line-height: 24px;
				color:#444;
				max-width: 100%;
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    font-size: 18px;
			};
			.tag{
				span{
					margin-right: 5px;
					margin-bottom: 2px;
					padding: 1px 5px;
					background-color: transparent;
					border: 1px solid skyblue;
					color: skyblue;
					display: inline-block;
				    font-weight: bold;
				   font-size: 8px;
				   
				}
			}
		}
		.cost-box{
			margin: 10px 0;
			padding:10px;
			background-color: #444;
			text-align: center;
			color: #fff;
			display:flex;
			span:nth-child(1){
				border-right:1px solid #fff
			}
			span{
				display:block;
				width:50%;
				font-size: 14px;
			}
		}
		i{
			font-style: normal
		}
		.iconfont{
			font-size: 10px
		}
		.box{
			font-size: 14px;
    		color: #999;
    		line-height: 20px;
    		>div{
    			width:25%;
    			padding-right:0.5rem;
    		}
		}
	}
	.page{
		margin:15px 0;
		a{	
			width:40%;
			text-align: center;
			color:#fff;
			display:block;
		    background-color: #e66988;
		    min-height: 40px;
		    padding: 0 15px;
		    line-height: 40px;
		    font-size: 16px;

		}
	}
</style>