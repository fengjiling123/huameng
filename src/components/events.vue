<template>
	<div>
		<div class="event-content">
			<div v-for='data,index in eventsdata'>
				<img :src="data.banner" alt="">
				<div class='bot clear'>
					<div class="img left">
						<img :src="data.account.avatarUrl" alt="">
					</div>
					<div class="nickname left">
						{{data.account.nickname}}
					</div>
					<div class="daterange right">
						{{daterange[index]}}
					</div>
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

  name: 'events',

  data () {
    return {

    }
  },
  mounted(){
  	Indicator.open("加载中...")
  	this.$store.dispatch("events",`/api/events?page=1&perPage=10&ts=1`)
  },
  computed:{
  	...mapGetters(['eventsdata','eventspage','eventstotalpage']),
  	daterange(){
  		Date.prototype.toLocaleString=function(){
  			return (this.getMonth()+1)+'.'+this.getDate()
  		}
  		var datearr=[]
  		for(var i=0;i<this.eventsdata.length;i++){
  			var startTime=new Date(this.eventsdata[i].startTime)
  			var endTime=new Date(this.eventsdata[i].endTime)
  			datearr.push(startTime.toLocaleString()+'~'+endTime.toLocaleString())
  		}
  		
  		return datearr
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
	.event-content{
		padding:10px 0;
		>div{
			margin-bottom: 10px
		}
		img{
			width:100%;
			display:block
		}
		.bot{
			padding:10px;
			background:#fff;
			img{
				width:30px
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
	.bot{
		>div{
			color:#444;
			font-size: 14px;
			line-height: 30px
		}
		.nickname{
			padding-left: 5px
		}
	}
</style>