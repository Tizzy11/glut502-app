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
    // methods: {
    //   put() {
    //     this.axios.post('/api/do/api.php', {
    //       params: {
    //         type: 3
    //       }
    //     })
    //       .then(response => {
    //         console.log(response);
    //         console.log("sss")
    //
    //       }, err => {
    //         console.error(err);
    //       })
    //   }
    // }
}
</script>

<style scoped>

</style>
