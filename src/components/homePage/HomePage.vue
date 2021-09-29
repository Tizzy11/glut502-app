<template>
  <div>
    <home-header></home-header>
    <home-content></home-content>
    <button-navs></button-navs>
  </div>
</template>

<script>
  import ButtonNavs from "../ButtonNavs"
  import HomeHeader from "./component/HomeHeader";
  import HomeContent from "./component/HomeContent";
  export default {
    name: 'HomePage',
    components:{
      /*在内容容器引入底部导航栏*/
      HomeHeader,
      ButtonNavs,
      HomeContent
    },
}
</script>

<style scoped>

</style>
