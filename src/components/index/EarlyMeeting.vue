<template>
  <div class="EarlyMeeting">
    <back></back>
    <div class="EarlyMeeting-navBar">
      <div class="EarlyMeeting-navBar-time">{{today}}</div>
      <div class="EarlyMeeting-navBar-text">
        <div  v-for="(item,index) in  navBar " @click="changeNavBar(index)" :class="{'navColor':index === num}">
          {{item.text}}
        </div>
      </div>
    </div>
    <div class="EarlyMeeting-work" v-show="num === 0 ">
      <div class="workTemplate" v-for="(item,index) in workData">
        <div class="workTemplateTop">
          {{item.title}}
        </div>
        <div class="workTemplateBottom">
          <div class="workTemplateBottom-list">
            <div class="">负责部门：</div>
            <div class="">{{item.department}}</div>
          </div>
          <div class="workTemplateBottom-list">
            <div class="">完成情况：</div>
            <div class="">{{item.complete}}</div>
          </div>
          <div class="workTemplateBottom-list">
            <div class="">备注：</div>
            <div class="">{{item.remarks}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="EarlyMeeting-defect" v-show="num ===1">
      <div class="defectTemplate" v-for="(item,index) in defectData">
        <div class="defectTemplateList">
          <div class="">缺陷描述：</div>
          <div class="">{{item.defect}}</div>
        </div>
        <div class="defectTemplateList">
          <div class="">消缺专业：</div>
          <div class="">{{item.eliminate}}</div>
        </div>
        <div class="defectTemplateList">
          <div class="">负责部门：</div>
          <div class="">{{item.handle}}</div>
        </div>
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
    name: 'EarlyMeeting',
    data() {
      return {
        today:'2018-11-07',
        num:0,
        img: '',
        navBar:[{text:"工作安排"},{text:"缺陷统计"}],
        workData: [
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          },
          {
            title: "四川广安发电有限公司检查输煤系统及炉后区域整改项目及时回馈完成情况",
            department: "检修部，燃管部",
            complete: '认真落实整改并及时反馈',
            remarks: ''
          }
        ],
        defectData: [
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
          },
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
          },
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
          },
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
          },
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
          },
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
          },
          {
            defect: "#4A给煤机皮带电机地线脱落",
            eliminate: "电气",
            handle: '验收确认'
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

  .EarlyMeeting {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-F0;
    .EarlyMeeting-navBar {
      height: 40px;
      background-color: @color-white;
      display: flex;
      .EarlyMeeting-navBar-time {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3a8ee6;
      }
      .EarlyMeeting-navBar-text {
        flex: 3;
        display: flex;
        align-content: center;
        justify-content: center;
        div {
          width: 40%;
          height: 40px;
          margin-left: 5%;
          line-height: 40px;
          text-align: center;
        }
      }
    }
    .EarlyMeeting-work {
      .workTemplate {
        height: 170px;
        background-color: @color-white;
        margin-bottom: 10px;
        .workTemplateTop {
          padding-top: 1%;
          height: 34%;
          width: 90%;
          margin: 0 auto;
          border-bottom: 1px solid @color-F0;
          font-size: @font-size-small;
          overflow-y: auto;
        }
        .workTemplateBottom {
          height: 65%;
          .workTemplateBottom-list {
            width: 95%;
            margin: 0 auto;
            height: 30px;
            margin-bottom: 2px;
            display: flex;
            div:first-child {
              flex: 3;
              height: 30px;
              text-align: center;
              line-height: 30px;
              font-size: @font-size-small;
              color: @color-background-dddd;
            }
            div:last-child {
              flex: 7;
              height: 30px;
              text-align: left;
              line-height: 30px;
              overflow-x: auto;
              font-size: @font-size-small;
            }
          }
        }
      }
    }
    .EarlyMeeting-defect{
      .defectTemplate {
        height: 80px;
        background-color: @color-white;
        margin-bottom: 10px;
        .defectTemplateList {
          width: 95%;
          margin: 0 auto;
          height: 25px;
          margin-bottom: 2px;
          display: flex;
          div:first-child {
            flex: 3;
            height: 25px;
            text-align: center;
            line-height: 25px;
            font-size: @font-size-small;
            color: @color-background-dddd;
          }
          div:last-child {
            flex: 7;
            height: 25px;
            text-align: left;
            line-height: 25px;
            overflow-x: auto;
            font-size: @font-size-small;
          }
        }
      }
    }
    .navColor {
      color: #3a8ee6;
      border-bottom: 2px solid #3a8ee6;
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
