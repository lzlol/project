<!-- html部分 -->
<template>
	<div>
		<!-- tags标签 -->
		<div style="text-align: left;">
			<el-tag v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" 
			@click='fns(tag,index)' style="margin-left: 10px;" @close="fn(tag,index)" >
			  {{tag.name}}
			</el-tag>
		</div>
		<router-view/>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				// arr:[{name:'aa'}]
			};
		},
		methods:{
			fn(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message('最后一个标签了，不能删');
				}else{
					var flag = this.$store.state.tags[index].type='warning';
					 // 删除 
					this.$store.commit('del',index);
					if(flag){  //判断type='warning'
						if(index==0){
							this.$store.commit('updateTag',0);
							this.$router.push({path:this.$store.state.tags[0].url});
						}else{
							this.$store.commit('updateTag',index-1);
							this.$router.push({path:this.$store.state.tags[index-1].url});
						}	
					}
				}
			},
			fns(tag,index){
			// 路由跳转
			this.$router.push({path:tag.url});
			// 改变type
			this.$store.commit('updateTag',index);
			this.$store.commit('change',tag.index);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
