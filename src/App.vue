<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
    body{
        margin: 0;
        padding:0;
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
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
