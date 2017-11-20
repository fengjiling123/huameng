<template>
	<div>
		<div class="works-content" id='content'>
			<div v-for='data in search_workdata' class="works" :key='data.id'>
				<img :src="data.cover" alt="" @click='work(data.id)'>
				<div class="clear">
					<div class="img left" @click='account(data.accountId)'>
						<img :src="data.avatarUrl" alt="">
					</div>
					<div class="left nickname" @click='account(data.accountId)'>
						{{data.nickname}}
					</div>
					<div class="zancount right">
						<i class='iconfont icon-fabulous'></i>{{data.favoriteCount}}
					</div>
					
				</div>
				<div class="imagecount">
					{{data.imageCount}}P
				</div>
			</div>

		</div>
		<div class="page clear" v-if='more'>
			<a class="left" @click='uppage' id='uppage'><上一页</a>
			<a class="right" @click='downpage' id='downpage'>下一页></a>
		</div>
		<div class="nomore" v-else>
			没有更多数据了
		</div>
	</div>
</template>

<script>
import {Indicator} from 'mint-ui'
import router from '@/router'
import {mapGetters} from 'vuex'
export default {

  name: 'search_work',

  data () {
    return {
    	nowpage:''
    }
  },
  mounted(){
  	//console.log(this.query)
  	//http://m.huamoe.com/api/search/work?page=1&q=a
  	console.log(this.$route.query.q)
  	Indicator.open('加载中...')
  	this.$store.dispatch('search_work',`/api/search/work?page=1&q=${this.$route.query.q}`)
  	
  },
  computed:{
  	...mapGetters(['search_workdata','search_workpage','search_worktotalpage']),
  	more(){
  		if(this.search_worktotalpage==1||this.search_worktotalpage==0){
  			return false
  		}
  		return true
  	},
  	query(){
  		return this.$route.query
  	}
  },
  methods:{
  	uppage(){
  		if(this.search_workpage==1){
  		
  			uppage.style.background='#f5f5f5'
  			uppage.style.color='#999'
  			return
  		}else{
  			//console.log(11)	
  			Indicator.open('加载中...')
  			downpage.style.background='#e66988'
  			downpage.style.color='#fff'		
  			this.nowpage=this.search_workpage
  			this.nowpage--
  			this.$store.dispatch('search_work',`/api/search/work?page=${this.nowpage}&q=${this.$route.query.q}`)
  			
  		}
  	},
  	downpage(){
  		if(this.search_workpage==this.search_worktotalpage){
  			//console.log("bb") 
  			downpage.style.background='#f5f5f5'
  			downpage.style.color='#999'			
  			return
  		}else{
  			Indicator.open('加载中...')
  			uppage.style.background='#e66988'
  			uppage.style.color='#fff'
  			//console.log(22)			
  			this.nowpage=this.search_workpage
  			this.nowpage++
  			this.$store.dispatch('search_work',`/api/search/work?page=${this.nowpage}&q=${this.$route.query.q}`)
  		}
  	},

  	account(id){
  		console.log(id)
  		router.push(`/accounts/${id}`)
  	},
  	work(id){
  		router.push(`/work/${id}`)
  	}
  }
}
</script>

<style lang="scss" scoped>
.nomore{
	margin:15px 0;
	text-align:center;
	color:#444;
	font-size:14px
}
.works-content{

	display:flex;
	flex-wrap:wrap;
	.works{
		position:relative;
		width:47%;
		margin-bottom: 10px;
		img{
			width:100%;
			display:block
		}
		>div{
			font-size: 14px;
			padding: 5px;
			background-color: white;
			color: #3d4145;;
		}
		.imagecount{
			border-radius: 4px;
		    font-size: 12px;
		    padding: 0 5px;
		    line-height: 20px;
		    top: 5px;
		    left: 5px;
		    background-color: rgba(0,0,0,.5);
	        color: #fff;
	        position: absolute;
		}
	}
	.works:nth-child(2n){
		margin-left:0.45rem
		
	}
	.img{
		width:30px;
		
		img{
			width:100%;
			border-radius:50%;

		}
	}
	.nickname{
		
		line-height: 30px;
		margin-left: 5px
	}
	.zancount{
		i{
			margin-right:5px;
		};
		line-height: 30px
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
.nickname{
	white-space:nowrap;
	text-overflow:ellipsis;
	overflow:hidden;
	width:50%;
	height:30px
}
</style>