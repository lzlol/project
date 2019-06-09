<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">设备信息添加页面</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='devname' placeholder='请输入设备名称'></el-input> </el-col>
		  <el-select v-model="typeid" placeholder="请选择设备类别" style='width:22%'>
				<el-option
				  v-for="item in optiona"
				  :label="item.typename"
				  :value="item.typeid" 
				  :key='item.typeid'>
				</el-option>
			</el-select>
		</el-row>
		<el-row>
			<el-select v-model="compid" placeholder="请选择所属企业" style='width:22%'>
					<el-option
					  v-for="item in options"
					  :label="item.compname"
					  :value="item.compid" 
					  :key='item.compid'>
					</el-option>
				</el-select>
				<el-date-picker
					  style="margin-left: 28%;width:22%"
					  value-format="yyyy-MM-dd"
					  v-model="devdate"
					  type="date"
					  placeholder="投入时间">
				</el-date-picker>
		</el-row>
		<el-row>
		  
		  <el-col :span="12"> <el-input style='width:45%' v-model='devuser' placeholder='责任人'></el-input> </el-col>
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
				typeid:'',
				compid:'',
				devname:'',
				devdate:'',
				devuser:'',
				options:[],
				optiona:[]
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/insert"
				// 传递给后端的数据
				var data = {typeid:this.typeid,compid:this.compid,devname:this.devname,devdate:this.devdate,devuser:this.devuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseDevice'});
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
				this.options = res.data;
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list";
			this.$axios.post(url,{
				headers:{
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.optiona = res.data;
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
