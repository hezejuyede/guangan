<template>
  <div id="register-page">
    <back></back>
    <div class="register-page-div">
      <header class="login-title">
        <img src="../../assets/img/logo.png" alt="">
      </header>
      <div class="register">
        <div class="register-top">
          注册管理员用户
        </div>
        <div class="register-bottom">
          <div class="register-bottom-template">
            <div class="input-left fl">
              <i class="iconfont icon-solid-person"></i>
            </div>
            <div class="input-right fl">
              <input type="text"
                     @blur="userNameBlur(username)"
                     @focus="userNameFocus(username)"
                     v-model="username"
                     placeholder="请输入用户名"/>
            </div>
            <div class="userErrText">
              <span>{{userNameErrText}}</span>
            </div>
          </div>
          <div class="register-bottom-template">
            <div class="input-left fl">
              <i class="iconfont icon-mima"></i>
            </div>
            <div class="input-right fl">
              <input
                @blur="passwordBlur(password)"
                @focus="passwordFocus(password)"
                v-model="password"
                type="password"
                placeholder="请输入密码"/>
            </div>
            <div class="passwordText">
              <span>{{ passwordErrText}}</span>
            </div>
          </div>
          <div class="register-bottom-template">
            <div class="input-left fl">
              <i class="iconfont icon-mima"></i>
            </div>
            <div class="input-right fl">
              <input
                @blur="passwordBlur2(password2)"
                @focus="passwordFocus2(password2)"
                v-model="password2"
                type="password"
                placeholder="请输入确认密码"/>
            </div>
            <div class="passwordText2">
              <span>{{ passwordErrText2}}</span>
            </div>
          </div>
          <div class="register-bottom-template">
            <div class="input-left fl">
              <i class="iconfont icon-yanzhengma"></i>
            </div>
            <div class="input-right fl">
              <input
                @blur="verificationCodeBlur(code)"
                @focus="verificationCodeFocus(code)"
                v-model="code"
                type="text"
                placeholder="请输入管理员注册码"/>
            </div>
            <div class="codeText">
              <span>{{codeErrText}}</span>
            </div>
          </div>
          <button @click="register">点击注册</button>
        </div>
      </div>
      <footer class=""> ©2018 四川广安发电有限责任公司</footer>
    </div>
    <Modal :msg="message"
           :isHideModal="HideModal"></Modal>
    <div class="loading-container" v-show="!img.length">
      <loading></loading>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import 'element-ui/lib/theme-chalk/index.css';
  import Modal from '../../common/modal/modal'
  import Loading from '../../common/loading/loading';
  import Back from '../../common/back/back';

  export default {
    name: 'register',
    data() {
      return {
        img: '',

        message: '',
        HideModal: true,

        username: '',
        password: '',
        password2: '',
        code:"",

        userNameErrText: '',
        passwordErrText: '',
        passwordErrText2: '',
        codeErrText:'',



        userNameState: false,
        passwordState: false,
        passwordState2: false,
        codeState:false
      };
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

      passwordBlur2(password2) {
        if (password2.length === 0) {
          this.passwordErrText2 = "密码不能为空";
        }
        else if (this.password !== password2) {
          this.passwordErrText2 = "两次密码不一样";
        }
        else {
          this.passwordErrText2 = "";
          this.passwordState2 = true
        }
      },
      passwordFocus2(password) {
        if (password.length === 0) {
          this.passwordErrText2 = "请填写密码";
        }
      },

      verificationCodeBlur(code){
        if (code.length === 0) {
          this.codeErrText = "管理员注册码不能为空";
        }
        else {
          this.codeErrText = "";
          this.codeState = true
        }
      },
      verificationCodeFocus(code){
        if (code.length === 0) {
          this.codeErrText = "请填写管理员注册码";
        }
      },
      register() {
        if (this.userNameState === true && this.passwordState === true && this.passwordState2 === true && this.codeState === true) {
          axios.post("/api/userRegister", {
            username: this.username,
            password: this.password,
            code:this.code
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "注册成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true;
                  that.$router.push({path: "/IndexLogin"})
                }

                setTimeout(a, 2000);
              }
              else if (res.data === "2") {
                this.message = "该用户已经注册";
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
                this.message = "注册失败";
                this.HideModal = false;
                const that = this;

                function c() {
                  that.message = "";
                  that.HideModal = true;
                  that.password = '';
                }

                setTimeout(c, 2000);
              }
              else if (res.data === "-2") {
                this.message = "管理员注册码错误";
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
      }


    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  #register-page {
    width: 100%;
    position: absolute;
    max-width: 640px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .register-page-div {
      width: 300px;
      height:520px;
      font-size: 14px;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .register {
      width: 300px;
      height: 400px;
      background-color: @color-F0;
      border-radius: 10%;
      .register-top {
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color: @color-background-dd;
      }
      .register-bottom {
        width: 100%;
        height: 80%;
        .register-bottom-template {
          width: 90%;
          height: 50px;
          background-color: @color-white;
          margin: 0 auto 25px auto;
          border-radius: 5%;
          position: relative;
          .input-left{
            width: 15%;
            text-align: center;
            line-height: 50px;
          }
          .input-right{
            width: 85%;
            height: 100%;
          }
          input {
            display: block;
            height: 50px;
            line-height: 50px;
            width: 95%;
            padding-left: 20px;
          }
          .userErrText {
            position: absolute;
            bottom: -20px;
            left: 10px;
            color: @color-red;

          }
          .passwordText {
            position: absolute;
            bottom: -20px;
            left: 10px;
            color: @color-red;
          }
          .passwordText2 {
            position: absolute;
            bottom: -20px;
            left: 10px;
            color: @color-red;
          }
          .codeText{
            position: absolute;
            bottom: -20px;
            left: 10px;
            color: @color-red;
          }
        }
        button {
          display: block;
          width: 80%;
          margin: 0 auto;
          height: 35px;
          background-color: @color-green;
          color: @color-white;
          font-size: @font-size-medium;
          text-align: center;
          line-height: 35px;
          border-radius: 5%;
          border: 0;
        }
      }

    }
    header {
      width: 100%;
      height: 50px;
      text-align: center;
      margin-bottom: 20px;
      img {
        height: 80px;
      }

    }
    footer {
      text-align: center;
      margin-top: 20px;
      font-size: @font-size-medium-x;
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
