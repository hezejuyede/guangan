<template>
  <div class="loadManagement">
    <back></back>
    <div class="loadManagement-navBar">
      <div class="navBar-div" v-for="(item,index) in navBar" @click="changeNavBar(index)" :class="{'navColor':index === num}">
        {{item.jz}}
      </div>

    </div>
    <div class="loadManagement-line">
      <div id="dataBar" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <div class="loadManagement-list">
      <el-table
        :data="loadManagementData"
        style="width: 100%">
        <el-table-column
          prop="type"
          align="center"
          min-width="20%"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="rj"
          align="center"
          min-width="20%"
          label="日均负荷率">
        </el-table-column>
        <el-table-column
          prop="hb"
          align="center"
          min-width="20%"
          label="负荷率日环比">
        </el-table-column>
        <el-table-column
          prop="AGC"
          align="center"
          min-width="20%"
          label="AGC指令值">
        </el-table-column>
        <el-table-column
          prop="ss"
          align="center"
          min-width="20%"
          label="实时负荷">
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
    name: 'loadManagement',
    data() {
      return {
        num:0,
        dateValue: '',
        img:'',
        navBar:[{jz:"全部"},{jz:"#1"},{jz:"#2"},{jz:"#3"},{jz:"#4"},{jz:"#5"},{jz:"#6"}],
        loadManagementData:[
          {type:"全部",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"},
          {type:"#1",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"},
          {type:"#2",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"},
          {type:"#3",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"},
          {type:"#4",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"},
          {type:"#5",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"},
          {type:"#6",rj:"76.61%",hb:"1.82",AGC:"1411kw",ss:"1415mv"}
        ]

      }
    },
    components: {Loading,Back},
    mounted() {
      this.drawLine();
    },
    created() {
      setTimeout(() => {
        this.getLoading();
      }, 1000);
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('dataBar'));
        // 绘制图表
        myChart.setOption({
          title : {
            text: '负荷',
            subtext: '实时显示'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['昨日','今日']
          },
          grid:{
            x:40,
            borderWidth:1,
            x2:10,
            y2:30
          },

          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
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
              name:'昨日',
              type:'line',
              smooth:true,
              data:[3001, 2001, 3015, 3085, 2600, 3830, 2710,3001, 2001, 3015, 3085, 2600, 3830, 2710,3001, 2001, 3015, 3085, 2600, 3830, 2710,3001, 2001,3001,],
            },
            {
              name:'今日',
              type:'line',
              smooth:true,
              data:[3501, 2501, 3515, 3585, 2900, 3530, 2510,3501, 2501, 3515, 3585, 2200, 3530, 2510,3501, 2501, 3515, 3585, 2500, 3530, 2510,3501, 2501,3501,],
            }
          ]
        });
      },



      goBackPage(){
        this.$router.go("-1")
      },
      getLoading() {
        this.img = ["1"]
      },
      changeNavBar(index){
        this.num = index;
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";
  .loadManagement{
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-F0;
    .loadManagement-navBar{
      height: 50px;
      background-color: @color-white;
      margin-bottom: 5px;
      display: flex;
      .navBar-div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
    }
    .loadManagement-line{
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-white;
      margin-bottom: 5px;

    }
    .navColor{
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
