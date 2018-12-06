<template>
  <div class="index">
    <div class="loading-container" v-show="!img.length">
      <loading></loading>
    </div>
    <header-view></header-view>
    <main>
      <div class="AdministrationDiv">
        <div class="AdministrationDiv-left">
          <div class="Administration-icon">
            <i class="iconfont icon-imm"></i>
          </div>
          <div class="Administration-txt" @click="goToLoadManagement">
            <span>负荷管理</span>
          </div>
        </div>
        <div class="AdministrationDiv-right">
          <div class="Administration-icon">
            <i class="iconfont icon-dianchibattery141"></i>
          </div>
          <div class="Administration-txt" @click="goToElectricityManagement">
            <span>电量管理</span>
          </div>
        </div>
      </div>
      <div class="IndexNav">
        <div class="IndexNav-one">
          <div class="IndexNavTemplate" v-for="(item,index) in  IndexNavOne" :key="item.id">
            <div class="IndexNavTemplate-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="IndexNavTemplate-txt">
              <span>{{ item.text}}</span>
            </div>
          </div>
        </div>
        <div class="IndexNav-two">
          <div class="IndexNavTemplate" v-for="(item,index) in  IndexNavTwo" :key="item.id" @click="goToNavBar(item.url)">
            <div class="IndexNavTemplate-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="IndexNavTemplate-txt">
              <span>{{ item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in bannerImg" :key="item.id">
            <img :src="item.img"
                 style="width: 100%"
                 @click="showBanner(index,item.id,item.sindex)">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="IndexNavBottom">
        <div class="IndexNavBottom-one">
          <div class="IndexNavTemplate" v-for="(item,index) in  IndexNavThird" :key="item.id" @click="goToNavBar(item.url)">
            <div class="IndexNavTemplate-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="IndexNavTemplate-txt">
              <span>{{ item.text}}</span>
            </div>
          </div>
        </div>
        <div class="IndexNavBottom-two">
          <div class="IndexNavTemplate" v-for="(item,index) in  IndexNavFourth" :key="item.id" @click="goToNavBar(item.url)">
            <div class="IndexNavTemplate-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="IndexNavTemplate-txt">
              <span>{{ item.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer-view></footer-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import HeaderView from '../../common/header/header';
  import FooterView from '../../common/footer/footer';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import Loading from '../../common/loading/loading';

  require('swiper/dist/css/swiper.css');

  export default {
    name: 'index',
    data() {
      return {
        img: '',
        IndexNavOne: [
          {"icon": "iconfont icon-pulse", "text": "负荷预测"},
          {"icon": "iconfont icon-xiaoliangyuce", "text": "调度计划"},
          {"icon": "iconfont icon-caozuorizhi", "text": "值长日志"},
          {"icon": "iconfont icon-message-channel", "text": "生产短信"}
        ],
        IndexNavTwo: [
          {"icon": "iconfont icon-shujuqushi", "text": "生产早会" ,url:"EarlyMeeting"},
          {"icon": "iconfont icon-icon-test", "text": "供热供气"},
          {"icon": "iconfont icon-wenti", "text": "问题排查"},
          {"icon": "iconfont icon-yanjing", "text": "经济指标","url":"EconomicIndicators"}
        ],
        IndexNavThird: [
          {"icon": "iconfont icon-huanbao", "text": "环保指标","url":"EnvironmentalProtection"},
          {"icon": "iconfont icon-xunjianrenyuan", "text": "现场巡查","url":"Patrol"},
          {"icon": "iconfont icon-iconset0137", "text": "电量填报"},
          {"icon": "iconfont icon-baifenhao", "text": "负债率"}
        ],
        IndexNavFourth: [
          {"icon": "iconfont icon-yijianqidong", "text": "开机方式","url":"OpeningMode"},
          {"icon": "iconfont icon-yijin07-shishixize", "text": "两个细则","url":"TwoRules"},
          {"icon": "iconfont icon-tongzhi", "text": "通知管理"},
          {"icon": "iconfont icon-dianlixingye", "text": "电网信息"}
        ],
        bannerImg: [{"img": require("../../assets/img/banner1.jpg")}, {"img": require("../../assets/img/banner2.jpg")}],
        swiperOption: {
          direction: "horizontal",
          loop: true,
          pagination: ".swiper-pagination",
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
        }
      }
    },
    components: {HeaderView, FooterView, swiper, swiperSlide, Loading},
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
      goToElectricityManagement(){
        this.$router.push("/ElectricityManagement")
      },
      goToLoadManagement(){
        this.$router.push("/LoadManagement")
      },
      goToNavBar(url){
        this.$router.push("/"+ url +"")
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .index {
    position: absolute;
    max-width: 640px;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .AdministrationDiv {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      .AdministrationDiv-left {
        width: 48%;
        height: 60px;
        margin-right: 0.5%;
        border-radius: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(50, 191, 209, 1);
        color: @color-F0;
      }
      .AdministrationDiv-right {
        width: 48%;
        height: 60px;
        margin-left: 0.5%;
        border-radius: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(42, 143, 245, 1);
        color: @color-F0;
      }
      .Administration-icon {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-imm {
          font-size: 200%;
        }
        .icon-dianchibattery141 {
          font-size: 200%;
          color: @color-white;
        }
      }
      .Administration-txt {
        flex: 3;
      }
    }
    .IndexNav {
      width: 100%;
      height: 150px;
      background-color: @color-white;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .IndexNav-one {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .IndexNav-two {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .IndexNavTemplate {
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid @color-F0;
        border-left: 1px solid @color-F0;
        font-size: @font-size-small;
        .IndexNavTemplate-icon {
          .icon-pulse {
            color: #F56C6C;
            font-size: 200%;
          }
          .icon-xiaoliangyuce {
            color: rgba(50, 191, 209, 1);
            font-size: 200%;
          }
          .icon-caozuorizhi {
            color: #E6A23C;
            font-size: 200%;
          }
          .icon-message-channel {
            color: deeppink;
            font-size: 200%;
          }
          .icon-shujuqushi {
            color: rgba(66, 166, 249, 1);
            font-size: 200%;
          }
          .icon-icon-test {
            color: @color-red;
            font-size: 200%;
          }
          .icon-wenti {
            color: #909399;
            font-size: 200%;
          }
          .icon-yanjing {
            color: @color-green;
            font-size: 200%;
          }

        }
        .IndexNavTemplate-txt {
          margin-top: 5px;
        }

      }
    }
    .IndexNavBottom {
      width: 100%;
      height: 200px;
      padding-bottom: 50px;
      background-color: @color-white;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .IndexNavBottom-one {
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .IndexNavBottom-two {
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .IndexNavTemplate {
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid @color-F0;
        border-left: 1px solid @color-F0;
        font-size: @font-size-small;
        .IndexNavTemplate-icon {
          .icon-huanbao {
            color: #F56C6C;
            font-size: 200%;
          }
          .icon-xunjianrenyuan {
            color: rgba(50, 191, 209, 1);
            font-size: 200%;
          }
          .icon-iconset0137 {
            color: #E6A23C;
            font-size: 200%;
          }
          .icon-yijianqidong {
            color: deeppink;
            font-size: 200%;
          }
          .icon-yijin07-shishixize {
            color: rgba(66, 166, 249, 1);
            font-size: 200%;
          }
          .icon-baifenhao {
            color: @color-red;
            font-size: 200%;
          }
          .icon-tongzhi {
            color: #909399;
            font-size: 200%;
          }
          .icon-dianlixingye {
            color: @color-green;
            font-size: 200%;
          }

        }
        .IndexNavTemplate-txt {
          margin-top: 5px;
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
