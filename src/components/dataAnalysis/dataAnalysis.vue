<template>
  <div class="ElectricityManagement">
    <div class="ElectricityManagement-top">
      每日发电数据查询
    </div>
    <div class="ElectricityManagement-date">
      <el-date-picker
        type="dates"
        v-model="dateValue"
        placeholder="选择一个或多个日期">
      </el-date-picker>
      <el-button type="success">查询</el-button>
    </div>
    <div class="ElectricityManagement-bar">
      <div id="dataBar" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="ElectricityManagement-list">
      <el-table
        :data="ElectricityData"
        style="width: 100%">
        <el-table-column
          prop="time"
          align="center"
          min-width="30%"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="power"
          align="center"
          min-width="40%"
          label="发电量(KW/H)">
        </el-table-column>
        <el-table-column
          prop="load"
          align="center"
          min-width="30%"
          label="负荷率(%)">
        </el-table-column>
      </el-table>
    </div>
    <div class="loading-container" v-show="!img.length">
      <loading></loading>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script type="text/ecmascript-6">
  import Back from '../../common/back/back'
  import Loading from '../../common/loading/loading';
  import FooterBar from '../../common/footer/footer'


  export default {
    name: 'ElectricityManagement',
    data() {
      return {
        dateValue: '',
        img:'',
        ElectricityData:[
          {
            power: "3012",
            time: "10/1",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/2",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/3",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/4",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/5",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/6",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/7",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/8",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/9",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/10",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/11",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/12",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/13",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/14",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/15",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/16",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/17",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/18",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/19",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/20",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/21",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/22",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/23",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/24",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/25",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/26",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/27",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/28",
            load:"74.63"
          },
          {
            power: "3013",
            time: "10/29",
            load:"75.63"
          },
          {
            power: "3014",
            time: "10/30",
            load:"74.83"
          },
          {
            power: "3012",
            time: "10/31",
            load:"74.63"
          }
        ]
      }
    },
    components: {Loading,Back,FooterBar},
    mounted() {
      this.drawLine();
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
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('dataBar'));
        // 绘制图表
        myChart.setOption({
          title : {
            text: '日电量',
            subtext: '实时显示'
          },
          tooltip : {
            trigger: 'axis'
          },
          grid:{
          x:45,
            borderWidth:1
         },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['10/1','10/2','10/3','10/4','10/5','10/6','10/8','10/9','10/10','10/11','10/12','10/13','10/14','10/15','10/16','10/17','10/18','10/19','10/20','10/21','10/22','10/23','10/24','10/25','10/26','10/27','10/28','10/29','10/30','10/31']
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
              smooth:true,
              data:[3001, 2001, 3015, 3085, 2600, 3830, 2710,3001, 2001, 3015, 3085, 2600, 3830, 2710,3001, 2001, 3015, 3085, 2600, 3830, 2710,3001, 2001, 3015, 3085, 2600, 3830, 2710, 3830, 2710],
            }
          ]
        });
      },
      getLoading() {
        this.img = ["1"]
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";
  .ElectricityManagement{
    position: absolute;
    max-width: 640px;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: @color-F0;
    .ElectricityManagement-top{
      height:30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
      background-color: #3492E9;
      color: @color-white;
      font-size: @font-size-medium;

    }
    .ElectricityManagement-date{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-white;
      margin-bottom: 5px;

      button{
        width: 50px;
        height: 25px;
        margin-left: 10px;
      }
    }
    .ElectricityManagement-bar{
      height: 300px;
      margin:  0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-white;
      margin-bottom: 5px;
    }
    .ElectricityManagement-list{
      margin-bottom: 50px;
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
