<template>
	<div>
		<div class="header">
			<router-link to='/works/ranking/11' tag='a' activeClass='active'>
				昨日点赞榜
			</router-link>
			<router-link to='/works/ranking/12' tag='a' activeClass='active'>
				七日点赞榜
			</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {

  name: 'ranking',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.header{
	
	    text-align: center;
	    margin-bottom: 10px;
	    vertical-align: middle;
        position: relative;

        white-space: nowrap;
        a{
        	display:inline-block;   	 
    	    font: inherit;
    	    color: #444;    	  
    	    box-sizing: border-box;
    	    padding: 0 12px;
    	    background: #eee;
    	    line-height: 30px;
	       
	    	font-size: 14px;
	        text-decoration: none;
	        text-align: center;
        }
        .active{
        	background-color: #ddd;
    		color: #444;
        }
	}
</style>