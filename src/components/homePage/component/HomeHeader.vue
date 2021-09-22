<template>
  <div>
    <!--头部文字区域-->
    <div>
      <p class="time">现在是：{{date}}</p>
      <h3 class="login-status">未登录</h3>
      <p class="dorm-p">桂林理工大学（8A502）</p>
    </div>
    <!--轮播图-->
    <div class="wrapper">
      <swiper :options="swiperOption" > <!-- ref="mySwiper" -->
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.url" class="swiper-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "HomeHeader",
  components: {},
  data() {
    return {
      date: new Date(),
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          "id": "0001",
          "url": "https://img2.baidu.com/it/u=4060366109,1136450685&fm=26&fmt=auto"
        },
        {
          "id": "0002",
          "url": "https://img2.baidu.com/it/u=3409802926,2505165809&fm=26&fmt=auto"
        },
        {
          "id": "0003",
          "url": "https://img2.baidu.com/it/u=1296145507,1357687244&fm=26&fmt=auto"
        }
      ]
    }
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = moment(new Date()).format("YYYY-MM-DD"); // 修改数据date
    }, 1000),
      console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(0, 1000, false) //从第一张开始，1秒轮播
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}

</script>

<style scoped>
.time{
  margin-top: 25px;
  font-size: 13px;
  color: #6c6c6c;
}
.login-status{
  margin-top: 0;
  margin-bottom: 0;
}
.dorm-p{
  font-size: 12px;
  color:gray;
}

/*轮播图样式*/
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important
}
.swiper-img {
  width: 100%
}
.wrapper {
  position:relative;
  overflow :hidden;

  width :100%;
  height: 100%;
  background: #eee;
}
</style>
