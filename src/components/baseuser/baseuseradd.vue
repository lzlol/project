<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">人员信息添加页面</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='cname' placeholder='请输入人员姓名'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='username' placeholder='用户名'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='password' placeholder='密码'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='telno' placeholder='手机号'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='email' placeholder='邮箱'></el-input> </el-col>
		   <el-col :span="12"> <el-input style='width:45%' v-model='sex' placeholder='性别'></el-input> </el-col>
		</el-row>
		<el-row>
			
			<el-select v-model="compid" placeholder="请选择所属企业" style='width:20%;margin-left: -35%;'>
				<el-option
				  v-for="item in options"
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
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:'',
				compid:'',
				options:[]
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/insert"
				// 传递给后端的数据
				var data = {cname:this.cname,username:this.username,password:this.password,
				telno:this.telno,email:this.email,sex:this.sex,
				compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseuser'});
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
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-row{
		margin-top: 30px;
	}
</style>
