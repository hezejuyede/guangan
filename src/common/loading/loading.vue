<template>
  <div class="loading">
    <img style="width: 80px;height: 80px;" src="./loading.gif" alt="">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: "正在载入中...."
      }
    }
  }

</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";
  .loading {
    width: 100%;
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: @font-size-large;
      color: @color-green;
    }
  }

</style>
