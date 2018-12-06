<template>
  <div class="userInfo">
    <div class="loading-container" v-show="!img.length">
      <loading></loading>
    </div>
    <div class="userInfo-top">
      <div class="fr">
        <i class="iconfont icon-quit" @click="outLogin"></i>
      </div>
      <div class="fr">
        <i class="iconfont icon-xiaoxi" @click="userMessage"></i>
      </div>
    </div>
    <div class="userInfo-center">
      <div class="userInfo-center-login">
        <div class="userInfo-center-login-avatar">
          <img src="../../assets/img/avatar.png" alt="">
        </div>
        <div class="userInfo-center-login-text" @click="goToLoginPage">
           点击登录
        </div>
      </div>
      <div class="userInfo-center-message">
        <div class="">
          <i class="iconfont"></i>
        </div>
      </div>
    </div>
    <div class="userInfo-bottom">
      <div class="userInfo-bottom-template">
        <div class="template-left">
          <i class="iconfont icon-xuexi"></i>
        </div>
        <div class="template-right">
          <div class="template-right-text">
            学习中心
          </div>
          <div class="template-right-icon">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="userInfo-bottom-template">
        <div class="template-left">
          <i class="iconfont icon-fankui"></i>
        </div>
        <div class="template-right">
          <div class="template-right-text">
            反馈中心
          </div>
          <div class="template-right-icon">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="userInfo-bottom-template">
        <div class="template-left">
          <i class="iconfont icon-rzxx"></i>
        </div>
        <div class="template-right">
          <div class="template-right-text">
            日志中心
          </div>
          <div class="template-right-icon">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="userInfo-bottom-template">
        <div class="template-left">
          <i class="iconfont icon-shezhi"></i>
        </div>
        <div class="template-right">
          <div class="template-right-text">
             设置中心
          </div>
          <div class="template-right-icon">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import FooterView from '../../common/footer/footer'
  import Loading from '../../common/loading/loading';
  export default {
    name: 'userInfo',
    data() {
      return {
        img: ''
      }
    },
    components: {FooterView,Loading},
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
      //退出登陆
      outLogin() {
        alert("hahah");
      },
      //查看用户消息
      userMessage() {
        alert("hahah");
      },
      //  前往登陆页面
      goToLoginPage(){
        this.$router.push("/UserLogin")
      }



    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";
  .userInfo{
    position: absolute;
    max-width: 640px;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .userInfo-top{
    height:50px;
    line-height: 50px;
    background-color: #3492E9;
    padding-right: 5%;
    cursor: pointer;
    >div:first-child{
      margin-left: 15px;
    }
    .icon-quit{
      color: @color-white;
    }
    .icon-xiaoxi{
      color: @color-white;
    }
  }
  .userInfo-center{
    .userInfo-center-login{
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-bottom: 1px solid @color-background-d;
      .userInfo-center-login-avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        line-height: 50px;
        img {
          height: 100%;
        }
      }
      .userInfo-center-login-text{
        margin-top: 10px;
        font-weight: bold;

      }
    }

  }
  .userInfo-bottom{
    width: 100%;
    height:200px;
    padding-top: 10px;
    .userInfo-bottom-template{
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: 5px;
      .template-left{
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-xuexi{
          display: block;
          width: 30px;
          height: 30px;
          background-color:  #2E97FF;
          line-height: 30px;
          text-align: center;
          color: @color-white;
          border-radius: 10%;
        }
        .icon-fankui{
          display: block;
          width: 30px;
          height: 30px;
          background-color:  #FD9232;
          line-height: 30px;
          text-align: center;
          color: @color-white;
          border-radius: 10%;
        }
        .icon-rzxx{
          display: block;
          width: 30px;
          height: 30px;
          background-color:  #ED593F;
          line-height: 30px;
          text-align: center;
          color: @color-white;
          border-radius: 10%;

        }
        .icon-shezhi{
          display: block;
          width: 30px;
          height: 30px;
          background-color:  #586997;
          line-height: 30px;
          text-align: center;
          color: @color-white;
          border-radius: 10%;
        }


      }
      .template-right{
        height: 100%;
        flex: 8;
        display: flex;
        border-bottom: 1px solid@color-background-d;
        .template-right-text{
          flex: 9;
          display: flex;
          align-items: center;

        }
        .template-right-icon{
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

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
