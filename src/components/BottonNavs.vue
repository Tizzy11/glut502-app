
<!--底部导航栏-->

<template>
  <div class="bottom">
    <div class="item"      @click="clickItem('/')"    :class="{active: $route.path==='/' }">
      <i class="iconfont icon-index-copy navicon"></i>
      <p>界面一</p>
    </div>
    <div class="item" @click="clickItem('/SecondPage')" :class="{active: $route.path==='/SecondPage'}">
      <i class="iconfont icon-xinxi navicon"></i>
      <p>界面二</p>
    </div>
    <div class="item" @click="clickItem('/SecondPage')" :class="{active: $route.path==='/SecondPage'}">
      <i class="iconfont icon-xinxi navicon"></i>
      <p>测试</p>
    </div>
    <div class="item" @click="clickItem('/ThridPage')" :class="{active: $route.path==='/ThridPage'}">
      <i class="iconfont icon-jiankang navicon"></i>
      <p>界面三</p>
    </div>
    <div class="item" @click="clickItem('/LastPage')"  :class="{active: $route.path==='/LastPage'}">
      <i class="iconfont icon-wode navicon"></i>
      <p>界面四</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottonNavs",
  //实现方法根据传入的不同路径参数跳转到不同界面
  methods:{
    clickItem:function(path){
      this.$router.push(path);
    }
  }

}
</script>

<style scoped>
  .bottom{
    display: flex;
    position: fixed;
    bottom:0px;
    border-top:1px solid #d2d2d2;
    background-color: white;
    width: 100%;
    height:60px;
  }
  .item{
    flex: 1;
    justify-content: center;
    text-align: center;
    color: #d2d2d2;
  }
  .item p{
    margin:0;
    font-size: 15px;
  }
  .navicon{
    font-size: 24px;
  }
  .active{
    color:rgb(212,0,0);
  }
</style>
