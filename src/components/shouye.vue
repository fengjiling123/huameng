<template>
	<div>
		<div class="search" @click='toSearch()'>
			<a class="search_input">
				搜索画作、设计、约稿、活动、用户
				<i class='iconfont icon-sousuo2 right'></i>
			</a>
			
		</div>
		<swipe class="my-swipe">
			<swipe-item>
				<img src="http://artwork.huamoe.com/swy560260.jpg" alt="">
			</swipe-item>
		  	<swipe-item>
		  		<img src="http://artwork.huamoe.com/mutamobile.jpg" alt="">
		 	</swipe-item>
		  	<swipe-item>
		  		<img src="http://artwork.huamoe.com/yg560260.jpg" alt="">
		  	</swipe-item>
		</swipe>
		<div class="list">
			<router-link tag='div' to='/works'>
				<img src="src/assets/load.png" alt="">
				画作
			</router-link>
			<router-link tag='div' to='/designs'>
				<img src="src/assets/design.png" alt="">
				设计
			</router-link>
			<router-link tag='div' to='/collects'>
				<img src="src/assets/collect.png" alt="">
				征稿
			</router-link>
			<router-link tag='div' to='/events'>
				<img src="src/assets/event.png" alt="">
				活动
			</router-link>
			<router-link tag='div' to='/qqun'>
				<img src="src/assets/qqun.png" alt="">
				Q群
			</router-link>
		</div>
		<div class="projects">
			<div>
				<h3>				
					最新约稿
					<router-link tag='a' to='/projects' class="right">
						更多
						<i class='iconfont icon-more'></i>
					</router-link>
				</h3>
			</div>					
		</div>
		<div class="content-padded">
			<div v-for='data,index in indexprojects' :key='data.id' @click='projectsdetail(data.id)'>
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
						应征：
						{{data.signupCount}}人
						
					</div>
					<div class="left nowrap">
						需求：
						{{number[index]}}
						
					</div>
				</div>
			</div>
		</div>
		<div class="tops">
			<div>
				<h3>				
					周点赞榜 TOP6
					<router-link tag='a' to='/works/ranking' class="right">
						更多
						<i class='iconfont icon-more'></i>
					</router-link>
				</h3>
			</div>					
		</div>
		<div class="content-top clear">
			<div v-for='data,index in indexeancktop6' class="left top_box" :key='data.id'>
				<img :src="data.cover" alt="" @click='work(data.id)'>
				<div class="clear top_bar" @click='account(data.accountId)'>
					<div class="topnum left" >
						{{index+1}}
					</div>
					<div class="left nickname">
						{{data.nickname}}
					</div>
				</div>
			</div>
		</div>
		<div class="designs">
			<div>
				<h3>				
					最近设计
					<router-link tag='a' to='/designs' class="right">
						更多
						<i class='iconfont icon-more'></i>
					</router-link>
				</h3>
			</div>					
		</div>
		<div class="content-design clear" >
			<div v-for='data in indexdesigis' class="left" :key='data.id'>
				<img :src="data.cover" alt="">
				<div>
					<p>
						<span class='price'>￥{{data.price}}~{{data.priceMax}}</span>
						<span class='product-hot'>人气：{{data.pageView}}</span>
					</p>
					<p class="nowrap title">
						{{data.title}}
					</p>
					<p class="nowrap account"  @click='account(data.accountId)'>
						{{data.nickname}}
					</p>
				</div>
			</div>
		</div>
		<div class="artist">
			<div>
				<h3>				
					推荐画师
					<router-link tag='a' to='/artists/commond' class="right">
						更多
						<i class='iconfont icon-more'></i>
					</router-link>
				</h3>
			</div>					
		</div>
		<div class="content-artist">
			<div v-for='data,index in indexartists' class="artist-box" :key='data.id'>
				<div class="top clear">
					<div class="left"  @click='account(data.id)'>
						<img :src="data.avatarUrl" alt="" class="avatarUrl">
						<img src="http://odun6jycz.bkt.clouddn.com/recommend_red.png" alt="" v-if='data.recommend' class="recommend" >
					</div>
						
					<div class="left nickname">
						<p class="nickname-top">
							<span class='nick' @click='account(data.id)'>{{data.nickname}}</span>
							<a class='guanzhu'>
								<i>+</i>
								关注
							</a>
						</p>
						<P>
							<div v-if='tags'>
								<span v-for='tagsdata in tags[index]' class='tags'>
									{{tagsdata}}
								</span>
							</div>
							
						</P>
					</div>
				</div>
				<hr>
				<div class="bot">
					<div v-for='works in data.works' @click='work(works.workId)'>
						<a>
							<img :src="works.cover" alt="">
						</a>
					</div>
				</div>
			</div>			
		</div>
		<div class="more">
			<router-link to='/artists/commond' tag='a'>推荐更多画师</router-link>
		</div>
	</div>	
