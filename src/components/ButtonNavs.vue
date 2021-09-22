<template>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/HomePage')">
      <img :src="'/HomePage' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" class="img" alt="首页">
      <span :class="{on: '/HomePage' === $route.path}">首页</span>
    </div>
    <div class="tab-item" @click="switchTo('/EventPage')">
      <img :src="'/EventPage' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" class="img" alt="推荐">
      <span :class="{on: '/EventPage' === $route.path}">动态</span>
    </div>
    <div class="tab-item" @click="switchTo('/MinePage')">
      <img :src="'/MinePage' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" class="img" alt="搜索">
      <span :class="{on: '/MinePage' === $route.path}">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonNavs",
  data(){
    return{
      tabBarImgArr:[   //图片切换
        {normal: require('../../src/assets/styles/iconfont/Home.png'), selected: require('../../src/assets/styles/iconfont/HomeSelected.png')},
        {normal: require('../../src/assets/styles/iconfont/Service.png'), selected: require('../../src/assets/styles/iconfont/ServiceSelected.png')},
        {normal: require('../../src/assets/styles/iconfont/My.png'), selected: require('../../src/assets/styles/iconfont/MySelected.png')},
      ]
    }
  },
  methods:{
    clickItem:function(path){
      this.$router.push(path);
    },
    switchTo(path){
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }

}
</script>

<style scoped>

.bottom-tab{
  border-top:1px solid #d2d2d2;
  width:100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
}

.tab-item{
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
  width: 35%;
}
.img{
  width: 22px;
  height: 22px;
}
.on{
  color: #3d9970;
}
</style>
