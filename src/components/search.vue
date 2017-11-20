<template>
	<div>
		<div class="top">
			<div class="search">			
				<a class="search_input clear" id='inp'>
					<input type="text" placeholder='搜索画作、设计、约稿、活动、用户' class="left" v-model='text' value="" @focus='onfocus()'>
					<div class="iconfont right">
						<i class='iconfont icon-sousuo2' @click='search()'></i>
					</div>			
				</a>			
			</div>
			<div class="route">
				<router-link tag='a' activeClass='active' :to='"/search/work?q="+text'>画作</router-link>
				<router-link tag='a' activeClass='active' :to='"/search/design?q="+text'>设计</router-link>
				<router-link tag='a' activeClass='active' :to='"/search/project?q="+text'>约稿</router-link>
				<router-link tag='a' activeClass='active' :to='"/search/event/q="+text'>活动</router-link>
				<router-link tag='a' activeClass='active' :to='"/search/account?q="+text'>用户</router-link>
			</div>
			<div class="searchhistory" v-if='!blur'>
				<div v-for='data,index in history' class="history clear">
					<div class="left" @click='searchhistory(data)'>
						{{data}}
					</div>					
					<i class='right' @click='del(index)'>X</i>
				</div>
			</div>
		</div>
		<div class="bot" v-if='blur'>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import router from '@/router'
export default {

  name: 'search',

  data () {
    return {
    	text:'',
    	history:[],
    	blur:false
    }
  },
  methods:{
  	del(index){
  		this.history.splice(index,1)
  		localStorage.setItem('searchHistory',JSON.stringify(this.history))
  	},
  	search(){
  		if(this.text){
  			this.blur=true
  			if(this.history.indexOf(this.text)==-1){
  				this.history.push(this.text)
  			}
  			router.push(`/search/${this.$route.path.split('/')[2]}?q=${this.text}`)
  			localStorage.setItem('searchHistory',JSON.stringify(this.history))

  		}
  		
  	},
  	onfocus(){
  		this.blur=false
  	},
  	searchhistory(data){
  		this.text=data;
  		this.blur=true;

  		router.push(`/search/${this.$route.path.split('/')[2]}?q=${this.text}`)
  	}
  },
  mounted(){
  	//console.log(this.$route.path.split('/')[2])
  	this.history=JSON.parse(localStorage.getItem('searchHistory'))
  	
  	//本地设置 获取 删除 localStorage
  	//localStorage.setItem('searchHistory','aaaaaaa')
  	//localStorage.getItem('searchHistory')
  	//localStorage.removeItem('searchHistory')
  	if(this.$route.query.q){
  		this.blur=true;

  	}else{
  		this.blur=false
  	}
  }

  

}
</script>

<style lang="scss" scoped>
.top{
	width:100%;
	z-index:99;
	position:fixed;
	left:0;
	top:0;
}
.clear:after{
	content:'';
	height:0;
	display:block;
	visibility:hidden;
	clear:both
}
.left{
	float:left
}
.right{
	float:right
}
.search{
	width:100%;
	box-sizing:border-box;
	padding:5px;
	background:#fff;
	border-bottom:1px solid #ddd;
	.search_input{
		//outline:1px solid #39f;
		display: block;
		
		background-color: #ededf1;
		text-decoration: none;
	    input{					    		   
		    color: #aaa;
		    padding: 10px;
		    border:none;
		    outline: none;
		    font: inherit;
		    font-size: 14px;
		    display:block;
		    width:90%;
		    box-sizing:border-box;
		    background:transparent;
		    color:#aaa;
	    }
	   .iconfont{
	   		width:10%;
	   		line-height: 38px;
	   		text-align: center;
	   		font-weight: bold

	   }
	}

}
.history{
	padding:12px;
	background:#fff;
	margin-top:1px;
	color:#444;
	font-size:14px;
	i{
		font-style: normal;
		font-weight: bold
	}
	.left{
		width:90%
	}
}
.route{
	background:#fff;
	display:flex;

	a{
		width:20%;
		text-decoration: none;
		text-align: center;
		padding:8px 0;
		color:#c7c7c7;
		font-size: 14px
	}
	.active{
		border-bottom-color: #07d;
    	color: #07d;

	}
}
.bot{
	padding:2rem 0 10px;
}
	
</style>