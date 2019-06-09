<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">能耗信息添加页面</h1>
		<el-row>
		  <el-select v-model="devid" placeholder="请选择设备名称" style='width:22%'>
				<el-option
				  v-for="item in optiona"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devid'>
				</el-option>
			</el-select>
			<el-col :span="12"> <el-input style='width:45%' v-model='electric' placeholder='电耗(kw.h)'></el-input> </el-col>
		</el-row>
		<el-row>
			 <el-col :span="12"> <el-input style='width:45%' v-model='water' placeholder='水耗(吨)'></el-input> </el-col>
			 <el-col :span="12"> <el-input style='width:45%' v-model='oil' placeholder='油耗(L)'></el-input> </el-col>
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
				devid:'',
				optiona:[],
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				optionb:[]
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/energyConsumeList'});
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
