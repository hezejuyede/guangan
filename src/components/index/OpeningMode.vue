<template>
  <div class="OpeningMode">
    <back></back>
    <div class="OpeningMode-top">

    </div>
    <div class="OpeningMode-bottom">
      <div class="OpeningMode-bottom-title">
        控制机组的开关
      </div>
      <div class="OpeningMode-bottom-list">
        <el-switch
          v-model="value1"
          active-text="#1机组开"
          inactive-text="#1机组关">
        </el-switch>
      </div>
      <div class="OpeningMode-bottom-list">
        <el-switch
          v-model="value2"
          active-text="#2机组开"
          inactive-text="#2机组关">
        </el-switch>
      </div>
      <div class="OpeningMode-bottom-list">
        <el-switch
          v-model="value3"
          active-text="#3机组开"
          inactive-text="#3机组关">
        </el-switch>
      </div>
      <div class="OpeningMode-bottom-list">
        <el-switch
          v-model="value4"
          active-text="#4机组开"
          inactive-text="#4机组关">
        </el-switch>
      </div>
      <div class="OpeningMode-bottom-list">
        <el-switch
          v-model="value5"
          active-text="#5机组开"
          inactive-text="#5机组关">
        </el-switch>
      </div>
      <div class="OpeningMode-bottom-list">
        <el-switch
          v-model="value6"
          active-text="#6机组开"
          inactive-text="#6机组关">
        </el-switch>
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
    name: 'OpeningMode',
    data() {
      return {
        dateValue: '',
        img:'',
        value1:true,
        value2:true,
        value3:true,
        value4:true,
        value5:true,
        value6:true,
      }
    },
    components: {Loading,Back},
    mounted() {

    },
    created() {
      setTimeout(() => {
        this.getLoading();
      }, 1000);
    },
    methods: {

      goBackPage(){
        this.$router.go("-1")
      },
      getLoading() {
        this.img = ["1"]
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";
  .OpeningMode{
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    .OpeningMode-top{
      height: 100px;
    }
    .OpeningMode-bottom {
      .OpeningMode-bottom-title {
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: @font-size-large;
      }
      .OpeningMode-bottom-list {
        height: 50px;
        display: flex;
        align-content: center;
        justify-content: center;

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
