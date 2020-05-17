// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store' // 导入vuex文件
import api from './request/api' // 导入api接口
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import { Button, Tabbar, TabbarItem, NavBar, List, PullRefresh, Cell   } from 'vant';

Vue.use(Button)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);

Vue.use(vuescroll);

Vue.config.productionTip = false

Vue.prototype.$api = api; // 将api挂载到vue的原型上

//可以在页面中这样调用接口
//methods: {    
//  onLoad(id) {      
//      this.$api.article.articleDetail(id, {        
//          api: 123      
//      }).then(res=> {
//          // 执行某些操作      
//      })    
//  }  
//}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
