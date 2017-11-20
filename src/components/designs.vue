<template>
	<div>
		<div class="content-design clear" >
			<div v-for='data in designsdata' class="left" :key='data.id'>
				<img :src="data.cover" alt="">
				<div>
					<p>
						<span class='price'>￥{{data.price}}~{{data.priceMax}}</span>
						<span class='product-hot'>人气：{{data.pageView}}</span>
					</p>
					<p class="nowrap title">
						{{data.title}}
					</p>
					<p class="nowrap account" @click='account(data.accountId)'>
						{{data.nickname}}
					</p>
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

  name: 'designs',

  data () {
    return {
    	nowpage:''
    }
  },
  mounted(){
  	Indicator.open()
  	this.$store.dispatch('designs',`/api/designs?page=1&perPage=10`)
  },
  computed:{
  	...mapGetters(['designsdata','designspage','designstotalpage']),
  },
  methods:{
  	uppage(){
  		if(this.designspage==1){
  			//console.log("aa")
  			uppage.style.background='#f5f5f5'
  			uppage.style.color='#999'
  			return
  		}else{
  			//console.log(11)	
  			Indicator.open('加载中...')
  			downpage.style.background='#e66988'
  			downpage.style.color='#fff'		
  			this.nowpage=this.designspage
  			this.nowpage--
  			this.$store.dispatch('designs',`/api/designs?page=${this.nowpage}&perPage=10`)
  		}
  	},
  	downpage(){
  		if(this.designspage==this.designstotalpage){
  			//console.log("bb") 
  			downpage.style.background='#f5f5f5'
  			downpage.style.color='#999'			
  			return
  		}else{
  			Indicator.open('加载中...')
  			uppage.style.background='#e66988'
  			uppage.style.color='#fff'
  			//console.log(22)			
  			this.nowpage=this.designspage
  			this.nowpage++
  			this.$store.dispatch('designs',`/api/designs?page=${this.nowpage}&perPage=10`)
  		}
  	},
  	account(id){
  		router.push(`/accounts/${id}`)
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
	.content-design{
		margin:10px 0;
		>div{
			width:49%;
			margin-bottom:10px;
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
				    white-space:nowrap
				}
			}
		}
		img{
			width:100%;
			display:block
		}
		>div:nth-child(2n){
			float:right
		}
	}
</style>