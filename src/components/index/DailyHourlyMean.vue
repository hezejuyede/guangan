<template>
  <div class="DailyHourlyMean">
    <back></back>
    <div class="DailyHourlyMean-date">
      <el-date-picker
        type="dates"
        v-model="dateValue"
        placeholder="选择一个或多个日期">
      </el-date-picker>
      <el-button type="success">查询</el-button>
    </div>
    <div class="DailyHourlyMean-list">
      <el-table
        :data="ElectricityData"
        :span-method="objectSpanMethod"
        style="width: 100%">
        <el-table-column
          prop="time"
          align="center"
          min-width="20%"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="type"
          align="center"
          min-width="20%"
          label="组类">
        </el-table-column>
        <el-table-column
          prop="NQX"
          align="center"
          min-width="20%"
          label="NQX(mg/Nm3)">
        </el-table-column>
        <el-table-column
          prop="SQ2"
          align="center"
          min-width="20%"
          label="SQ2(mg/Nm3)">
        </el-table-column>
        <el-table-column
          prop="YC"
          align="center"
          min-width="20%"
          label="烟尘(mg/Nm3)">
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
    name: 'DailyHourlyMean',
    data() {
      return {
        dateValue: '',
        img:'',
        ElectricityData:[
          {
            time: "1点",
            type:'全厂',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "1点",
            type:'环保局',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "2点",
            type:'全厂',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "2点",
            type:'环保局',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "3点",
            type:'全厂',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "3点",
            type:'环保局',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "4点",
            type:'全厂',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },
          {
            time: "4点",
            type:'环保局',
            NQX:"74.63",
            SQ2: "3012",
            YC: "3012",
          },

        ]
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
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";
  .DailyHourlyMean{
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-F0;
    .DailyHourlyMean-date{
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
    .DailyHourlyMean-list{
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
