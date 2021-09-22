<template>
  <div>
    <!--头部文字区域-->
    <div>
      <p class="time">现在是：{{date}}</p>
      <h3 class="login-status">未登录</h3>
      <p class="dorm-p">桂林理工大学（8A502）</p>
    </div>
    <!--轮播图-->

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
    }
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = moment(new Date()).format("YYYY-MM-DD"); // 修改数据date
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },

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
  background: red;
}
.swiper-img {
  width: 100%
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25% /*相对于宽高比自动撑开 */
  /* width:100%;
  height: 31.25vw; 除了上面那种方法，也可以这么写，意思是宽高比例*/
}
</style>
