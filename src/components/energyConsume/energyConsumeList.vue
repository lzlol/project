<template>
	<div>
		<h1 style="text-align: center">能耗信息</h1>
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
			<el-button @click='add'>添加能耗信息</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="consumeid" label="ID" width="150"></el-table-column>
				<el-table-column prop="devname" label="设备名称"  width="150"></el-table-column>
				<el-table-column prop="electric" label="电耗(kw.h)" width="150"></el-table-column>
				<el-table-column prop="water" label="水耗(吨)" width="150"></el-table-column>
				<el-table-column prop="oil" label="油耗(L)" width="150"></el-table-column>
				<el-table-column prop="reportid" label="报岗id" width="150"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.consumeid)">删除</el-button>
				  </template>
				</el-table-column>
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
				faultuser:'',
				optiona:[],
				devid:''
			};
		},
		methods:{
			add(){
				// 路由跳转
				this.$router.push({path:'/energyConsumeadd'})
			},
			del(consumeid){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/delete"
				// 传递给后端的数据
				var data = {consumeid:consumeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search()
				})
			},
			update(row){
				// 路由跳转
				this.$router.push({name:'energyConsumeedit',params:{row:row}})
			},
			search(){//查询
				// 后端网址
				var url = this.baseUrl+"/energyConsume/search"
				this.$axios.post(url,{
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
			 var url = this.baseUrl+"/energyConsume/list"
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
