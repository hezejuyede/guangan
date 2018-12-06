<template>
  <div class="back" @click="goBackPage">
    <i class="iconfont icon-left-trangle fl"></i>
    <span class="fl">返回</span>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'back',
    data() {
      return {}
    },
    components: {},
    mounted() {
    },
    created() {
    },
    methods: {
      goBackPage() {
        this.$router.go("-1")
      },


    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .back {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    color: @color-white;
    background-color: #3492E9;
    span {
      margin-left: 5px;
    }
  }


</style>
