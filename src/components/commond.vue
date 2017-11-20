<template>
	<div>
		<div class="content-artist">
			<div v-for='data,index in commondsdata' class="artist-box" :key='data.id'>
				<div class="top clear">
					<div class="left" @click='account(data.id)'>
						<img :src="data.avatarUrl" alt="" class="avatarUrl">
						<img src="http://odun6jycz.bkt.clouddn.com/recommend_red.png" alt="" v-if='data.recommend' class="recommend">
					</div>
						
					<div class="left nickname">
						<p class="nickname-top">
							<span class='nick' @click='account(data.id)'>{{data.nickname}}</span>
							<a href="" title="" class='guanzhu'>
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
		<div class="page clear" >
			<a class="left" @click='uppage' id='uppage'><上一页</a>
			<a class="right" @click='downpage' id='downpage'>下一页></a>
		</div>
	</div>
</template>

<script>
import router from '@/router'
import {Indicator} from 'mint-ui'
import {mapGetters} from 'vuex'
export default {

  data () {
    return {
    	nowpage:''
    }
  },

  mounted(){
  	if(!this.$store.state.commonds){
  		Indicator.open('加载中...')
		this.$store.dispatch('commonds','/api/artists?page=1&perPage=10&official=1')
  	}
  	scrollTo(0,0)
  	//http://m.huamoe.com/api/artists?page=1&perPage=10&official=1
  },
  methods:{
  	uppage(){
  		if(this.commondspage==1){
  			console.log("aa")
  			uppage.style.background='#f5f5f5'
  			uppage.style.color='#999'
  			return
  		}else{
  			console.log(11)	
  			Indicator.open('加载中...')
  			downpage.style.background='#e66988'
  			downpage.style.color='#fff'		
  			this.nowpage=this.commondspage
  			this.nowpage--
  			this.$store.dispatch('commonds',`/api/artists?page=${this.nowpage}&perPage=10&official=1`)
  		}
  	},
  	downpage(){
  		if(this.commondspage==this.commondstotalpage){
  			console.log("bb") 
  			downpage.style.background='#f5f5f5'
  			downpage.style.color='#999'			
  			return
  		}else{
  			Indicator.open('加载中...')
  			uppage.style.background='#e66988'
  			uppage.style.color='#fff'
  			console.log(22)			
  			this.nowpage=this.commondspage
  			this.nowpage++
  			this.$store.dispatch('commonds',`/api/artists?page=${this.nowpage}&perPage=10&official=1`)
  		}
  	},
  	account(id){
  		console.log(id)
  		router.push(`/accounts/${id}`)
  	},
  	
  	work(id){
  		console.log(id)
  		router.push(`/work/${id}`)
  	}

  },
  computed:{
  	...mapGetters(['commondsdata','commondspage','commondstotalpage']),

  	tags(){
  		var tagsarr=[]
  		for(var i=0;i<this.commondsdata.length;i++){
  			var temparr=[]
  			if(this.commondsdata[i].tags.length<=5){
  				tagsarr.push(this.commondsdata[i].tags)
  			}else{
  				for(var j=0;j<5;j++){
  					temparr.push(this.commondsdata[i].tags[j])
  				}
  				tagsarr.push(temparr)
  			}
  		}

  		return tagsarr
  	}
  }
}
</script>

<style lang="scss" scoped>
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
			//justify-content: space-between;
			>div{
				width:23%;
				margin-right:0.2rem;

				a{
					display: block;
				    padding: 4px;
				    border: 1px solid #e5e5e5;
				    background: #fff;
				    border-radius: 4px;
				}
				img{
					width:100%
				}
			}
			>div:nth-child(4){
				margin:0
			}

			
		}
		.top{
			.nickname{
				padding-left:20px
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
		visibility:hidden;
		clear:both
	}

	hr{
		box-sizing: content-box;
	    height: 0;
	    margin: 10px 0;
	    border: 0;
	    border-top: 1px solid #ddd;
	}
	#uppage{
		background-color: #f5f5f5;
    	color: #999;
	}
</style>