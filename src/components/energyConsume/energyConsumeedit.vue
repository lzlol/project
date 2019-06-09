<template>
	<div style='text-align: center;'>
		<h1>能耗信息修改页面</h1>
		<el-row style='margin-top: 20px;text-align: center;'>
			<el-select v-model="devid" placeholder="请选择故障设备名称" style='width:22%'>
				<el-option
				  v-for="item in optiona"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devname'>
				</el-option>
			</el-select>
			<el-col :span="12"> <el-input style='width:45%' v-model='electric' placeholder='请输入电耗(kw.h)'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='water' placeholder='请输入水耗(吨)'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:45%' v-model='oil' placeholder='请输入油耗(L)'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-select v-model="reportid" placeholder="请选择报岗ID" style='width:22%'>
					<el-option
					  v-for="item in optionb"
					  :label="item.reportid"
					  :value="item.reportid" 
					  :key='item.reportid'>
					</el-option>
				</el-select>
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
				devid:'',
				optiona:[],
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				optionb:[],
				consumeid:''
			}
		},
		methods:{
			ss(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/update"
					// 传递给后端的数据
					var data = {consumeid:this.consumeid,devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/energyConsumeList'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.electric=row.electric;
			this.consumeid=row.consumeid;
			this.devid=row.devid;
			this.water=row.water;
			this.oil=row.oil;
			this.reportid=row.reportid;
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list";
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.optiona = res.data
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

<style>

</style>
