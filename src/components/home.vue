<template>
  <div id="home" style="height: 100%">
    <el-row :gutter="24">
      <el-col :span="24">
        <vhead></vhead>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="height: 100%;padding-top: 60px;overflow-x: hidden">
      <el-col :lg="3" :md="3" :sm="24" style=" height: 100%;background-color: #324157;padding-top: 0px;overflow:auto;">
        <vleft></vleft>
      </el-col>
      <el-col :lg="21" :md="21" :sm="24" style=" height: 100%;overflow: auto">
        <router-view style=" height: 100%;padding:0  5px"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import vhead from './body/Vhead'
  import vfoot from './body/Vfoot'
  import vleft from './body/Vleft'


  export default {
    name: 'app',
    components: {vhead, vfoot, vleft}
  }
</script>

<style>
  @import '../assets/style.css';
  /* 滚动条样式 */
  ::-webkit-scrollbar
  {
    width: 12px;
    height: 12px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 0px;
    background-color: #324157;
  }
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .el-col {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
</style>
