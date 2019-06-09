<!-- html部分 -->
<template>
	<div  style="height:100%;" >
		<el-menu :default-active="$store.state.defaultIndex">
			<div v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item :index='obj.index' v-show="!obj.children" :key="obj.text" @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu :index='obj.index' v-show="obj.children"   >
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group >
					  <el-menu-item :index='item.Index' v-for="item in obj.children" @click='fn(item)' :key="item.text">{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</div>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
				name:'',
				arr:[
					{text:'首页',index:'101',url:'/'},
					{text:'基本信息',index:'102',children:[{text:'企业信息',Index:'1021',url:'/adddel'},
					{text:'人员信息',Index:'1022',url:'/baseuser'},{text:'设备类别',Index:'1023',url:'/enterprise'},{text:'设备信息',Index:'1024',url:'/baseDevice'},
					{text:'流程控制',Index:'103',url:'/baseFlow'}]},
					{text:'生产作业',index:'103',children:[{text:'报岗',Index:'1025',url:'/produceReport'},
					{text:'中控',Index:'1026',url:'/Control'},{text:'作业信息',Index:'1027',url:'/produceJobList'},{text:'故障信息',Index:'1028',url:'/produceFault'},{text:'维修记录',Index:'1029',url:'/produceRepair'}]},
					{text:'能耗信息',index:'104',children:[{text:'能耗信息',Index:'1030',url:'/energyConsumeList'},
					{text:'折标煤系数',Index:'1031',url:'/energyStandradcoal'}]},
					{text:'统计信息',index:'105',children:[{text:'港口能耗对比',Index:'1032',url:'/consume'},
					{text:'作业量统计',Index:'1033',url:'/produceJob'},{text:'设备利用率',Index:'1034',url:'/usage'},
					{text:'成本核算信息',Index:'1036',url:'/cost'}]},
					{text:'模型建立与展示',index:'106',children:[{text:'企业用能模型',Index:'1037',url:'/energyConsume'},
					{text:'企业产销模型',Index:'1038',url:'/EnergyModel'}]},
					{text:'企业数据采集',index:'107',children:[{text:'数据采集',Index:'1038',url:'/adddel'}]},
				]
			};
		},
		methods:{
			fn(obj){
				// 路由跳转
				this.$router.push({path:obj.url});
				// 往store中的tags数组中添加数据
				var obj = {name:obj.text,type:'warning',url:obj.url,index:obj.index};
				this.$store.commit('addtag',obj);
				
			}
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-menu{
		background-color: lightgray;
		height: 100%;
	}
</style>
