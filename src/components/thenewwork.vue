<template>
	<div>
		<div class="works-content" id='content'>
			<div v-for='data in newworksdata' class="works" :key='data.id'>
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

  name: 'nowwork',

  data () {
    return {
    	nowpage:''
    }
  },
  mounted(){
  	//http://m.huamoe.com/api/works?page=1&perPage=12
  	if(!this.$store.state.newworks){
  		Indicator.open('加载中...')
  		this.$store.dispatch("newworks",`/api/works?page=1&perPage=12`)
  		
  	}
  },
  computed:{
  	...mapGetters(['newworksdata','newworkspage','newworkstotalpage']),

  },
  methods:{
  	uppage(){
  		if(this.newworkspage==1){
  		
  			uppage.style.background='#f5f5f5'
  			uppage.style.color='#999'
  			return
  		}else{
  			//console.log(11)	
  			Indicator.open('加载中...')
  			downpage.style.background='#e66988'
  			downpage.style.color='#fff'		
  			this.nowpage=this.newworkspage
  			this.nowpage--
  			this.$store.dispatch('newworks',`/api/works?page=${this.nowpage}&perPage=12`)
  			
  		}
  	},
  	downpage(){
  		if(this.newworkspage==this.newworkstotalpage){
  			//console.log("bb") 
  			downpage.style.background='#f5f5f5'
  			downpage.style.color='#999'			
  			return
  		}else{
  			Indicator.open('加载中...')
  			uppage.style.background='#e66988'
  			uppage.style.color='#fff'
  			//console.log(22)			
  			this.nowpage=this.newworkspage
  			this.nowpage++
  			this.$store.dispatch('newworks',`/api/works?page=${this.nowpage}&perPage=12`)
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