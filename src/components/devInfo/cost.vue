<template>
	<div>
		<h1 style="text-align: center">成本核算信息</h1>
		<br>
		<div style="text-align: left;">
			 <el-date-picker  v-model="datas"  type="year"  value-format="yyyy"  placeholder="选择年" ></el-date-picker>
			<el-button @click="seach">查询</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称"  width="140"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="200"></el-table-column>
				<el-table-column prop="consume" label="能耗" width="200"></el-table-column>
				<el-table-column prop="cost" label="成本" width="150"></el-table-column>
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
				datas:'2018'
			};
		},
		methods:{
			seach(){
			  // 后端网址
			 var url = this.baseUrl+"/devInfo/cost"
			 var data = {year:this.datas};
			 this.$axios.post(url,this.$qs.stringify(data),{
			 	headers: {
			 		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
			 	}
			 }).then(res=>{
			 	this.list = res.data;
			 })
		}
		},
		mounted:function (){this.seach()}
		
	}
</script>

<style>

</style>
