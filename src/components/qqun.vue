<template>
	<div class="content" v-if='qqun'>
		<div class="qqun-content" v-for='data in qqun'>
			<h3 class="name">
				{{data.name}}
			</h3>
			<div class="item">
				<div v-for='itemdata in data.items'>
					{{itemdata.name}}：
					<a :href="itemdata.link" title="">{{itemdata.qq}}</a>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import router from '@/router'
import {Indicator} from 'mint-ui'
import {mapGetters} from 'vuex'
export default {

  name: 'qun',

  data () {
    return {

    }
  },
  mounted(){
  	
	Indicator.open()
	this.$store.dispatch("qqun",'/api/index/qun')
  	
  	
  },
  computed:{
  	qqun(){
  		return this.$store.state.qqun
  	}
  }
}
</script>

<style lang="scss" scoped>
	.content{
		margin:10px 0;
		>div{
			padding:15px;
			margin-top:10px;
			background:#fff;
			h3{
				font-weight: normal;
				margin-bottom: 15px
			}
			.item div{
				margin: 15px 0;
				color:#444;
				font-size: 14px;
				a{
					color: #07D;
					text-decoration: none;
					cursor: pointer;
				}
			}
			.item div:last-child{
				margin-bottom:0
			}
		}
	}
</style>