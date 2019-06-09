<template>
	<div>
		<h1 style="text-align: center">作业信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-select v-model="devid" placeholder="请选择设备名称" style='width:22%'>
				<el-option
				  v-for="item in optiona"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devid'>
				</el-option>
			</el-select>
			<el-button @click='search'>查询</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="jobid" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称"  width="140"></el-table-column>
				<el-table-column prop="starttime" label="开始作业时间" width="200"></el-table-column>
				<el-table-column prop="completetime" label="结束作业时间" width="200"></el-table-column>
				<el-table-column prop="duration" label="运行时长" width="150"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="150"></el-table-column>
				<el-table-column prop="reportid" label="报岗id" width="150"></el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				list:[],
				devid:'',
				optiona:[]
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/search"
				// 传递给后端的数据
				var data = {devid:this.devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list=res.data;
				})
			}
		},
		mounted:function (){
			  // 后端网址
			 var url = this.baseUrl+"/produceJob/list"
			 this.$axios.post(url,{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.list = res.data;
			 })
			  // 后端网址
			 var url = this.baseUrl+"/baseDevice/list"
			 this.$axios.post(url,{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.optiona = res.data;
			 })
		}
		
	}
</script>

<style>

</style>
