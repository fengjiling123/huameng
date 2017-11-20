<template>
	<div v-if='projectsdetail' class="projectsdetail">
		<div v-html='projectsdetail.description' id="projectsdetail_detail">			
		</div>
		<div class="woyaoyingz">
			我要应征
		</div>
	</div>
</template>

<script>
export default {

  name: 'projectsdetail_detail',

  data () {
    return {

    }
  },
  computed:{
  	projectsdetail(){
  		return this.$store.state.projectsdetail
  	}
  }
}
</script>

<style lang="scss">
	
	.projectsdetail{
		padding:10px;
		#projectsdetail_detail{
			color:#444;		
			font-size: 14px;
			
			
			img{
				width:100%
			}		
			
		};
		.woyaoyingz{
			margin-top: 15px!important;
			min-height: 40px;
			padding: 0 15px;
			line-height: 40px;
			font-size: 16px;
			background-color: #e66988;
			color:#fff;
			text-align: center
		}
	}

	
</style>