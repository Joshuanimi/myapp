<template>
	<div id="home">
		<!--<van-pull-refresh v-model="refreshing" @refresh="onRefresh">-->
			<van-list
			    v-model="loading"
			    :finished="finished"
			    finished-text="没有更多了"
			    :offset="100"
			    @load="onLoad"
			>
			<!--:immediate-check="false"   关闭加载第一屏的数据-->
		    	<van-cell v-for="item in list" :key="item" :title="item" />
		    
			<!--<div>这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页这个是首页</div>
			<router-link to="/List">go to list</router-link>
			<div class="img"></div>
			<div class="img"></div>
			<div class="img"></div>
			<div class="img"></div>
			<div class="img"></div>
			<div class="img"></div>-->
			</van-list>
		<!--</van-pull-refresh>-->
	</div>
	
</template>

<script>
export default {
	name: 'Home',
	data () {
	    return {
	      msg: '',
	      list: [],
	      loading: false, //是否处于加载状态
	      finished: false, //是否已加载完成
	      refreshing: false, //是否处于加载中状态
	    }
	},
	created:function () {
		this.loading = false;
		this.finished = false
		this.$emit('header', true);
		this.$emit('footer', true);
	},
	mounted(){
        let winHeight = document.documentElement.clientHeight    //视口大小
        document.getElementById('home').style.height = (winHeight - 96) +'px'  //调整上拉加载框高度
   },
	methods: {
		onLoad() {
	      setTimeout(() => {
	        if (this.refreshing) {
	          this.list = [];
	          this.refreshing = false;
	          console.log(1)
	        }
	
	        for (let i = 0; i < 10; i++) {
	          this.list.push(this.list.length + 1);
	        }
	        this.loading = false;
	
	        if (this.list.length >= 40) {
	          this.finished = true;
	          console.log(2)
	        }
	      }, 1000);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.div{height: 50px; font-size: 14px; border: 1px solid #00FFFF;}
	.img{height: 200px; width: 100%; background: antiquewhite; margin-top: 30px; box-sizing: border-box;}
</style>
