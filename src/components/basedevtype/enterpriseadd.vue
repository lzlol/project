<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">信息添加页面</h1>
		<el-row>
		  <!-- <el-col :span="12"> <el-input style='width:45%' v-model='compid' placeholder='ID'></el-input> </el-col> -->
		  <el-col :span="12"> <el-input style='width:45%' v-model='typename' placeholder='请输入设备名称'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='saveadd()'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				typename:''
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/insert"
				// 传递给后端的数据
				var data = {typename:this.typename};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/enterprise'});
				})
				
			}
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-row{
		margin-top: 30px;
	}
</style>
