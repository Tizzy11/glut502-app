import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/homePage/HomePage'
//指引HelloWord 创建在一个components的子文件夹下面，子文件夹里面还有components文件夹导入子组件
import EventPage from '../components/event/EventPage'
import MinePage from '../components/mine/MinePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/EventPage',
      name: 'EventPage',
      component: EventPage
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage
    }
  ]
})
