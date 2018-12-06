<template>
  <div class="TwoRules">
    <back></back>
    <div class="TwoRules-div">
      <div class="TwoRules-div-title">
        电力系统的两项细则
      </div>
      <div class="TwoRules-div-content">
        <div class="" @click="goToFZ">并网发电厂辅助服务管理实施细则</div>
        <div class="" @click="goToXX">发电厂并网运行管理实施细则</div>
      </div>
    </div>
    <div class="loading-container" v-show="!img.length">
      <loading></loading>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Back from '../../common/back/back'
  import Loading from '../../common/loading/loading';

  export default {
    name: 'TwoRules',
    data() {
      return {
        dateValue: '',
        img: ''
      }
    },
    components: {Loading, Back},
    mounted() {

    },
    created() {
      setTimeout(() => {
        this.getLoading();
      }, 1000);
    },
    methods: {
      goBackPage() {
        this.$router.go("-1")
      },
      getLoading() {
        this.img = ["1"]
      },
      goToFZ(){

      },
      goToXX(){

      }

    }

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";


  .TwoRules {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-white;
    .TwoRules-div-title {
      width: 90%;
      margin: 0 auto;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: @font-size-large;
      border-bottom: 1px solid @color-F0;

    }
    .TwoRules-div-content{
      width: 90%;
      margin: 0 auto;
      padding-top: 20px;
      div{
        height: 50px;
        width: 90%;
        text-align: center;
        margin: 10px auto;
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
