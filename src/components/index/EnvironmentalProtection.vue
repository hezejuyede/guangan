<template>
  <div class="EnvironmentalProtection">
    <back></back>
    <div class="EnvironmentalProtection-navBar">
      <div class="navBar-div" v-for="(item,index) in navBar" @click="changeNavBar(index)" :class="{'navColor':index === num}">
        {{item.jz}}
      </div>

    </div>
    <div class="EnvironmentalProtection-line">
      <div id="dataLine" :style="{width: '100%', height: '250px'}"></div>
    </div>
    <div class="EnvironmentalProtection-list">
      <div class="list-title">
        <div class="">实时小时数</div>
        <div class="" @click="goToDailyHourlyMean">查看日小时均数</div>
      </div>
      <div class="list-div">
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
            zb: "SO2",
            data: "59.418"
          },
          {
            zb: "NOx",
            data: "59.418"
          },
          {
            zb: "烟尘",
            data: "59.418"
          }
        ]
      }
    },
    components: {Loading, Back},
    mounted() {
      this.drawLine();
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
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('dataLine'));
        // 绘制图表
        myChart.setOption({
          title : {
            text: '浓度线',
            subtext: '实时显示'
          },
          tooltip : {
            trigger: 'axis'
          },
          grid:{
            x:45,
            borderWidth:1
          }
          ,
          grid:{
            x:25,
            borderWidth:1,
            x2:10,
            y2:30
        },
          legend: {
          data:['SO2','NOx','烟尘']
        },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              magicType : {show: true, type: ['line', 'bar']}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              type:'line',
              name:'SO2',
              smooth:true,
              data:[10.01, 10.01, 10.15, 10.85, 16.01, 18.30, 17.10,10.01, 10.01, 10.15, 10.85, 16.01, 18.32, 17.13,10.01, 10.01, 10.15, 10.85, 16.09, 18.38, 17.18,1.001, 10.01,10.01,],
            },
            {
              type:'line',
              name:'NOx',
              smooth:true,
              data:[20.01, 20.01, 20.15, 20.85, 26.01, 28.30, 27.10,20.01, 20.01, 20.15, 20.85, 26.01, 28.32, 27.13,20.01, 20.01, 20.15, 20.85, 26.09, 28.38, 27.18,2.001, 20.01,20.01,],
            },
            {
              type:'line',
              name:'烟尘',
              smooth:true,
              data:[30.01, 30.01, 30.15, 30.85, 36.01, 38.30, 37.10,30.01, 30.01, 30.15, 30.85,30.01, 38.02 ,37.03,30.1, 30.1, 31.5, 38.5, 36.09 ,33.08,31.08,30.01, 30.1,30.1,],
            }
          ]
        });
      },
      goToDailyHourlyMean(){
        this.$router.push("/DailyHourlyMean")
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .EnvironmentalProtection {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-F0;
    .EnvironmentalProtection-navBar {
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
    .EnvironmentalProtection-line{
      height:250px;
      background-color: @color-white;
    }
     .EnvironmentalProtection-list{
       background-color: @color-white;
       margin-top: 5px;
       .list-title{
         width: 90%;
         margin: 0 auto;
         display: flex;
         height: 35px;
         border-bottom: 1px solid @color-background-d;
         div:first-child{
           flex: 1;
           display: flex;
           align-items: center;
           justify-content: center;
         }
         div:last-child{
           flex: 1;
           display: flex;
           align-items: center;
           justify-content:center;
           color: #8cc5ff;
           cursor: pointer;
         }
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
