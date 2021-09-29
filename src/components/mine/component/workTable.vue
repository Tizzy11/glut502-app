<template>
  <div>
    <h2 class="h2-back" @click="back"> < </h2>
    <div style="float: right;margin-bottom: 10px">
      <el-row>
        <el-button type="primary" @click="addDorm">新增宿舍</el-button>
      </el-row>
    </div>
<!--    <h3><button @click="addDorm">新增宿舍</button></h3>-->
    <br>
    <ul class="ul-work">
      <li v-for="item in workList.data" :key="item.ID">
        <div>
            <el-card class="box-card" >
              <div slot="header" class="clearfix">
                <span v-if="item.status==0">待处理</span>
                <span v-if="item.status==1">已处理</span>
                <el-button style="float: right; padding: 0 0" type="text" @click="changeStatus(item.ID)">操作</el-button>
              </div>
              <div >
                <div class="work-card">
                  <p class="work-card-dorm">宿舍：{{item.dormitory}}</p>
                  <p class="work-card-time">时间：{{dateFormat(item.time)}}</p>
                </div>
                <div>
                  <p>{{item.msg}}</p>
                </div>
              </div>
            </el-card>
          <br>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "workTable",
  data() {
    return {
      // username:sessionStorage.getItem('username'),
      workList:[]
    };
  },
  //创建数据拿取方法
  //初始化加载数据请求方法
  created(){
    this.getWork()
  },
  methods:{
    changeStatus(ID){
      this.axios.post("/api/do/api.php", {
        type :8,
        username:sessionStorage.getItem('username'),
        ID:ID,
        // username:this.username,
        // ID:this.ID,
      }).then( (res) => {
        //赋值
        location.reload();
        this.workList=res.data;
        //请求返回的数据
        this.$message.success("处理成功！");

      })
        .catch( (error) => {
          console.log(error);
        });

    },
    //加载初始数据方法
    getWork(){
      this.axios.post("/api/do/api.php", {type :15}).then( (res) => {
        //赋值
        this.workList=res.data;
        //请求返回的数据
        this.$router.push('/workTable');
      })
        .catch( (error) => {
          console.log(error);
        });
      },
    //返回
    back(){
      this.$router.push("/MinePage");
    },
    dateFormat(timestamp) {
      const date=new Date(timestamp)
      date.setHours(date.getHours()+16)
      const Y = date.getFullYear() + '-';
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const D = ((date.getDate()-1) < 10 ? '0' + (date.getDate()-1) : (date.getDate()-1));
      /*const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+ ':';
      const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); // 秒*/
      const dateString = Y + M + D;
      return dateString;
    },
    //新增宿舍
    // addDorm(){
    //   this.axios.post("/api/do/api.php", {type :4 }).then( (res) => {
    //     //赋值
    //     this.workList=res.data;
    //     //请求返回的数据
    //     this.$router.push('/workTable');
    //   })
    //     .catch( (error) => {
    //       console.log(error);
    //     });
    //
    // }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}
.ul-work{
  list-style-type: none;
  padding-left: 0;
}
.work-card{
  display: flex;
  overflow: hidden;
}
.work-card-dorm{
  width: auto;
  height: 20px;
  margin: 0 0 0 0;
}
.work-card-time{
  height: 20px;
  margin: 0 0 0 25px;
}
</style>
