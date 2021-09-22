<template>
  <div>
    <div class="icons">
      <div class="icon" @click="">
        <div class="icon-img">
          <img class="icon-img-content" src="./src/assets/styles/iconfont/Home.png" alt=""/>
        </div>
        <p class="icon-desc"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent"
}
</script>

<style scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 33.3%;
  height: 0;
  padding-bottom: 25%;
}
.icon-img {
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
.icon-img-content {
  display: block;
  margin: auto;
  height: 100%;
  width: 100%;
}
.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 18px;
  line-height: 0.44rem;
  text-align: center;
  color: #333;
}
</style>
