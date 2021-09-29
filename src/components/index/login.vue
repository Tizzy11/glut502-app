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
            <form :model="loginForm" class="mt-4">
              <div class="form-group mb-4" >
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text border-0 shadow form-control-lg">用户账号</span>
                  </div>
                  <input type="text" v-model="loginForm.username"  placeholder="请输入您的登录账户"
                         class="form-control border-0 shadow form-control-lg">
                </div>

              </div>
              <div class="form-group mb-4">
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text border-0 shadow form-control-lg" >登录密码</span>
                  </div>
                  <input type="password" v-model="loginForm.password" placeholder="请输入您的登录密码"
                         class="form-control border-0 shadow form-control-lg text-violet">
                </div>

              </div>
              <div class="form-group mb-4">
                <div class="custom-control custom-checkbox">
                  <input id="customCheck1" type="checkbox" checked class="custom-control-input">
                  <label for="customCheck1" class="custom-control-label">Remember Me</label>
                </div>
              </div>
              <div>
              <button type="submit" class="btn btn-primary shadow px-5" @click="LoginClick">登录</button>
              <button class="toRegister" @click="RegisterClick">没有账号？快来注册加入我们吧！ </button>
              </div>
            </form>
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

        //存放返回数据
        data:{
        },
        loginForm:{
          type:2,
          username :"",
          password: ""
        },
      }
    },
    methods:{
      LoginClick(){
        if (this.loginForm.username === ""){
          this.$message.error("请输入登录账号");
          return false;
        }
        if (this.loginForm.password === ""){
          this.$message.error("请输入登录密码");
          return false;
        }
        //this.$message(api.login);
        this.axios.post("/api/do/api.php",this.loginForm).then((res) => {
          if (res.data.data!= null){//证明返回json对象
            // 登录成功后把token 保存到客户端的sessionStorage中
            this.$message.success("登录成功")
            window.sessionStorage.setItem("name",res.data.data.name);
            window.sessionStorage.setItem("dormitory",res.data.data.dormitory);
            window.sessionStorage.setItem("username",res.data.data.username);
            window.sessionStorage.setItem("head",res.data.data.head);
            window.sessionStorage.setItem("ID",res.data.data.ID);
            window.sessionStorage.setItem("identify",res.data.data.identify);
            console.log(res.data.data);
            console.log(res.data.data.name);
            this.$router.push("/HomePage");
          }else{
            this.$message.error(res.message);
          }
        }).catch((error) => {
        });  //一定别忘了这个
      },
      //if click btn push to registerPage

      RegisterClick(){
        this.$router.push("/register");
      }
    },
  }
</script>



<style scoped>

  @import "../../assets/css/bootstrap.min.css";
  @import "../../assets/css/style.default.css";
  @import "../../assets/css/custom.css";
  .toRegister{
    margin: 5px;
    padding: 5px;
    border: none;
    background: none;
    font-size: 10px;
    color: blue;
    float: right;
  }



</style>
