// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// axios插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//


//轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/swiper-bundle.css'
// 全局注册
Vue.use(VueAwesomeSwiper, /* { default global options } */)


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