</template>

<script>
import {Indicator} from 'mint-ui'
import { Swipe, SwipeItem } from 'vue-swipe';
import {mapGetters} from 'vuex'
import router from '@/router'
export default {

  name: 'shouye',

  data () {
    return {
   		
    }
  },
  mounted(){
  	this.$store.dispatch('banner','banner.json')
  	if(!this.$store.state.index){
  		Indicator.open('加载中...')
		this.$store.dispatch('index','/api/index')
  	}
  	
  },
  components:{
  	'swipe':Swipe,
  	'swipe-item':SwipeItem
  },
  methods:{
  	account(id){
  		console.log(id)
  		router.push(`/accounts/${id}`)
  	},

  	work(id){
  		console.log(id)
  		router.push(`/work/${id}`)
  	},
  	
  	projectsdetail(id){
  		console.log(id)
  		router.push(`/project/${id}`)
  		
  	},
  	toSearch(){
  		router.push(`/search`)
  	}
  },
  computed:{		
  	...mapGetters(['indexprojects','indexeancktop6','indexdesigis','indexartists']),
  	deadline(){
		Date.prototype.toLocaleString=function(){
			return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()
		}
		var deadlinearr=[]
		for(var i=0;i<this.indexprojects.length;i++){
			var deadline=new Date(this.indexprojects[i].deadline)
			deadlinearr.push(deadline.toLocaleString())
		}		
		return deadlinearr

  				                                   
  	},
  	tag(){
  		var tagarr=[]
  		for(var i=0;i<this.indexprojects.length;i++){
  			//tagarr.push(this.indexprojects[i].tag.split(','))
  			if(this.indexprojects[i].tag.indexOf(",")!=-1){
  				
  				tagarr.push(this.indexprojects[i].tag.split(','))
  			}else{
  				tagarr.push([])
  			}
  		}
  		return tagarr
  	},
  	number(){
  		var numarr=[]
  		for(var i=0;i<this.indexprojects.length;i++){
  			if(this.indexprojects[i].number==0){
  				numarr.push('不限')
  			}else{
  				numarr.push(this.indexprojects[i].number+'张')
  			}
  			
  		}
  		return numarr
  	},
  	type(){
  		var typearr=[]
		for(var i=0;i<this.indexprojects.length;i++){
			if(this.indexprojects[i].type==0){
				typearr.push('商业稿')
			}else if(this.indexprojects[i].type==2){
				typearr.push('私人稿')
			}else {
				typearr.push('同人稿')
			}
			
		}	
		return typearr
  	},
  	tags(){
  		var tagsarr=[]
  		for(var i=0;i<this.indexartists.length;i++){
  			var temparr=[]
  			if(this.indexartists[i].tags.length<=5){
  				tagsarr.push(this.indexartists[i].tags)
  			}else{
  				for(var j=0;j<5;j++){
  					temparr.push(this.indexartists[i].tags[j])
  				}
  				tagsarr.push(temparr)
  			}
  		}

  		return tagsarr
  	}

	}
}
</script>
<style src='@/assets/iconfont/iconfont.css'></style>
<style src='vue-swipe/dist/vue-swipe.css'></style>
<style lang='scss'>
	.mint-swipe-indicators{
		left:96%;
		bottom:0;
		width: 30px;
		position: absolute;
		.mint-swipe-indicator.is-active{
			opacity:1;
			background: #000
		}
		.mint-swipe-indicator{
			border:1px solid #000;
			opacity: 1;
			background: transparent;
			width: 5px;
			height: 5px;
			margin: 1px
		}
	}
