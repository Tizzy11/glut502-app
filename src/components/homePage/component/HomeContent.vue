<template>
  <div>

    <div class="icons">
      <div class="icon" @click="ReportEvents">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon1"  alt=""/>
        </div>
        <p class="icon-desc">事件上报</p>
      </div>
      <div class="icon" @click="myDorm">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon2"  alt=""/>
        </div>
        <p class="icon-desc">我的宿舍</p>
      </div>
      <div class="icon" @click="HonourRoll">
        <div class="icon-img">
          <img class="icon-img-content" :src="icon3"  alt=""/>
        </div>
        <p class="icon-desc">宿舍排名</p>
      </div>
    </div>

<!--  通知公告 -->
    <div>
      <h4 class="h4-content">通知公告</h4>
      <el-card class="box-card">
        <div v-for="item in NewList.data" :key="item.name" class="text item">
          <ul style="padding: 0 0 0 10px;margin: 0 0 0 0">
            <li>{{item.title}}</li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// import Home from "/src/assets/styles/iconfont/Home.png"
export default {
  name: "HomeContent",
  data() {
    return {
      //存放newList数据容器
      NewList:[

      ],

      ID: sessionStorage.getItem('ID'),
      icon1: require('../../../../src/assets/styles/iconfont/ReportEvents.png'),
      icon2: require('../../../../src/assets/styles/iconfont/MyDormitory.png'),
      icon3: require('../../../../src/assets/styles/iconfont/HonourRoll.png'),
    }
  },
  //创建数据拿取方法
  //初始化加载数据请求方法
  created(){
    this.getNewList()
  },
  methods: {
    //获取公告栏列表信息
    getNewList(){
      this.axios.post("/api/do/api.php", {type :12}).then( (res) => {
        //赋值
        this.NewList=res.data;
        console.log(this.NewList)
      })
        .catch( (error) => {
          console.log(error);
        });

    },
    myDorm(){
      this.$router.push("/MyDorm");
    },
    ReportEvents(){
      this.$router.push("/ReportEvents");
    },
    HonourRoll(){
      this.$router.push("/HonourRoll");
    }
    // myDorm(){
    //   this.axios.post('/api/do/api.php', {
    //       type:13,
    //       ID:this.ID
    //
    // }).then((res) => {
    //     if (res.data!= null){
    //
    //       console.log(res.data);
    //       //证明返回json对象
    //       // 登录成功后把token 保存到客户端的sessionStorage中
    //       this.$message.success("宿舍详情")
    //
    //       // window.sessionStorage.setItem("name",res.data.name);
    //       this.$router.push("/MyDorm");
    //     }else{
    //       this.$message.error(res.message);
    //     }
    //   }).catch((error) => {
    //   });  //一定别忘了这个
    // },
    // HonourRoll(){
    //
    // },
    },
    clickItem: function (path) {
      this.$router.push(path);
    },
    switchTo(path) {
      // console.log(this.$router)
      // console.log(this.$router)
      this.$router.replace(path)
    }

}
</script>

<style scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 100px;
  /*border-top:1px solid #d2d2d2;*/
  border-bottom:1px solid #d2d2d2;
}
.icons .icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 33.333333%;
  height: 0;
  padding-bottom: 100px;
}
.icons .icon .icon-img {
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
.icons .icon .icon-img .icon-img-content {
  display: block;
  margin: auto;
  height: 100%;
  width: 100%;
}
.icons .icon .icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 18px;
  line-height: 0.44rem;
  text-align: center;
  margin-bottom: 7px;
  color: #333;
}
.h4-content{
  margin-top: 10px;
  margin-bottom: 5px;
  color: #505050;
}
.ul-content{
  padding-left: 25px;
  margin-top: 10px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 10px 0;
}

.box-card {
  border-radius: 5%;
  width: 100%;
}
</style>
