<template>
	<div class="headTop">
        <van-nav-bar
		  title="标题"
		  left-text="返回"
		  right-text="按钮"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
			<!--<van-icon name="search" slot="right" />
		</van-nav-br>-->
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
	name: 'headTop',
    data () {
        return {
        }
    },
    methods: {
	    onClickLeft() {
	      Toast('返回');
	      this.$router.go(-1)
	    },
	    onClickRight() {
	      Toast('按钮');
	    }
	}
}
</script>

<style scoped>
	.headTop{height: 46px; width: 100%; background: blue; color: #fff; font-size: 14px; text-align: center; line-height: 50px;}
</style>