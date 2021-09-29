// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
//全局挂载
Vue.use(Element)
// axios插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/swiper-bundle.css'
// 全局注册
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import qs from 'qs'
// 设置 axios，把请求数据在这里转换一下，参考官方文档： https://github.com/axios/axios
axios.defaults.transformRequest = [(data, header) => {
  return qs.stringify(data);
}]
// 引入element框架

Vue.config.productionTip = false
// Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
