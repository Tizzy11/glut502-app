<template>
  <div>
    <div class="page-holder d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center py-5">
          <div class="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
            <div class="pr-lg-5"><img src="../../assets/img/illustration.svg" alt="" class="img-fluid" ></div>
          </div>
          <div class="col-lg-5 px-lg-4">
            <h1 class="text-base text-primary mb-4">The Best Manger for you</h1>
            <h2 class="mb-4">glut502宿舍管理系统</h2>
            <p class="text-muted">本项目采用vue，以最美观的样式、最方便的操作打造一流的宿舍管理系统.</p>

            <el-form ref="loginForm" :model="loginForm" :rules="rules" size="medium" label-width="80px"
                     label-position="left">
              <el-col :span="24">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable prefix-icon='el-icon-user'
                            :style="{width: '100%'}"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="密码" prop="password">
                  <el-input v-model="loginForm.password" placeholder="请输入密码" clearable prefix-icon='el-icon-view'
                            show password :style="{width: '100%'}"></el-input>
                </el-form-item>
              </el-col>
<!--    下拉选择框          -->
              <el-col :span="24">
                <el-form-item label="宿舍号" prop="id">
                  <el-select v-model="loginForm.id" placeholder="请选择宿舍号" clearable :style="{width: '100%'}">
                    <el-option v-for="item in objData" :key="item.ID" :label="item.dormitory" :value=item.ID></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="学生姓名" prop="name">
                  <el-input v-model="loginForm.name" placeholder="请输入学生姓名" clearable :style="{width: '100%'}">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item size="large">
                  <el-button type="primary" @click="submitForm" class="submitBtn">注册</el-button>
                  <el-button @click="resetForm" class="resetBtn">重置</el-button>
                </el-form-item>
              </el-col>

              <div>
                <button class="loginBtn" @click="toLogin">想起账号去登录</button>
              </div>
            </el-form>

          </div>

        </div>
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>

  import MyFooter from '../common/footer'
  export default {
    components:{
      //组件引用
      MyFooter,
    },

    data() {
      return {

        //下拉框部分
        objData: [],

        //存放返回json对象
        data:{

        },
        loginForm: {
          type:1,
          username: "",
          password: "",
          name: "",
          id:"",  //宿舍号
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          id: '',
          name: [{
            required: true,
            message: '请输入学生姓名',
            trigger: 'blur'
          }],
        },

      }
    },
    computed: {},
    watch: {},
    //创建数据拿取方法
    created(){
      this.getOptions()
    },
    mounted() {},
    methods: {

      getOptions(){


        this.axios.post("/api/do/api.php", {type :3}).then( (res) => {

          //赋值

        this.objData=res.data.data;
          //请求返回的数据
          console.log(this.objData)


        })
        .catch( (error) => {
          console.log(error);
        });
  },

      submitForm(){
        if (this.loginForm.username == ""){
          this.$message.error("请输入注册账号");
          return false;
        }
        if (this.loginForm.password == ""){
          this.$message.error("请输入密码");
          return false;
        }
        if (this.loginForm.id == ""){
          this.$message.error("请选择宿舍");
          return false;
        }
        if (this.loginForm.name== ""){
          this.$message.error("请输入宿舍名字");
          return false;
        }
        if (this.loginForm.stuname == ""){
          this.$message.error("请输入姓名");
          return false;
        }

        //this.$message(api.login);
        this.axios.post("/api/do/api.php",this.loginForm).then((res) => {
          if (res.data.data!= null){//证明返回json对象
            // 登录成功后把token 保存到客户端的sessionStrorage中
            this.$message.success("注册成功")
            window.sessionStorage.setItem("token",res.data.data);
            console.log(res.data.data);
            this.$router.push("/index");
          }else{
            this.$message.error(res.message);
          }
        }).catch((error) => {
        });  //一定别忘了这个
      },
  //if click btn push to registerPage
      resetForm(){

      },
      toLogin(){
        this.$router.push("/index");
      }
    }
  }
</script>



<style scoped>

  @import "../../assets/css/bootstrap.min.css";
  @import "../../assets/css/style.default.css";
  @import "../../assets/css/custom.css";

  /*自定css*/
  .submitBtn{
    margin: 10px;
    padding:10px; width:100px; height:50px;
    border: 0px solid #005cbf;
    -moz-border-radius: 15px;      /* Gecko browsers */
    -webkit-border-radius: 15px;   /* Webkit browsers */
    border-radius:15px;            /* W3C syntax */
    font-size: 20px;
    line-height: 30px;

  }
  .resetBtn{
    margin: 10px;
    padding:10px; width:100px; height:50px;
    border: 0px solid #ffffff;
    -moz-border-radius: 15px;      /* Gecko browsers */
    -webkit-border-radius: 15px;   /* Webkit browsers */
    border-radius:15px;            /* W3C syntax */
    font-size: 20px;
    line-height: 30px;
  }
  .loginBtn{

    float: right;
    margin: 10px;
    background: none;
    border: none;
    font-size: 15px;
    color: #0c58ff;
  }
</style>
