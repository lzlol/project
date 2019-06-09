<template>
	<div>
		<h1 style="text-align: center">维修记录</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='请输入维修日期' v-model='repairdate'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加维修记录</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="repairid" label="ID" width="150"></el-table-column>
				<el-table-column prop="devname" label="设备名称"  width="150"></el-table-column>
				<el-table-column prop="cause" label="维修原因" width="150"></el-table-column>
				<el-table-column prop="cost" label="维修费用" width="150"></el-table-column>
				<el-table-column prop="repairdate" label="维修日期" width="150"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.repairid)">删除</el-button>
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
				repairdate:''
			};
		},
		methods:{
			add(){
				// 路由跳转
				this.$router.push({path:'/produceRepairadd'})
			},
			del(repairid){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/delete"
				// 传递给后端的数据
				var data = {repairid:repairid};
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
				this.$router.push({name:'produceRepairedit',params:{row:row}})
			},
			search(){//查询
				// 后端网址
				var url = this.baseUrl+"/produceRepair/search"
				// 传递给后端的数据
				var data = {repairdate:this.repairdate};
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
			 var url = this.baseUrl+"/produceRepair/list"
			 this.$axios.post(url,{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.list = res.data;
			 })
		}
		
	}
</script>

<style>

</style>
