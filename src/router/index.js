import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/homePage/HomePage'
//指引HelloWord 创建在一个components的子文件夹下面，子文件夹里面还有components文件夹导入子组件
import EventPage from '../components/event/EventPage'
import MinePage from '../components/mine/MinePage'
import EventDetail from "../components/event/component/EventDetail";
import MyDorm from "../components/homePage/component/MyDorm";
import ReportEvents from "../components/homePage/component/ReportEvents";
import HonourRoll from "../components/homePage/component/HonourRoll";
import index from '../components/index/login'
import register from '../components/index/register'
import MyService from "../components/mine/component/MyService";
import about from "../components/mine/component/about";
import Collection from "../components/mine/component/Collection";
import workTable from "../components/mine/component/workTable";
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
    },
    {
      path:'/EventDetail',
      name:'EventDetail',
      component:EventDetail
    },
    {
      path:'/MyDorm',
      name:'MyDorm',
      component:MyDorm
    },
    {
      path:'/ReportEvents',
      name:'ReportEvents',
      component:ReportEvents
    },
    {
      path:'/HonourRoll',
      name:'HonourRoll',
      component:HonourRoll
    },
    //登录界面路由
    {
      path: '/index',
      name: 'index',
      component: index
    },
    //注册界面路由
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/MyService',
      name: 'MyService',
      component: MyService
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/workTable',
      name: 'workTable',
      component: workTable
    },


  ]
})
