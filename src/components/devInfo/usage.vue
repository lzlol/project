<!-- html部分 -->
<template>
	<div id="fff">
		<br>
		<div style="text-align: left;">
			 <el-date-picker  v-model="datas"  type="year"  value-format="yyyy"  placeholder="选择年" ></el-date-picker>
			<el-button @click="seach">查询</el-button>
		</div>
		
		<div>
			<h1>港口能耗对比率</h1>
			<ve-line :data="chartData1"></ve-line>
			<h1>港口间设备完好率对比</h1>
			<ve-ring :data="chartData2"></ve-ring>
		</div>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'fff',
		data() {
			return {
				 datas:'2019',
				 chartData1: {},
				 chartData2: {}
			};
		},
		methods:{
			seach(){
				
					// alert(this.datas)
						 	// 后端网址
						 	var url = this.baseUrl+"/devInfo/intactRatio"
						 	// 传递给后端的数据
						 	var data={year:this.datas}
						 	this.$axios.post(url,this.$qs.stringify(data),{
						 		headers: {
						 			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						 		}
						 	}).then(res=>{
						 		this.chartData2 = res.data;
						 	})
							
					 	// 后端网址
					 	var url = this.baseUrl+"/devInfo/usage"
					 	// 传递给后端的数据
					 	var data={year:this.datas}
					 	this.$axios.post(url,this.$qs.stringify(data),{
					 		headers: {
					 			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					 		}
					 	}).then(res=>{
					 		this.chartData1 = res.data;
					 	})
						
			}
		},
		mounted:function (){this.seach()}
	}
</script>
<!-- css部分 -->
<style>

</style>
