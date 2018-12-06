<template>
  <div class="EconomicIndicators">
    <back></back>
    <div class="EconomicIndicators-navBar">
      <div class="navBar-div" v-for="(item,index) in navBar" @click="changeNavBar(index)" :class="{'navColor':index === num}">
        {{item.jz}}
      </div>

    </div>
    <div class="EconomicIndicators-center">
      <el-table
        :data="EconomicIndicatorsData"
        border
        style="width: 100%">
        <el-table-column
          prop="zb"
          align="center"
          min-width="50%"
          label="指标">
        </el-table-column>
        <el-table-column
          prop="data"
          align="center"
          min-width="50%"
          label="实时数据">
        </el-table-column>
      </el-table>

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
    name: 'EconomicIndicators',
    data() {
      return {
        num:0,
        img: '',
        navBar:[{jz:"全厂"},{jz:"#1"},{jz:"#2"},{jz:"#3"},{jz:"#4"},{jz:"#5"},{jz:"#6"}],
        EconomicIndicatorsData: [
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽压力(Mpa)",
            data: "594.18"
          },
          {
            zb: "再热温度(°C)",
            data: "594.18"
          },
          {
            zb: "再热压力(Mpa)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          },
          {
            zb: "主汽温度(°C)",
            data: "594.18"
          }

        ]
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
      getLoading() {
        this.img = ["1"]
      },
      changeNavBar(index) {
        this.num = index;
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .EconomicIndicators {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-F0;
    .EconomicIndicators-navBar {
      height: 50px;
      background-color: @color-white;
      margin-bottom: 5px;
      display: flex;
      .navBar-div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
    }
    .navColor {
      color: #3a8ee6;
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

