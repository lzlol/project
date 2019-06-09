<!-- html部分 -->
<template>
	<div id="fff">
		<br>
		<div style="text-align: left;">
			 <el-date-picker  v-model="datas"  type="year"  value-format="yyyy"  placeholder="选择年" ></el-date-picker>
			<el-button @click="seach">查询</el-button>
		</div>
		<div >
			<h1>流程作业量曲线图</h1>
			<ve-line :data="chartData1"></ve-line>
			<h1>流程作业量柱状图</h1>
			<ve-histogram :data="chartData2"></ve-histogram>
			<h1>设备作业量曲线图</h1>
			<ve-line :data="chartData3"></ve-line>
			<h1>电耗作业量柱状图</h1>
			<ve-histogram :data="chartData4"></ve-histogram>
			<h1>水耗作业量曲线图</h1>
			<ve-line :data="chartData5"></ve-line>
			<h1>油耗作业量柱状图</h1>
			<ve-histogram :data="chartData6"></ve-histogram>
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
				 chartData2: {},
				 chartData3: {},
				 chartData4: {},
				 chartData5: {},
				 chartData6: {},
			};
		},
		methods:{
			seach(){
					 	// 后端网址
					 	var url = this.baseUrl+"/energyConsume/flowConsume"
					 	// 传递给后端的数据
					 	var data={year:this.datas}
					 	this.$axios.post(url,this.$qs.stringify(data),{
					 		headers: {
					 			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					 		}
					 	}).then(res=>{
					 		this.chartData1 = res.data;
					 	})
						
						var url = this.baseUrl+"/energyConsume/devTypeConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData2 = res.data;
						})
						
						var url = this.baseUrl+"/energyConsume/devConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData3 = res.data;
						})
						// 4
						var url = this.baseUrl+"/energyConsume/electricConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData4 = res.data;
						})
						// 5
						var url = this.baseUrl+"/energyConsume/waterConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData5 = res.data;
						})
						// 6
						var url = this.baseUrl+"/energyConsume/oilConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData6 = res.data;
						})
						
			}
		},
		mounted:function (){
					 	// 后端网址
					 	var url = this.baseUrl+"/energyConsume/flowConsume"
					 	// 传递给后端的数据
					 	var data={year:this.datas}
					 	this.$axios.post(url,this.$qs.stringify(data),{
					 		headers: {
					 			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					 		}
					 	}).then(res=>{
					 		this.chartData1 = res.data;
					 	})
						
						var url = this.baseUrl+"/energyConsume/devTypeConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData2 = res.data;
						})
						
						var url = this.baseUrl+"/energyConsume/devConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData3 = res.data;
						})
						// 4
						var url = this.baseUrl+"/energyConsume/electricConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData4 = res.data;
						})
						// 5
						var url = this.baseUrl+"/energyConsume/waterConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData5 = res.data;
						})
						// 6
						var url = this.baseUrl+"/energyConsume/oilConsume"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData6 = res.data;
						})
						
			}
	}
</script>
<!-- css部分 -->
<style>

</style>
