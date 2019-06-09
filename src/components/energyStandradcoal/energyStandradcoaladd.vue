<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">折标煤系数添加</h1>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='energetype' placeholder='能源类别'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:45%' v-model='ratio' placeholder='系数'></el-input> </el-col>
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
				energetype:'',
				ratio:''
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/energyStandradcoal/insert"
				// 传递给后端的数据
				var data = {energetype:this.energetype,ratio:this.ratio};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/energyStandradcoal'});
				})
				
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list";
			this.$axios.post(url,{
				headers:{
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.optiona = res.data;
			})
			
				// 后端网址
				var url = this.baseUrl+"/produceReport/list";
				this.$axios.post(url,{
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.optionb = res.data;
				})
			
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-row{
		margin-top: 30px;
	}
</style>
