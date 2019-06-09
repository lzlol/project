<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">报岗信息添加</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='shipname' placeholder='请输入船队名称'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:45%' v-model='capacity' placeholder='请输入装载量'></el-input> </el-col>
		</el-row>
		<el-row>
				<!-- 预计到港时间 -->
				<el-date-picker
				value-format="yyyy-MM-dd HH:mm:ss"
				 style="width: 22%;"
				  v-model="planjobtime"
				  type="datetime"
				  placeholder="预计到岗时间">
				</el-date-picker>
			  <!-- 实际到港时间 -->
			 <el-date-picker
			   value-format="yyyy-MM-dd HH:mm:ss"
			   style="margin-left: 28%;width: 22%;"
			   v-model="startjobtime"
			   type="datetime"
			   placeholder="实际到港时间">
			 </el-date-picker>
		</el-row>
		<el-row>
			 <!-- 完成时间 -->
			<el-date-picker
			  value-format="yyyy-MM-dd HH:mm:ss"
			  style="width: 22%;"
			  v-model="completetime"
			  type="datetime"
			  placeholder="完成时间">
			</el-date-picker>
			<el-select v-model="flowid" placeholder="流程信息" style='width:22%;margin-left: 28%;' >
					<el-option
					  v-for="item in optionc"
					  :label="item.flowname"
					  :value="item.flowid" 
					  :key='item.flowid'>
					</el-option>
			</el-select>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='reportuser' placeholder='请输入报岗人'></el-input> </el-col>
			<el-select v-model="compid" placeholder="所属企业" style='widows: ;dth:22%;' >
					<el-option
					  v-for="item in optionb"
					  :label="item.compname"
					  :value="item.compid" 
					  :key='item.compid'>
					</el-option>
			</el-select>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='saveadd()'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				optionb:[],
				optionc:[],
				shipname:'',
				capacity:'',
				planjobtime:'',
				startjobtime:'',
				completetime:'',
				flowid:'',
				reportuser:'',
				compid:''
				
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser,compid:this.compid,
				startjobtime:this.startjobtime,completetime:this.completetime,compid:this.compid,flowid:this.flowid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/produceReport'});
				})
				
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list";
			this.$axios.post(url,{
				headers:{
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.optionb = res.data;
			})
			// 后端网址
			var url = this.baseUrl+"/baseFlow/list";
			this.$axios.post(url,{
				headers:{
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.optionc = res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-row{
		margin-top: 30px;
	}
</style>
