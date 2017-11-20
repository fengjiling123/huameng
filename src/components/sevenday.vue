<template>
	<div class="content">
		<div v-for='data,index in sevendaylist' class="sevenday" :key='data.id'>
			<div>
				<img :src="data.cover" alt="" @click='work(data.id)'>
			</div>
			<div class="bot clear" @click='account(data.accountId)'>
				<div class="left count">
					{{index+1}}
				</div>
				<div class="left nickname">
					{{data.nickname}}
				</div>
			</div>
		</div>
		<div class="nomore">
			加载完成
		</div>
	</div>
</template>

<script>
import router from '@/router'
import {Indicator} from 'mint-ui'
import {mapGetters} from 'vuex'
export default {

  name: 'sevenday',

  data () {
    return {

    }
  },
  mounted(){
  	Indicator.open()
  	this.$store.dispatch('sevenday',`/api/works/ranking/12`)
  },
  computed:{
  	sevendaylist(){
  		return this.$store.state.sevenday
  	}
  },
  methods:{
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
	.clear:after{
		content:'';
		display:block;
		height:0;
		visibility:hidden;
		clear:both
	}	
	.left{
		float:left
	}
	.right{
		float:right
	}
	.content{
		display: flex;
		flex-wrap:wrap;
		
		
		.bot{
			padding:5px;
		}
		.count{
			color: #fff;
			background-color: #f66;
			text-align: center;
			line-height: 20px;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			font-size: 14px
		}
		.nickname{
			color: #07D;
		    text-decoration: none;
		    cursor: pointer;
		    margin-left: 5px;
	        display: block;
	       
	        font-size: 12px;
	        text-overflow: ellipsis;
    		overflow:hidden;
    		white-space: nowrap;
    		width:80%

		}
	}
	.sevenday{
		background:#fff;
		width:47%;
		margin-bottom: 10px;
		img{
			width:100%;
			display:block
		}
	}

	.sevenday:nth-child(2n){
		margin-left:0.45rem
	}
	.nomore{
		color: #666;
	    font-size: 14px;
	    text-align: center;
	    padding: 10px 0;
	    text-align: center;
	    width:100%
	}
</style>