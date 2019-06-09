<template>
	<div style='text-align: center;'>
		<h1>修改故障信息</h1>
		<el-row style='margin-top: 20px;text-align: center;'>
			<el-col :span="12"> <el-input style='width:45%' v-model='cause' placeholder='请输入故障原因'></el-input> </el-col>
			<el-select v-model="devid" placeholder="请选择故障设备名称" style='width:22%'>
				<el-option
				  v-for="item in option1"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devname'>
				</el-option>
			</el-select>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='faultuser' placeholder='请输入报告人'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:45%' v-model='faulttime' placeholder='请输入故障时间(分钟)'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='ss()'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				option1:[],
				faultId:'',
				cause:'',
				faultuser:'',
				devid:'',
				faulttime:''
			}
		},
		methods:{
			ss(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/produceFault/update"
					// 传递给后端的数据
					var data = {faultId:this.faultId,cause:this.cause,faultuser:this.faultuser,devid:this.devid,faulttime:this.faulttime};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/produceFault'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.faultId=row.faultId;
			this.devid=row.devid;
			this.cause=row.cause;
			this.faultuser=row.faultuser;
			this.faulttime=row.faulttime;
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.option1 = res.data
			})
			
		}
		
	}
</script>

<style>

</style>
