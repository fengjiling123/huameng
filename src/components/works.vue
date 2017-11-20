<template>
	<div>
		<div class="header">
			<router-link to='/works/newwork' activeClass='active' tag='a'>
				最新发布
			</router-link>
			<router-link to='/works/ranking' activeClass='active' tag='a'>
				排行榜
			</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {

  name: 'works',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.header{
		position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 100;
	    width: 100%;
	    background-color: #fff;
	    display: flex;
	    color: #444;
	    a{
	    	text-decoration: none;
		    color: #c7c7c7;
		    text-align: center;
		    padding: 8px 12px;
		    display: block;
		    border-bottom: 1px solid transparent;
		    width: 50%;
		    font-size: 14px
	    }
	    .active{
	    	border-bottom-color: #07d;
    	    color: #07d;
	    }
	}
	.content{
		margin-top:1rem
	}
</style>