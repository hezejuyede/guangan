<template>
  <div v-bind:class="{hideModal:isHideModal}">
    <div class="modal">
      <div class="modal-message">
        {{msg}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'modal',
    data() {
      return {}
    },
    methods: {},
    props: ['msg', 'isHideModal']
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../assets/less/base";

  .modal {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    .modal-message {
      width: 250px;
      height: 100px;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      color: @color-white;
      font-size: 20px;
      text-align: center;
      line-height: 100px;
      border-radius: 10%;
      background-color: @color-background-dd;
    }
  }

  .hideModal {
    display: none;
  }
</style>
