<template>
  <div>
    <mine-header></mine-header>
    <button-navs></button-navs>
  </div>
</template>

<script>
  import ButtonNavs from "../ButtonNavs"
  import MineHeader from "./component/MineHeader";
  export default {
    name: 'MinePage',
    components:{
      ButtonNavs,
      MineHeader
    },
  }
</script>

<style scoped>

</style>
