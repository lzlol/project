<template>
	<div>
		<h1 style="text-align: center">报岗信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='请输入报岗人' v-model='reportuser'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加报岗信息</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="reportid" label="报岗ID" width="80"></el-table-column>
				<el-table-column prop="shipname" label="船队名称"  width="100"></el-table-column>
				<el-table-column prop="capacity" label="装载量(吨)" width="90"></el-table-column>
				<el-table-column prop="planjobtime" label="预计到港时间" width="160"></el-table-column>
				<el-table-column prop="startjobtime" label="实际到港时间" width="160"></el-table-column>
				<el-table-column prop="completetime" label="完成时间" width="160"></el-table-column>
				<el-table-column prop="flowname" label="流程" width="100"></el-table-column>
				<el-table-column prop="reportuser" label="报岗人" width="100"></el-table-column>
				<el-table-column prop="compname" label="所属企业" width="100"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.reportid)">删除</el-button>
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
				repairdate:'',
				reportuser:''
			};
		},
		methods:{
			add(){
				// 路由跳转
				this.$router.push({path:'/produceReportadd'})
			},
			del(reportid){
				// 后端网址
				var url = this.baseUrl+"/produceReport/delete"
				// 传递给后端的数据
				var data = {reportid:reportid};
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
				this.$router.push({name:'produceReportedit',params:{row:row}})
			},
			search(){//查询
				// 后端网址
				var url = this.baseUrl+"/produceReport/search"
				// 传递给后端的数据
				var data = {reportuser:this.reportuser};
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
			 var url = this.baseUrl+"/produceReport/list"
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
