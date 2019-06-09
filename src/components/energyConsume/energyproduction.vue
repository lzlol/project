<!-- html部分 -->
<template>
	<div id="fff">	
		<ve-tree :data="chartData1"></ve-tree>
		<ve-tree :data="chartData2"></ve-tree>
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
			
		},
		mounted:function (){
				// alert(this.datas)
					 	// 后端网址
					 	var url = this.baseUrl+"/produceJob/model"
					 	// 传递给后端的数据
					 	var data={year:this.datas}
					 	this.$axios.post(url,this.$qs.stringify(data),{
					 		headers: {
					 			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					 		}
					 	}).then(res=>{
					 		this.chartData1 = res.data;
					 	})
						
						var url = this.baseUrl+"/energyConsume/model"
						// 传递给后端的数据
						var data={year:this.datas}
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.chartData2 = res.data;
						})
						
						
						
			}
	}
</script>
<!-- css部分 -->
<style>

</style>
