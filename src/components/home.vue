<template>
	<div>
		<!-- <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101327127&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=101327127&redirect_uri=http%3A%2F%2Fhuamoe.com%2Flogin&scope=get_user_info&state=qq_fb2bda7f74afc6a64419265568058e4f" title="">aa</a> -->
		<div class="loginbox">
			<h3>请先登陆</h3>
			<div class="login">
				<a class="qq">
					<img src="src/assets/qq.png" alt="">
				</a>
				<a class="weobo">
					<img src="src/assets/weibo.png" alt="">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'home',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.loginbox{
		width:90%;
		padding:15px;
		box-sizing:border-box;
		background:#fff;
		position:fixed;
		left:50%;
		top:40%;
		transform:translateX(-50%) translateY(-50%);
		h3{
			padding-bottom: 10px;
			margin-bottom: 15px;
			text-align: center;
			font-weight: normal;
			color:#444;
			border-bottom:1px solid #ddd
		}
		img{
			width:40px;
		}
		.login{
			display:flex;
			padding:0 1rem;
			box-sizing:border-box;
			justify-content: space-between
		}
	}
</style>