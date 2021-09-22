<template>
  <div>
    <div class="icons">
      <div class="icon" @click="">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon1"  alt=""/>
        </div>
        <p class="icon-desc">事件上报</p>
      </div>
      <div class="icon" @click="">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon2"  alt=""/>
        </div>
        <p class="icon-desc">我的宿舍</p>
      </div>
      <div class="icon" @click="">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon3"  alt=""/>
        </div>
        <p class="icon-desc">光荣榜</p>
      </div>
    </div>
    <div>
      <h4 style="margin-top: 10px">通知公告</h4>
    </div>
  </div>
</template>

<script>
// import Home from "/src/assets/styles/iconfont/Home.png"
export default {
  name: "HomeContent",
  data(){
    return{
      icon1:require('../../../../src/assets/styles/iconfont/ReportEvents.png'),
      icon2:require('../../../../src/assets/styles/iconfont/MyDormitory.png'),
      icon3:require('../../../../src/assets/styles/iconfont/HonourRoll.png'),
    }
  }
}
</script>

<style scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 100px;
  /*border-top:1px solid #d2d2d2;*/
  border-bottom:1px solid #d2d2d2;
}
.icons .icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 33.333333%;
  height: 0;
  padding-bottom: 100px;
}
.icons .icon .icon-img {
  border-width: 1px;
  position: absolute;
  top: 15px;
  left: 40px;
  right: 0;
  bottom: 0.22rem;
  box-sizing: border-box;
  padding: 0.1rem;
  width: 45px;
  height: 45px;
}
.icons .icon .icon-img .icon-img-content {
  display: block;
  margin: auto;
  height: 100%;
  width: 100%;
}
.icons .icon .icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 18px;
  line-height: 0.44rem;
  text-align: center;
  margin-bottom: 7px;
  color: #333;
}
</style>
