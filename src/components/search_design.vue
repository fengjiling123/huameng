<template>
	<div>
		<div class="content-design clear" >
			<div v-for='data in search_designdata' class="left" :key='data.id'>
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
		<!-- 按钮 -->
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

  name: 'search_design',

 data () {
     return {
     	nowpage:''
     }
   },
   mounted(){
   	//console.log(this.query)
   	//http://m.huamoe.com/api/search/design?page=1&q=a
   	console.log(this.$route.query.q)
   	Indicator.open('加载中...')
   	this.$store.dispatch('search_design',`/api/search/design?page=1&q=${this.$route.query.q}`)
   	
   },
   computed:{
   	...mapGetters(['search_designdata','search_designpage','search_designtotalpage']),
   	more(){
   		if(this.search_designtotalpage==1||this.search_designtotalpage==0){
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
   		if(this.search_designpage==1){
   		
   			uppage.style.background='#f5f5f5'
   			uppage.style.color='#999'
   			return
   		}else{
   			//console.log(11)	
   			Indicator.open('加载中...')
   			downpage.style.background='#e66988'
   			downpage.style.color='#fff'		
   			this.nowpage=this.search_designpage
   			this.nowpage--
   			this.$store.dispatch('search_design',`/api/search/work?page=${this.nowpage}&q=${this.$route.query.q}`)
   			
   		}
   	},
   	downpage(){
   		if(this.search_designpage==this.search_designtotalpage){
   			//console.log("bb") 
   			downpage.style.background='#f5f5f5'
   			downpage.style.color='#999'			
   			return
   		}else{
   			Indicator.open('加载中...')
   			uppage.style.background='#e66988'
   			uppage.style.color='#fff'
   			//console.log(22)			
   			this.nowpage=this.search_designpage
   			this.nowpage++
   			this.$store.dispatch('search_design',`/api/search/work?page=${this.nowpage}&q=${this.$route.query.q}`)
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