<template>
	<div style='text-align: center;'>
		<h1>修改设备信息</h1>
		<el-row>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;'  v-model='devname' placeholder="请输入设备名称"></el-input> </el-col>
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
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;'  v-model='devuser' placeholder="请输入责任人"></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='ss()'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				options:[],
				optiona:[],
				devid:'',
				devname:'',
				devuser:'',
				typeid:'',
				compid:'',
				devdate:''
			}
		},
		methods:{
			ss(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/baseDevice/update"
					// 传递给后端的数据
					var data = {devid:this.devid,devname:this.devname,devuser:this.devuser,typeid:this.typeid,compid:this.compid,
					devdate:this.devdate};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/baseDevice'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var devid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/baseDevice/load";
			// 传递给后端的数据
			var data = {devid:devid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				// 回显
				this.devid=obj.devid;
				this.devname=obj.devname;
				this.devuser=obj.devuser;
				this.typeid=obj.typeid;
				this.compid=obj.compid;
				this.devdate=obj.devdate
				
			})
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

<style>

</style>
