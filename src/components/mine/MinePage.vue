<template>
  <div>
    <button  @click="put">mlj进局子</button>
    <button-navs></button-navs>
  </div>
</template>

<script>
  import ButtonNavs from "../ButtonNavs"
  export default {
    name: 'MinePage',
    components:{
      /*在内容容器引入底部导航栏*/
      ButtonNavs,
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
