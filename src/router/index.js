import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/gultFirstPage/HelloWorld'

//指引HelloWord 创建在一个components的子文件夹下面，子文件夹里面还有components文件夹导入子组件

import SecondPage from '../components/gultSecondPage/SecondPge'
//页面二
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
