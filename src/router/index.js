import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Refresh from '@/components/Refresh'
import Map from '@/components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{index:0},
      component: Home
    },{
      path: '/List',
      name: 'List',
      meta:{index:1},
      component: List
    },{
      path: '/Detail',
      name: 'Detail',
      meta:{index:2},
      component: Detail
    },{
      path: '/Header',
      name: 'Header',
      component: Header
    },{
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },{
      path: '/Refresh',
      name: 'Refresh',
      meta:{index:10},
      component: Refresh
    },{
      path: '/Map',
      name: 'Map',
      meta:{index:11},
      component: Map
    }
  ]
})
