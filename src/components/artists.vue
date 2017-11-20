<template>
	<div>
		<div class="artistnav">
			<router-link to='/artists/allartists' tag='a' activeClass='active'>全部画师</router-link>
			<router-link to='/artists/commond' tag='a' activeClass='active'>推荐画师</router-link>
			<router-link to='/artists/chuArtists' tag='a' activeClass='active'>触手画师</router-link>	
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>

export default {

  name: 'artists',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.content{
		margin-top: 1rem
	}
	.artistnav{
		position:fixed;
		left:0;
		top:0;
		width:100%;
		z-index: 99;
		display:flex;
		background:#fff;
		color: #c7c7c7;
		border-bottom: 1px solid transparent;
		font-size: 14px;
		a{
			text-decoration: none;
			color:#c7c7c7;
			text-align: center;
			display:block;
			width:33.3%;
			line-height: 20px;
			padding:8px 12px;
		}
		.active{
			border-bottom:1px solid #07d;
			color: #07d;
		}
	}
</style>