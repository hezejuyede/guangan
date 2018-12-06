<template>
  <header id="header" class="ga-header">
    <div class="header-top">
      <div class="header-top-left fl">四川广安发电有限责任公司</div>
      <div class="header-top-right fr">
        <i class="iconfont icon-saoyisao"></i>
      </div>
    </div>
    <div class="header-center">
      <div class="header-center-weather">
        <div class="weather-temperature">
          <span>24～29℃</span>
        </div>
        <div class="weather-state">
          多云
        </div>
      </div>
      <div class="header-center-data">
        <p class="header-center-data-top">全厂负荷</p>
        <p class="header-center-data-center">1487</p>
        <p class="header-center-data-bottom">MW</p>
      </div>
      <div class="header-center-data">
        <p class="header-center-data-top">全厂负荷率</p>
        <p class="header-center-data-center">74</p>
        <p class="header-center-data-bottom" style="rgba(1,1,1,1)">%</p>
      </div>
      <div class="header-center-data">
        <p class="header-center-data-top">全厂电量</p>
        <p class="header-center-data-center">2487</p>
        <p class="header-center-data-bottom">万千瓦时</p>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-data">
        <p class="header-bottom-data-top"><span>247</span><span>MW</span></p>
        <p class="header-bottom-data-center">#1机组</p>
      </div>
      <div class="header-bottom-data">
        <p class="header-bottom-data-top"><span>248</span><span>MW</span></p>
        <p class="header-bottom-data-center">#2机组</p>
      </div>
      <div class="header-bottom-data">
        <p class="header-bottom-data-top"><span>249</span><span>MW</span></p>
        <p class="header-bottom-data-center">#3机组</p>
      </div>
      <div class="header-bottom-data">
        <p class="header-bottom-data-top"><span>250</span><span>MW</span></p>
        <p class="header-bottom-data-center">#4机组</p>
      </div>
      <div class="header-bottom-data">
        <p class="header-bottom-data-top"><span>249</span><span>MW</span></p>
        <p class="header-bottom-data-center">#5机组</p>
      </div>
      <div class="header-bottom-data">
        <p class="header-bottom-data-top"><span>250</span><span>MW</span></p>
        <p class="header-bottom-data-center">#6机组</p>
      </div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">export default {
  name: 'yw-header',
  data() {
    return {}
  },
  components: {},
  mounted() {
  },
  created() {
  },
  methods: {}
}
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .ga-header {
    height: 160px;
    background: url("../../assets/img/bg.jpg") no-repeat center center;
    background-size: 100%;
    .header-top {
      color: @color-white;
      height: 30px;
      line-height: 30px;
      .header-top-left{
        margin-left: 5%;

      }
      .header-top-right{
        margin-right: 5%;

      }
    }
    .header-center{
      width: 100%;
      height:65px;
      display: flex;
      color: @color-white;
      .header-center-weather{
        flex: 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .weather-temperature{
          font-size: @font-size-large;
          margin-bottom: 5px;
        }
        .weather-state{
          font-size: @font-size-small;
        }
      }
      .header-center-data{
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .header-center-data-top{
          font-size: @font-size-small-s;
          margin-bottom: 5px;
          color: @color-F0;
        }
        .header-center-data-center{
          font-size: @font-size-large;
          margin-bottom: 5px;
        }
        .header-center-data-bottom{
          font-size: @font-size-small-sss;
          text-align: right;
          color: @color-F0;
        }
      }
    }
    .header-bottom {
      width: 100%;
      height: 65px;
      display: flex;
      .header-bottom-data{
        color: @color-white;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .header-bottom-data-top {
          span:first-child {
            font-size: @font-size-medium;

          }
          span:last-child {
           font-size: @font-size-small-ss;
            margin-left: 5%;
          }
        }
        .header-bottom-data-center{
          margin-top: 5px;
          font-size: @font-size-small-s;
        }
      }
    }
  }
</style>
