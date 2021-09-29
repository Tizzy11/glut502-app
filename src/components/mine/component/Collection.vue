<template>
  <div>
    <h2 class="h2-back" @click="switchTo('/MinePage')"> < </h2>
    <el-empty description="啊哦，什么都没有"></el-empty>
  </div>
</template>

<script>
export default {
  name: "Collection",
  methods:{
    clickItem: function (path) {
      this.$router.push(path);
    },
    switchTo(path) {
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
.h2-back{
  width: 25px;
  margin-top: 0;
}
</style>
