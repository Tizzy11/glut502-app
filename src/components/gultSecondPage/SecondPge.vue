<template>
  <div>
    <button  @click="put">mlj进局子</button>
    <botton-navs></botton-navs>    <!--底部导航栏-->

  </div>
</template>

<script>
  import BottonNavs from "../BottonNavs"
  export default {
    name: 'SecondPage',
    components:{
      /*在内容容器引入底部导航栏*/
      BottonNavs,
    },
    methods: {
      put() {
        this.axios.post('/api/do/api.php', {
          params: {
            type: 3
          }
        })
          .then(response => {
            console.log(response);
            console.log("sss")

          }, err => {
            console.error(err);
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
