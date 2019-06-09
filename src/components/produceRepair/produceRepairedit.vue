<template>
	<div style='text-align: center;'>
		<h1>维修记录修改信息</h1>
		<el-row style='margin-top: 20px;text-align: center;'>
			<el-col :span="12"> <el-input style='width:45%' v-model='cause' placeholder='请输入维修原因'></el-input> </el-col>
			<el-select v-model="devid" placeholder="请选择故障设备名称" style='width:22%'>
				<el-option
				  v-for="item in option1"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devname'>
				</el-option>
			</el-select>
		</el-row><br>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='cost' placeholder='请输入维修费用'></el-input> </el-col>
			<el-date-picker
				  style="margin-left: 0%;width:22%"
				  value-format="yyyy-MM-dd"
				  v-model="repairdate"
				  type="date"
				  placeholder="请选择维修日期">
			</el-date-picker>
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
				cause:'',
				cost:'',
				devid:'',
				repairdate:'',
				repairid:''
				
			}
		},
		methods:{
			ss(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/produceRepair/update"
					// 传递给后端的数据
					var data = {repairid:this.repairid,repairdate:this.repairdate,devid:this.devid,cost:this.cost,cause:this.cause};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/produceRepair'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.repairid=row.repairid;
			this.devid=row.devid;
			this.cost=row.cost;
			this.repairdate=row.repairdate;
			this.repairid=row.repairid;
			this.cause=row.cause;
			
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
