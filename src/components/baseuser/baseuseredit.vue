<template>
	<div style='text-align: center;'>
		<h1>修改人员信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;'  v-model='cname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;'  v-model='username'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='password'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='telno'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='email'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='sex'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-select v-model="compid" placeholder="请选择所属企业">
				<el-option
				  v-for="item in options"
				  :label="item.compname"
				  :value="item.compid" 
				  :key='item.compid'>
				</el-option>
			  </el-select>
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
				compid:'',
				userid:'',
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:''
			}
		},
		methods:{
			ss(){
				this.$router.go(-1);
			}
			,
			saveEdit(){
					// 后端网址
					var url = this.baseUrl+"/baseUser/update"
					// 传递给后端的数据
					var data = {compid:this.compid,userid:this.userid,cname:this.cname,username:this.username,password:this.password,
					telno:this.telno,email:this.email,sex:this.sex};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/baseuser'});
					})
				}
		},
		mounted:function(){
			// 接收路由传递的数据
			var userid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/baseUser/load";
			// 传递给后端的数据
			var data = {userid:userid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				// 回显
				this.userid=obj.userid;
				this.cname=obj.cname;
				this.username=obj.username;
				this.password=obj.password;
				this.telno=obj.telno;
				this.email=obj.email;
				this.sex=obj.sex;
				this.compid=obj.compid;
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
		
		}
		
	}
</script>

<style>

</style>
