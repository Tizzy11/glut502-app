<template>
  <div class="bottom">
    <div class="item" @click="clickItem('/HomePage')" :class="{active: $route.path==='/HomePage' }">
      <p>首页</p>
    </div>
    <div class="item" @click="clickItem('/EventPage')" :class="{active: $route.path==='/EventPage'}">
      <p>动态</p>
    </div>
    <div class="item" @click="clickItem('/MinePage')" :class="{active: $route.path==='/MinePage'}">
      <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonNavs",
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
  left: 0;
  bottom:0;
  border-top:1px solid #d2d2d2;
  background-color: white;
  width: 100%;
  height:50px;
}
.item{
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #d2d2d2;
}
.item p{
  margin:0;
  font-size: 12px;
}
.item img{
  width: 30px;
  margin-top: 5px;
}
.active{
  color:#2ECC40;
}
</style>
