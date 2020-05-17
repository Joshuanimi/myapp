//  store.js 中都mutation中增加添加和删除token的方法
import Vue from 'vue'
import Vuex from 'vuex' //npm install --save vuex
Vue.use(Vuex)

//const state = {     // 全局管理的数据存储
//	 isLogin:'0',
//	 ser:null,
//	 networkSuccess: true,
//	 token:localStorage.getItem('token') ? localStorage.getItem('token'):'',   // token
//};
export default new Vuex.Store({
	state: {     // 全局管理的数据存储
		 isLogin:'1',
		 ser:1234,
		 count: 123,
		 networkSuccess: true,
		 token:localStorage.getItem('token') ? localStorage.getItem('token'):'',   // token
	},
	// getters 适用于获取值，不会改变state原值
	getters:{    // 监听数据变化的
		getStorage(state){   // 获取本地存储的登录信息
	      if(!state.token){
	        state.token =JSON.parse(localStorage.getItem(key))
	      }
	      return state.token
	    }
	},
	// 修改state
	mutations:{
		$_setToken(state, value) { // 设置存储token
	        state.token = value;
	        localStorage.setItem('token', value);
	    },
	    $_removeStorage(state, value){  // 删除token
		      localStorage.removeItem('token');
	    },
	    changeNetwork(state,val){ //改变状态
	      state.networkSuccess = val
	    }
	},
	actions: {

    }
})