</style>
<style lang="scss" scoped>

	hr{
		box-sizing: content-box;
	    height: 0;
	    margin: 10px 0;
	    border: 0;
	    border-top: 1px solid #ddd;
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
	.search{
		width:100%;
		box-sizing:border-box;
		padding:5px;
		background:#fff
	}
	.search_input{
		display: block;
		    background-color: #ededf1;
		    text-decoration: none;
		    color: #aaa;
		    padding: 10px;
		    border: 1px solid transparent;
		    outline: none;
		    font: inherit;
		    font-size: 14px
	}
	.right{
		float: right

	}

	.iconfont{
		font-size: 20px
	}

	.my-swipe {
	  height:3.5rem;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  img{
		width:100%
		}
	}

	.list{
		display:flex;
		width:100%;
		padding:10px;
		box-sizing:border-box;
		background:#fff;
		justify-content: space-between;
		div{
			
			display:flex;
			flex-direction:column;
			text-align: center;
			color:#444;
			font-size: 14px
		}
		img{
			width:45px;
			margin:0 auto
		}
	}

	.projects,.tops,.designs,.artist{
		padding:10px 6px;
		background:#fff;
		margin-top:10px;
		.icon-more{
			font-size: 12px
		}
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
	.designs{
		margin-top:0
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

	.content-top{
		padding-top:10px;
		width:100%;
		display:flex;
		flex-wrap:wrap;
		// justify-content:space-between;
		
		>div{
			width:31.5%;
			margin:0 0.2rem 0.2rem 0			
		}
		>div:nth-child(3n){
			margin-right:0
		}
		img{
			width:100%;
			display:block
		}
		.top_box{
			//margin-bottom:10px
		}
		.top_bar{
			background:#fff;
			font-size: small;
			padding: 5px;
			line-height: 20px;
			
		}
		.topnum{
			color: #fff;
		    background-color: #f66;
		    text-align: center;
		    line-height: 20px;
		    width: 20px;
		    height: 20px;
		    border-radius: 50%;
			
		}
		.nickname{
			margin-left: 5px;
			color: #07D;
			text-overflow: ellipsis;
			overflow:hidden;
			white-space: nowrap;
			width:75%
		}
	}
	.content-design{
		padding-top:10px;
		>div{
			width:49%;
			div{
				background:#fff;
				padding:5px 10px;
				p{
					line-height: 25px
				}
				.price{
					color: #f40;
				    font-weight: 700;
				    font-size: 0.36rem;
				}
				.product-hot{
				    float: right;
				    font-size: 12px;
				    color: #aaa;
					
				}
				.title{
					color: #333;
				    display: block;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    height: 20px;
				    white-space: nowrap;
				    font-size: 14px
				}
				.account{
					color: #07D;
				    text-decoration: none;
				    cursor: pointer;
				    font-size: 14px;
				    text-overflow: ellipsis;
				    overflow:hidden;
				    white-space: nowrap
				}
			}
		}
		img{
			width:100%;
			display:block
		}
		>div:nth-child(2){
			float:right
		}
	}

	.content-artist{
		margin-top: 10px;
		.artist-box{
			margin-bottom: 10px;
			padding:10px;
			background:#fff;
			.top{
				position:relative
			}
			.avatarUrl{
				width:50px;
				border-radius: 50%;
			}
			.recommend{
				width:20px;
				position:absolute;
				left:40px;
				top:0
			}
		}
		.bot{
			display:flex;
			justify-content: space-between;
			>div{
				width:23%;
				a{
					display: block;
				    padding: 4px;
				    border: 1px solid #e5e5e5;
				    background: #fff;
				    border-radius: 4px;
				}
				img{
					width:100%;
					display:block;
				}
			}

			
		}
		.top{
			.nickname{
				padding-left:20px;

			}
			.nickname-top{
				margin-bottom:5px
			}
			.nick{
				color: #444;
			    text-decoration: none;
			    float: left;
			    display: inline-block;
			   font-size: 14px;
			    overflow: hidden;
		        white-space: nowrap;
		        text-overflow: ellipsis;
			}
			.guanzhu{

				min-height: 25px;
			    padding: 0 10px;
			    line-height: 25px;
			    font-size: 12px;
		        color: #07D;
		        text-decoration: none
			}
			.tags{
				margin-right: 5px;
				margin-bottom: 2px;
				padding: 1px 5px;
				background-color: transparent;
				border: 1px solid skyblue;
				color: skyblue;
				font-size: 12px;
				font-weight: bold

			}
		}
	}

	.more{
		min-height: 40px;
	    padding: 0 15px;
	    line-height: 40px;
	    font-size: 16px;
        background-color: #e66988;
        text-align:center;
        margin-bottom: 10px;
       a{
       	color:#fff;
       	text-decoration: none;

       }
	}
</style>