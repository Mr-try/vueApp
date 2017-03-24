<template>
  <div id="vhead">
    <img src="../../assets/headerIcon.png" style="float: left;margin-top: 3px;margin-left:20px ">
    <div class="head-title">闽侯攻坚2017</div>
    <div class="head-content">马上就办 真抓实干</div>
  </div>
</template>
<style scope>
  #vhead {
    position: absolute;
    top: 0;
    height: 60px;
    line-height: 60px;
    background-color: #20A0FF;
    color: #fff;
    width: 100%;
  }

  .head-title {
    float: left;
    margin-left: 15px;
    font-weight: bold;
    font-family: "微软雅黑";
    font-size: 1.5em;
  }

  .head-content {
    font-family: STXingkai;
    font-size: 2.0em;
  }
</style>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
