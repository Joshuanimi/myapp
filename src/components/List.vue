<template>
	<div id="list">
		<!--<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
			<van-list
			    v-model="loading"
			    :finished="finished"
			    :immediate-check="false"
			    finished-text="没有更多了"
			    @load="onLoad"
			>-->
		<div class="div">这是list页面这是list页面这是list页面这是list页面这是list页面</div>
		<router-link to="Detail">go to details</router-link>
		<van-button type="info" @click="test">主要按钮</van-button>
		<!--</van-list>
		</van-pull-refresh>-->
	</div>
</template>

<script>
	import store from '@/store/store';
export default {
	name: 'List',
	data () {
	    return {
	      msg: '',
	      loading: false, //是否处于加载状态
	      finished: false, //是否已加载完成
	      refreshing: false, //是否处于加载中状态
	    }
	},
	mounted(){
        let winHeight = document.documentElement.clientHeight    //视口大小
        document.getElementById('list').style.height = (winHeight - 96) +'px'  //调整上拉加载框高度
    },
	created:function () {
		this.$emit('header', true);
		this.$emit('footer', true);
	},
	methods: {
		test() {      
			console.log(store.state.networkSuccess)
			store.commit('changeNetwork', false);
			this.$router.push('/Map')
setTimeout(() => {console.log(store.state.networkSuccess)}, 1500)
			return
	        this.$api.article.login({        
	            mobile: 13790038275,
	            pass: '123456'
	        }).then(res=> {
	        	console.log(res)
	            // 执行某些操作      
	        })
       },
		onLoad() {
			if (this.refreshing) {
	          this.refreshing = false;
	        }
			this.finished = true
	    },
	    onRefresh() {  
	    	//下拉刷新时触发
		    // 清空列表数据
		    this.finished = false;
		
		    // 重新加载数据
		    // 将 loading 设置为 true，表示处于加载状态
		    this.loading = true;
		    this.onLoad();
	    }
	}
}
</script>

<style scoped>
	.div{height: 50px; font-size: 14px; border: 1px solid #00FFFF;}
</style>