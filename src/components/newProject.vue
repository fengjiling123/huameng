<template>
	<div>
		<div class="contect-padded-all">
			<form>
				<fieldset>
					<legend>发布约稿</legend>
				</fieldset>
				<div class="form-row">
					<label>标题</label>
					<div>
						<input type="text" name="" value="" placeholder="50字以内">
					</div>
				</div>
				<div class="form-row yusuan-box">
					<label>单张预算</label>
					<div class="yusuan clear">
						<input type="text" name="" value="" placeholder="最小预算">
						<span>至</span>
						<input type="text" name="" value="" placeholder="最大预算">
					</div>
					<p v-if='minprice'>最小预算应该不小于50</p>
					<p v-if='maxprice'>最大预算应该不小于50</p>
				</div>
				<div class="form-row">
					<label>需求张数</label>
					<div>
						<input type="text" name="" value="" placeholder="不填表示不限">
					</div>
					<p v-if='maxnum'>需求张数应在1000张以内</p>
				</div>
				<div class="form-row">

					<label>截稿日期</label>
					<div>
						<input type="text" name="" value="" placeholder="年/月/日">
					</div>
				</div>
				<div class="form-row">
					<label>稿件类型</label>
					<div>
						<select name="">
							<option value="商业稿">商业稿</option>
							<option value="同人稿">同人稿</option>
							<option value="私人稿">私人稿</option>
							
						</select>
						
					</div>
				</div>
				<div class="form-row">
					<label>标签(多个标签请用逗号隔开)</label>
					<div>
						<input type="text" name="" value="" placeholder="">
					</div>
				</div>
				<div class="form-row">
					<label>约稿详情</label>
					<div class="content-detail" contenteditable="true">
						
					</div>
				</div>
				<div class="form-row">
					<button type="">发 布</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

export default {

  name: 'newProject',

  data () {
    return {
    	minprice:true,
    	maxprice:true,
    	maxnum:true
    }
  }
}
</script>

<style lang="scss" scoped>
	.contect-padded-all{
		padding:10px;
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
			
			
			
		}
	}

	.form-row+.form-row{
		margin-top:15px
	}
	label{
		display: block;
	    margin-bottom: 5px;
	    font-weight: 700;
	    color: #444;
	    font-size: 14px
	}
	input[type='text'],select{
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
	.content-detail{
		min-height: 300px;
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
			font-size: 16px
		}
	div.yusuan{
		height: 40px;

	    
	    font-size: 16px;
	    vertical-align: middle;
	    width:100%;
	    box-sizing:border-box;
	    border: 1px solid #ddd;
	   
	    color: #444;
	    input{
	    	 background: #fff;
	    	 
	    	border:none;
	    	outline:none;
	    	
	    	float:left;
	    	width:40%;
	    	height:100%;
	    	box-sizing:border-box
	    }
	    span{
	    	float:left;
	    	width:20%;
	    	background:none;
	    	text-align: center;
	    	padding: 8px 0;
	    	box-sizing:border-box;
	    	border-left:1px solid #ddd;
	    	border-right:1px solid #ddd;

	    };
	    
	    	
	    
	}
	p{
		color:#d85030;
		font-size: 14px;
		margin-top:5px
	}
</style>