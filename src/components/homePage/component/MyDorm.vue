<template>
  <div>
    <h2 class="h2-back" @click="switchTo('/HomePage')"> < </h2>
<!--    <h3 class="h3-my-dorm">我的宿舍信息</h3>-->

    <div class="my-menu" @click="">
      <img class="my-menu-img" :src="myDorm" alt="">
      <p class="my-menu-item">宿舍号：</p>
      <p class="my-menu-arrow">{{ dormitory }}</p>
    </div>

    <h5>宿舍成员</h5>
    <div v-for="item in tableData.data" :key="item.name">
      <ul>
        <li>{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDorm",
  data(){
    return{
      ID:sessionStorage.getItem('ID'),
      dormitory:sessionStorage.getItem('dormitory'),
      myDorm:require("../../../../src/assets/styles/iconfont/MyDorm.png"),
      tableData: []
    }
  },
  created(){
    this.MyDrom()
  },
  methods: {
    //创建拿数据请求方法
    MyDrom(){
      this.axios.post('/api/do/api.php', {
                type:13,
                ID:this.ID

          }).then((res) => {
              if (res.data!= null){

                console.log(res.data);
                //证明返回json对象
                // 登录成功后把token 保存到客户端的sessionStorage中
                this.$message.success("宿舍详情")
                this.tableData=res.data;
                console.log(this.tableData.data[0].name)
              }else{
                this.$message.error(res.message);
              }
            }).catch((error) => {
            });  //一定别忘了这个
          },
          HonourRoll(){

    },
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
.h3-my-dorm{
  color: #505050;
  border-bottom:1px solid #ececec;
}
.my-menu{
  overflow: hidden;
  display: flex;
}
.my-menu-img{
  width: 25px;
  height: 25px;
  margin-top: 14px;
  margin-left: 10px;
}
.my-menu-item{
  margin-left: 10px;
}
/*.my-menu-arrow{*/
/*  margin-left: 260px;*/
/*}*/
</style>
