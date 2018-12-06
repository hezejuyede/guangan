<template>
  <div class="userLogin">
    <div class="loading-container" v-show="!img.length">
      <loading></loading>
    </div>
    <back></back>
    <div class="login-div">
      <header class="login-title">
        <img src="../../assets/img/logo.png" alt="">
        <span @click="goToRegister">注册</span>
      </header>
      <div class="loginIndex">
        <div class="loginIndex-top"><i class="iconfont icon-mima"></i></div>
        <div class="loginIndex-username">
          <i class="iconfont icon-solid-person"></i>
          <input
            @blur="userNameBlur(username)"
            @focus="userNameFocus(username)"
            v-model="username"
            type="text"
            placeholder="请输入用户名"/>
          <div class="userErrText">
            <span>{{userNameErrText}}</span>
          </div>
        </div>
        <div class="loginIndex-password">
          <i class="iconfont icon-mima"></i>
          <input
            @blur="passwordBlur(password)"
            @focus="passwordFocus(password)"
            v-model="password"
            type="password"
            placeholder="请输入密码"/>
          <div class="passwordText">
            <span>{{ passwordErrText}}</span>
          </div>
        </div>
        <div class="loginIndex-login">
          <button @click="login">登录</button>
        </div>
      </div>
      <footer class=""> ©2018 四川广安发电有限责任公司</footer>
    </div>
    <Modal :msg="message"
           :isHideModal="HideModal"></Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Modal from '../../common/modal/modal'
  import Loading from '../../common/loading/loading';
  import Back from '../../common/back/back'


  export default {
    name: 'userLogin',
    data() {
      return {
        img: '',

        username: '',
        password: '',
        userNameErrText: '',
        passwordErrText: '',
        userNameState: false,
        passwordState: false,
        message: '',
        HideModal: true
      }
    },
    components: {Back, Modal,Loading},
    mounted() {
    },
    created() {
      setTimeout(() => {
        this.getLoading();
      }, 1000);
    },
    methods: {
      getLoading() {
        this.img = ["1"]
      },



      userNameBlur(username) {
        if (username.length === 0) {
          this.userNameErrText = "用户名不能为空";
        }
        else {
          this.userNameErrText = "";
          this.userNameState = true
        }
      },
      userNameFocus(username) {
        if (username.length === 0) {
          this.userNameErrText = "请填写用户名";
        }
      },
      passwordBlur(password) {
        if (password.length === 0) {
          this.passwordErrText = "密码不能为空";
        }
        else {
          this.passwordErrText = "";
          this.passwordState = true
        }
      },
      passwordFocus(password) {
        if (password.length === 0) {
          this.passwordErrText = "请填写密码";
        }
      },
      login() {
        if (this.userNameState === true && this.passwordState === true) {
          axios.post("/api/adminLogin", {
            username: this.username,
            password: this.password
          })
            .then((res) => {
              if (res.data.state === "1") {
                let userInfo = res.data;
                userInfo = JSON.stringify(userInfo);
                sessionStorage.setItem("userInfo", userInfo);
                this.message = "登录成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true;
                  that.$router.push({path: "/"})
                }

                setTimeout(a, 2000);
              }
              else if (res.data === "2") {
                this.message = "该用户没有注册";
                this.HideModal = false;
                const that = this;

                function b() {
                  that.message = "";
                  that.HideModal = true;
                  that.username = '';
                  that.password = '';
                }

                setTimeout(b, 2000);
              }
              else if (res.data === "-1") {
                this.message = "密码错误";
                this.HideModal = false;
                const that = this;

                function c() {
                  that.message = "";
                  that.HideModal = true;
                  that.password = '';
                }

                setTimeout(c, 2000);
              }
            })
            .catch((err) => {
              console.log(err)
            });
        }
        else {
          this.message = "请正确填写信息";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true;
          }
          setTimeout(a, 2000);
        }
      },
      goToRegister(){
        this.$router.push("/UserRegister")
      }
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .userLogin {
    position: absolute;
    max-width: 640px;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: @color-white;
    .login-div {
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 300px;
      height: 500px;
      header {
        width: 100%;
        height:60px;
        text-align: center;
        margin-bottom: 50px;
        position: relative;
        img {
          height: 80px;
        }
       span {
         position: absolute;
         right: 5px;
         top: 0;
         font-size: 16px;
         color: #dd6161;
        }

      }
      .loginIndex {
        width: 300px;
        height: 270px;
        border-radius: 5%;
        background-color: rgba(184, 202, 219, 0.6);
        position: relative;
        padding-top: 1px;
        .loginIndex-top {
          width: 50px;
          height: 50px;
          background-color: rgba(19, 179, 210, 1);
          border-radius: 40%;
          text-align: center;
          line-height: 50px;
          color: #ffffff;
          position: absolute;
          top: -25px;
          left: 40%;
          .icon-mima {
            font-size: @font-size-large-xx;
          }
        }
        .loginIndex-username {
          width: 90%;
          margin: 40px auto 0 auto;
          height: 50px;
          background-color: @color-white;
          padding-left: 2%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5%;
          font-size: @font-size-medium-x;
          position: relative;
          input {
            width: 80%;
            height: 50px;
            padding-left: 20px;
            background-color: @color-white;
          }
        }
        .loginIndex-password {
          width: 90%;
          margin: 25px auto;
          height: 50px;
          background-color: @color-white;
          padding-left: 2%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5%;
          position: relative;
          input {
            width: 80%;
            height: 50px;
            padding-left: 20px;
            font-size: @font-size-medium-x;
            background-color: @color-white;
          }
        }
        .loginIndex-login {
          width: 90%;
          margin: 0 auto;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            background-color: rgba(19, 179, 210, 1);
            border: 0;
            width: 100%;
            height: 50px;
            color: #ffffff;
            font-size: @font-size-large;
            border-radius: 5%;

          }
        ;
        }
        .userErrText {
          position: absolute;
          bottom: -22px;
          left: 0;
          width: 100%;
          height: 20px;
          color: #d93f30;
          line-height: 20px;
          padding-left: 20px;
        }
        .passwordText {
          position: absolute;
          bottom: -22px;
          left: 0;
          width: 100%;
          height: 20px;
          color: #d93f30;
          line-height: 20px;
          padding-left: 20px;
        }
      }
      footer {
        text-align: center;
        margin-top: 50px;
        font-size: @font-size-medium-x;
      }
    }

  }

  .loading-container {
    position: absolute;
    max-width: 640px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }



</style>
