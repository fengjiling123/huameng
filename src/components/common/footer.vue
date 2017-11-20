<template>
	<div class="footer">
		<div  @click='show'>
			<router-link to='/shouye' activeClass='active' tag='a'>
				<i class='iconfont icon-shouye'></i>
				<span>首页</span>
			</router-link>
		</div>
		<div @click='show'>
			<router-link to='/artists' activeClass='active' tag='a'>
				<i class='iconfont icon-red2'></i>
				<span>画师</span>
			</router-link>
		</div>
		<div>
			<slot></slot>
		</div>
		
		<!-- <a @click='show'>
			<i class='iconfont icon-fabu1'></i>
			<span>发布</span>
		</a> -->
		<div @click='show'>
			<router-link to='/projects' activeClass='active' tag='a'>
				<i class='iconfont icon-sanhengxian'></i>
				<span>约稿</span>
			</router-link>
		</div>
		<div @click='show'>
			<router-link to='/home' activeClass='active' tag='a'>
				<i class='iconfont icon-user'></i>
				<span>我的</span>
			</router-link>
		</div>
		
	</div>
</template>

<script>
export default {

  name: 'footer',

  data () {
    return {
    }
  },
  methods:{
  	show(){
  				
  		this.$emit('input',false)		
  	}
  },
  
}
</script>
<style src='@/assets/iconfont/iconfont.css'></style>
<style lang="scss" scoped>
.footer{
	background:#fff;
	position:fixed;
	left:0;
	bottom:0;
	display:flex;
	width:100%;
	text-align:center;
	border-top: 1px solid #c4c4c4;
	z-index: 1000;
	padding:4px 0;
	>div{
		width: 20%;
	}
	a{
		
		display:block;
		height: 1rem/0.9;
		text-decoration: none;
		color: #929292;
		font-size: 10px
	}
	i,span{
		display:block;
		line-height: 20px
	}
	i{
		font-size: 18px
	}
	.active{
		color: #e66988;
	}
}
</style>