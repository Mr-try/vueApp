<template>
    <div id="home" style="height: 100%">
        <el-row :gutter="24">
            <el-col :span="24"><vhead></vhead></el-col>
        </el-row>
        <el-row :gutter="24" style="height: 100%;padding-top: 62px">
            <el-col :lg="4" :md="4" :sm="24" style=" height: 100%;background-color: #324157;padding-top: 0px;overflow:auto;">
                <vleft></vleft>
            </el-col>
            <el-col :lg="20" :md="20"  :sm="24" style=" height: 100%;overflow: auto"><router-view style=" height: 100%;padding:0px  5px"></router-view></el-col>
        </el-row>
    </div>
</template>

<script>
    import vhead from './body/Vhead'
    import vfoot from './body/Vfoot'
    import vleft from './body/Vleft'


    export default {
        name: 'app',
        components: { vhead, vfoot, vleft }
    }
</script>

<style>
    body{
        margin: 0;
        padding:0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .el-row{
        margin-left: 0!important;
        margin-right: 0!important;
    }
    .el-col{
        padding-left: 0!important;
        padding-right: 0!important;
    }
</style>