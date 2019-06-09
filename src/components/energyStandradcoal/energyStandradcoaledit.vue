<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">折标煤系数添加</h1>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='energetype' placeholder='能源类别'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:45%' v-model='ratio' placeholder='系数'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='saveEdit()'>修改</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				energetype:'',
				ratio:'',
				sid:''
			}
		},
		methods:{
			cancel(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/energyStandradcoal/update"
					// 传递给后端的数据
					var data = {sid:this.sid,ratio:this.ratio,energetype:this.energetype};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/energyStandradcoal'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.energetype=row.energetype;
			this.ratio=row.ratio;
			this.sid=row.sid;
		}
		
	}
</script>

<style>

</style>
