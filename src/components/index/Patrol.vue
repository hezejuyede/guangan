<template>
  <div class="Patrol">
    <back></back>
    <div class="Patrol-div">

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
    name: 'Patrol',
    data() {
      return {
        dateValue: '',
        img: ''
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
      goBackPage() {
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

  .Patrol {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    background-color: @color-F0;
  }

  .loading-container {
    position: absolute;
    max-width: 640px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }


</style>
