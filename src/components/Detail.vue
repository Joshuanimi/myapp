<template>
	<div class="details">
		<div>这是details页面这是details页面这是details页面这是details页面这是details页面这是details页面</div>
		<router-link to="/">go to home</router-link>
	</div>
</template>

<script>
export default {
	name:'Details',
	data () {
	    return {
	      msg: '',
	      active: 2
	    }
	},
    created:function () {
		this.$emit('header', true);
		this.$emit('footer', true);
		this.$emit('active', 2)
	}
}
</script>

<style scoped>
	div{height: 50px; font-size: 14px; border: 1px solid #00FFFF;}
</style>