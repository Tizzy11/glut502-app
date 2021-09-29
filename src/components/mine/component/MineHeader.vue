<template>
  <div>
    <h3 class="h3-my">设置</h3>
    <div class="personal-information" @click="">
      <div class="name-dorm">
        <h3 class="h3-name">{{ name }}</h3>
        <p class="dorm">桂林理工大学（{{dormitory}}）</p>
        <p class="student-id">登录名：{{username}}</p>
      </div>
      <img :src="head" class="head-img" @click="test2" alt="">
    </div>
    <div class="">
      <div class="my-menu" @click="switchTo('/MyService')">
        <img class="my-menu-img" :src="menu1" alt="">
        <p class="my-menu-item">设置</p>
        <p class="my-menu-arrow"> > </p>
      </div>
      <div class="my-menu" @click="switchTo('/Collection')">
        <img class="my-menu-img" :src="menu2" alt="">
        <p class="my-menu-item">收藏</p>
        <p class="my-menu-arrow"> > </p>
      </div>
      <div class="my-menu" @click="switchTo('/about')">
        <img class="my-menu-img" :src="menu3" alt="">
        <p class="my-menu-item">关于</p>
        <p class="my-menu-arrow"> > </p>
      </div>
      <div class="my-menu" @click="workTable">
        <img class="my-menu-img" :src="menu4" alt="">
        <p class="my-menu-item">工作台</p>
        <p style="margin-left: 244px"> > </p>
      </div>
    </div>

    <div @click="outOnClick" style="margin: 20px 0 0 130px">
      <el-row>
        <el-button type="danger" >退出登录</el-button>
      </el-row>
<!--      <button class="outBtn" @click="outOnClick">退出登录</button>-->
    </div>
  </div>
</template>

<script>

export default {
  name: "MineHeader",
  methods: {
    workTable(){
      if(this.identify==="1"){
        this.$message.success('欢迎管理员');
        this.$router.replace("/workTable")
      }else {
        this.$message.error('无权限');
      }
    },
    clickItem: function (path) {
      this.$router.push(path);
    },
    switchTo(path) {
      // console.log(this.$router)
      // console.log(this.$router)
      this.$router.replace(path)
    },
    test2(){
      console.log(sessionStorage.getItem('identify'));
    },
    //退出登录
    outOnClick(){
      if(sessionStorage.getItem('identify')&&sessionStorage.getItem('username') &&
          sessionStorage.getItem('name')&&sessionStorage.getItem('dormitory')!=null){
        sessionStorage.clear();//清空sessionStorage中所有信息
        this.$router.push('/index');
        this.$message.success('退出成功');
      }else {
        this.$message.error('退出失败');
      }
    }
  },

  data(){

    return{
      identify:sessionStorage.getItem('identify'),
      username:sessionStorage.getItem('username'),
      name:sessionStorage.getItem('name'),
      dormitory:sessionStorage.getItem('dormitory'),
      head:`http://192.168.230.56/do/`+sessionStorage.getItem('head'),
      // head:require("../../../../src/assets/styles/iconfont/head1.jpeg"),
      menu1:require("../../../../src/assets/styles/iconfont/setting.png"),
      menu2:require("../../../../src/assets/styles/iconfont/Collection.png"),
      menu3:require("../../../../src/assets/styles/iconfont/about.png"),
      menu4:require("../../../../src/assets/styles/iconfont/work.png")
    }
  },
}
</script>

<style scoped>
.h3-my{
  color: #505050;
  border-bottom:1px solid #ececec;
}
.personal-information{
  overflow: hidden;
  display: flex;
  height: 100%;
  /*border-bottom:1px solid #d2d2d2;*/
  background-color: #f3f3f3;
}
.name-dorm{
  margin-left: 10px;
}
.h3-name{
  color:#595959;
  margin-bottom: 10px;
}
.head-img{
  width: 65px;
  height: 65px;
  border-radius:50%;
  margin-top: 20px;
}
.dorm{
  width :270px;
  font-size :12px;
  color : #939393;
  margin-bottom: 0;

}
.student-id{
  width :270px;
  font-size :12px;
  color : #939393;
  margin-top: 0;
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
.my-menu-arrow{
  margin-left: 260px;
}
.outBtn{
  background-color: white;
  border: none;
  font-size: 20px;

}
</style>
