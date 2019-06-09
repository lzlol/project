<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<el-container style="height: 100%;">
			<!-- 头 -->
			<el-header>
				<headers></headers>
			</el-header>
			<el-container>
				<!-- 左 -->
				<el-aside width='200px'>
					<sidebar></sidebar>
				</el-aside>
				<!-- 右 -->
				<el-main>
					<mainblock></mainblock>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<!-- js部分 -->
<script>
	import sidebar from './sidebar'
	import headers from './headers'
	import mainblock from './mainblock'
	export default {
		name:'',
		components:{headers,sidebar,mainblock},
		data() {
			return {
				arr:[]
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
 .el-header{
    background-color: #52bab5;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-aside {
     background-color: #D3DCE6;
     color: #333;
     text-align: left;
     /* line-height: 200px; */
	 height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
	height:100%;
  }
  .el-container .is-vertical{
	  height: 100%;
  }
</style>
