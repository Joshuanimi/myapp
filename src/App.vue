<template>
  <div id="app">
  	<app-header v-if="header_show"></app-header>
  	<div class="cotainer" :class="classObject">
  		<vue-scroll :ops="ops" style="width:100%;height:100%">
		  	<transition :name="transitionName">   
		      <router-view @header="header" @footer="footer"></router-view>
		    </transition>
	    </vue-scroll>
   	</div>
   <app-footer v-if="footer_show" :act="val"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
      return {
          transitionName:'',
          header_show:true,
          footer_show:false,
          val: '',
          ops: {
            vuescroll: {},
            scrollPanel: {
					    initialScrollX: false,
					    scrollingX: false,
            },
            rail: {},
            bar: {
                disable: true,
            }
        	},
      }
  },
  components: {
        'app-header':Header,
        'app-footer':Footer,
  },
  computed: {
	  classObject: function () {
	    return {
	      'min-height': this.header_show && this.footer_show
	    }
	  }
	},
	watch: {
  	//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  methods:{
  	// 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
	    onRefresh () {      
	        this.$router.replace('/refresh')    
	    },
      //是否显示头部
      header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      footer:function (bool) {
          this.footer_show = bool;
      },
  },
  
}
</script>

<style>
body,html{margin: 0;height: 100%;}
#app {
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cotainer{width: 100%;  background: #f5f5f5;height: calc(100% - 46px);}
.min-height{height: calc(100% - 96px) !important;}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
