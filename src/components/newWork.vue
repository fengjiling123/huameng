<template>
	<div id="content" >
		<div>
			<form class="uk-form" novalidate>
				<fieldset>
					<legend>发布画作</legend>
					<div class="iamge-container clear">
						<ul id='sortImages' class="claer">
							
						</ul>
					</div>
					<div class="file clear">
						<button id='uploadImage'>上传图片						
						</button>
						<div class="fileImage">
							<input type="file" multiple accept="image/jpeg,image/png">
						</div>
					</div>
					<div class="uk-form-row">
						<label>标题</label>
						<div>
							<input type="text" name="" value="" placeholder="50字以内">
						</div>
					</div>
					<div class="uk-form-row">
						<label>想说的话</label>
						<div>
							<textarea placeholder="想说点什么" rows="3" maxlegth='250' id='textarea'></textarea>
						</div>
					</div>
					<div class="uk-form-row check" id='radio'>
						<label>
							<input type="radio" name="type" :value="true" v-model='style'>同人
						</label>
						<label for="">
							<input type="radio" name="type" :value="false" v-model='style'>非同人
						</label>
						
											
					</div>
					<div class="uk-form-row" v-if='style'>
						<label>原作名</label>
						<div>
							<input type="text" name="" value="" placeholder="填写原作">
						</div>
					</div>
					<div class="uk-form-row" v-if='style'>
						<label>角色名</label>
						<div>
							<input type="text" name="" value="" placeholder="添加角色(多个标签请用逗号隔开)">
						</div>
					</div>
					<div class="uk-form-row">
						<label>标签名</label>
						<div>
							<input type="text" name="" value="" placeholder="添加角色(多个标签请用逗号隔开)">
						</div>
					</div>
					<div class="uk-form-row">
						<button>发 布</button>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
</template>

<script>

export default {

  name: 'newWork',

  data () {
    return {
    	style:true
    }
  },
  mounted(){
  	var oInp=document.getElementsByTagName('input')
  	textarea.onfocus=function(){
  		this.style.outline='1px solid #39f'
  	}
  	textarea.onblur=function(){
  		this.style.outline='1px solid #ddd'
  	}
  	for(var i=0;i<oInp.length;i++){
  		oInp[i].onfocus=function(){
  			this.style.outline='1px solid #39f'

  		}
  		oInp[i].onblur=function(){
  			this.style.outline='1px solid #ddd'
  		}
  	}
  	
  }
}
</script>

<style lang="scss" scoped>

	li{
		list-style: none;
		float:left
	}
	#sortImages{
		list-style: none;
	    margin: 0 0 10px;
	    padding: 0;
	}
	.clear:after{
		content:'';
		display:block;
		height:0;
		visibility:hidden;
		clear:both
	}
	.clear:after{
		content:'';
		display:table-cell;
	}
	.left{
		float:left
	}
	.right{
		float:left
	}
	#content{
		padding:10px;
		>div{
			padding:10px
		}
		fieldset{
			width:100%;
			border: none;
			legend{
				width: 100%;
			    border: 0;
			    padding: 0;
			    padding-bottom: 15px;
			    font-size: 18px;
			    line-height: 30px;
			}
			legend:after{
				content: "";
			    display: block;
			    border-bottom: 1px solid #ddd;
			    width: 100%;
			}
			.file{
				position:relative;
				min-height: 40px;
				button{
					position:absolute;
					min-height: 40px;
					padding: 0 15px;
					line-height: 40px;
					font-size: 16px;
					background-color: #8cc14c;
				    color: #fff;
				    border:none
				}
				>div{
					position: absolute;
				    top: 0px;
				    left: 0px;
				    width: 94px;
				    height: 40px;
				    overflow: hidden;
				   
				    input{
				    	font-size: 999px;
				    	opacity: 0;
				    	position: absolute;
				    	top: 0px;
				    	left: 0px;
				    	width: 100%;
				    	height: 100%;
				    	box-sizing: border-box;
			    	    margin: 0;
			    	    font: inherit;
			    	    color: inherit;

				    }
				}
			}
		}
	}

	.uk-form-row{
		margin-top:15px;
		label{
			display: block;
		    margin-bottom: 5px;
		    font-weight: 700;
		    color: #444;
		    font-size: 14px
		}
		input[type='text']{
			height: 40px;
		    padding: 8px 6px;
		    font-size: 16px;
		    vertical-align: middle;
		    width:100%;
		    box-sizing:border-box;
		    border: 1px solid #ddd;
		    background: #fff;
		    color: #444;
		    
		   
		}
		button{
			border:none;
			width:100%;
			height:40px;
			padding:0 15px;
			background-color: #f5f5f5;
			color: #999;
			font-size: 16px;
			outline:none
		}
		
	}
	.check{
		label{
			display:inline;
			color: #444;
			font-weight:normal;

		}
	}
	#textarea{

		color: #444;
	    padding: 8px 6px;
	    font-size: 16px;
	    vertical-align: middle;
	    width:100%;
	    box-sizing:border-box;
	    border: 1px solid #ddd;
	    background: #fff;
	    
	}

</style>