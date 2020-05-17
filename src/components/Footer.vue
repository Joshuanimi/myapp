<template>
	<div class="foot">
        <van-tabbar v-model="active" class="active_tab">
		    <van-tabbar-item
		      v-for="(item,index) in tabbars"
		      :key="index"
		      @click="tab(index,item.name)"
		    >
		      <span :class="currIndex == index ? active:''">{{item.title}}</span>
		      <template slot="icon" slot-scope="props">
		        <img :src="props.active ? item.active : item.normal">
		      </template>
		    </van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<script>
export default {
	name: 'foot',
	props: ['act'],
    data () {
        return {
        	currIndex: 0,
		    active: 0,
		    tabbars: [
		        {
		          name: "/",
		          title: "首页",
		          normal: require("../assets/foot-icon/home01.png"),
		          active: require("../assets/foot-icon/home02.png")
		        },{
		          name: "/List",
		          title: "分类",
		          normal: require("../assets/foot-icon/task01.png"),
		          active: require("../assets/foot-icon/task02.png")
		        },{
		          name: "/Detail",
		          title: "消息",
		          normal: require("../assets/foot-icon/hall01.png"),
		          active: require("../assets/foot-icon/hall02.png")
		        },{
		          name: "mine",
		          title: "我的",
		          normal: require("../assets/foot-icon/my01.png"),
		          active: require("../assets/foot-icon/my02.png")
		        }
		    ]
        }
    },
    watch: {
      	$route(to, from) {
      		this.active = to.meta.index
      	}
  	},
    created() {
    },
    methods:{
    	tab(index, val) {
		    this.currIndex = index;
		    this.$router.push(val);
		}
    }
}
</script>

<style scoped>
	.foot{width: 100%; height: 50px; line-height: 50px; text-align: center; font-size: 14px; color: #FFFFFF;background: #0000FF; z-index: 999;}
	.active_tab img {width: 26px;height: 26px;}

	.van-tabbar-item--active {color: #e10f02;}
</style>
