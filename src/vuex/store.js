import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// state对象用来存储数据
var state={
		tags: [
		  { name: '首页',type:'warning',url:'/',index:'101'}
		],
		LoginFlag:false,
		defaultIndex:'101'

}
// mutations对象用来存储方法
var mutations = {
	change(state,index){
		state.defaultIndex=index
	},
	cz(state){
		state.tags=[{
			name: '首页'
			,type:'warning',url:'/'
		}]
	},
	// 添加tags标签
	addtag (state,obj){
		// 把数组中，所有的元素 type改成info
		for(var item of state.tags){
			item.type='info';
		}
		// 重复的不再添加
		for(var item of state.tags){
			if(item.name==obj.name){
				item.type='warning';
				return;
			}
		}
		state.tags.push(obj);
	},
	updateTag(state,index){
		// 把数组中，所有的元素 type改成info
		for(var item of state.tags){
			item.type='info';
		}
		// 把index对应的改成waring
		state.tags[index].type='warning';
	},//删除tag标签
	del(state,index){
		state.tags.splice(index,1)
	},
	addCnpm(state,cnpm){
		state.tableData.push(cnpm)
	},
	delCnpm(state,date){
		for (var i = 0; i <state.tableData.length; i++) {
			
			if(state.tableData[i].date==date){
				console.log(i)
				state.tableData.splice(i,1)
			}
		}
	}
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})