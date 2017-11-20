<template>	
	<div>	
		<div class="chu-content" id='content'>
			<div v-for='data in chuArtistsdata' class="chu" :key=data.id  @click='account(data.id)'>
				<img :src="data.recommendCover" alt="">
				<div>
					{{data.recommendSort}}、{{data.nickname}}
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

  name: 'chuArtists',

  data () {
    return {
    	nowpage:''
    }
  },
  mounted(){
  	if(!this.$store.state.chuArtists){
  		Indicator.open('加载中...')
  		this.$store.dispatch('chuArtists',`/api/artists/chu?page=1&perPage=10`)

  	}
  	
  },
  computed:{
  	...mapGetters(['chuArtistsdata','chuArtistspage','chuArtiststotalpage'])
  },
  methods:{
  	account(id){
  		console.log(id)
  		router.push(`/accounts/${id}`)
  	},
	uppage(){
  		if(this.chuArtistspage==1){
  		
  			uppage.style.background='#f5f5f5'
  			uppage.style.color='#999'
  			return
  		}else{
  			//console.log(11)	
  			Indicator.open('加载中...')
  			downpage.style.background='#e66988'
  			downpage.style.color='#fff'		
  			this.nowpage=this.chuArtistspage
  			this.nowpage--
  			this.$store.dispatch('chuArtists',`/api/artists/chu?page=${this.nowpage}&perPage=10`)
  			
  		}
  	},
  	downpage(){
  		if(this.chuArtistspage==this.chuArtiststotalpage){
  			//console.log("bb") 
  			downpage.style.background='#f5f5f5'
  			downpage.style.color='#999'			
  			return
  		}else{
  			Indicator.open('加载中...')
  			uppage.style.background='#e66988'
  			uppage.style.color='#fff'
  			//console.log(22)			
  			this.nowpage=this.chuArtistspage
  			this.nowpage++
  			this.$store.dispatch('chuArtists',`/api/artists/chu?page=${this.nowpage}&perPage=10`)
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>
	.chu-content{
		display:flex;
		flex-wrap:wrap;
		.chu{
			width:47%;
			margin-bottom: 10px;
			img{
				width:100%;
				display:block
			}
			div{
				font-size: 14px;
				padding: 5px;
				background-color: white;
				color: #07D;
			}
		}
		.chu:nth-child(2n){
			margin-left:0.45rem
			//float:right
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
</style>