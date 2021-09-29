<template>
  <div>
    <h2 class="h2-back" @click="switchTo('/MinePage')"> < </h2>
    <h2>生产实习项目</h2>
    <p>成员：</p>
    <p>梁鹏屿</p>
    <p>林星辰</p>
    <p>冯世斌</p>
    <p>蔡焱明</p>
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    clickItem: function (path) {
      this.$router.push(path);
    },
    switchTo(path) {
      // console.log(this.$router)
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>

</style>
