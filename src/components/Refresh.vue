<template>
  <div class="refresh">
  		<h2>{{hotMovies}}</h2>
      <h3>我断网了</h3>
      <button @click="onRefresh()">点我刷新</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'refresh',
  data() {
    return {}
  },
  methods: {
    onRefresh(){
      this.$router.go(-1)//返回之前点击的页面
    },
  },
  computed:mapState({
  	hotMovies (state) {
	    return state.count
	
	  }
  }),

}
</script>