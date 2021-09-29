<template>
  <div>
    <h2 class="h2-back" @click="back"> < </h2>
    <p>请尽量写精确且简短一点哦！</p>
    <div class="report-input">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
    <div class="report-button" @click="submit" >
      <el-row>
        <el-button type="primary">提交</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportEvents",
  data() {
    return {
      username:sessionStorage.getItem('username'),
      textarea: ''
    }
  },
  methods: {
    back(){
      this.$router.push("/HomePage");
    },
    //上报信息
    submit(){
      this.axios.post("/api/do/api.php",{
          type:7,
          msg:this.textarea,
          username:this.username
        }
      ).then((res) => {
        if (res.data.res==100){
          //发送成功res.data==100 跳转首页
          this.$router.push("/HomePage");
          this.$message.success('上传事件成功');
        }else{
          this.$message.error('上传事件失败');
        }
      }).catch((error) => {
      });  //一定别忘了这个
    },
    },

    clickItem: function (path) {
      this.$router.push(path);
    },
    switchTo(path) {
      // console.log(this.$router)
      this.$router.replace(path)
    }

}
</script>

<style scoped>
.h2-back{
  width: 25px;
  margin-top: 0;
}
.report-button{
  margin-left: 150px;
}
.report-input{
  /*height: 300px;*/
}
</style>
