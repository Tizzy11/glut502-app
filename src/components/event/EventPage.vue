<template>
  <div>
    <event-header></event-header>
    <button-navs></button-navs>
  </div>
</template>

<script>
  import ButtonNavs from "../ButtonNavs"
  import EventHeader from "./component/EventHeader";
  export default {
    name: 'EventPage',
    components:{
      ButtonNavs,
      EventHeader
    },
  }
</script>

<style scoped>

</style>
