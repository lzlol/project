<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">流程信息修改页面</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='flowname' placeholder='请输入流程名称'></el-input> </el-col>
		  <el-select v-model="dljid" placeholder="请选择斗轮机" style='width:22%'>
				<el-option
				  v-for="item in option1"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devname'>
				</el-option>
			</el-select>
		</el-row><br>
		<el-row>
			<el-select v-model="zcjid" placeholder="请选择装船机" style='width:22%'>
				<el-option
				  v-for="item in option2"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devname'>
				</el-option>
			</el-select>
			<el-select v-model="pdjid" placeholder="请选择皮带机" style='width:22%;margin-left: 28%;'>
				<el-option
				  v-for="item in option3"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devname'>
				</el-option>
			</el-select>
		</el-row><br>
		<el-row>
			<el-select v-model="compid" placeholder="请选择所属企业" style='width:22%;margin-left: -50%;'>
				<el-option
				  v-for="item in option4"
				  :label="item.compname"
				  :value="item.compid" 
				  :key='item.compname'>
				</el-option>
			</el-select>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='saveEdit()'>修改</el-button> <el-button @click='ss()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				flowid:'',
				option1:[],
				option2:[],
				option3:[],
				option4:[]
			}
		},
		methods:{
			ss(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/baseFlow/update"
					// 传递给后端的数据
					var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,
					pdjid:this.pdjid,compid:this.compid,flowid:this.flowid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/baseFlow'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var flowid = this.$route.params.row;
			console.log(flowid)
			// 后端网址
			var url = this.baseUrl+"/baseFlow/load";
			// 传递给后端的数据
			var data = {flowid:flowid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				// 回显
				this.flowid=obj.flowid;
				this.flowname=obj.flowname;
				this.dljid= obj.dljid;
				this.zcjid=obj.zcjid;
				this.pdjid=obj.pdjid;
				this.flowid=obj.flowid;
			})
			
			
				// 后端网址
				var url = this.baseUrl+"/baseDevice/findDljByCompid";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.option1 = res.data
				})
				// 后端网址
				var url = this.baseUrl+"/baseDevice/findCzjByCompid";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.option2 = res.data
				})
				// 后端网址
				var url = this.baseUrl+"/baseDevice/findPdjByCompid";
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.option3 = res.data
				})
				 // 后端网址
				var url = this.baseUrl+"/baseCompany/list"
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.option4 = res.data;
				})
		}
		
	}
</script>

<style>

</style>
